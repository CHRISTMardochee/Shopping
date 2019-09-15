import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event } from '@angular/router';
import { Events, ToastController, ModalController } from '@ionic/angular';
import { Product } from '../models/interface-products';
import { Storage } from '@ionic/storage';
import { itemCart } from '../models/interface-itemCart';
import { CartPage } from '../cart/cart.page';
import { ImageViewService } from '../services/method.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  productsDetails: Product;
  ok: any;
  slideOpts = {
    autoplay: true,
    speed: 1000,
    loop: true
  };
  constructor(private router: Router,
              private route: ActivatedRoute,
              public storage: Storage,
              public toast: ToastController,
              public modal: ModalController,
              public imageViewProvider: ImageViewService
              ) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.productsDetails = JSON.parse(params.special);
      }
    });

  }

  onRateChange(event: Event) {
    console.log('Voici la note', event);
  }

  ngOnInit() {
    // this.productsDetails = this.ok;
    console.log('productsDetails', this.productsDetails);
  }
  goBack(): void {
    this.router.navigateByUrl('');
  }

  addToCart(productsDetails: Product): void {
    let added = false;
    // Si le panier est vide
    this.storage.get('Cart').then((data: itemCart[]) => {
       if (data === null || data.length === 0) {
        data.push({
          item: productsDetails,
          qty: 1,
          amount: productsDetails.price
        });
      } else {
        // Si le panier n'est pas vide
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < data.length; i++) {
          const element: itemCart = data[i];
          // Le panier n'est pas vide et contient toujours l'article
          if (productsDetails.id === element.item.id) {
            element.qty += 1;
            element.amount += productsDetails.price;
            added = true;
          }
        }
        if (!added) {
          // Le panier n'est pas vide et ne contient toujours pas d'article
          data.push({
            item: productsDetails,
            qty: 1,
            amount: productsDetails.price
          });
        }
      }
       this.storage.set('Cart', data)
      // tslint:disable-next-line:no-shadowed-variable
      .then(data => {
        this.updateToast();
      })
      .catch (err => {
        console.log('Erreur', err);
      });

    });
    // console.log('Strored', 'OKA');
  }
  async updateToast() {
    const toast = await this.toast.create({
      message: 'Votre panier a été mise à jour',
      duration: 1500,
      showCloseButton: true,
      closeButtonText: 'fermer',
      color: 'success'
    });
    toast.present();
  }
  async openCart() {
    const mdl = await this.modal.create({
      component: CartPage
    });
    return await mdl.present();
  }

  showImage(picture: any, event) {
    return this.imageViewProvider.showImage(picture,event);
  }
}

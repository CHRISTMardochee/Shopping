import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { itemCart } from '../models/interface-itemCart';
import { Storage } from '@ionic/storage';
import { ImageViewService } from '../services/method.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: itemCart[];
  total = 0;
  constructor(public modalCtrl: ModalController, public storage: Storage,
              public toast: ToastController, public alertCtrl: AlertController,
              public imageViewProvider: ImageViewService
              ) { }

  ngOnInit() {
    console.log ('CarPage starting');
    this.storage.get('Cart')
    .then((data: itemCart[]) => {
      this.cartItems = data;
      this.cartItems.forEach((element: itemCart) => {
        if (element.item.availability.type === 'Disponible en Magasin') {
          element.item.availability.feed = 0;
        }
        this.total += (element.item.availability.feed + element.item.price * element.qty);
      });
      // console.log(data);
    })
    .catch(err => {
      console.log('Erreur', err);
    });
  }

  closeModal(): void {
    this.modalCtrl.dismiss();
  }
  async  removeItem(article: itemCart, index: number) {
    const alert = await this.alertCtrl.create({
      header: 'Attention!',
      message: `Êtes vous sûr de vouloir retirer ${article.item.title}`,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        }, {
          text: 'Retirer',
          handler: () => {
            const price = article.item.price;
            const  qty = article.qty;
            const feed = article.item.availability.feed;
            const myTotal = feed + price * qty;
            this.cartItems.splice(index, 1);
            this.storage.set('cart', this.cartItems)
            .then((data) => {
              this.total -= myTotal;
              this.deleteToast();
            })
            .catch((err) => {
              console.log(err);
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async deleteToast() {
    const toast = await this.toast.create({
      message: 'Article retiré du panier',
      duration: 1000,
      color: 'danger',
      closeButtonText: 'fermer'
    });
    toast.present();
  }

  showImage(picture: any, event: Event) {
    return this.imageViewProvider.showImage(picture, event);
  }

}

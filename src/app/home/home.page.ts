import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController, ModalController, Events } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Product } from '../models/interface-products';
import { ImageViewerComponent } from '../component/image-viewer/image-viewer.component';
import { ImageViewService } from '../services/method.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // data: any;
  Articles: Product[];
  constructor(public navCtrl: NavController,
              private router: Router ,
              public alertController: AlertController,
              public actionSheetController: ActionSheetController,
              public modalController: ModalController,
              public imageViewProvider: ImageViewService ) {
    this.Articles = [
      {
        title: 'Jacket',
        description: 'djsjfddjfdj',
        price: 45,
        category: 'Vetements',
        createdAt: new Date(),
        state: 'Neuf',
        city: 'Londres',
        id: '1',
        averageStar : 3,
        availability: {
          available: true,
          type:  'Livraison',
          feed: 10
        },
        pictures: new Array (
          'assets/imgs/Product1/presto1.jpg',
          'assets/imgs/Product1/presto2.jpg',
          'assets/imgs/Product1/presto3.jpg',
          'assets/imgs/Product1/presto4.jpg'
        )
      },
      {
        title: 'Phone',
        description: 'djsjfddjfdj',
        price: 45,
        category: 'Vetements',
        createdAt: new Date(),
        state: 'Neuf',
        city: 'Londres',
        id: '2',
        averageStar : 2,
        availability: {
          available: true,
          type:  'Livraison',
          feed: 10
        },
        pictures: new Array(
          'assets/imgs/Product2/presto1.jpg',
          'assets/imgs/Product2/presto2.png',
          'assets/imgs/Product2/presto3.jpg',
          'assets/imgs/Product2/presto4.jpg'
        )
      },
      {
        title: 'Ordinateur',
        description: 'djsjfddjfdj',
        price: 45,
        category: 'Vetements',
        createdAt: new Date(),
        state: 'Neuf',
        city: 'Londres',
        id: '3',
        averageStar : 4,
        availability: {
          available: false,
          type:  'Livraison',
          feed: 10
        },
        pictures: new Array (
           'assets/imgs/Product3/presto1.png',
           'assets/imgs/Product3/presto2.jpg',
          'assets/imgs/Product3/presto3.jpg',
           'assets/imgs/Product3/presto4.jpg'
        )
      },
      {
        title: 'Mode & Vetements',
        description: 'djsjfddjfdj',
        price: 45,
        category: 'Vetements',
        createdAt: new Date(),
        state: 'Neuf',
        city: 'Londres',
        id: '4',
        averageStar : 3,
        availability: {
          available: true,
          type:  'Disponible en Magasin'
        },
        pictures: new Array (
          'assets/imgs/Product4/presto1.jpg',
          'assets/imgs/Product4/presto2.jpg',
          'assets/imgs/Product4/presto3.jpg',
          'assets/imgs/Product4/presto4.jpg'
        )
      }

    ];
  }

  showDetails(article: Product): void {
    console.log(article);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(article)
      }
    };
    this.router.navigate(['details'], navigationExtras);
  }

  showImage(picture: any, event: Event) {
    return this.imageViewProvider.showImage(picture, event);
  }

}

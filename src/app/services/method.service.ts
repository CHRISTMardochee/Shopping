import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageViewerComponent } from '../component/image-viewer/image-viewer.component';

@Injectable({
  providedIn: 'root'
})
export class ImageViewService {

  constructor(public modalController: ModalController, ) { }


  showImage(picture: any, event: Event) {
    event.stopPropagation();
    this.viewImage(picture);
  }
  async viewImage(src: string, title: string = '', description: string = '', ) {
    const modal = await this.modalController.create({
      component: ImageViewerComponent,
      componentProps: {
        imgSource: src,
        imgTitle: title,
        imgDescription: description
      },
      cssClass: 'modal-fullscreen',
      keyboardClose: true,
      showBackdrop: true,
    });
    return await modal.present();
  }
}

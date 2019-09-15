import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuPage } from './menu/menu.page';
import { IonicStorageModule } from '@ionic/storage';
import { CartPageModule } from './cart/cart.module';
import { ImageViewerComponent } from './component/image-viewer/image-viewer.component';
import { ImageViewService } from './services/method.service';

@NgModule({
  declarations: [AppComponent, MenuPage, ImageViewerComponent],
  entryComponents: [ImageViewerComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot(), CartPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImageViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

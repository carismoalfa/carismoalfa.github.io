import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CustomBuiltComponent } from './pages/custom-built/custom-built.component';
import { MediaComponent } from './pages/media/media.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HowToOrderComponent } from './pages/how-to-order/how-to-order.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RadioComponent } from './components/radio/radio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BtnComponent } from "./components/btn/btn.component";
import { CheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    CustomBuiltComponent,
    MediaComponent,
    ContactComponent,
    AboutComponent,
    HowToOrderComponent,
    RadioComponent,
    CarouselComponent,
    BtnComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  exports: [
  ]
})
export class AppModule {
}

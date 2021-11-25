import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PromoLeftComponent } from './components/promo-left/promo-left.component';
import { PromoRightComponent } from './components/promo-right/promo-right.component';
import { CardComponent } from './components/card/card.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SelectProfileComponent } from './pages/select-profile/select-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    PromoLeftComponent,
    PromoRightComponent,
    HomePageComponent,
    SelectProfileComponent,
    LoginFormComponent,
    CatalogComponent,
    CardComponent,
    CarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

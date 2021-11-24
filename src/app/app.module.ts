import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromotionalGuideComponent } from './promotional-guide/promotional-guide.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PromoLeftComponent } from './components/promo-left/promo-left.component';
import { PromoRightComponent } from './components/promo-right/promo-right.component';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SelectProfileComponent } from './pages/select-profile/select-profile.component';
import { LoggedComponent } from './pages/logged/logged.component';

@NgModule({
  declarations: [
    AppComponent,
    PromotionalGuideComponent,
    LoginComponent,
    LoginFormComponent,
    FooterComponent,
    HeaderComponent,
    PromoLeftComponent,
    PromoRightComponent,
    LoginComponent,
    HomePageComponent,
    SelectProfileComponent,
    LoggedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SelectProfileComponent } from './pages/select-profile/select-profile.component';
import { LoggedComponent } from './pages/logged/logged.component';
import { LoginComponent } from './pages/login/login.component';
import { PromoComponent } from './components/promo/promo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    SelectProfileComponent,
    LoggedComponent,
    LoginFormComponent,
    PromoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Dependências do Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Módulos
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PromoComponent } from './components/promo/promo.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CardInfoComponent } from './components/card-info/card-info.component';

// Páginas
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SelectProfileComponent } from './pages/select-profile/select-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CatalogComponent } from './pages/catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    CardComponent,
    PromoComponent,
    LogoutComponent,
    CardInfoComponent,
    HomePageComponent,
    SelectProfileComponent,
    LoginFormComponent,
    PageNotFoundComponent,
    CatalogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './loginScreen/login-form/login-form.component';
import { LoginScreenComponent } from './loginScreen/login-screen/login-screen.component';
import { PromotionalGuideComponent } from './promotional-guide/promotional-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginScreenComponent,
    PromotionalGuideComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

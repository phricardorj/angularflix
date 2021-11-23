import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';

@NgModule({
  declarations: [LoginFormComponent, LoginScreenComponent],
  imports: [CommonModule],
  exports: [LoginScreenComponent],
})
export class LoginModule {}

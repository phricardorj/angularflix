import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SelectProfileComponent } from './pages/select-profile/select-profile.component';
import { LoggedComponent } from './pages/logged/logged.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profiles', component: SelectProfileComponent, canActivate: [AuthGuard] },
  { path: 'logged', component: LoggedComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

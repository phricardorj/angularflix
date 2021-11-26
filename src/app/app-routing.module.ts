import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SelectProfileComponent } from './pages/select-profile/select-profile.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RedirectGuard } from './auth/redirect.guard';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [RedirectGuard] },
  { path: 'login', component: LoginComponent, canActivate: [RedirectGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'profiles', component: SelectProfileComponent, canActivate: [AuthGuard] },
  { path: 'catalog', component: CatalogComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

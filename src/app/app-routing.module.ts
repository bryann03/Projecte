import { MAIN_ROUTES } from './components/navbar/main.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'main',
    component: NavbarComponent,
    children: MAIN_ROUTES,
    canActivate: [AuthGuard]
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'registro'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

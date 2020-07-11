import { ReactiveComponent } from './../../pages/reactive/reactive.component';
import { TemplateComponent } from './../../pages/template/template.component';
import { UsuarioComponent } from './../usuario/usuario.component';
import { VariosComponent } from './../varios/varios.component';
import { MovilComponent } from './../movil/movil.component';
import { MovilesComponent } from './../moviles/moviles.component';
import { HomeComponent } from './../home/home.component';

import { Routes } from '@angular/router';
import { BuscadorComponent } from '../buscador/buscador.component';
import { PipesComponent } from '../pipes/pipes.component';
import { SearchComponent } from '../search/search.component';
import { ArtistaComponent } from '../artista/artista.component';
import { USUARIO_ROUTES } from '../usuario/usuario.routes';

export const MAIN_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'moviles',
    component: MovilesComponent
  },
  {
    path: 'movil/:id',
    component: MovilComponent
  },
  {
    path: 'buscar/:termino',
    component: BuscadorComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'artist/:id',
    component: ArtistaComponent
  },
  {
    path: 'varios',
    component: VariosComponent
  },
  {
    path: 'template',
    component: TemplateComponent
  },
  {
    path: 'reactive',
    component: ReactiveComponent
  },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: USUARIO_ROUTES
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

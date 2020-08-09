import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MovilComponent } from './components/movil/movil.component';
import { MovilesComponent } from './components/moviles/moviles.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CardMovilComponent } from './components/card-movil/card-movil.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { registerLocaleData } from '@angular/common';
import  localEs  from '@angular/common/locales/es';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardSpotifyComponent } from './components/card-spotify/card-spotify.component';
import { LoadingComponent } from './components/loading/loading.component';
import { VariosComponent } from './components/varios/varios.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component'

registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    HomeComponent,
    MovilComponent,
    MovilesComponent,
    BuscadorComponent,
    CardMovilComponent,
    PipesComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    SearchComponent,
    ArtistaComponent,
    NoimagePipe,
    CardSpotifyComponent,
    LoadingComponent,
    VariosComponent,
    NgStyleComponent,
    CssComponent,
    ResaltadoDirective,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    LoginComponent,
    RegistroComponent,
    TemplateComponent,
    ReactiveComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

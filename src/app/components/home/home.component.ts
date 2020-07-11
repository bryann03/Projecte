import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrayPaises: any[];
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  constructor(
    private spotifyService: SpotifyService
  ) {
    this.error = false;
    this.loading = true;
    setTimeout(() => {
      this.spotifyService.getNewReleases()
        .subscribe((data: any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        },
          (errorServicio) => {
            this.spotifyService.getToken();
            this.mensajeError = errorServicio.error.error.message;
            this.loading = false;
            this.error = true;
          })
    }, 2000);
  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {


  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.spotifyService.getOneArtist(id)
      .subscribe(data => {
        this.artista = data;
        this.loading = false;
      })
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id)
      .subscribe(data => {
        console.log(data);
        this.topTracks = data;
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  arrayArtistas: any[] = [];
  loading: boolean;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
  }

  buscarArtista(termino: string){
    this.loading = true;
    this.spotifyService.getArtist(termino)
      .subscribe( (data:any) => {
        this.loading = false;
        this.arrayArtistas = data;
      })
  }

}

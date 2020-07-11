import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-spotify',
  templateUrl: './card-spotify.component.html',
  styleUrls: ['./card-spotify.component.scss']
})
export class CardSpotifyComponent implements OnInit {

  @Input() itemsSpotify: any[] = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  verArtista(item: any){
    let idArtista;

    //COMPRUEBA SI EL TIPO ES ARTISTA Y GUARDA SU ID
    if(item.type === 'artist'){
      idArtista = item.id;
    }
    else{
      idArtista = item.artists[0].id
    }
    this.router.navigate(['/main/artist', idArtista]);
  }

}

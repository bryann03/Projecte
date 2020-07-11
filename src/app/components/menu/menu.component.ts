import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
  }

}

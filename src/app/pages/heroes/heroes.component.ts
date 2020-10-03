import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.mode';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];

  constructor( private heroeService: HeroesService  ) { }

  ngOnInit(): void {
    this.heroeService.getHeroes()
        .subscribe(resp => this.heroes = resp)
  }

}

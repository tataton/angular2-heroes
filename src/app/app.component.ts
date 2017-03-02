import { Component, OnInit } from '@angular/core';
import { Hero } from './classes/hero';
import { HeroService } from './services/hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) { }

  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

}

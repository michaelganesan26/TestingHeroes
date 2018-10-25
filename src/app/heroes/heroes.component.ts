import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;
  selectedHero: Hero;
  @ViewChild('myData') myData: ElementRef;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  onSelect(hero: Hero) {
      this.selectedHero = hero;
      console.log(`Your hero is: ${hero.name}`);
      this.renderer.setProperty(this.myData.nativeElement, 'innerHTML', hero.name);
  }

}

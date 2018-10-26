import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  @ViewChild('myData') myData: ElementRef;
  constructor(private renderer: Renderer2,private service:HeroService) {}

  ngOnInit() {
     
    //this.heroes = this.service.getHeroes();
      
      this.service.getHeroes2().subscribe(result =>{
        this.heroes = result;
      });

  }

  // onSelect(hero: Hero) {
  //     this.selectedHero = hero;
  //     console.log(`Your hero is: ${hero.name}`);
  //     this.renderer.setProperty(this.myData.nativeElement, 'innerHTML', hero.name);
  // }

}

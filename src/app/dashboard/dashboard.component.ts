import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heros: Hero[];
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes2().subscribe(result =>{
      this.heros=result.slice(1,5);
    });
  }

}

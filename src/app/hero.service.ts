import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService:MessageService) { }

  getHeroes(): Hero[] {

    return HEROES;

  }
  getHeroes2(): Observable<Hero[]> {
      this.messageService.add(`HeroService fetched: ${new Date().toUTCString()}`);
      return of(HEROES);


  }

  getHeroById(id:number):Observable<Hero>{

    this.messageService.add(`HeroService: fetched hero id: ${id}`);
    return(of(HEROES.find(hero => hero.id === id)));


  }

}

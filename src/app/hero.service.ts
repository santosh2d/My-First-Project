import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl  = 'api/heroes';


  constructor( private http:HttpClient, private messageService : MessagesService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);    
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}

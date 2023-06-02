import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const heroes = [
      {id: 12, name: 'Skarsnik'},
      {id: 13, name: 'Headtaker'},
      {id: 14, name: 'Ikit Claw'},
      {id: 15, name: 'Karl Franz'},
      {id: 16, name: 'Mannfred von Carstein'},
      {id: 17, name: 'Heinrich Kemmler'},
      {id: 18, name: 'Grimgor Ironhide'},
      {id: 19, name: 'Ungrim Ironfist'},
      {id: 20, name: 'Alberic de Bordeleaux'},
      {id: 21, name: 'Abaddon the Despoiler'},
      {id: 22, name: 'Ahriman'},
      {id: 23, name: 'Kharn the Betrayer'},
      {id: 24, name: 'Lucius the Eternal'},
      {id: 25, name: 'Typhus'},
      {id: 26, name: 'Fabius Bile'},
      {id: 27, name: 'Asdrubael Vect'},
      {id: 28, name: 'Ragnar Blackmane'},
      {id: 29, name: 'Cato Sicarius'},
      {id: 30, name: 'Ezekiel Abaddon'}
    ];
    return {heroes};    
  }
  
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

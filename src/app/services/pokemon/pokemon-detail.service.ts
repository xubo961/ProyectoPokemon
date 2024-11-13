import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Pokemon, PokemonApi} from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {

  pokemon1: BehaviorSubject<PokemonApi | null> = new BehaviorSubject<PokemonApi | null>(null)
  info1$: Observable<PokemonApi|null> = this.pokemon1.asObservable();


  constructor() {}
    updatePokemon1(info: PokemonApi|null) {
      this.pokemon1.next(info);
  }
}

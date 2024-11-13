import {Component, OnInit} from '@angular/core';
import {InformacionService} from '../services/modales/informacion.service';
import {EnviarPokemonService} from '../services/pokemon/enviar-pokemon.service';
import {PokemonDetailService} from '../services/pokemon/pokemon-detail.service';
import {Pokemon, PokemonApi} from '../services/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit{

  pokemon: PokemonApi|null ={
    name:"",
    url:""
}


  constructor(
    private pokemonDetailService: PokemonDetailService
  ) {}

  ngOnInit() {
    this.pokemonDetailService.info1$.subscribe(pk => {
      this.pokemon = pk
    });
  }
}

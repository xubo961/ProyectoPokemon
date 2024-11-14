import {Component, OnInit} from '@angular/core';
import {InformacionService} from '../services/modales/informacion.service';
import {EnviarPokemonService} from '../services/pokemon/enviar-pokemon.service';
import {PokemonDetailService} from '../services/pokemon/pokemon-detail.service';
import {Pokemon, PokemonApi} from '../services/interfaces/pokemon';
import {HttpClient} from '@angular/common/http';

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

  guardarInfo: any

  constructor(
    private pokemonDetailService: PokemonDetailService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.pokemonDetailService.info1$.subscribe(pk => {
      this.pokemon = pk
    });
    this.getAllData()
  }

  getAllData(){
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/'+this.pokemon?.name).subscribe(datos =>{
      this.guardarInfo = datos
    })

  }
}

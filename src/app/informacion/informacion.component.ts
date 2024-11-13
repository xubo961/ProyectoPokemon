import {Component, OnInit} from '@angular/core';
import  {Pokemon, PokemonApi} from '../services/interfaces/pokemon';
import {InformacionService} from '../services/modales/informacion.service';
import {EnviarPokemonService} from '../services/pokemon/enviar-pokemon.service';
import {PokemonApiService} from '../services/pokemon/pokemon-api.service';
import {Router} from '@angular/router';
import {PokemonDetailService} from '../services/pokemon/pokemon-detail.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent implements OnInit{

  mostrarModal: boolean = false;

  pokemonsApi: PokemonApi[] = []

  constructor(
    private informacionService: InformacionService,
    private enviarPokemonService: EnviarPokemonService,
    private  pokemonApiService: PokemonApiService,
    private pokemonDetailService: PokemonDetailService,
    private router: Router
  ) {}

  ngOnInit() {
    this.informacionService.modal$.subscribe(modal => {
      this.mostrarModal = modal;
    });

    this.pokemonApiService.getAllPokemon().subscribe({

      //Next es obligatorio:
      next: data => { //Comunicacion bie = bien
        //console.log(data.results[0])
        this.pokemonsApi = data.results
        console.log(this.pokemonsApi)
      },

      //Error también es obligatorio
      error: error => { //Si hay error sale esto
        console.log(error)
      },

      //Este es opcional
      complete: () => { //Se ejecuta si está bien o mal
        console.log("Comunicación Finalizada")
      }

    })
  }

  mostrarElModal(pk: Pokemon) {
    this.enviarPokemonService.updatePokemon(pk);
    this.informacionService.toggleModal(true);
  }

  //Ver datos en HTML usando directiva *ngFor
  pokemon: Pokemon[] = [
    {
      id: 1,
      nombre: "Celebi",
      descripcion: "Celebi es uno de los Pokémon legendario de la región de Johto y es nombrado como el Pokémon viajero del tiempo. ",
      image_url: "data:image/jpeg;base64,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"},
    {
      id: 2,
      nombre: "Victini",
      descripcion: "Victini es un Pokémon singular de tipo psíquico/fuego introducido en la quinta generación. Encabeza la Pokédex de Teselia con el nº 000",
      image_url: "https://th.bing.com/th/id/R.0c026240aed29933541470b6f8828652?rik=g%2b4FSXV8sh4F6w&pid=ImgRaw&r=0"},
    {
      id: 3,
      nombre: "Hoopa",
      descripcion: "En su forma original, este Pokémon posee una fuerza descomunal. Una leyenda cuenta que una vez robó un tesoro del interior de una fortaleza.",
      image_url: "https://th.bing.com/th/id/OIP.3ee20Xv_6tRBJc87iZyinQHaGh?rs=1&pid=ImgDetMain"},
    {
      id: 4,
      nombre: "Darkrai",
      descripcion: "Darkrai posee un largo pelo blanco y ojos celestes, y alrededor del cuello parece tener una especie de prenda roja en forma de mandíbula para intimidar.",
      image_url: "https://th.bing.com/th/id/R.2565af47758e979b963b9203d585cb2e?rik=Rer9gE4Zo%2fdenw&riu=http%3a%2f%2fimg13.deviantart.net%2fae5b%2fi%2f2013%2f296%2f6%2fd%2fdarkrai_by_devilkei-d6rj3jw.png&ehk=Y7I8hNtxYSNd9VXtiI0MK9%2fAoR6PXT9pX1xOpyWvdUI%3d&risl=&pid=ImgRaw&r=0"},
    {
      id: 5,
      nombre: "Mew",
      descripcion: "Mew es un Pokémon legendario de tipo Psíquico introducido en la Primera generación. Es de color Rosado, pesa 4,0kg y mide 0,4m.",
      image_url: "https://vignette.wikia.nocookie.net/es.pokemon/images/b/bf/Mew.png/revision/latest?cb=20160311010530"}
  ]

  deallesPokemon(pk: PokemonApi) {
    this.pokemonDetailService.updatePokemon1(pk)
    this.router.navigate(['detalles']);
  }
}


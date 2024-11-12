import {Component, OnInit} from '@angular/core';
import  {Pokemon} from '../services/interfaces/pokemon';
import {InformacionService} from '../services/modales/informacion.service';
import {EnviarPokemonService} from '../services/pokemon/enviar-pokemon.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{

  pokemon: Pokemon | null = {
    id: -1,
    nombre: "",
    descripcion: "",
    image_url: ""
  }

  cerrarModal: boolean = true;

  constructor(
    private informacionService: InformacionService,
    private enviarPokemonService: EnviarPokemonService
  ) {}

  ngOnInit() {
    this.enviarPokemonService.info$.subscribe(pokemon => {
      this.pokemon = pokemon
    });
  }

  cerrarElModal() {
    this.enviarPokemonService.updatePokemon(null);
    this.informacionService.toggleModal(false);
  }

}

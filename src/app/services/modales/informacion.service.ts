import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  mostrartModal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  modal$: Observable<boolean> = this.mostrartModal.asObservable();

  constructor() { }

  toggleModal(mostrar: boolean) {
    this.mostrartModal.next(mostrar);
  }
}

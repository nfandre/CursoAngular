import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from './usuario';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostraMenuEmitter = new EventEmitter<boolean>();
  constructor(
    private router: Router
  ) {
  }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'nfandre'
      && usuario.senha === 'andre') {
      this.usuarioAutenticado = true;
      this.mostraMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostraMenuEmitter.emit(false);

    }
  }
}

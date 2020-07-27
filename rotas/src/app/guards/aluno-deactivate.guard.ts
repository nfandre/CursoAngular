import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {IformCandeactivate} from './iform-candeactivate';



@Injectable()
export class AlunoDeactivateGuard implements CanDeactivate<IformCandeactivate> {
  canDeactivate(
    component: IformCandeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('entrou' + component.podeDesativar())
    return component.podeDesativar();
  }
}

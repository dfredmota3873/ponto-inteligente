import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment as env } from 'src/environments/enviroment';
import { Lancamento } from '../models';
import { HttpUtilService } from './http-util.service';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private readonly PATH: string = 'funcionarios';
  private readonly PATH_FUNC_POR_EMPRESA = '/empresa/{empresaId}'

  constructor(private http: HttpClient,
    private httpUtil: HttpUtilService) { }


  listarFuncionariosPorEmpresa(): Observable<any> {
    return this.http.get(env.baseApiUrl + this.PATH + this.PATH_FUNC_POR_EMPRESA.replace('{empresaId}', this.httpUtil.obterIdEmpresa()),
      this.httpUtil.headers());
  }
}

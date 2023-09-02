import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './components/listagem/listagem.component';
import { LancamentoComponent } from './components/lancamento/lancamento.component';
import { FuncionarioComponent } from './components';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator'; 
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule }  from '@angular/material/card';
import { PtBrMatPaginatorIntl } from '../shared';

import { HttpUtilService, LancamentoService } from '../shared';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListagemComponent,
    LancamentoComponent,
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    ReactiveFormsModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers:[
    HttpUtilService,
    LancamentoService,
    { provide: MatPaginatorIntl , useClass: PtBrMatPaginatorIntl}
  ]
})
export class FuncionarioModule { }

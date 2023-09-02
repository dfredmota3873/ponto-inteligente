import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule, LoginRoutingModule, CadastroPjModule, CadastroPfModule,CadastroPfRoutingModule } from './autenticacao';
import { FuncionarioModule, FuncionarioRoutingModule } from './funcionario';
import { CadastroPjRoutingModule } from './autenticacao/cadastro-pj/cadastro-pj-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    MatToolbarModule,
    MatIconModule,
    FuncionarioModule,
    FuncionarioRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

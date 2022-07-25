import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { LoginFuncionarioComponent } from './login-funcionario/login-funcionario.component';
import { FormularioComponent } from './funcionarios/formulario/formulario.component';
import { FormularioComponentAssociado } from './associados/formulario/formulario.component';
import { FormularioPublicacaoComponent } from './publicacao/formulario-publicacao/formulario-publicacao.component';
import { FormularioExemplarComponent } from './exemplar/formulario-exemplar/formulario-exemplar.component';
import { ConsultarPublicacaoComponent } from './publicacao/consultar-publicacao/consultar-publicacao.component';
import { FormularioReservaComponent } from './reserva/formulario-reserva/formulario-reserva.component';
import { FormularioEmprestimoComponent } from './emprestimo/formulario-emprestimo/formulario-emprestimo.component';
import { RetirarReservaComponent } from './reserva/retirar-reserva/retirar-reserva.component';
import { ConsultarEmprestimoComponent } from './emprestimo/consultar-emprestimo/consultar-emprestimo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    LoginFuncionarioComponent,
    FormularioComponent,
    FormularioComponentAssociado,
    FormularioPublicacaoComponent,
    FormularioExemplarComponent,
    ConsultarPublicacaoComponent,
    FormularioReservaComponent,
    FormularioEmprestimoComponent,
    RetirarReservaComponent,
    ConsultarEmprestimoComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: '/loginfunc', component: LoginFuncionarioComponent },
      { path: '/formfunc', component: FormularioComponent },
      { path: '/formassoc', component: FormularioComponentAssociado },
      { path: '/formpub', component: FormularioPublicacaoComponent },
      { path: '/formexe', component: FormularioExemplarComponent },
      { path: '/conspub', component: ConsultarPublicacaoComponent },
      { path: '/formres', component: FormularioReservaComponent },
      { path: '/formemp', component: FormularioEmprestimoComponent },
      { path: '/retres', component: RetirarReservaComponent },
      { path: 'consemp', component: ConsultarEmprestimoComponent },
    ]),
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}

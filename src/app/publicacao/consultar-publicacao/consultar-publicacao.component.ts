import { Component, OnInit } from '@angular/core';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';
import { Publicacao } from '../shared/publicacao';

@Component({
  selector: 'app-consultar-publicacao',
  templateUrl: './consultar-publicacao.component.html',
  styleUrls: ['./consultar-publicacao.component.css']
})
export class ConsultarPublicacaoComponent implements OnInit {

  formPublicacao: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Publicacao());
  }
  createForm(publicacao: Publicacao) {
    this.formPublicacao = this.formBuilder.group({
      ISBN: [publicacao.ISBN]
    })
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formPublicacao.value);
    // Usar o método reset para limpar os controles na tela
    this.formPublicacao.reset(new  Publicacao());
  }

}

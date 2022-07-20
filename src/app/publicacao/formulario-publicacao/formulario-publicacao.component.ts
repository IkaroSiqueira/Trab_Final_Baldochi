import { Component, OnInit } from '@angular/core';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';
import { Publicacao } from '../shared/publicacao';

@Component({
  selector: 'app-formulario-publicacao',
  templateUrl: './formulario-publicacao.component.html',
  styleUrls: ['./formulario-publicacao.component.css']
})
export class FormularioPublicacaoComponent implements OnInit {

  formPublicacao: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Publicacao());
  }
  createForm(publicacao: Publicacao) {
    this.formPublicacao = this.formBuilder.group({
      ISBN: [publicacao.ISBN],
      titulo: [publicacao.titulo],
      autor: [publicacao.autor],
      editora: [publicacao.editora]
    })
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formPublicacao.value);
    // Usar o método reset para limpar os controles na tela
    this.formPublicacao.reset(new  Publicacao());
  }
}

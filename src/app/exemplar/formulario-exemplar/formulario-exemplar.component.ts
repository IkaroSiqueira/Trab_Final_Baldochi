import { Component, OnInit } from '@angular/core';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';
import { Exemplar } from '../shared/exemplar';

@Component({
  selector: 'app-formulario-exemplar',
  templateUrl: './formulario-exemplar.component.html',
  styleUrls: ['./formulario-exemplar.component.css']
})
export class FormularioExemplarComponent implements OnInit {

  formExemplar: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Exemplar());
  }
  createForm(exemplar: Exemplar) {
    this.formExemplar = this.formBuilder.group({
      numero: [exemplar.numero],
      ISBN: [exemplar.ISBN],
      preço: [exemplar.preço]
    })
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formExemplar.value);
    // Usar o método reset para limpar os controles na tela
    this.formExemplar.reset(new  Exemplar());
  }

}

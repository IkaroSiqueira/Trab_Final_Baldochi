import { Component, OnInit } from '@angular/core';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';
import { Associados } from '../shared/associados';

@Component({
  selector: 'app-formulario-associado',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponentAssociado implements OnInit {

  formAssociado: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Associados());
  }
  createForm(associado: Associados) {
    this.formAssociado = this.formBuilder.group({
      nome: [associado.nome],
      endereço: [associado.endereço],
      email: [associado.email],
      status: [associado.status]
    })
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formAssociado.value);
    // Usar o método reset para limpar os controles na tela
    this.formAssociado.reset(new  Associados());
  }

}

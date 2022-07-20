import { Component, OnInit } from '@angular/core';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';
import { Emprestimo } from '../shared/emprestimo';

@Component({
  selector: 'app-formulario-emprestimo',
  templateUrl: './formulario-emprestimo.component.html',
  styleUrls: ['./formulario-emprestimo.component.css']
})
export class FormularioEmprestimoComponent implements OnInit {

  formEmprestimo: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Emprestimo());
  }
  createForm(emprestimo: Emprestimo) {
    this.formEmprestimo = this.formBuilder.group({
      codigo: [emprestimo.codigo],
      nro_exemplar: [emprestimo.nro_exemplar],
      ISBN: [emprestimo.ISBN],
      codigo_assoc: [emprestimo.codigo_assoc],
      data_emp: [emprestimo.data_emp],
      data_devol: [emprestimo.data_devol]
    })
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formEmprestimo.value);
    // Usar o método reset para limpar os controles na tela
    this.formEmprestimo.reset(new  Emprestimo());
  }

}

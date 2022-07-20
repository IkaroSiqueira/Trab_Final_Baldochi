import { Component, OnInit } from '@angular/core';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';
import { Emprestimo } from '../shared/emprestimo';

@Component({
  selector: 'app-consultar-emprestimo',
  templateUrl: './consultar-emprestimo.component.html',
  styleUrls: ['./consultar-emprestimo.component.css']
})
export class ConsultarEmprestimoComponent implements OnInit {

  formEmprestimo: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Emprestimo());
  }
  createForm(emprestimo: Emprestimo) {
    this.formEmprestimo = this.formBuilder.group({
      codigo_assoc: [emprestimo.codigo_assoc]
    })
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formEmprestimo.value);
    // Usar o método reset para limpar os controles na tela
    this.formEmprestimo.reset(new  Emprestimo());
  }

}

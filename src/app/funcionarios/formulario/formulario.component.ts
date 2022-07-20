import { Component, OnInit } from '@angular/core';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';
import { Funcionarios } from '../shared/funcionarios';

@Component({
  selector: 'app-formulario-funcionario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formFuncionario: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Funcionarios());
  }
  createForm(funcionario: Funcionarios) {
    this.formFuncionario = this.formBuilder.group({
      nome: [funcionario.nome],
      funcao: [funcionario.funcao],
      email: [funcionario.email],
    })
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formFuncionario.value);
    // Usar o método reset para limpar os controles na tela
    this.formFuncionario.reset(new  Funcionarios());
  }
}

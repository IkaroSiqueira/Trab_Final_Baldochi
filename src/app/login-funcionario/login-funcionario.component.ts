import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login-funcionario',
  templateUrl: './login-funcionario.component.html',
  styleUrls: ['./login-funcionario.component.css']
})
export class LoginFuncionarioComponent {

  form;

  emailDB: string = "email@teste.com";

  senhaDB: string = "12345678";
  
  mensagem: string;

  constructor(private formBuilder:FormBuilder) {

      this.criarForm();
  }

  criarForm(){

      this.form = this.formBuilder.group({

          email: [''],
          senha: ['']
      });
  }

  login()
  {
    if (this.form.get('email').value == this.emailDB && this.form.get('senha').value == this.senhaDB) 
    {
        this.mensagem = "Login feito com sucesso!";
    } else {
      this.mensagem = "E-mail ou a senha estar errado!"; 
    }
  }

}

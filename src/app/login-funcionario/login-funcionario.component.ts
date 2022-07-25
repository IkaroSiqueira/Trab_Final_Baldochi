import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-funcionario',
  templateUrl: './login-funcionario.component.html',
  styleUrls: ['./login-funcionario.component.css'],
})
export class LoginFuncionarioComponent {
  form;

  emailDB: string = 'email@teste.com';

  senhaDB: string = '12345678';

  mensagem: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.criarForm();
  }

  criarForm() {
    this.form = this.formBuilder.group({
      email: [''],
      senha: [''],
    });
  }

  login() {
    this.http
      .post<any>(
        'https://biblioteca-back-end.herokuapp.com/funcionarios/login',
        {
          email: this.form.get('email').value,
          senha: this.form.get('senha').value,
        }
      )
      .subscribe((data) => {
        this.mensagem = JSON.stringify(data);
        this.router.navigate(['homecro']);
      });
    this.router.navigate(['homeadm']);
    // if (this.form.get('email').value == this.emailDB && this.form.get('senha').value == this.senhaDB)
    // {
    //     this.mensagem = "Login feito com sucesso!";
    // } else {
    //   this.mensagem = "E-mail ou a senha estar errado!";
    // }
  }
}

import { Component, OnInit } from '@angular/core';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';
import { Reserva } from '../shared/reserva';

@Component({
  selector: 'app-formulario-reserva',
  templateUrl: './formulario-reserva.component.html',
  styleUrls: ['./formulario-reserva.component.css']
})
export class FormularioReservaComponent implements OnInit {
  formReserva: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Reserva());
  }
  createForm(reserva: Reserva) {
    this.formReserva = this.formBuilder.group({
      codigo: [reserva.codigo],
      ISBN: [reserva.ISBN],
      codigo_assoc: [reserva.codigo_assoc],
      data: [reserva.data],
      status: [reserva.status]
    })
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formReserva.value);
    // Usar o método reset para limpar os controles na tela
    this.formReserva.reset(new  Reserva());
  }

}

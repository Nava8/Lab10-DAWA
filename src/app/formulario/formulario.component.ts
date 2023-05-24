import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  camposValidos = false;

  onSubmit() {
    Swal.fire({
      title: 'Confirmación',
      text: '¿Estás seguro de que deseas enviar el formulario?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const ventanaNueva = window.open('', '_blank');
        if (ventanaNueva) {
          ventanaNueva.document.write(`
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <div class="container">
              <h1 class="display-4 text-center">Información del formulario</h1>
              <div class="card mx-auto" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Nombre</h5>
                  <p class="card-text">${this.nombre}</p>
                  <h5 class="card-title">Email</h5>
                  <p class="card-text">${this.email}</p>
                </div>
              </div>
            </div>
          `);
          ventanaNueva.document.close();
        }
      }
    });
  }

  validarCampos() {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    this.camposValidos = Boolean(this.nombre) && emailRegex.test(this.email);
  }
}

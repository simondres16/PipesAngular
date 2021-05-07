import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holaMundo';
  nombre:String = "Simon";

  nombreCompleto:String = "simon andres muñoz riveros";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  pi = Math.PI;

  a = 0.523;

  salario = 781272;

  heroe = {
    nombre: "Tony",
    clave: "Ironman",
    edad: 33,
    direccion: {
      calle: "Central",
      torre: "La mas grande"
    }
  }

  valorDePromesa = new Promise( (resolve,reject)=>{
    setTimeout( ()=>resolve('Llego la data') , 3500 );
  } );

  fecha = new Date();

  video = "OPf0YbXqDm0";

  activado = true;
}

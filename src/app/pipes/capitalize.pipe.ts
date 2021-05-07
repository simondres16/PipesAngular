import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class capitalizePipe implements PipeTransform {

  transform(value: String, todas:boolean = true): String {

    value = value.toLowerCase();

    let nombres = value.split(" ");
    if(todas){
      for (let i in nombres) {
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
      }
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join(" ");
  }

}

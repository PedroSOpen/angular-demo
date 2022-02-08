import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'docker-angular';


  imprimirMensaje() : void{
    let result = this.sumar(1, 1);
    console.log("Resultado de suma:"  + result);
    while(true){
      console.log("Loop!");
    }
  }

  sumar(a: number, b: number){
    for(let index= 0; index < 5; index++){
      console.log("Resultado de suma:"  + index);
    }
    for(let index= 0; index < 5; index++){
      console.log("Resultado de suma:"  + index);
    }
    for(let index= 0; index < 5; index++){
      console.log("Resultado de suma:"  + index);
    }
    for(let index= 0; index < 5; index++){
      console.log("Resultado de suma:"  + index);
    }
    return a + b;

  }

  
}

function makeAnIssue(a: any) { 
  let b = 12;
  if (a) {
    return b;
  }
  return b;
}
import { Component } from '@angular/core';


@Component({
  selector: 'about',
  template: `<h1>About {{name}}</h1>` 
   
})

export class AboutComponent  { 
  //name : string;
  name = 'about component';
 
 
}
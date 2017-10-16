import { Component } from '@angular/core';

@Component({
  selector: 'logo',
  template: `
  <figure class="app-logo">
    <img 
    routerLink="/"
    src="/assets/logo.png" 
    alt="Charlie and the Chocolate Kingdom Logo"
    width="200px">
  </figure>`,
  styles: [`
    .app-logo{
      cursor: pointer;
    }
  `]
})
export class LogoComponent{

}
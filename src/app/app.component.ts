import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
// This is a decorator
// https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo"
          src="/assets/logo.svg"
          aria-hidden="true"
          alt="logo">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
    
 </main>  
`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent],
})
export class AppComponent {
  title = 'homes';
}

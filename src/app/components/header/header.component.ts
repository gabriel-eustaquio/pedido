import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menu() {
    const ul = document.querySelector('header ul');
    ul?.classList.toggle('active');
  }

  fechaMenu() {
    const ul = document.querySelector('header ul');
    ul?.classList.remove('active');
  }
}

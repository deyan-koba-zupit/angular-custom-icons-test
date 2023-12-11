import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Icons } from '../assets/font-icons/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-custom-icons-test';

  readonly iconsEnum = Icons;

  readonly docker = Icons.Docker;
  readonly iconHtml = Icons.ProgrammingLanguagesHtml;
}

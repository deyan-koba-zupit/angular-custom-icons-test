import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Icons } from '../assets/font-icons/icons';
import {ZupitIconComponent} from "./_components/zupit-icon/zupit-icon.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ZupitIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly zuDocker = Icons.Docker;
  readonly zuHtml = Icons.ProgrammingLanguagesHtml;
  readonly zuJs = Icons.ProgrammingLanguagesJavascript;
  readonly zuTypescript = Icons.Typescript;
}

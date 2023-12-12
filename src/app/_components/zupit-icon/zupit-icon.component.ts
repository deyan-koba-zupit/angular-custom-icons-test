import {Component, Input} from '@angular/core';
import {Icons} from "../../../assets/font-icons/icons";
import {NgIf} from "@angular/common";

@Component({
  selector: 'zu-icon',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './zupit-icon.component.html',
  styleUrl: './zupit-icon.component.scss'
})
export class ZupitIconComponent {
  @Input() icon?: Icons;
}

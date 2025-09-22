import { Component, input, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() typeInput!: string;
  @Input() labelInput!: string;
  @Input() control!: any;
  @Input() idInput!: string;
  @Input() placeholderInput!: string;
  flag: boolean = true;
  @Input() element: string = 'input';
}

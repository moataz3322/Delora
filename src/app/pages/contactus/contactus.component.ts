import { Component } from '@angular/core';
import { ContactMeComponent } from '../../shared/components/contact-me/contact-me.component';

@Component({
  selector: 'app-contactus',
  imports: [ContactMeComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css',
})
export class ContactusComponent {}

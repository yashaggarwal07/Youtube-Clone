import { Component,ViewChild } from '@angular/core';
import { Contact } from './contact';
import { CreateContactComponent } from './create-contact/create-contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

public contacts: any[] = Contact;
}

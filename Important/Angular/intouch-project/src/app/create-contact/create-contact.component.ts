import { Component, OnInit } from '@angular/core';
import { Contact } from './../contact';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
public contacts:any[] =Contact;
  constructor() { }

  ngOnInit(): void {
  }

}

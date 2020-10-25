import { Component, OnInit , Input } from '@angular/core';
import { State } from '@progress/kendo-data-query';
import { NgForm } from '@angular/forms';
import { Contact } from './../contact';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input() public contact: {
    id: number;
    name: string;
    email: string;
    messagesCount: number;
    address:string;
};
public contacts: any[] = Contact;

inputsearch(e){

}
}
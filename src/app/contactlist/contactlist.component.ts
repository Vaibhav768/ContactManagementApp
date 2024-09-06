import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrl: './contactlist.component.css'
})
export class ContactlistComponent implements OnInit {
  constructor(private service:ContactService, private router:Router){}

  contacts:Contact[]=[ ];
  delmsg:string="";

  ngOnInit():void{
    this.getContacts();
  }

  getContacts(){
    this.service.getContacts().subscribe(response=>{
      this.contacts=response;
    });
  }

  editContact(contactId:number){
    this.router.navigate(['/edit',contactId]);
  }

  deleteContact(contactId:number){
    this.service.deleteContactById(contactId).subscribe(response=>{
      this.delmsg=response;
      this.getContacts();
    });
  }
}

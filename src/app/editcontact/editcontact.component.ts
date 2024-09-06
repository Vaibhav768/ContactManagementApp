import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrl: './editcontact.component.css'
})
export class EditcontactComponent {

  contact:Contact = new Contact();
  contactId:number=0;

  constructor(private service:ContactService,
  private router:Router, private activeRouter:ActivatedRoute){}

  ngOnInit():void{
    this.getContact();
  }

  getContact(){
    this.contactId=this.activeRouter.snapshot.params['contactId'];
    console.log('UPDATED ID ::'+this.contactId);
    this.service.getContactById(this.contactId).subscribe(
      data=>{
        console.log('GETTING A CONTACT..');
        console.log(data);
        this.contact=data;
      },
      error=>{
        console.log("SOMETHING WENT WRONG DURING GETTING A CONTACT..");
        console.log(error);
      }
    );
  }

  updateContact(){
    console.log("UPDATED..");
    this.service.createContact(this.contact).subscribe(
      data=>{
        console.log("UPDATING A CONTACT.");
        console.log(data);
        this.router.navigate(['/contacts']);
      },
      error=>{
        console.log("SOMETHING WENT WRONG DURING UPDATING A CONTACT..");
        console.log(error);
      }
    )
  }


}

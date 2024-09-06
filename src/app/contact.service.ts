import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = "http://localhost:8080";
  constructor(private httpclient:HttpClient) { }

  createContact(contact:Contact):Observable<string>{
    return this.httpclient.post(`${this.baseUrl}/create`,contact,{responseType:"text"});
  }

  getContacts():Observable<Contact[]>{
    return this.httpclient.get<Contact[]>(`${this.baseUrl}/contacts`);
  }

  getContactById(contactId:number):Observable<Contact>{
    return this.httpclient.get<Contact>(`${this.baseUrl}/contact/${contactId}`);
  }

  deleteContactById(contactId:number):Observable<string>{
    return this.httpclient.delete(`${this.baseUrl}/delete/${contactId}`,{responseType:"text"});
  }
}

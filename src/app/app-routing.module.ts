import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { ContactlistComponent } from './contactlist/contactlist.component';

const routes: Routes = [
  {path:'',redirectTo: 'contacts', pathMatch:'full'},
  {path:'create-contact', component: CreatecontactComponent},
  {path:'edit/:contactId', component: EditcontactComponent},
  {path:'contacts', component: ContactlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

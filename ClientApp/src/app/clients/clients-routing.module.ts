import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'clients', redirectTo: 'clients/list', pathMatch: 'full' },
  { path: 'clients/list', component: ListComponent },
  { path: 'clients/:clientId/details', component: DetailsComponent },
  { path: 'clients/create', component: CreateComponent },
  { path: 'clients/:clientId/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }

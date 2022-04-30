import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembershipComponent } from './membership.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
//import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Membership'
    },
    children: [
      {
        path: '',
        redirectTo: 'membership'
      },
      {
        path: '',
        component: MembershipComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'add',
        component: AddComponent,
        data: {
          title: 'Add',
          redirectTo: 'membership/add'
        }
      },
      {
        path: 'edit/:id',
        component: EditComponent,
        data: {
          title: ' Edit'
        },
      }
      
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class MembershipRoutingModule { }

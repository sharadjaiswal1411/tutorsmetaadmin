import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectComponent } from './subject.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Subject'
    },
    children: [
      {
        path: '',
        redirectTo: 'subject'
      },
      {
        path: 'subject',
        component: SubjectComponent,
        data: {
          title: 'Subject'
        }
      },
      {
        path: 'add',
        component: AddComponent,
        data: {
          title: 'Add',
          redirectTo: 'subject/add'
        }
      },
      {
        path: 'edit/:id',
        component: EditComponent,
        data: {
          title: ' Edit'
        },
      }
      ,
      {
        path: 'delete/:id',
        component: DeleteComponent,
        data: {
          title: ' Delete'
        }
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule {}

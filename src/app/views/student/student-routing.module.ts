import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
//import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Student'
    },
    children: [
      {
        path: '',
        redirectTo: 'student'
      },
      {
        path: '',
        component: StudentComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'add',
        component: AddComponent,
        data: {
          title: 'Add',
          redirectTo: 'student/add'
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

export class StudentRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherComponent } from './teacher.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
//import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Teacher'
    },
    children: [
      {
        path: '',
        redirectTo: 'teacher'
      },
      {
        path: '',
        component: TeacherComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'add',
        component: AddComponent,
        data: {
          title: 'Add',
         // redirectTo: 'teacher/add'
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
export class TeacherRoutingModule {}

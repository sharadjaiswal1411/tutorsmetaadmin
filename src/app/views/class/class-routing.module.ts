import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassComponent } from './class.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Class'
    },
    children: [
      {
        path: '',
        redirectTo: 'class'
      },
      {
        path: '',
        component: ClassComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'add',
        component: AddComponent,
        data: {
          title: 'Add',
          redirectTo: 'class/add'
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
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule {}

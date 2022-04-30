import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Category'
    },
    children: [
      {
        path: '',
        redirectTo: 'category'
      },
      {
        path: '',
        component: CategoryComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'add',
        component: AddComponent,
        data: {
          title: 'Add',
          redirectTo: 'category/add'
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
export class CategoryRoutingModule {}

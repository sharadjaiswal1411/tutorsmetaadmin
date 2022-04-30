import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcategoryComponent } from './subcategory.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
  //  component: SubcategoryComponent,
    data: {
      title: 'Subcategory'
    },
    children: [
      {
    path: '',
    redirectTo: 'subcategory' 
      },
      {
        path: '',
        component: SubcategoryComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'add',
        component: AddComponent,
        data: {
          title: 'Add',
          redirectTo: 'subcategory/add'
        }
      },
      {
        path: 'edit/:id',
        component: EditComponent,
        data: {
          title: 'Edit'
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
export class SubcategoryRoutingModule {}

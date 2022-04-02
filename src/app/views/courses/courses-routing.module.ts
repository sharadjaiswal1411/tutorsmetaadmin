import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesModule } from './courses.module';
// import { CoursesComponent } from './courses.component';
import { SubjectComponent } from './subject/subject.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { SubsubcategoryComponent } from './subsubcategory/subsubcategory.component';
const routes: Routes = [
  {
    path: '',
    // component: CoursesComponent,

    data: {
      title: 'Courses'
    },
    children: [
      {
        path: '',
        redirectTo: 'base'
      },
      {
        path: 'subject',
        component: SubjectComponent,
        data: {
          title: 'Subject'
        }
      },
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          title: 'Category'
        }
      },
      {
        path: 'subcategory',
        component: SubcategoryComponent,
        data: {
          title: 'Subcategory'
        }
      },
      {
        path: 'subsubcategory',
        component: SubsubcategoryComponent,
        data: {
          title: 'Subsubcategory'
        }
     
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }

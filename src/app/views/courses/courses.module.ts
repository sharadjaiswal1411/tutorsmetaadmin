import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { SubjectComponent } from './subject/subject.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { SubsubcategoryComponent } from './subsubcategory/subsubcategory.component';


@NgModule({
  declarations: [
    SubjectComponent,
    CategoryComponent,
    SubcategoryComponent,
    SubsubcategoryComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }

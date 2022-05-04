import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';

import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student-routing.module';
import { BehaviorSubject, Observable, of, } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { BrowserModule } from '@angular/platform-browser';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
//import { HighlightDirective } from './directives/highlight.directive'; // ->  imported directive
//import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    FormsModule,
  // BrowserModule,
    CommonModule,
    StudentRoutingModule,
    ChartsModule,
    ModalModule,
    BsDropdownModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule
  ],
  declarations: [ StudentComponent, AddComponent, EditComponent ]
})

export class StudentModule { }
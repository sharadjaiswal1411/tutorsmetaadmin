// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { TeacherComponent } from './teacher.component';
import { StudentComponent } from './student.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    TeacherComponent,
    StudentComponent
  ]
})
export class ThemeModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { TeacherComponent } from './teacher.component';
import { StudentComponent } from './student.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: '',
        redirectTo: 'colors'
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Colors'
        }
      },
      {
        path: 'teacher',
        component: TeacherComponent,
        data: {
          title: 'Teacher'
        }
      },
      {
        path: 'student',
        component: StudentComponent,
        data: {
          title: 'Student'
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'User'
        }
     
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}

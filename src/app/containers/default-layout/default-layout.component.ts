import {Component} from '@angular/core';
import { navItems } from '../../_nav';

var token=localStorage.getItem("Token_Daily_Neevesh");
console.log(token);

var headers= { 'Authorization': localStorage.getItem('Token_Daily_Neevesh'), 'username': localStorage.getItem('USER_NAME'), 'image': localStorage.getItem('USER_IMAGE'),  Accept: 'application/json',
'Content-Type': 'application/json' };
console.log(headers['username']);

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

headers=headers['username'];



  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }












}

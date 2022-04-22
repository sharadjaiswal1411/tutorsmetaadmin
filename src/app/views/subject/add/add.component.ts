import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of, } from 'rxjs';
// import { LoggedUserModel } from './logged-user.model';
import { environment } from '../../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addedSubject: addedSubjectModel;
  user:any;
  loading:any;
  alertMessage:any;

  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit(): void {
  }


  addSubjectForm= new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(100)]),
    status: new FormControl('',[Validators.required])
  })

get name(){
  return this.addSubjectForm.get("name")
}

get status(){
  return this.addSubjectForm.get("status")
}

onSubmit(){
  console.warn(this.addSubjectForm.value)
  const data = this.addSubjectForm.value;
  this.loading = true;
 
  // if(data.password!=data.repeatpassword)
  // {
  //   return alert(" Ooh No! Password can't match.");
    
  // }
  this.submit(data.name,data.status)
  
  .subscribe (
    res => {
      // set auth data here with token
      // if signin success then:

      console.log('responce',res);
      if (res.status == true) {
      
  this.router.navigate(['subject']); 
      } else {
       
        this.loading = false;
        this.alertMessage = res.result.message
      }


      
    },
    err => {
      console.log(err.error.result.code)
      console.log(err.error.result.message)

      alert(err.error.result.code + " : "+ err.error.result.message);
      //return alert(err.);
      // if(err.error.result.code==11000){
      //  //return sendCustomError({}, res, err.code, 'Subject already exists.')

      //  this.alertMessage = " subject already exist"
      //  alert( this.alertMessage)
      // }        
      
      this.loading = false;
      this.alertMessage = "Invalid subject name"
    }
  );
  
}





submit(name:string,status:string): Observable<any> {

    this.setSubject();
    return this.http.post<any>(environment.API_URL+'subject',{name:name,status:status});
}



setSubject(name: string = 'Alex',status: string = 'ACTIVE') {
  // this sets a default user for the template
  this.addedSubject = new addedSubjectModel();
  this.addedSubject.name = name;
  this.addedSubject.status = status;
  this.user = localStorage.getItem('USER_NAME');
}



  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

}
export class addedSubjectModel {
  name: string
  status:string
}

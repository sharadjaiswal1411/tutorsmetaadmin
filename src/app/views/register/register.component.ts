import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators,FormBuilder, MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
//import { MatDialog } from '@angular/material/dialog';
//import { AlertTemplateComponent } from '../../shared/alert-template/alert-template.component';
//import { AuthenticationService } from '../authentication.service';
//import { FormGroup, FormCo } from '@angular/forms';
import { BehaviorSubject, Observable, of, } from 'rxjs';
// import { LoggedUserModel } from './logged-user.model';
import { environment } from '../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';

import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styles: ['h1 { color:blue; } input.ng-invalid{border-left:0px solid red} input.ng-valid{border-left:0px solid grey} .error{color:red}']
})
export class RegisterComponent {

   
  loggedUser: LoggedUserModel;
  user:any;  
  loading:any;
  alertMessage:any;
  registerForm = new FormGroup({
    
    name: new FormControl(''),
    email: new FormControl(''),
    phoneCode: new FormControl(''),
    mobileNumber: new FormControl(''),
    role: new FormControl(''),
    password: new FormControl(''),
    repeatpassword: new FormControl('')
    
  })
  

  constructor(fb: FormBuilder,private http: HttpClient, public router: Router,public dialog: MatDialog)
  {
    
      this.registerForm = fb.group({
        name: ["", Validators.required],
          email: ["", Validators.required
          ,Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)
        ],
        phoneCode: ["", Validators.required],
        mobileNumber: ["", Validators.required],
        role: ["", Validators.required],
        password: ["", Validators.required],
        repeatpassword: ["", Validators.required]
      });
      //public router: Router
  }

  get name(){
    return this.registerForm.get('name')
  }

  get email(){
    return this.registerForm.get('email')
  }

  get phoneCode(){
    return this.registerForm.get('phoneCode')
  }

  get mobileNumber(){
    return this.registerForm.get('mobileNumber')
  }

  get role(){
    return this.registerForm.get('role')
  }

  
  get password(){
    return this.registerForm.get('password')
  }

  get repeatpassword(){
    return this.registerForm.get('repeatpassword')
  }
  onRegister(){
    console.log("regiiiii");
    const data = this.registerForm.value;
    console.log(this.registerForm.value);
    this.loading = true;
    //this.signin(data.email, data.password)
    

    if(data.password!=data.repeatpassword)
    {
      return alert(" Ooh No! Password can't match.");
      
    }
    this.register(data.name,data.email, data.phoneCode,data.mobileNumber,data.role,data.password)
    
  
    .subscribe (
      res => {
        // set auth data here with token
        // if signin success then:
  
        console.log('responce',res);
        if (res.status == true) {
          
          console.log('responce',res);
          if(res.result.data.roleId.name=="ADMIN"){
           
            localStorage.setItem("Token_Daily_Neevesh", res.result.data.accessToken)
            localStorage.setItem("USER_Id", res.result.data._id)
            localStorage.setItem("USER_TYPE", res.result.data.roleId.name)
            localStorage.setItem("USER_NAME", res.result.data.name)
            localStorage.setItem("USER_IMAGE", res.result.data.image)
            localStorage.setItem("loggedIn", "true")
            window.location.href = 'http://localhost:4200/#/dashboard';
            this.setUser(res.result.data.name,res.result.data.name,res.result.data.image,res.result.data.email)
                this.router.navigate(['dashboards']);
                  
  
  
          // setTimeout(window.location.href = 'http://localhost:4200/#/dashboard', 5000);
        }
          if(res.result.data.roleId.name=="TEACHERS"){
            localStorage.setItem("Token_Daily_Neevesh", res.result.data.accessToken)
            localStorage.setItem("USER_Id", res.result.data._id)
            localStorage.setItem("USER_TYPE", res.result.data.roleId.name)
            localStorage.setItem("USER_NAME", res.result.data.name)
            localStorage.setItem("mobile_verified", res.result.data.mobile_verified)
            localStorage.setItem("USER_IMAGE", res.result.data.image)
            localStorage.setItem("loggedIn", "true")
  
                  this.router.navigate(['dashboards/ecommerce']);
                  console.log('responce',res);
          }
          if(res.result.data.roleId.name=="STUDENT"){
            
            // this.dialog.open(AlertTemplateComponent, {
            //   data: {
            //     iconType: 'error',000000
            //     title: "Invalid email or password",
            //     button: 'Ok'
            //   },
            //   autoFocus: false
            // });
          }
  
          this.setUser(res.result.data.name,res.result.data.name,res.result.data.image,res.result.data.email)
          
  
        } else {
         
          this.loading = false;
          // this.dialog.open(AlertTemplateComponent, {
          //   data: {
          //     iconType: 'error',
          //     title: res.result.message,
          //     button: 'Ok'
          //   },
          //   autoFocus: false
          // });
          this.alertMessage = res.result.message
        }
  
  
        
      },
      err => {
        // this.dialog.open(AlertTemplateComponent, {
        //   data: {
        //     iconType: 'error',
        //     title: 'Invalid User Email Or Password',
        //     button: 'Ok'
        //   },
        //   autoFocus: false
        // });
        this.loading = false;
        this.alertMessage = "Invalid User Email Or Password"
  
  
        // else if signin fails
        // show error
  
  
  
      }
    );
  }

  
 onSignin(){
  const data = this.registerForm.value;
  console.log(this.registerForm.value);
  this.loading = true;
  this.signin(data.email, data.password)


  .subscribe (
    res => {
      // set auth data here with token
      // if signin success then:

      console.log('responce',res);
      if (res.status == true) {
        
        console.log('responce',res);
        if(res.result.data.roleId.name=="ADMIN"){
         
          localStorage.setItem("Token_Daily_Neevesh", res.result.data.accessToken)
          localStorage.setItem("USER_Id", res.result.data._id)
          localStorage.setItem("USER_TYPE", res.result.data.roleId.name)
          localStorage.setItem("USER_NAME", res.result.data.name)
          localStorage.setItem("USER_IMAGE", res.result.data.image)
          localStorage.setItem("loggedIn", "true")
          window.location.href = 'http://localhost:4200/#/dashboard';
          this.setUser(res.result.data.name,res.result.data.name,res.result.data.image,res.result.data.email)
              this.router.navigate(['dashboards']);
                


        // setTimeout(window.location.href = 'http://localhost:4200/#/dashboard', 5000);
      }
        if(res.result.data.roleId.name=="ADVISOR"){
          localStorage.setItem("Token_Daily_Neevesh", res.result.data.accessToken)
          localStorage.setItem("USER_Id", res.result.data._id)
          localStorage.setItem("USER_TYPE", res.result.data.roleId.name)
          localStorage.setItem("USER_NAME", res.result.data.name)
          localStorage.setItem("mobile_verified", res.result.data.mobile_verified)
          localStorage.setItem("USER_IMAGE", res.result.data.image)
          localStorage.setItem("loggedIn", "true")

                this.router.navigate(['dashboards/ecommerce']);
                console.log('responce',res);
        }
        if(res.result.data.roleId.name=="USER"){
          
          // this.dialog.open(AlertTemplateComponent, {
          //   data: {
          //     iconType: 'error',000000
          //     title: "Invalid email or password",
          //     button: 'Ok'
          //   },
          //   autoFocus: false
          // });
        }

        this.setUser(res.result.data.name,res.result.data.name,res.result.data.image,res.result.data.email)
        

      } else {
       
        this.loading = false;
        // this.dialog.open(AlertTemplateComponent, {
        //   data: {
        //     iconType: 'error',
        //     title: res.result.message,
        //     button: 'Ok'
        //   },
        //   autoFocus: false
        // });
        this.alertMessage = res.result.message
      }


      
    },
    err => {
      // this.dialog.open(AlertTemplateComponent, {
      //   data: {
      //     iconType: 'error',
      //     title: 'Invalid User Email Or Password',
      //     button: 'Ok'
      //   },
      //   autoFocus: false
      // });
      this.loading = false;
      this.alertMessage = "Invalid User Email Or Password"


      // else if signin fails
      // show error



    }
  );
}


register(name:string,email: string,phoneCode:string,mobileNumber:string, role:string,password: string): Observable<any> {



    // get role id
    
  
      this.setUser();
  
    
      let deviceType:any,deviceToken:any;
      deviceType="125";
      deviceToken="1285567890";
      // role_id=this.http.get<any>(environment.API_URL+'role/getroleid/'+role);
      // //return this.http.get<any>(environment.API_URL+'auth/test');
    
      // console.log("hiii",name,role_id);
      // console.log(this.http.get<any>(environment.API_URL+'role/getroleid/'+role))
    // display string message

     return this.http.post<any>(environment.API_URL+'auth/register',{name:name,email:email,phoneCode:phoneCode,mobileNumber:mobileNumber,roleId:role,password:password,deviceType:deviceType,deviceToken:deviceToken});

 
  // your log in logic should go here
 // this.loggedUserSubject.next(this.loggedUser);
 // return of(true);
    
}
 
 signin(email: string, password: string): Observable<any> {
  this.setUser();
  
 return this.http.post<any>(environment.API_URL+'auth/login',{email:email,password:password});

 
  // your log in logic should go here
 // this.loggedUserSubject.next(this.loggedUser);
 // return of(true);
}
setUser(name: string = 'Alex', lastname: string = 'Martins', image: string = '/assets/imgs/users/user-8.jpeg', email: string = 'alex.martins@example.com',phoneCode:string="",mobileNumber:string="", role:string="",password: string="",repeatpassword:string="") {
  // this sets a default user for the template
  this.loggedUser = new LoggedUserModel();
  this.loggedUser.name = name;
  this.loggedUser.lastname = lastname;
  this.loggedUser.image = image;
  this.loggedUser.email = email;
  this.loggedUser.phoneCode = phoneCode;
  this.loggedUser.mobileNumber = mobileNumber;
  this.loggedUser.role =role;
  this.user = localStorage.getItem('USER_NAME');
}

}
 

export class LoggedUserModel {
  image: string;
  name: string;
  lastname: string;
  email: string;
  password:string;
  phoneCode:string;
  mobileNumber:string;
  role:string
}

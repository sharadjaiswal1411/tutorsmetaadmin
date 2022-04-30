import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of, } from 'rxjs';
// import { LoggedUserModel } from './logged-user.model';
import { environment } from '../../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{ ClassService} from '../class.service' 


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
  subjectData:any=[];
  subjectData2:any=[];

  constructor(private http: HttpClient, public router: Router,private classService:ClassService) { }

  ngOnInit(): void {
    this.getdata();
    this.getdata2();
  }


  addSubjectForm= new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(100)]),
    status: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    subcategory: new FormControl('',[Validators.required])


  })

get name(){
  return this.addSubjectForm.get("name")
}

get status(){
  return this.addSubjectForm.get("status")
}


get category(){
  return this.addSubjectForm.get("category")
}

get subcategory(){
  return this.addSubjectForm.get("subcategory")
}

getdata(){
this.classService.getCategoryData().subscribe(data=>{
    console.log("dataaaaaa",data.result.data.results);
    this.subjectData=data.result.data.results;
   });
}

getdata2(){
  this.classService.getSubCategoryData().subscribe(data=>{
      console.log("dataaaaaa",data.result.data.results);
      this.subjectData2=data.result.data.results;
     });
  }

onSubmit(){
  console.warn(this.addSubjectForm.value)
  const data = this.addSubjectForm.value;
  this.loading = true;
 
  // if(data.password!=data.repeatpassword)
  // {
  //   return alert(" Ooh No! Password can't match.");
    
  // }
  this.submit(data.name,data.status,data.category,data.subcategory)
  
  .subscribe (
    res => {
      // set auth data here with token
      // if signin success then:

      console.log('responce',res);
      if (res.status == true) {
      
  this.router.navigate(['class']); 
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





submit(name:string,status:string,category:string,subcategory:string): Observable<any> {
  var headers= { 'Authorization': localStorage.getItem('Token_Daily_Neevesh'),  Accept: 'application/json',
  'Content-Type': 'application/json' };
  //console.log(headers);
  
  
    this.setSubject();
    return this.http.post<any>(environment.API_URL+'class',{name:name,status:status,subcategoryId:subcategory},{headers});
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

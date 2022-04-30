import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of, } from 'rxjs';
// import { LoggedUserModel } from './logged-user.model';
import { environment } from '../../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { Router ,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{ SubcategoryService} from '../subcategory.service' ;



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editedSubject: editedSubjectModel;
  user:any;
  loading:any;
  alertMessage:any;
  subjectData:any=[];
  subjectData1:any=[];
  subjectData2:any=[];


  constructor(private http: HttpClient, public router: Router,private activerouter:ActivatedRoute,private classService:SubcategoryService) { }

  ngOnInit(): void {
    this.getdata();
//    this.getdata2();
    let subjectdata=this.classService.getCurrentData(this.activerouter.
      snapshot.params.id).subscribe(data=>{
      console.log(data.result.data.subcategoryDetails);
      this.subjectData=data.result.data.subcategoryDetails;
 //var subcategoryId=data.result.data.classDetails.subcategoryId._id;
 var categoryId=data.result.data.subcategoryDetails.categoryId;

      this.  editSubjectForm= new FormGroup({
       
        name: new FormControl(this.subjectData['name'],[Validators.required,Validators.minLength(1),Validators.maxLength(100)]),
        status: new FormControl(this.subjectData['status'],[Validators.required]),
        //subcategory: new FormControl(subcategoryId,[Validators.required]),

        category: new FormControl(categoryId,[Validators.required]),

      })

    });
    
  }


  getdata(){
    this.classService.getCategoryData().subscribe(data=>{
        console.log("dataaaaaa",data.result.data.results);
        this.subjectData1=data.result.data.results;
       });
    }
    
    getdata2(){
      this.classService.getSubCategoryData().subscribe(data=>{
          console.log("dataaaaaa",data.result.data.results);
          this.subjectData2=data.result.data.results;
         });
      }
    

  editSubjectForm= new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(100)]),
    status: new FormControl('',[Validators.required]),
   // subcategory: new FormControl("",[Validators.required]),

    category: new FormControl("",[Validators.required])
  
  })

get name(){
  return this.editSubjectForm.get("name")
}

get status(){
  return this.editSubjectForm.get("status")
}
get category(){
  return this.editSubjectForm.get("category")
}

// get subcategory(){
//   return this.editSubjectForm.get("subcategory")
// }

onSubmit(){
  console.warn(this.editSubjectForm.value)
  const data = this.editSubjectForm.value;
  this.loading = true;
 
  // if(data.password!=data.repeatpassword)
  // {
  //   return alert(" Ooh No! Password can't match.");
    
  // }
  this.submit(data.name,data.status,data.category)
  
  .subscribe (
    res => {
      // set auth data here with token
      // if signin success then:

      console.log('responce',res);
      if (res.status == true) {
      
  this.router.navigate(['subcategory']); 
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





submit(name:string,status:string,category:string): Observable<any> {
  var headers= { 'Authorization': localStorage.getItem('Token_Daily_Neevesh'),  Accept: 'application/json',
  'Content-Type': 'application/json' };
  //console.log(headers);
  
  
    this.setSubject();
    return this.http.put<any>(environment.API_URL+'subcategory/'+this.activerouter.snapshot.params.id,{name:name,status:status,categoryId:category},{headers});
}



setSubject(name: string = 'Alex',status: string = 'ACTIVE') {
  // this sets a default user for the template
 // this.editedSubject = new addedSubjectModel();
  //this.addedSubject.name = name;
  //this.addedSubject.status = status;
  this.user = localStorage.getItem('USER_NAME');
}
// export class addedSubjectModel {
//   name: string
//   status:string
// }


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
export class editedSubjectModel {
  name: string
  status: string
  category: string
  subcategory: string
}

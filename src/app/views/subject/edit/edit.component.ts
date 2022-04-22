import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of, } from 'rxjs';
// import { LoggedUserModel } from './logged-user.model';
import { environment } from '../../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { Router ,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{ SubjectdataService} from '../subjectdata.service' 



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

  constructor(private http: HttpClient, public router: Router,private activerouter:ActivatedRoute,private subjectdataService:SubjectdataService) { }

  ngOnInit(): void {
    let subjectdata=this.subjectdataService.getCurrentData(this.activerouter.snapshot.params.id).subscribe(data=>{
      console.log(data.result.data);
      this.subjectData=data.result.data;

      this.  editSubjectForm= new FormGroup({
       
        name: new FormControl(this.subjectData['name'],[Validators.required,Validators.minLength(1),Validators.maxLength(100)]),
        status: new FormControl(this.subjectData['status'],[Validators.required])

      })

    });
    
  }




  editSubjectForm= new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(100)]),
    status: new FormControl('',[Validators.required])
  
  })

get name(){
  return this.editSubjectForm.get("name")
}

get status(){
  return this.editSubjectForm.get("status")
}
onSubmit(){


  this.subjectdataService.updateCurrentData(this.activerouter.snapshot.params.id,this.editSubjectForm.value).subscribe(
  // ((result)=>{
  //   console.log(result,"data updated sucessfully")
  // })


  // console.warn(this.editSubjectForm.value)
  // const data = this.editSubjectForm.value;

 
  // // if(data.password!=data.repeatpassword)
  // // {
  // //   return alert(" Ooh No! Password can't match.");
    
  // // }
  // this.submit(data.name)
  
  // .subscribe (
    res => {
      // set auth data here with token
      // if signin success then:
      this.loading = true;
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





// submit(name:string): Observable<any> {

//     this.setSubject();
//     return this.http.post<any>(environment.API_URL+'subject',{name:name});
// }



// setSubject(name: string = 'Alex') {
//   // this sets a default user for the template
//   this.editedSubject = new editedSubjectModel();
//   this.editedSubject.name = name;
 
//   this.user = localStorage.getItem('USER_NAME');
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
}

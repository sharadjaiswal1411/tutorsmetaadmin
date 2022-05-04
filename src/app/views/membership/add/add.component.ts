import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { FormControl,FormGroup,Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of, } from 'rxjs';
// import { LoggedUserModel } from './logged-user.model';
import { environment } from '../../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{ MembershipService} from '../membership.service' 



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  // addedSubject: addedSubjectModel;
  user:any;
  loading:any;
  alertMessage:any;

  constructor(private http: HttpClient, public router: Router,private commonService:MembershipService) { }

  ngOnInit(): void {
  }


  addSubjectForm= new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(100)]),
    status: new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
  //   image:new FormControl('',[Validators.required]),
    metaDescription:new FormControl('',[Validators.required]),
    metaTitle:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required])
  })

get name(){
  return this.addSubjectForm.get("name")
}

get status(){
  return this.addSubjectForm.get("status")
}

get description(){
  return this.addSubjectForm.get("description")
}

// get image(){
//   return this.addSubjectForm.get("image")
// }

get metaDescription(){
  return this.addSubjectForm.get("metaDescription")
}

get price(){
  return this.addSubjectForm.get("price")
}

get metaTitle(){
  return this.addSubjectForm.get("metaTitle")
}

onSubmit(){
  
  console.warn(this.addSubjectForm.value)
  const data = this.addSubjectForm.value;
  this.loading = true;
 
  // if(data.password!=data.repeatpassword)
  // {
  //   return alert(" Ooh No! Password can't match.");
    
  // }
  this.commonService.submit(data.name,data.status,data.description,this.imagee,data.metaDescription,data.metaTitle,data.price)
  
  .subscribe (
    res => {
      // set auth data here with token
      // if signin success then:

      console.log('responce',res);
      if (res.status == true) {
      
  this.router.navigate(['membership']); 
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



files:File[]=[]
category:any;
dialog:any
imagee:any

imageSrc:any;
uploadedImageName:any;
onSelect(event) {
  this.files=[]
    this.files.push(...event.addedFiles);
    if (this.files.length > 0) {
      const file:File =  event.addedFiles[0];  
      if (file) {
        const formData = new FormData();
        formData.append("filename", file);
       this.commonService.uploadImage(formData).subscribe(
        (fileResponse)=>{
      
        if(fileResponse.success==true){
        this.uploadedImageName =fileResponse.filename;
        if (this.files && this.files[0]) {
          const file = this.files[0];
          const reader = new FileReader();
          reader.onload = e => this.imageSrc = reader.result;
          reader.readAsDataURL(file);
          this.imagee=event.addedFiles[0].lastModified+"-"+event.addedFiles[0].name

          console.log(this.imageSrc, this.files,event.addedFiles[0].name,this.imagee)
          this.imagee=event.addedFiles[0].lastModified+"-"+event.addedFiles[0].name
        }
      //    this.files=[]
        }else
        {
     
        // this.dialog.open(AlertTemplateComponent, {
        //   data: {
        //     iconType: 'error',
        //     title: 'Error',
        //     text: 'Error in uploading image,Please upload valid image format',
          
        //   },
        //   autoFocus: false
        // });
     
    Swal.fire({
      title: 'Error',
      text: 'Error in uploading image,Please upload valid image format',
      icon: 'error',
  }).then((result) => {
    // Reload the Page
    //location.reload();
  });
        }
      
        }); 
      }
      }
    
 
}
onRemove(event) {
console.log(event);
this.files.splice(this.files.indexOf(event), 1);
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


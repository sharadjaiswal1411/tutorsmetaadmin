import { Component,NgModule,ViewChild, OnInit ,Input, ViewEncapsulation} from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { BehaviorSubject, Observable, of, } from 'rxjs';
// import { LoggedUserModel } from './logged-user.model';
import { environment } from '../../../environments/environment';
import{ SubjectdataService} from './subjectdata.service' 
import { Router ,ActivatedRoute} from '@angular/router';
import {
  FormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';


class Signup {
  constructor(public firstName: string = '') {
  }
}


export class Subject {
search_text=""
  constructor(
    public _id:string,
    public name:string
    ){
  }
}



@Component({
  templateUrl: 'subject.component.html',
  styles: ['.pager li.btn:active { box-shadow: none; }'],
  encapsulation: ViewEncapsulation.None
})
export class SubjectComponent implements OnInit {
  public subjects:Subject[];
  subjectData:any=[];
  public colors=["red", "blue"]
  search_text="";
meta:any=[];
totalItems: number ;
totalPage:any;
totalrecord:any;
per_page:number =20;          //totalLength
  current_page:number=1;    //page
  name:string="";
email:string="";
status="";

  constructor(private httpClient:HttpClient, public router: Router,private activerouter:ActivatedRoute,private subjectdataService:SubjectdataService){


  }


getdata(){
if(this.search_text)
this.current_page=1;
this.subjectdataService.getSubjectData(this.current_page,this.per_page,this.search_text,this.status).subscribe(data=>{
    console.log("dataaaaaa",data.result.data.results);
    this.subjectData=data.result.data.results;
   this.meta = data.result.data.meta;
    this.per_page=data.result.data.results.total_records;
  console.log(this.meta);

   this.totalPage=data.result.data.meta.total_pages;
   
   this.totalrecord=data.result.data.meta.total_records;
 // console.log(this.totalPage);
  });
}



  ngOnInit(): void {
    //this.subjectData=this.getSubject();
    this.getdata()
  }

  

//   this.subjectdataService.getSubjectDataStatus(this.current_page,this.per_page,this.search_text,this.status)
//.subscribe(data=>{
//     console.log("dataaaaaa",data.result.data.results);
//     this.subjectData=data.result.data.results;
//    this.meta = data.result.data.meta;
//     this.per_page=data.result.data.results.total_records;
//   console.log(this.meta);

//    this.totalPage=data.result.data.meta.total_pages;
   
//    this.totalrecord=data.result.data.meta.total_records;
//  // console.log(this.totalPage);
//   });




search(per_page=20){
  this.per_page=per_page;
  this.getdata()  
}
statuss(s,per_page=20){
  this.per_page=per_page;
  this.status=s;
  this.getdata()  
}

previous(){
  if(this.current_page>1){  
   this.current_page= this.current_page-1;
  console.log(this.current_page);
   
   this.getdata();
 
  }
 }
 
 next(){
   if(this.current_page< this.totalPage){  
   this.current_page= this.current_page+1;
  console.log(this.current_page);
   
   this.getdata();
  }
 }
 

 changePage(page:number){
  this.current_page=page;
  this.per_page=20;
  console.log(this.current_page);
  this.getdata()
 }






// getSubject(){
  //   this.httpClient.get<any>(environment.API_URL+'subject').subscribe(
  //     data=>{
  //       this.subjects=data;
  //       console.log(this.subjects);
  //       return data;
  //     }
  //   );
  // }

  delete(id){
//console.log(id);
    this.subjectdataService.deleteSubjectData(id).subscribe(data=>{
      //console.log(data.result.data);
      //this.subjectData=data.result.data;

     // window.location.reload();
    });

    Swal.fire({
      title: 'Done',
      text: 'Deleted successfully',
      icon: 'success',
  }).then((result) => {
    // Reload the Page
    location.reload();
  });

  }
  
  // model: Signup = new Signup();
  // @ViewChild('f') form: any;

  // langs: string[] = [
  //   'English',
  //   'French',
  //   'German',
  // ];

  // onSubmit() {
  //   if (this.form.valid) {
  //     console.log("Form Submitted!");
  //     this.form.reset();
  //     let subjectdata=this.subjectdataService.viewSubjectData(this.form.firstName.value).subscribe(data=>{
  //       console.log(data.result.data.results);
  //       this.subjectData=data.result.data.results;
  //     });

  //   }
  // }


  // currentPage: number   = 4;
  // smallnumPages: number = 0;

  // maxSize: number = 5;
  // bigTotalItems: number = 675;
  // bigCurrentPage: number = 1;
  // numPages: number = 0;

  // currentPager: number   = 4;




  // setPage(pageNo: number): void {
  //   this.currentPage = pageNo;
  // }

  // pageChanged(event: any): void {
  //   console.log('Page changed to: ' + event.page);
  //   console.log('Number items per page: ' + event.itemsPerPage);
  // }

}

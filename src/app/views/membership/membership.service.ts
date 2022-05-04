import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';

var token=localStorage.getItem("Token_Daily_Neevesh");
console.log(token);

var headers= { 'Authorization': localStorage.getItem('Token_Daily_Neevesh'),  Accept: 'application/json',
'Content-Type': 'application/json' };
console.log(headers);

@Injectable({
  providedIn: 'root'
})



export class MembershipService {
  addedSubject: addedSubjectModel;
  user:any;

  constructor(private http:HttpClient) { }

  getSubjectData(current_page,per_page,search_text,status,subcategory,category){
  
if(search_text && !(status)&&!(category)&&!(subcategory))
{
  return this.http.get<any>(environment.API_URL+'membership'+'/?search_text='+search_text,{headers});
}
 
if(status && !(search_text)&&!(category)&&!(subcategory))
{
  return this.http.get<any>(environment.API_URL+'membership'+'/?status='+status,{headers});
}

if(subcategory &&(!status) && !(search_text)&&!(category))
{
  return this.http.get<any>(environment.API_URL+'membership'+'/?subcategory='+subcategory,{headers});
}

if(category &&(!status) && !(search_text)&&!(subcategory))
{
  return this.http.get<any>(environment.API_URL+'membership'+'/?category='+category,{headers});
}
headers= { 'Authorization': localStorage.getItem('Token_Daily_Neevesh'),  Accept: 'application/json',
'Content-Type': 'application/json' };
//console.log(headers);



return this.http.get<any>(environment.API_URL+'membership'+'/?current_page='+current_page+'/?per_page='+per_page+'/?search_text='+search_text+'/?status'+status,{headers});

  }


  getCategoryData(){
  
   
    headers= { 'Authorization': localStorage.getItem('Token_Daily_Neevesh'),  Accept: 'application/json',
    'Content-Type': 'application/json' };
    //console.log(headers);
    
    
    
    return this.http.get<any>(environment.API_URL+'category',{headers});
    
      }


      getSubCategoryData(){
  
   
        headers= { 'Authorization': localStorage.getItem('Token_Daily_Neevesh'),  Accept: 'application/json',
        'Content-Type': 'application/json' };
        //console.log(headers);
        
        
        
        return this.http.get<any>(environment.API_URL+'subcategory',{headers});
        
          }

  getSubjectDataStatus(current_page,per_page,search_text,status){
console.log("stats");
//     //  if(status){
// //   return this.http.get<any>(environment.API_URL+'subject'+'/search/?status='+status);
//  }

//     if(search_text)
//     {
//       return this.http.get<any>(environment.API_URL+'subject'+'/?search_text='+search_text);
//     }
//         return this.http.get<any>(environment.API_URL+'subject'+'/?current_page='+current_page+'/?per_page='+per_page+'/?search_text='+search_text);
    
      }
  viewSubjectData(id){

    return this.http.get<any>(environment.API_URL+'membership/?search_text='+id,{headers});
  }

  deleteSubjectData(id){

    return this.http.delete<any>(environment.API_URL+'membership/'+id,{headers});
  }

  getCurrentData(id){
    return this.http.get<any>(environment.API_URL+'membership/'+id,{headers});
  }

  updateCurrentData(id,data){
    return this.http.put<any>(environment.API_URL+'membership/'+id,data,{headers});
  }
imagedata:any
  uploadImage(data){
    this.imagedata=data;  

    return this.http.post<any>(environment.API_URL+'file/upload',data)
  //  ? return this.http.put<any>(environment.API_URL+'file/upload/'+data,{headers});
  }

  submit(name:string,status:string,description:string
    ,image:string
    ,metaDescription:string
    ,metaTitle:string
    ,price:string) {
  
      this.setSubject();
      console.log(this.imagedata)
      return this.http.post<any>(environment.API_URL+'membership/',{name:name,status:status,description:description,
        image:image,
        metaDescription:metaDescription,
        metaTitle:metaTitle,
        price:price},{headers});
  }
  

  
setSubject(name: string = 'Alex',status: string = 'ACTIVE') {
  // this sets a default user for the template
  this.addedSubject = new addedSubjectModel();
  this.addedSubject.name = name;
  this.addedSubject.status = status;
  this.user = localStorage.getItem('USER_NAME');
}


  // uploadImage(formData:any): Observable<any> {
  //   return this.http.post<any>(environment.API_URL+'file/upload',formData)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     );
  // }

}
export class addedSubjectModel {
  name: string
  status:string
  description:string
  image:string
  metaDescription:string
  metaTitle:string
  price:string
}

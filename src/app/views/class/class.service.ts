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



export class ClassService {

  constructor(private http:HttpClient) { }

  getSubjectData(current_page,per_page,search_text,status,subcategory,category){
  
if(search_text && !(status)&&!(category)&&!(subcategory))
{
  return this.http.get<any>(environment.API_URL+'class'+'/?search_text='+search_text,{headers});
}
 
if(status && !(search_text)&&!(category)&&!(subcategory))
{
  return this.http.get<any>(environment.API_URL+'class'+'/?status='+status,{headers});
}

if(subcategory &&(!status) && !(search_text)&&!(category))
{
  return this.http.get<any>(environment.API_URL+'class'+'/?subcategory='+subcategory,{headers});
}

if(category &&(!status) && !(search_text)&&!(subcategory))
{
  return this.http.get<any>(environment.API_URL+'class'+'/?category='+category,{headers});
}
headers= { 'Authorization': localStorage.getItem('Token_Daily_Neevesh'),  Accept: 'application/json',
'Content-Type': 'application/json' };
//console.log(headers);



return this.http.get<any>(environment.API_URL+'class'+'/?current_page='+current_page+'/?per_page='+per_page+'/?search_text='+search_text+'/?status'+status,{headers});

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

    return this.http.get<any>(environment.API_URL+'class/?search_text='+id,{headers});
  }

  deleteSubjectData(id){

    return this.http.delete<any>(environment.API_URL+'class/'+id,{headers});
  }

  getCurrentData(id){
    return this.http.get<any>(environment.API_URL+'class/'+id,{headers});
  }

  updateCurrentData(id,data){
    return this.http.put<any>(environment.API_URL+'class/'+id,data,{headers});
  }
}

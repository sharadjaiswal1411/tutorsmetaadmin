import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SubjectdataService {

  constructor(private http:HttpClient) { }

  getSubjectData(current_page,per_page,search_text,status){
  
if(search_text)
{
  return this.http.get<any>(environment.API_URL+'subject'+'/?search_text='+search_text);
}
 
if(status)
{
  return this.http.get<any>(environment.API_URL+'subject'+'/?status='+status);
}


return this.http.get<any>(environment.API_URL+'subject'+'/?current_page='+current_page+'/?per_page='+per_page+'/?search_text='+search_text);

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

    return this.http.get<any>(environment.API_URL+'subject/?search_text='+id);
  }

  deleteSubjectData(id){

    return this.http.delete<any>(environment.API_URL+'subject/'+id);
  }

  getCurrentData(id){
    return this.http.get<any>(environment.API_URL+'subject/'+id);
  }

  updateCurrentData(id,data){
    return this.http.put<any>(environment.API_URL+'subject/'+id,data);
  }
}

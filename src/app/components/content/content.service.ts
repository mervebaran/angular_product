import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommentRev } from './content.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  url = environment.apiUrl;
  constructor(public http:HttpClient) { console.log(environment.apiUrl);
   }

   createBlock(comment: CommentRev): Observable<CommentRev>{
    const httpOptions = {
        headers: new HttpHeaders ({
            'Content-Type': 'application/json',
            'Authorization' : 'Token'
        })
    }
   return this.http.post<CommentRev>(this.url,comment,httpOptions);
}
   
}

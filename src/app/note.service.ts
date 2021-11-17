import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  add_service(dump: any){
    return this.http.post("http://localhost:3001/create-note",dump);

  }
  view_service(){
    return this.http.get("http://localhost:3001/view-notes");

  }

  search_service(id:any){
    return this.http.get ("http://localhost:3001/search/" +id);
  }

  edit_note(id:any){
    return this.http.put ("http://localhost:3001/edit/?note_id=",id);
    
  }

  delete_note(id:any){
    return this.http.delete ("http://localhost:3001/delete/" ,id);
  }
}

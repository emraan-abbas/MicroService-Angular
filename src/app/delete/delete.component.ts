import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { NoteService } from '../note.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  notes : object | any;
  deleteNote = new FormGroup({
    id: new FormControl('')
  })

  constructor(private router:Router, private noteService: NoteService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  
  delete(){
    this.noteService.delete_note(this.deleteNote.value.id).subscribe(res =>{
      this.notes = this.deleteNote
      this.toastr.warning('Note Deleted Successfully !', 'Attention !');
    } , err =>{
      console.log("Error at Deleting Note !")
    })
  }

}

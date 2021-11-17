import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { NoteService } from '../note.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  notes : object | any;
  editNote = new FormGroup({
    id:new FormControl('')
  })

  constructor(private router:Router, private noteService: NoteService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  edit(){
    this.noteService.edit_note(this.editNote.value.id).subscribe(res =>{
      this.notes = this.editNote;
      this.toastr.success('Note Updated Successfully !', 'Attention !');
    } , err =>{ 
      console.log("Error at Editing Note !")
    })
  }
}

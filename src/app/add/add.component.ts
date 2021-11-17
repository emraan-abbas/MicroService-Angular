import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NoteService } from '../note.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  notes : object | any;
  addNote = new FormGroup({
    subject: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl('')
  })

  constructor(private noteService: NoteService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  add(){
    this.noteService.add_service(this.addNote.value).subscribe(res =>{
      this.notes = res;
      console.log(this.notes);
      console.log("Note added Successfully !")
      this.toastr.success('Note Added Successfully !', 'Attention !');
    } , err=>{
      console.log("Error in adding note.")
    })
  };
}

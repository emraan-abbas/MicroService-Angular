import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  
  notes : object | any;

  constructor(private noteService: NoteService, private toastr: ToastrService) {}

  ngOnInit(): void {}
  view() {
    this.noteService.view_service().subscribe(res =>{
      this.notes = res;
      console.log(this.notes);
      this.toastr.success('Here are your Notes !', 'Attention !');
    } , err =>{
      console.log("Error at Retreving All Notes");
    })
  }
}

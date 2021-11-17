import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ControlContainer } from '@angular/forms';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  addNote = new FormGroup({
    id: new FormControl(''),
  });
  notes: any = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {}

  search(a: any) {
    if (this.addNote.value.id)
      this.noteService
        .search_service(this.addNote.value.id)
        .subscribe((data: any) => {
          this.notes.push(data);
          console.log(this.notes);
        });
  }
}

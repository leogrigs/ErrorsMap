import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Entries } from 'src/app/models/entries';
import { Entry } from 'src/app/models/entry-error';
import { ContentStackService } from 'src/app/services/content-stack.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  
  entries$?: Observable<Entries>;

  _entriesAr: Entry[] = [];
  filteredEntries: Entry[] = [];
  _filterBy: string = '';
  
  constructor(private contentStackService: ContentStackService) { 
  }

  ngOnInit(): void {
    this.entries$ =this.contentStackService.getAllEntriesError()
    this.entries$.subscribe(entries => {
      this._entriesAr = entries.entries;
      this.filteredEntries = entries.entries;
    });
  }

  set filter(value: string){
    this._filterBy = value;

    this.filteredEntries = this._entriesAr.filter((entry: Entry) => entry.title.toLowerCase().indexOf(this._filterBy.toLocaleLowerCase())> -1);

  }

  get filter() {
    return this._filterBy;
  }




}

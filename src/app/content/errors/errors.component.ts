import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Entries } from 'src/app/models/entries';
import { Entry } from 'src/app/models/entry';
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
    this.entries$ =this.contentStackService.getAllEntries()
    this.entries$.subscribe(entries => {
      this._entriesAr = entries.entries;
      this.filteredEntries = entries.entries;
    });
  }

  ngOnInit(): void {
  }

  set filter(value: string){
    this._filterBy = value;

    this.filteredEntries = this._entriesAr.filter((entry: Entry) => entry.title.toLowerCase().indexOf(this._filterBy.toLocaleLowerCase())> -1);

  }

  get filter() {
    return this._filterBy;
  }




}

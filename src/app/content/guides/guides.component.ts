import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Entries, EntriesGuide } from 'src/app/models/entries';
import { EntryGuide } from 'src/app/models/entry-guide';
import { ContentStackService } from 'src/app/services/content-stack.service';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {

  entries$?: Observable<EntriesGuide>;

  _entriesAr: EntryGuide[] = [];
  filteredEntries: EntryGuide[] = [];
  _filterBy: string = '';
  
  constructor(private contentStackService: ContentStackService) { 
  }
  
  ngOnInit(): void {
    this.entries$ =this.contentStackService.getAllEntriesGuide();
    this.entries$.subscribe(entries => {
      this._entriesAr = entries.entries;
      this.filteredEntries = entries.entries;
    });
  }

  set filter(value: string){
    this._filterBy = value;

    this.filteredEntries = this._entriesAr.filter((entry: EntryGuide) => entry.title.toLowerCase().indexOf(this._filterBy.toLocaleLowerCase())> -1);

  }

  get filter() {
    return this._filterBy;
  }

}

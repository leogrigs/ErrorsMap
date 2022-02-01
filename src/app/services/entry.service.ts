import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Entries } from '../models/entries';
import { ContentStackService } from './content-stack.service';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private contentStackService: ContentStackService) { }

  private entriesSubject = new Subject<Entries>();

  getEntries(){
    return this.entriesSubject.asObservable();
  }


}

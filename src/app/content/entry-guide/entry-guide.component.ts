import { Component, Input, OnInit } from '@angular/core';
import { EntryGuide } from 'src/app/models/entry-guide';

@Component({
  selector: 'app-entry-guide',
  templateUrl: './entry-guide.component.html',
  styleUrls: ['./entry-guide.component.css']
})
export class EntryGuideComponent implements OnInit {

  @Input() entry?: EntryGuide;
  
  constructor() { }

  ngOnInit(): void {
  }

}

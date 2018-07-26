import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
 journal:any;
  constructor( public JournalService:JournalService, public router:ActivatedRoute) { 
 
    this.JournalService.getEntries()
      .subscribe((journal) => {
        this.journal = journal
      });
    }

  

  ngOnInit() {
  }

}

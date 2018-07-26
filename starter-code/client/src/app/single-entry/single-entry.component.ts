import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { JournalService } from '../services/journal.service';

@Component({
	selector: 'app-single-entry',
	templateUrl: './single-entry.component.html',
	styleUrls: [ './single-entry.component.css' ]
})
export class SingleEntryComponent implements OnInit {
	journal: any;

	constructor(private route: ActivatedRoute, private journalService: JournalService) {}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.getJournalId(params['id']);
		});
	}
	getJournalId(id) {
		this.journalService.get(id).subscribe((journal) => {
			this.journal = journal;
		});
	}
}

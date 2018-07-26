import { Injectable } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class JournalService {
	constructor(public http: Http) {}
	getEntries() {
		return this.http.get(`${environment.BASE_URL}/api/journal-entries`).map((res) => res.json());
	}
	get(id) {
		return this.http.get(`${environment.BASE_URL}/api/journal-entries/${id}`).map((res) => res.json());
	}
}

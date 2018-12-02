import { Component, OnInit } from '@angular/core';
import { Joblist } from '../../store/joblist.store';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  constructor(public jobs:Joblist) { }

  ngOnInit() {
    this.jobs.fetchData();
  }

}

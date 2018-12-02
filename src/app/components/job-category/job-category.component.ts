import { Component, OnInit } from '@angular/core';
import { Category } from '../../store/category.store';

@Component({
  selector: 'app-job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.scss']
})
export class JobCategoryComponent implements OnInit {

  constructor(public store:Category) { }

  ngOnInit() {
  }

}

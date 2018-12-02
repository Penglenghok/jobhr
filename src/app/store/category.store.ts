import { observable, action } from 'mobx-angular';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';

@Injectable()
export class Category {
  @observable public data;

  constructor(private ds:DataService){}

  @action
  fetchData() {
    this.ds.categoryRef().valueChanges().subscribe(docs=>{
      this.data=docs;
    })
  }
}

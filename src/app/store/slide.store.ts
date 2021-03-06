import { observable, action } from 'mobx-angular';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';

@Injectable()
export class Slide {
  @observable public data;

  constructor(private ds:DataService){}

  @action
  fetchData() {
    this.ds.slideRef().valueChanges().subscribe(docs=>{
      this.data=docs;
    })
  }
}

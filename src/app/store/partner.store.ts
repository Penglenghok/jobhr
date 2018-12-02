import { observable, action } from 'mobx-angular';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';

@Injectable()
export class Partner {
  @observable public data;
  constructor(private ds:DataService){}
  @action
  fetchData() {
    this.ds.partnerRef().valueChanges().subscribe(docs=>{
      this.data=docs;
    })
  }
}

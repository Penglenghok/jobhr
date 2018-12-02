import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db:AngularFirestore) { }

  categoryRef(){
    return this.db.collection('category')
  }

  slideRef(){
    return this.db.collection('slides');
  }

  joblistRef(){
    // limit data
    return this.db.collection('joblist',ref=>ref.orderBy('title').limit(4));
  }

  partnerRef(){
    return this.db.collection('partner');
  }

}

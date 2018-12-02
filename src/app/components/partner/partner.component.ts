import { Component, OnInit } from '@angular/core';
import { Partner } from '../../store/partner.store';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  constructor(public partner:Partner) { }

  ngOnInit() {
  }

}

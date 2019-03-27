import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg'

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent implements OnInit {
  kegs: Keg [] = [
    new Keg(1, 'IPA', 1000, 124),
    new Keg(2, 'Corona', 3.5, 124),
    new Keg(3, 'Bud Light', 3.5, 124)
  ]
  constructor() { }

  ngOnInit() {
  }
  editKegs(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  selectedKeg = null;

  levelColor(currentKeg){
    if(currentKeg.level >= 80){
      return "green";
    } else if(currentKeg.level >= 40 && currentKeg.level <= 80){
      return "yellow";
    } else {
      return "red";
    }
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}

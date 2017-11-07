import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  private imgUrl = 'http://placehold.it/400x200';
  private tom = 'tom';
  private json = 'json111';
  private cat = 'cat';
  private disabledjyoutai = false;
  constructor() { }

  ngOnInit() {
  }
  doOnClick(event) {
    console.log(event);
  }
  doOnInput(event) {
    console.log(event.target.value);
    console.log(event.target.getAttribute('value'));
    this.json = event.target.value;
  }
}

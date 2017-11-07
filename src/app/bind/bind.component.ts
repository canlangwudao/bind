import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  search: FormControl = new FormControl();

  private imgUrl = 'http://placehold.it/400x200';
  private tom = 'tom';
  private json = 'json111';
  private cat = 'cat';
  private disabledjyoutai = false;
  constructor() {
    this.search.valueChanges
      .debounceTime(500)
      .subscribe(
        e => this.doSearch(e)
      );
  }

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
  doSearch(value: string) {
    console.log(value);
  }
}

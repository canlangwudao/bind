import { Component } from '@angular/core';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(){
  // let elementGoogle = document.querySelector('[title="クリックすると Google マップでこの地域を表示します"]');
  // let elementRiyou = document.querySelector('[href="http://wijmo.com/products/wijmo-5/eval/        "]');
  // elementRiyou['style'].display = 'none';
  // elementGoogle.attr('tabindex', '-1');
  // elementRiyou.attr('tabindex', '-1');

}

  private value: number = 123;
  change() {
    alert("my WjInputNumber value is " + this.value);
  }
  title = 'app';
}

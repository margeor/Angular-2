/// <reference path="../../accets/lib/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>My first Angular 2 App {{ yupiText }}</h1>'
})
class AppComponent {
  yupiText: string;

  constructor() {
      this.yupiText = ', Yupii  !!!';
  }
}
bootstrap(AppComponent);

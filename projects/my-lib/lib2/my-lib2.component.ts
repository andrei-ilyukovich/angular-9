import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib2',
  template: `
    <p>
      my-lib 222222222222 works!
    </p>
  `,
  styles: []
})
export class MyLibComponent2 implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

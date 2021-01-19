import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class MyComponentComponent implements OnInit {
  @Input()

  user: any;

  constructor() { }

  ngOnInit(): void {
  }

}

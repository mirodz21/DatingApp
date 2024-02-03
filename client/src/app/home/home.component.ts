import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit {
  regMode = false;
  users: any;

  constructor() {}

  ngOnInit(): void {}

  registerToggle() {
    this.regMode = !this.regMode;
  }
  cancelRegMode(event: boolean) {
    this.regMode = event;
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit {
  regMode = false;
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUser();
  }

  registerToggle() {
    this.regMode = !this.regMode;
  }

  getUser() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: (res) => (this.users = res),
      error: (err) => console.log(err),
      complete: () => console.log('Fetch Complete'),
    });
  }

  cancelRegMode(event: boolean) {
    this.regMode = event;
  }
}

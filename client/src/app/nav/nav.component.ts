import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass',
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public accountService: AccountService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => {
        this.route.navigateByUrl('/members'),
          this.toastr.success('login successful');
      },
      error: (error) => this.toastr.error(error.error),
    });
  }

  logout() {
    this.accountService.logout();
    this.route.navigateByUrl('/');
    this.toastr.success('Logout Successful');
  }
}

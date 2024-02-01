import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../_services/account.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass',
})
export class RegisterComponent implements OnInit {
  @Output() cancelReg = new EventEmitter();
  model: any = {};

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.toastr.success('Registration Successful');
        this.cancel();
      },
      error: (err) => {
        this.toastr.error(err.error), console.log(err);
      },
    });
  }
  cancel() {
    this.cancelReg.emit(false);
  }
}

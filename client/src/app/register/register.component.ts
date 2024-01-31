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

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: (err) => console.log(err),
    });
  }
  cancel() {
    this.cancelReg.emit(false);
  }
}

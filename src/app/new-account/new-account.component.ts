import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private accountService: AccountService){ }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }

  ngOnInit(): void {
    this.accountService.statusUpdated.subscribe(($event: string) => console.log($event));
  }
}

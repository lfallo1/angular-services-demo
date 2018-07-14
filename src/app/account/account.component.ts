import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  constructor(private accountService: AccountService){ }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
  }

}

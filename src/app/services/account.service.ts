import {LoggingService} from './logging.service';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class AccountService {

  constructor(private loggingService: LoggingService){}

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChanged(status);
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.loggingService.logStatusChanged(status);
    this.statusUpdated.emit(`STATUS UPDATED EVENT: ${this.accounts[id].name} was updated to ${status}`);
  }

  //broadcast status updated events
  statusUpdated = new EventEmitter<string>();
}

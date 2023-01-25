import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddUser } from '../actions/user.action';
import { IUser } from '../models/user.model';
import { UserState } from '../selector/user.selector';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  constructor(private readonly store: Store<{ user: UserState }>) {
    this.store.select('user').subscribe((data) => {
      console.log(data);
    });
  }

  thanu: IUser = {
    name: 'Thanu',
    email: 'thanu@gmail.com',
  };

  ngOnInit() {
    this.store.dispatch(AddUser({ payLoad: this.thanu }));
  }
  // users =  this.store.select(SelectUsers)
}

import { Component, OnInit } from '@angular/core';
import { usersWithAddress} from '../../data/data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersWithAddress: any[] = usersWithAddress;

  constructor() { }

  ngOnInit(): void {
  }

}

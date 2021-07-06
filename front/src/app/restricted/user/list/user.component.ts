import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { UserDeleteComponent } from '../delete/user-delete.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../user.component.scss']
})

export class UserComponent implements OnInit {

  public users: User[] = [];
  displayedColumns: string[] = ['nickname', 'name', 'phone', 'email', 'description', 'active', 'action'];

  constructor(public dialog: MatDialog,
    private userService: UserService,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getUsers(0, 20);
  }

  getUsers(offset: number, limit: number) {
    this.userService
    .getUsers(offset, limit)
    .subscribe(
      res => {
        this.users = res;
      },
      error => {
        if (error.status == 404) {
          this.users = [];
        }else{
          this.openSnack('Error get users!', 'Close');
        }
      }
    );
  }

  openSnack(mesage: string, value: any) {
    this._snackBar.open(mesage, value, {
      duration: 3000
    });
  }

}
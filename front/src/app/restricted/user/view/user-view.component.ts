import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['../user.component.scss']
})

export class UserViewComponent implements OnInit {

  model: any = {};

  constructor(private userService: UserService, 
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getUser(this.route.snapshot.params.id);
  }

  getUser(id: string) {
    this.userService
    .getUser(id)
    .subscribe(
      res => {
        this.model = res;
      },
      error => {
        // this.model = {};
        if (error.status != 404) {
          this._snackBar.open('Error get user!', 'Close');
        }
      }
    );
  }

}
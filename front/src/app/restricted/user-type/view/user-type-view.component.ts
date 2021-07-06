import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { UserType } from '../user-type.model';
import { UserTypeService } from '../user-type.service';

@Component({
  selector: 'app-user-type-view',
  templateUrl: './user-type-view.component.html',
  styleUrls: ['../user-type.component.scss']
})

export class UserTypeViewComponent implements OnInit {

  model: any = {};

  constructor(private userTypeService: UserTypeService, 
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getUser(this.route.snapshot.params.id);
  }

  getUser(id: string) {
    this.userTypeService
    .getUserType(id)
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
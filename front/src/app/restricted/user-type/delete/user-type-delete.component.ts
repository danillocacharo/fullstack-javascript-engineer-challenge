import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserType } from '../user-type.model';
import { UserTypeService } from '../user-type.service';

@Component({
  selector: 'app-users-type-delete',
  templateUrl: 'user-type-delete.component.html',
  styleUrls: ['../user-type.component.scss']
})
export class UserTypeDeleteComponent implements OnInit {

  public usertype: any = {};

  constructor(private userTypeService: UserTypeService,
    private route: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getUserType(this.route.snapshot.params.id);
  }

  getUserType(id: string) {
    this.userTypeService
    .getUserType(id)
    .subscribe(
      res => {
        this.usertype = res;
      },
      error => {
        this.usertype = {};
        if (error.status != 404) {
          this.openSnack('Error get user-type!', 'Close');
        }
      }
    );
  }

  confirmDescription(description: string) {
    if (description == this.usertype.description) {
      return false;
    } else return true;
  }

  remove(id: string) {
    this.userTypeService
    .delete(id)
    .subscribe(
      () => {
        this.openSnack('UserType deleting successfully!', 'Close');
        this._router.navigateByUrl('/restricted/user-type');
      },
      error => {
        this.openSnack('Error deleting UserType!', 'Close');
      }
    );
  }

  openSnack(mesage: string, value: any) {
    this._snackBar.open(mesage, value, {
      duration: 3000
    });
  }

}
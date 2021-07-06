import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserTypeService } from '../user-type.service';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['../user-type.component.scss']
})
export class UserTypeComponent implements OnInit {

  public user_types: any[] = [];
  displayedColumns: string[] = ['description', 'active', 'action'];

  constructor(private userTypeService: UserTypeService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUserTypes();
  }

  getUserTypes() {
    this.userTypeService
    .getUserTypes()
    .subscribe(
      res => {
        this.user_types = res;
      },
      error => {
        if (error.status == 404) {
          this.user_types = [];
        }else{
          this.openSnack('Error get UserTypes!', 'Close');
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

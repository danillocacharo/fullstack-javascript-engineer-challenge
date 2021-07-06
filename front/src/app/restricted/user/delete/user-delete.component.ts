import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-delete',
  templateUrl: 'user-delete.component.html',
  styleUrls: ['../user.component.scss']
})
export class UserDeleteComponent implements OnInit {

  user: any = {};
  
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getUser(this.route.snapshot.params.id);
  }

  getUser(id: string) {
    this.userService
    .getUser(id)
    .subscribe(
      res => {
        this.user = res;
      },
      error => {
        this.user = {};
        if (error.status != 404) {
          this.openSnack('Error get user!', 'Close');
        }
      }
    );
  }

  confirmNickname(nickname: any) {
    if (nickname == this.user.nickname) {
      return false;
    } else return true;
  }

  remove(id: string) {
    this.userService
    .delete(id)
    .subscribe(
      () => {
        this.openSnack('User deleting successfully!', 'Close');
        this._router.navigateByUrl('/restricted/user');
      },
      error => {
        this.openSnack('Error deleting user!', 'Close');
      }
    );
  }

  openSnack(mesage: string, value: any) {
    this._snackBar.open(mesage, value, {
      duration: 3000
    });
  }

}
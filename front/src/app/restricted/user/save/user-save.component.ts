import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormField } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { UserTypeService } from '../../user-type/user-type.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-save',
  templateUrl: './user-save.component.html',
  styleUrls: ['../user.component.scss']
})

export class UserSaveComponent implements OnInit {

  label: string = '';
  formUser: FormGroup;
  user_types: any[] = [];
  idControl = new FormControl('');
  nicknameControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ]);
  nameControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ]);
  phoneControl = new FormControl('', [
    Validators.maxLength(255),
  ]);
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.maxLength(255),
  ]);
  userTypeIdControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ]);
  activeControl = new FormControl(true, [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(private userService: UserService,
    private userTypeService: UserTypeService,
    private route: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    fb: FormBuilder) {
      this.formUser = fb.group({
        id: this.idControl,
        nickname: this.nicknameControl,
        name: this.nameControl,
        phone: this.phoneControl,
        email: this.emailControl,
        user_type_id: this.userTypeIdControl,
        active: this.activeControl,
      });
  }

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.getUser(this.route.snapshot.params.id);
    } else this.label = 'New user';
    this.getUserTypes();
  }

  getUser(id: string) {
    this.userService
    .getUser(id)
    .subscribe(
      res => {
        this.label = res.nickname;
        this.idControl.setValue(res.id);
        this.nicknameControl.setValue(res.nickname);
        this.nameControl.setValue(res.name);
        this.phoneControl.setValue(res.phone);
        this.emailControl.setValue(res.email);
        this.userTypeIdControl.setValue(res.user_type_id);
        if (!res.active) { this.activeControl.setValue(res.active) };
      },
      error => {
        if (error.status != 404) {
          this.openSnack('Error get user!', 'Close');
        }
      }
    );
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
          this.openSnack('Error get user_type!', 'Close');
        }
      }
    );
  }

  save(): any {
    if (!this.formUser.value.nickname || this.formUser.value.nickname.length <= 0) {
      return this.openSnack('Required field nickname', 'Close');
    }
    if (!this.formUser.value.name || this.formUser.value.name.length <= 0) {
      return this.openSnack('Required field name', 'Close');
    }
    if (!this.formUser.value.email || this.formUser.value.email.length <= 0) {
      return this.openSnack('Required field email', 'Close');
    }
    if (!this.formUser.value.user_type_id || this.formUser.value.user_type_id.length <= 0) {
      return this.openSnack('Required field user_type', 'Close');
    }
    if (!this.formUser.value.active || this.formUser.value.active.length <= 0) {
      return this.openSnack('Required field active', 'Close');
    }
    
    this.userService
    .saveUser(this.formUser.value)
    .subscribe(
      res => {
        this.openSnack('User '+( this.formUser.value.id ? 'created' : 'updated' )+' successfully!', 'Close');
        this._router.navigateByUrl('/restricted/user');
      },
      error => {
        this.openSnack('Error '+( this.formUser.value.id ? 'creating' : 'update' )+' user!', 'Close');
      }
    );
  }

  openSnack(mesage: string, value: any) {
    this._snackBar.open(mesage, value, {
      duration: 3000
    });
  }

  verify() {
    if (this.formUser.value.nickname.length > 0) {
      return false;
    } else if (this.formUser.value.name.length > 0) {
      return false;
    } else if (this.formUser.value.email.length > 0) {
      return false;
    } else if (this.formUser.value.user_type_id.length > 0) {
      return false;
    } else return true;
  }

}
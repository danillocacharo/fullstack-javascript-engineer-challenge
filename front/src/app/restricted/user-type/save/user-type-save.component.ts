import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserTypeService } from '../user-type.service';

@Component({
  selector: 'app-user-type-save',
  templateUrl: './user-type-save.component.html',
  styleUrls: ['../user-type.component.scss']
})
export class UserTypeSaveComponent implements OnInit {

  label: string = '';
  userTypeForm: FormGroup;
  idControl = new FormControl('');
  descriptionControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ]);
  activeControl = new FormControl(true, [
    Validators.required,
  ]);
  displayedColumns: string[] = ['description', 'active'];

  constructor(private userTypeService: UserTypeService, 
    private route: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    fb: FormBuilder) {
      this.userTypeForm = fb.group({
        id: this.idControl,
        description: this.descriptionControl,
        active: this.activeControl
      });
    }

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.getUserType(this.route.snapshot.params.id);
    } else this.label = 'New UserType';
  }

  getUserType(id: string) {
    this.userTypeService
    .getUserType(id)
    .subscribe(
      res => {
        this.label = res.description;
        this.idControl.setValue(res.id);
        this.descriptionControl.setValue(res.description);
        if (!res.active) { this.activeControl.setValue(res.active) };
      },
      error => {
        if (error.status != 404) {
          this.openSnack('Error get user-type!', 'Close');
        }
      }
    );
  }

  save(): any {
    if (!this.userTypeForm.value.description || this.userTypeForm.value.description.length <= 0) {
      return this.openSnack('Required field description', 'Close');
    }

    this.userTypeService
    .saveUserType(this.userTypeForm.value)
    .subscribe(
      res => {
        this.openSnack('UserType '+( this.userTypeForm.value.id ? 'created' : 'update' )+' successfully!', 'Close');
        this._router.navigateByUrl('/restricted/user-type');
      },
      error => {
        this.openSnack('Error '+( this.userTypeForm.value.id ? 'creating' : 'update' )+' UserType!', 'Close');
      }
    );
  }

  openSnack(mesage: string, value: any) {
    this._snackBar.open(mesage, value, {
      duration: 3000
    });
  }

  verify() {
    if (this.userTypeForm.value.description.length > 0) {
      return false;
    } else return true;
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './list/user.component';
import { UserViewComponent } from './view/user-view.component';
import { UserSaveComponent } from './save/user-save.component';
import { UserService } from './user.service';
import { MaterialModule } from '../../material.module';
import { PipesModule } from '../pipe/PipesModule';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDeleteComponent } from './delete/user-delete.component';
import { UserTypeService } from '../user-type/user-type.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    UserComponent,
    UserViewComponent,
    UserSaveComponent,
    UserDeleteComponent
  ],
  imports: [
    MaterialModule,
    UserRoutingModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    UserService,
    UserTypeService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [BrowserModule]
})
export class UserModule { }
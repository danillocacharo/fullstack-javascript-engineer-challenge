import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTypeComponent } from './list/user-type.component';
import { UserTypeRoutingModule } from './user-type-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { UserTypeSaveComponent } from './save/user-type-save.component';
import { UserTypeService } from './user-type.service';
import { UserTypeDeleteComponent } from './delete/user-type-delete.component';
import { UserTypeViewComponent } from './view/user-type-view.component';
import { PipesModule } from '../pipe/PipesModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@NgModule({
  declarations: [
    UserTypeComponent,
    UserTypeSaveComponent,
    UserTypeDeleteComponent,
    UserTypeViewComponent
  ],
  imports: [
    CommonModule,
    UserTypeRoutingModule,
    MaterialModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserTypeService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class UserTypeModule { }

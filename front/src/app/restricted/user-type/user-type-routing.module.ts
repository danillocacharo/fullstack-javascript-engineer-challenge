import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTypeSaveComponent } from './save/user-type-save.component';
import { UserTypeComponent } from './list/user-type.component';
import { UserTypeDeleteComponent } from './delete/user-type-delete.component';

const routes: Routes = [
  {
    path: '',
    component: UserTypeComponent,
    data: {
      title: 'UserType'
    }
  },{
    path: 'new',
    component: UserTypeSaveComponent,
    data: {
      title: 'Edit UserType'
    }
  },{
    path: ':id/edit',
    component: UserTypeSaveComponent,
    data: {
      title: 'Edit UserType'
    }
  },{
    path: ':id/delete',
    component: UserTypeDeleteComponent,
    data: {
      title: 'Delete UserType'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTypeRoutingModule {}

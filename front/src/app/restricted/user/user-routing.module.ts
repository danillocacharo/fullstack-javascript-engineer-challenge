import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDeleteComponent } from './delete/user-delete.component';
import { UserComponent } from './list/user.component';
import { UserSaveComponent } from './save/user-save.component';
import { UserViewComponent } from './view/user-view.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    data: {
      title: 'Users'
    }
  },{
    path: 'new',
    component: UserSaveComponent,
    data: {
      title: 'Edit User'
    }
  },{
    path: ':id',
    component: UserViewComponent,
    data: {
      title: 'View User'
    }
  },{
    path: ':id/edit',
    component: UserSaveComponent,
    data: {
      title: 'Edit User'
    }
  },{
    path: ':id/delete',
    component: UserDeleteComponent,
    data: {
      title: 'Delete User'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}

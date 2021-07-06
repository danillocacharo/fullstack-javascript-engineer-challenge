import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { UserTypeModule } from './user-type/user-type.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Restricted'
    },
    children: [{
      path: 'home',
      loadChildren: () => HomeModule
    }]
  },{
    path: '',
    data: {
      title: 'Restricted'
    },
    children: [{
      path: 'user',
      loadChildren: () => UserModule
    }]
  },{
    path: '',
    data: {
      title: 'Restricted'
    },
    children: [{
      path: 'user-type',
      loadChildren: () => UserTypeModule
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestrictedRoutingModule {}

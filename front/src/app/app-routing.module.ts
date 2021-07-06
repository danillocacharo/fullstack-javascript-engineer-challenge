import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { PublicGuard, ProtectedGuard } from 'ngx-auth';
import { RestrictedModule } from './restricted/restricted.module';
import { LoginModule } from './login/login.module';

export const routes: Routes = [
  {
    path: 'login',
    // canActivate: [ PublicGuard ],
    component: SimpleLayoutComponent,
    loadChildren: () => LoginModule
  },{
    path: 'restricted',
    // canActivate: [ ProtectedGuard ],
    component: FullLayoutComponent,
    loadChildren: () => RestrictedModule
  },{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

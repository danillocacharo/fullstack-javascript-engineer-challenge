import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { UserModule } from './restricted/user/user.module';
import { RestrictedModule } from './restricted/restricted.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { LoginModule } from './login/login.module';
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import { UserTypeModule } from './restricted/user-type/user-type.module';
import { HomeModule } from './restricted/home/home.module';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    UserModule,
    UserTypeModule,
    HomeModule,
    RestrictedModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

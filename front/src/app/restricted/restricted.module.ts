import { NgModule } from '@angular/core';
import { RestrictedRoutingModule } from './restricted-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    RestrictedRoutingModule,
    HttpClientModule
  ],
  declarations: [ ]
})
export class RestrictedModule { }
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from '../shared/services/user.service';
import { UserStoreModule } from './store/user-store.module';
import { UserViewComponent } from './components/user-view/user-view.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserViewComponent
  ],
  imports: [
    UserRoutingModule,
    UserStoreModule,
    NativeScriptCommonModule
  ],
  providers: [
    UserService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UserModule { }

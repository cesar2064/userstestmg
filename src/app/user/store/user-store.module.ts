import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducer/user.reducer';
import { NgModule } from '@angular/core';
import { APP_CONSTANTS } from '~/app/app.constants';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './effect/user.effect';

@NgModule({
    imports: [
        StoreModule.forFeature(APP_CONSTANTS.stores.userStore, userReducer),
        EffectsModule.forFeature([
            UserEffect
        ])
    ]
})
export class UserStoreModule {}
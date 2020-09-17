import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './core/store/reducers/todo.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './core/store/effects/todo.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({todos:todoReducer}),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

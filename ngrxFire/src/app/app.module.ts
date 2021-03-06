import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { simpleReducer } from './simple.reducer';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ message: simpleReducer })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

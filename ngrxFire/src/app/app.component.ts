import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface AppState {
    message: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    message$: Observable<string>;
    title = 'app';

    constructor(private store: Store<AppState>) {
        this.message$ = this.store.select('message');
    }

    spanishMessage() {
        this.store.dispatch({ type: 'SPANISH' });
    }

    frenchMessage() {
        this.store.dispatch({ type: 'FRENCH' });
    }

    vietnamMessage() {
        this.store.dispatch({ type: 'VIETNAM' });
    }

}

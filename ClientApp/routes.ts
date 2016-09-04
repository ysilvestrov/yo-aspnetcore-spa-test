import { RouterConfig } from '@angular/router';
import { Home } from './components/home/home';
import { FetchData } from './components/fetch-data/fetch-data';
import { Counter } from './components/counter/counter';

export const routes: RouterConfig = [
    { path: '', redirectTo: 'fetch-data', pathMatch: 'full' },
    { path: 'fetch-data', component: FetchData },	
    { path: 'home', component: Home },
    { path: 'counter', component: Counter },
    { path: '**', redirectTo: 'fetch-data' }
];

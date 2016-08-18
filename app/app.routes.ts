import { provideRouter, RouterConfig } from '@angular/router';
import { managerComponent } from './components/managerComponent/manager.component';
import { workerComponent } from './components/workerComponent/worker.component';
import { homeComponent } from './components/homeComponent/home.component';

const routes: RouterConfig = [
    { path: 'manager', component: managerComponent },
    { path: 'worker', component: workerComponent },
    { path: '', component: homeComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];
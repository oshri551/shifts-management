import { Routes, RouterModule } from '@angular/router';
import { managerComponent } from './components/managerComponent/manager.component';
import { workerComponent } from './components/workerComponent/worker.component';
import { homeComponent } from './components/homeComponent/home.component';

const routes: Routes = [
    { path: 'manager', component: managerComponent },
    { path: 'worker', component: workerComponent },
    { path: '', component: homeComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
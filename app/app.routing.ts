import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {TransactionComponent} from './components/transaction.component';

const appRoutes: Routes = [
    {
        path:'',
        component: TransactionComponent
    },
    {
        path: 'user',
        component: UserComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

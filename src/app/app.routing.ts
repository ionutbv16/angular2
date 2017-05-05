import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.components';
import {ItemsComponent} from './components/items.component';
import {ItemComponent} from './components/item.component';
import {AboutComponent} from './components/about.component';
import {CartComponent} from './components/cart.component';

const appRoutes : Routes = [
    {
        path: '',
        component: ItemsComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
     {
        path: 'items/:id',
        component: ItemComponent
    },
    {
        path: 'addcart/details/:id',
        component: CartComponent
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


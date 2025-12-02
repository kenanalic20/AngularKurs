import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'about-us',
        component: AboutUsComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'user-details/:id',
        component: UserDetailsComponent
    },
    // {
    //     path: 'products',
    //     component: ProductsComponent,
    // },
    // {
    //     path:'login',
    //     component: LoginComponent
    // },
    // {
    //     path:'product-details/:id',
    //     component: ProductDetailsComponent
    // },
    {
        path: '',
        redirectTo:'home',
        pathMatch:'full'
    },//redirect ako je prazan url
    {
        path: '**',
        component: NotFoundComponent,
    },//not found putanja
];

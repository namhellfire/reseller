import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './pages/home/home.component'
import {AuthenComponent} from './pages/authen/authen.component'
import { ListProductPageComponent } from "./pages/list-product-page/list-product-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'authen', component: AuthenComponent },
  { path: 'product-list', component: ListProductPageComponent },
];


export const routedComponents = RouterModule.forRoot(routes);
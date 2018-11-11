import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {TabBarComponent} from './tab-bar/tab-bar.component';

const routes: Routes = [
{path: 'login' , component: LoginPageComponent},
{path: 'main' , component: TabBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

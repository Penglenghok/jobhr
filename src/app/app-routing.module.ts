import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: "", component: AppLayoutComponent,
    children: [
      { path: "", component: HomeComponent }
    ]
  },
  {
    path:'login',component:AuthLayoutComponent,
    children:[
      {path:"",component:LoginComponent}
    ]
  },
  {path:'admin',component:AdminLayoutComponent,
  canActivate:[AuthGuard],}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

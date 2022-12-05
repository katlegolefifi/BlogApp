import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GuardService } from './service/guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path:  'register', component:  RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: WelcomeComponent},
  {path: 'home', component: HomeComponent, canActivate: [GuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

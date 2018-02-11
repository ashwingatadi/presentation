import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatsDeptComponent } from './statistics/stats-dept/stats-dept.component';
import { StatsEmplComponent } from './statistics/stats-empl/stats-empl.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { EmployeeService } from './services/employee.service';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginRegisterComponent},
  {path: 'search', component: EmpListComponent},
  {path: 'addemp', component: AddEmpComponent},
  {path: 'stats', component: StatisticsComponent},
  {path: 'stats/empl', component: StatsEmplComponent},
  {path: 'stats/dept', component: StatsDeptComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    LoginComponent,
    RegisterComponent,
    StatisticsComponent,
    StatsDeptComponent,
    StatsEmplComponent,
    EmpListComponent,
    AddEmpComponent,
    HomeComponent,
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

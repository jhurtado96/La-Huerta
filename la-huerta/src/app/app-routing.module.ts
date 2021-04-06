import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = 
[
  {
    path:"registro",component:RegistroComponent
  },
  {
    path:"login",component:LogInComponent
  },
  {
    path:"header",component:HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

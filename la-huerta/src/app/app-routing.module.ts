import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { AnadirProductoComponent } from './pages/anadir-producto/anadir-producto.component';
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
  },
  {
    path:"anaproducto",component:AnadirProductoComponent
  },
  {
    path:"chat",component:ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

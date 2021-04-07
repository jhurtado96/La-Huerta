import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { HeaderComponent } from './pages/header/header.component';

const routes: Routes = [{path:"header",component:HeaderComponent},{path:"chat",component:ChatComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

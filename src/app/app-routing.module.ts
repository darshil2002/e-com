import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import {MyformComponent} from './myform/myform.component'
import { DoneComponent } from './done/done.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path:'',
    component:HomepageComponent,
  },
  {
    path:'app-myform',
    component:MyformComponent,
  },
  {
    path:'app-done',
    component:DoneComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

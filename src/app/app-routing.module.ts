import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {
    path:'',
    component:MainPageComponent,
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: NavbarComponent,
    children:[
      {
        path:'add',
        component: AddComponent
      },
      {
        path:'view',
        component: ViewComponent
      },
      {
        path:'search',
        component: SearchComponent
      },
      {
        path:'edit',
        component: EditComponent
      },
      {
        path:'delete',
        component: DeleteComponent
      },
      {
        path:'',
        component: MainPageComponent
      },
      {
        path:'**',
        component: NavbarComponent
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button'; // Material Button
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar.component'; // Material Input Fields
import { MatSidenavModule } from '@angular/material/sidenav';  // Material Navbar
import { MatCheckboxModule } from '@angular/material/checkbox'; // Material Check Box for Navbar
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';  // Toaster Module Here
import { CommonInterceptor } from './common.interceptor';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    AddComponent,
    ViewComponent,
    SearchComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,     // Material Button
    MatInputModule,    // Material Input Fields
    MatSidenavModule,    // Material Sidenav
    MatCheckboxModule,   // Material Checkbox
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 1000
    })                                         // Toaster Module
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true }  // Providing Common Interceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

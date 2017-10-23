import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSoapModule } from 'ngx-soap';

import { AppComponent } from './app.component';
import { ExamsComponent } from './exams/exams.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserService} from './user.service';
import {AuthGuard} from "./auth.guard";

const appRoutes: Routes = [
    {
        path: '',
        component: LoginFormComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'exams',
        canActivate: [AuthGuard],
        component: ExamsComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    ExamsComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
      MatSortModule,
      MatTableModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      MatExpansionModule,
    FormsModule,
    NgxSoapModule,
     RouterModule.forRoot(appRoutes),
     ReactiveFormsModule
  ],
  exports: [MatButtonModule, MatIconModule, MatInputModule, MatExpansionModule, MatAutocompleteModule],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {myRoutes} from './routes';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule, MatSnackBarModule} from '@angular/material';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import {FileUploadModule} from 'ng2-file-upload';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from './services/user.service';
import { PlayerComponent } from './player/player.component';
import { PaymentComponent } from './payment/payment.component';
import { DivideComponent } from './divide/divide.component';
import { IndividualComponent } from './individual/individual.component';
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './login/login.component';
import { CaptainComponent } from './captain/captain.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import {AuthGuard} from './guard/auth.guard';
import { NextPageComponent } from './next-page/next-page.component';
import { FailedComponent } from './failed/failed.component';
import { IndividualPlayerComponent } from './individual-player/individual-player.component';
import { PaymentResponseComponent } from './payment-response/payment-response.component';
import { CaptainIdComponent } from './captain-id/captain-id.component';
import { CaptainListComponent } from './captain-list/captain-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EventComponent,
    AboutComponent,
    PlayerComponent,
    PaymentComponent,
    DivideComponent,
    IndividualComponent,
    TeamComponent,
    LoginComponent,
    CaptainComponent,
    UserComponent,
    AdminComponent,
    AdminHomeComponent,
    AdminDetailsComponent,
    AdminHeaderComponent,
    NextPageComponent,
    FailedComponent,
    IndividualPlayerComponent,
    PaymentResponseComponent,
    CaptainIdComponent,
    CaptainListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatMenuModule,
    NgbModule,
    FileUploadModule
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

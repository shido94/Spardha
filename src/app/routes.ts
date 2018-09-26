import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EventComponent} from './event/event.component';
import {AboutComponent} from './about/about.component';
import {PlayerComponent} from './player/player.component';
import {PaymentComponent} from './payment/payment.component';
import {DivideComponent} from './divide/divide.component';
import {TeamComponent} from './team/team.component';
import {IndividualComponent} from './individual/individual.component';
import {CaptainComponent} from './captain/captain.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminDetailsComponent} from './admin-details/admin-details.component';
import {NextPageComponent} from './next-page/next-page.component';
import {AuthGuard} from './guard/auth.guard';
import {FailedComponent} from './failed/failed.component';
import {PaymentResponseComponent} from './payment-response/payment-response.component';
import {CaptainIdComponent} from './captain-id/captain-id.component';
import {CaptainListComponent} from './captain-list/captain-list.component';


export const myRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'type',
  //   component: DivideComponent
  // },
  // {
  //   path: 'type/team',
  //   component: TeamComponent
  // },
  // {
  //   path: 'type/individual',
  //   component: IndividualComponent
  // },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'player',
    canActivate: [AuthGuard],
    component: PlayerComponent
  },
  {
    path: 'payment/:id',
    canActivate: [AuthGuard],
    component: PaymentComponent
  },
  {
    path: 'captain',
    component: CaptainComponent
  },
  {
    path: 'admin/login',
    component: AdminComponent
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    component: UserComponent
  },
  {
    path: 'admin/home',
    canActivate: [AuthGuard],
    component: AdminHomeComponent
  },
  {
    path: 'admin/home/:id/:name',
    canActivate: [AuthGuard],
    component: AdminDetailsComponent
  },
  {
    path: 'next',
    canActivate: [AuthGuard],
    component: NextPageComponent
  },
  {
    path: 'failed',
    component: FailedComponent
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'payment_response',
    component: PaymentResponseComponent
  },
  {
    path: 'captain/unique/id',
    component: CaptainIdComponent
  },
  {
    path: 'captain-list',
    canActivate: [AuthGuard],
    component: CaptainListComponent
  }
];

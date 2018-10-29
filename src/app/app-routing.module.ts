import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {EventComponent} from './event/event.component';
import {TicketComponent} from './ticket/ticket.component';
import {AbautComponent} from './core/abaut/abaut.component';
import {LoginComponent} from './user/login/login.component';
import {RegistrationComponent} from './user/registration/registration.component';
import {EventListComponent} from './event/event-list/event-list.component';
import {EventDetailComponent} from './event/event-detail/event-detail.component';
import {ProfileComponent} from './user/profile/profile.component';
import {ProfileEditComponent} from './user/profile-edit/profile-edit.component';
import {TicketListComponent} from './ticket/ticket-list/ticket-list.component';
import {TicketDetailComponent} from './ticket/ticket-detail/ticket-detail.component';

const routes: Routes = [
  { path: 'event',
    component: EventComponent,
    children: [
    {path: 'list', component: EventListComponent},
    {path: 'new', component: EventDetailComponent},
    {path: ':id', component: EventDetailComponent}
    ]
  },
  { path: 'ticket',
    component: TicketComponent,
    children:[
      {path: 'list', component: TicketListComponent},
      {path: 'new', component: TicketDetailComponent},
      {path: ':id/edit', component: TicketDetailComponent}
    ]
  },
  { path: 'user',
    children: [
      {path: '', component: ProfileComponent},
      {path: 'edit', component: ProfileEditComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registry', component: RegistrationComponent},
    ]},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AbautComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}, // csak akkor teljesen üres
  { path: '**', component: PageNotFoundComponent}
  // fontos a sorend, mert sorrendben hatja végre
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static routableComponents = [
    HomeComponent,
    EventComponent,
    EventListComponent,
    EventDetailComponent,
    TicketComponent,
    AbautComponent,
    LoginComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    ProfileComponent,
    ProfileEditComponent,
    TicketListComponent,
    TicketDetailComponent
  ];
}

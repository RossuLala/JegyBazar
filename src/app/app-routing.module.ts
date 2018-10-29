import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {EventComponent} from './event/event.component';
import {TicketComponent} from './ticket/ticket.component';
import {AbautComponent} from './abaut/abaut.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {EventListComponent} from './event-list/event-list.component';
import {EventDetailComponent} from './event-detail/event-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'event',
    component: EventComponent,
    children: [
    {path: 'list', component: EventListComponent},
    {path: 'new', component: EventDetailComponent},
    {path: ':id/edit', component: EventDetailComponent}
    ]
  },
  { path: 'ticket', component: TicketComponent},
  { path: 'about', component: AbautComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registry', component: RegistrationComponent},
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
    PageNotFoundComponent
  ];
}

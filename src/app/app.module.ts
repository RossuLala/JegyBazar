import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollapseModule } from 'ngx-bootstrap';
import { NavbarComponent } from './core/navbar/navbar.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { FooterComponent } from './core/footer/footer.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ProfileEditComponent } from './user/profile-edit/profile-edit.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AbautComponent } from './core/abaut/abaut.component';
import { HomeComponent } from './home/home.component';
import { TicketBidComponent } from './ticket/ticket-bid/ticket-bid.component';
import { TicketDetailComponent } from './ticket/ticket-detail/ticket-detail.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { TicketComponent } from './ticket/ticket.component';
import {AppRoutingModule} from './app-routing.module';
import { EventCardComponent } from './event/event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    FooterComponent,
    EventComponent,
    ...AppRoutingModule.routableComponents,
    EventCardComponent
    //LoginComponent,
    //RegistrationComponent,
    //ProfileComponent,
    //ProfileEditComponent,
    //EventDetailComponent,
    //EventListComponent,
    //PageNotFoundComponent,
    //AbautComponent,
    //HomeComponent,
    //TicketBidComponent,
    //TicketDetailComponent,
    //TicketListComponent,
    //TicketComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

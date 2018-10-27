import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollapseModule } from 'ngx-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AbautComponent } from './abaut/abaut.component';
import { HomeComponent } from './home/home.component';
import { TicketBidComponent } from './ticket-bid/ticket-bid.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketComponent } from './ticket/ticket.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    CardComponent,
    FooterComponent,
    EventComponent,
    ...AppRoutingModule.routableComponents
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

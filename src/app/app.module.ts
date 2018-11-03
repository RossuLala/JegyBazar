import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollapseModule } from 'ngx-bootstrap';
import { NavbarComponent } from './core/navbar/navbar.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { FooterComponent } from './core/footer/footer.component';
import { EventComponent } from './event/event.component';
import { AppRoutingModule } from './app-routing.module';
import { EventCardComponent } from './event/event-card/event-card.component';

import { EventService } from './shared/event.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    FooterComponent,
    EventComponent,
    ...AppRoutingModule.routableComponents,
    EventCardComponent

  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

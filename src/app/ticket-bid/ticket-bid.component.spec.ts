import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBidComponent } from './ticket-bid.component';

describe('TicketBidComponent', () => {
  let component: TicketBidComponent;
  let fixture: ComponentFixture<TicketBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

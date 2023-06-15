import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkLinkComponent } from './social-network-link.component';

describe('SocialNetworkLinkComponent', () => {
  let component: SocialNetworkLinkComponent;
  let fixture: ComponentFixture<SocialNetworkLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialNetworkLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

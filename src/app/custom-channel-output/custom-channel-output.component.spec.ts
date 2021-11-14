import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChannelOutputComponent } from './custom-channel-output.component';

describe('CustomChannelOutputComponent', () => {
  let component: CustomChannelOutputComponent;
  let fixture: ComponentFixture<CustomChannelOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomChannelOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomChannelOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

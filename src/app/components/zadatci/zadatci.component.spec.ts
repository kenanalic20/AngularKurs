import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadatciComponent } from './zadatci.component';

describe('ZadatciComponent', () => {
  let component: ZadatciComponent;
  let fixture: ComponentFixture<ZadatciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZadatciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZadatciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

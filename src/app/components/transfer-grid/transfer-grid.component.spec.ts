import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferGridComponent } from './transfer-grid.component';

describe('TransferGridComponent', () => {
  let component: TransferGridComponent;
  let fixture: ComponentFixture<TransferGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

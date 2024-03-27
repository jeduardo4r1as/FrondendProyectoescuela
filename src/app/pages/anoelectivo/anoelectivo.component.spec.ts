import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnoelectivoComponent } from './anoelectivo.component';

describe('AnoelectivoComponent', () => {
  let component: AnoelectivoComponent;
  let fixture: ComponentFixture<AnoelectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnoelectivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnoelectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

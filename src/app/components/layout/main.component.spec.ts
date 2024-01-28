import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './main.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the breadcrumb element', () => {
    const breadcrumbElement = fixture.nativeElement.querySelector('.breadcrumb');
    expect(breadcrumbElement.textContent).toContain('Financial Management · CAPEX Management');
  });

  it('should render the header', () => {
    const headerElement = fixture.nativeElement.querySelector('h2');
    expect(headerElement.textContent).toContain('CEMEX Go Online Stores');
  });

  it('should render the app-orders-table component', () => {
    const ordersTableComponent = fixture.nativeElement.querySelector('app-orders-table');
    expect(ordersTableComponent).toBeTruthy();
  });
});

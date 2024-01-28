import {
  OrdersTableComponent,
  init_orders_table_component
} from "./chunk-DKKJGVAR.mjs";
import {
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-ML4BEKOI.mjs";

// angular:jit:template:file:src/app/components/layout/main.component.html
var main_component_default;
var init_main_component = __esm({
  "angular:jit:template:file:src/app/components/layout/main.component.html"() {
    main_component_default = '<div class="layout">\n  <div class="breadcrumb">Financial Management &#183; CAPEX Management</div>\n  <h2>CEMEX Go Online Stores</h2>\n  <app-orders-table></app-orders-table>\n</div>\n';
  }
});

// angular:jit:style:file:src/app/components/layout/main.component.scss
var main_component_default2;
var init_main_component2 = __esm({
  "angular:jit:style:file:src/app/components/layout/main.component.scss"() {
    main_component_default2 = "/* src/app/components/layout/main.component.scss */\n.layout {\n  padding: 30px;\n}\nh2 {\n  margin: 3px 0 40px 0;\n}\n.breadcrumb {\n  color: #0e2946;\n  font-size: 16px;\n}\n";
  }
});

// src/app/components/layout/main.component.ts
var LayoutComponent;
var init_main_component3 = __esm({
  "src/app/components/layout/main.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_main_component();
    init_main_component2();
    init_core();
    init_orders_table_component();
    LayoutComponent = class LayoutComponent2 {
    };
    LayoutComponent = __decorate([
      Component({
        selector: "app-layout",
        standalone: true,
        imports: [OrdersTableComponent],
        template: main_component_default,
        styles: [main_component_default2]
      })
    ], LayoutComponent);
  }
});

// src/app/components/layout/main.component.spec.ts
var require_main_component_spec = __commonJS({
  "src/app/components/layout/main.component.spec.ts"(exports) {
    init_testing();
    init_main_component3();
    describe("LayoutComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(exports, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [LayoutComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should render the breadcrumb element", () => {
        const breadcrumbElement = fixture.nativeElement.querySelector(".breadcrumb");
        expect(breadcrumbElement.textContent).toContain("Financial Management \xB7 CAPEX Management");
      });
      it("should render the header", () => {
        const headerElement = fixture.nativeElement.querySelector("h2");
        expect(headerElement.textContent).toContain("CEMEX Go Online Stores");
      });
      it("should render the app-orders-table component", () => {
        const ordersTableComponent = fixture.nativeElement.querySelector("app-orders-table");
        expect(ordersTableComponent).toBeTruthy();
      });
    });
  }
});
export default require_main_component_spec();
//# sourceMappingURL=main.component.spec.mjs.map

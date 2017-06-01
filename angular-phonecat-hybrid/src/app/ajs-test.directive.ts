import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'ajs-test-directive-from-angular'
})

export class AjsTestDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('testAjsDirective', elementRef, injector);
  }
}

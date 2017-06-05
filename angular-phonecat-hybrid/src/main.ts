// Import these globally to bring in their @types
import 'angular';
import 'angular-animate';
import 'angular-resource';
import 'angular-route';

// And import our AngularJS module
import './app-ajs';


import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // Use the upgrade module to bootstrap the hybrid
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['phonecatApp']);
});

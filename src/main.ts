import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { StoreComponent } from './app/components/store/store.component';

bootstrapApplication(StoreComponent, appConfig).catch((err) =>
  console.error(err)
);

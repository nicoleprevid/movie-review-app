import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './app/environments/environment';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  
bootstrapApplication(AppComponent, {
    providers: [
      provideAuth0({
        domain: environment.auth0.domain,
        clientId: environment.auth0.clientId,
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      }),
    ]
  });
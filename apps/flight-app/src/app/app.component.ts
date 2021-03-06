import {Component} from '@angular/core';
import { LoggerService } from "@flight-workspace/logger-lib";
import { AuthLibService } from "@flight-workspace/shared/auth-lib";

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private loggerService: LoggerService,
    private authService: AuthLibService
  ) {
    this.authService.login('Max', '');
    this.loggerService.log('log');
    this.loggerService.debug('debug');

  }
}

import { Component, HostListener, OnInit } from '@angular/core';
import { GlobalService } from './services/global.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private globalSvc: GlobalService, private browserSvc: DeviceDetectorService ) { }
  
  ngOnInit(): void {
    if (this.browserSvc.isMobile() || window.screen.width < 770) {
      this.globalSvc.changeMobileStatus(true);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    const status = window.screen.width < 770 ? true : false;
    this.globalSvc.changeMobileStatus(status);
  }
}

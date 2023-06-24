import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private globalSvc: GlobalService) {

  }
  // variables
  shoppingCartCount = 0;
  isMobileView = false;
  displayMobileNav = false;

  ngOnInit(): void {
    //
    this.shoppingCartCount = 50;
    this.globalSvc.isMobile.subscribe(x => {
      this.isMobileView = x;});
  }
  
  toggleMobileNav(): void {
    if (this.displayMobileNav) {
      this.displayMobileNav = false;
    } else {
      this.displayMobileNav = true;
    }
  }

}
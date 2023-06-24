import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private isMobileSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isMobile = this.isMobileSource.asObservable();

  changeMobileStatus(status: boolean):void {
    this.isMobileSource.next(status);
  }
}

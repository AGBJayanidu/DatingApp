import { inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busyRequsetCount = 0;
  private spinnerService = inject(NgxSpinnerService);

  busy(){
    this.busyRequsetCount++;
    this.spinnerService.show(undefined, {
      type:'square-jelly-box',
      bdColor: 'rgba(255,255,255,0)',
      color:'#333333'
    })
  }

  idle(){
    this.busyRequsetCount--;
    if(this.busyRequsetCount <= 0){
      this.busyRequsetCount = 0;
      this.spinnerService.hide();
    }
  }
}

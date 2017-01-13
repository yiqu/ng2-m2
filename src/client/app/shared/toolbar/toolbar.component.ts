import { Injectable ,Component, Input , OnChanges} from '@angular/core';
import { ServerStatusService } from '../server-status/index';

/**
 * This class represents the toolbar component.
 */

@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent { 
  lastPingValue: number;

  /**
   * Creates an instance of the toolbar comp with the injected
   * ServerStatusService.
   * // img url: ./heartbeat/assets/images/logo_small.png
   * // ./heartbeat/assets/images/logo_small.png
   */
  constructor(public serverStatusService: ServerStatusService) {
    // Update the last fetched date
    this.serverStatusService.updateFetchTime.subscribe((inputValue:boolean) => {
      if(inputValue) {
        this.lastPingValue = Date.now();
      }});
  }
}



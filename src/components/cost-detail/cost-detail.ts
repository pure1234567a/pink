import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CostDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'cost-detail',
  templateUrl: 'cost-detail.html'
})
export class CostDetailComponent {
  @Input() items:any;
  @Output() itemClicked:EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }

}

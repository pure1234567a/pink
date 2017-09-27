import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the HomeDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'home-detail',
  templateUrl: 'home-detail.html'
})
export class HomeDetailComponent {
  @Input() items:any;
  @Output() itemClicked:EventEmitter<any> = new EventEmitter<any>();
  text: string;

  constructor() {
  }
  onClick(item){
    this.itemClicked.emit(item);
  }


}

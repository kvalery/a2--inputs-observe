import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-child',
  templateUrl: 'child.component.html',
  styleUrls: ['child.component.scss']
})
export class ChildComponent implements OnInit {

  public buttonValue:boolean = false;

  public checkStatus:boolean = false;

  @Input()
  public data: any;
  @Input()
  hasButton: any = false;
  @Output()
  public action: EventEmitter<any> = new EventEmitter;

  get ddd(){
    console.log('ddd');
    return '';
  }

  constructor() { }

  ngOnInit() {
  }
  public check(){
    this.checkStatus = !this.checkStatus;
  }
  public go(){
    this.buttonValue = !this.buttonValue;
    this.action.emit(this.buttonValue);
  }

}

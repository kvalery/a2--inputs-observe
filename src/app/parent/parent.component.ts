import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  moduleId: module.id,
  selector: 'app-parent',
  templateUrl: 'parent.component.html',
  styleUrls: ['parent.component.scss']
})
export class ParentComponent implements OnInit {

  public example1: string = "anyDATA";
  public example1Action: boolean = false;

  public example2: any = "";

  @ViewChildren(ChildComponent)
  public children: QueryList<ChildComponent>;

  public checkChild(){
    this.children.forEach( child => { child.check()} );
  }

  private exampleAction = function(value: boolean){
      this.example1Action = value;
  };

  constructor() { }

  ngOnInit() {
  }

}

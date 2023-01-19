import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-signal',
  templateUrl: './traffic-signal.component.html',
  styleUrls: ['./traffic-signal.component.scss']
})
export class TrafficSignalComponent implements OnInit {

  constructor() { }

  @Input() lights: any;
  @Input() time: any;
  @Input() totalTime: any;
  arrow: any = {
    right: true,
    left: true,
    up: true,
  };
  
  ngOnInit(): void {
  }

}

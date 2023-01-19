import { Component, OnInit } from '@angular/core';
import { MonitoringService } from '../monitoring.service';

@Component({
  selector: 'app-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss']
})
export class RoadComponent implements OnInit {

  constructor(private monitoringService: MonitoringService) { }

  setDirection: any;
  inter: any;
  count: number = 0;
  timeLeft: number = 1000;
  interval: any;
  getAllData: any;
  yellowInter: any;
  totalTime: any;

  directions = {
    lights_top: {
      isRed: true,
      isYellow: false,
      isGreen: false,
    },

    lights_right: {
      isRed: true,
      isYellow: false,
      isGreen: false,

    },

    lights_bottom: {
      isRed: true,
      isYellow: false,
      isGreen: false,

    },

    lights_left: {
      isRed: true,
      isYellow: false,
      isGreen: false,
    }
  }

  ngOnInit(): void {
    this.loadData(true);
  }

  loadData(initial: any) {
    clearInterval(this.yellowInter);
    this.monitoringService.fetchApiJson().subscribe((res) => {
      this.getAllData = JSON.parse(JSON.stringify(res)).data;
      this.getData(this.getAllData, this.count);
      this.timeLeft = this.getAllData[this.count].duration;
      this.totalTime = this.getAllData[this.count].duration;
      this.startTimer();
    })
  }

  getData(data: any, count: number) {
    this.setDirection = JSON.parse(JSON.stringify(this.directions));
    switch (count) {
      case 0:
        Object.assign(this.setDirection?.lights_top, {
          isGreen: true,
          isRed: false,
          isYellow: false
        })
        break;

      case 1:
        Object.assign(this.setDirection.lights_right, {
          isGreen: true,
          isRed: false,
          isYellow: false
        })
        break;
      case 2:
        Object.assign(this.setDirection.lights_bottom, {
          isGreen: true,
          isRed: false,
          isYellow: false
        })
        break;
      case 3:
        Object.assign(this.setDirection.lights_left, {
          isGreen: true,
          isRed: false,
          isYellow: false
        });
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer();
      }
    }, 1000)
  }

  setYellow(count: any, data: any, initial?: boolean) {
    switch (count) {
      case 0:
        Object.assign(this.setDirection.lights_top, {
          isGreen: false,
          isRed: false,
          isYellow: true
        });

        break;

      case 1:
        Object.assign(this.setDirection.lights_right, {
          isGreen: false,
          isRed: false,
          isYellow: true
        })
        break;
      case 2:
        Object.assign(this.setDirection.lights_bottom, {
          isGreen: false,
          isRed: false,
          isYellow: true
        })
        break;
      case 3:
        Object.assign(this.setDirection.lights_left, {
          isGreen: false,
          isRed: false,
          isYellow: true
        });
    }
    this.yellowInter = setInterval(() => {
      this.count++;
      if (this.count > 3) {
        this.count = 0;
      }
      this.loadData(false);
    }, 5 * 1000)

  }

  pauseTimer() {
    clearInterval(this.interval);
    this.setYellow(this.count, this.getAllData);
  }
}

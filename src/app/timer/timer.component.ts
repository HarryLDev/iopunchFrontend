import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TimerService } from './timer.service';



@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnDestroy {
  constructor(private timerService: TimerService) {}
  seconds = 0;
  minutes = 0;
  hours = 0;
  stringSec = '00';
  stringMin = '00';
  stringHour = '00';
  savedSec = 0;
  savedSecStr = '00';
  savedMin = 0;
  savedMinStr = '00';
  savedHour = 0;
  savedHourstr = '00';
  private animationFrameId: number | null = null;
  isRunning: boolean = false;



  toggleTimer(): void {
    if (this.isRunning === false) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  startTimer(): void {
    const startTime = Date.now();

    const updateTimer = () => {
      const currentTime = Date.now();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000);

      this.hours = Math.floor(elapsedTime / 3600);
      this.minutes = Math.floor((elapsedTime % 3600) / 60);
      this.seconds = elapsedTime % 60;

      this.stringHour = this.hours.toString().padStart(2, '0');
      this.stringMin = this.minutes.toString().padStart(2, '0');
      this.stringSec = this.seconds.toString().padStart(2, '0');

      this.animationFrameId = requestAnimationFrame(updateTimer);
    };

    updateTimer();
    this.isRunning = true;
  }

  stopTimer(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    this.savedHour = this.hours;
    this.savedMin = this.minutes;
    this.savedSec = this.seconds;
    this.savedSecStr = this.savedSec.toString().padStart(2, '0');
    this.savedMinStr = this.savedMin.toString().padStart(2, '0');
    this.savedHourstr = this.savedHour.toString().padStart(2, '0');

    this.isRunning = false;
    this.seconds = 0;
    this.stringSec = this.seconds.toString().padStart(2, '0');
    this.minutes = 0;
    this.stringMin = this.minutes.toString().padStart(2, '0');
    this.hours = 0;
    this.savedHourstr = this.savedHour.toString().padStart(2, '0');

    const savedTime = { hours: this.savedHour, minutes: this.savedMin, seconds: this.savedSec };

    this.timerService.stopTimer({
      hours: this.savedHour,
      minutes: this.savedMin,
      seconds: this.savedSec,
    }).subscribe(
      () => {
        console.log('Timer stopped and values saved successfully');
      },
      (error: any) => {
        console.error('Error saving timer:', error);
      }
    );

  }

  ngOnDestroy(): void {
    this.stopTimer();
  }
}



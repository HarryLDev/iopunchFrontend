import { Component, OnInit } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';
import { timerValues } from '../timer';
import { SavedTimesService } from './saved-times.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saved-times',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saved-times.component.html',
  styleUrl: './saved-times.component.scss'
})
export class SavedTimesComponent implements OnInit {
  times$: Observable<any> | undefined;

  constructor(private savedTimesService: SavedTimesService) { }

  ngOnInit(): void {
    this.times$ = this.savedTimesService.getSavedTimers()
  }

}


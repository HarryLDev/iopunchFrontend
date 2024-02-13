import { Component, OnInit } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';
import { timerValues } from '../timer';
import { SavedTimesService } from './saved-times.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-saved-times',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule ],
  templateUrl: './saved-times.component.html',
  styleUrl: './saved-times.component.scss'
})
export class SavedTimesComponent implements OnInit {

  times$: Observable<any> | undefined ;

  constructor(private savedTimesService: SavedTimesService) { }

  deleteSavedTimer(id: string): void {
    this.savedTimesService.deleteSavedTimer(id).subscribe(
      () => {
        this.times$ = this.savedTimesService.getSavedTimers();
      }
    )
  }

  ngOnInit(): void {
    this.times$ = this.savedTimesService.getSavedTimers()
  }

}



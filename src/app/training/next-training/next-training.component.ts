import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-next-training',
  templateUrl: './next-training.component.html',
  styleUrls: ['./next-training.component.css']
})
export class NextTrainingComponent implements OnInit {

  @Output() beginExercise = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClickStartTraining(): void {
    this.beginExercise.emit();
  }
}

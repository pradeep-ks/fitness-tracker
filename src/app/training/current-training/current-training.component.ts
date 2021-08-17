import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { StopTrainingComponent } from "../stop-training/stop-training.component";

@Component({
  selector: "app-current-training",
  templateUrl: "./current-training.component.html",
  styleUrls: ["./current-training.component.css"],
})
export class CurrentTrainingComponent implements OnInit {
  @Output() stopExercise = new EventEmitter();
  progress: number = 0;
  timeCounter: any;

  constructor(private confirmDialog: MatDialog) {}

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer(): void {
    this.timeCounter = setInterval(() => {
      this.progress += 5;
      if (this.progress === 100) {
        clearInterval(this.timeCounter);
      }
    }, 1000);
  }

  onClickStop(): void {
    clearInterval(this.timeCounter);
    const stopDlg = this.confirmDialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress,
      },
    });
    stopDlg.afterClosed().subscribe((result) => {
      if (result) {
        this.stopExercise.emit();
      } else {
        this.startOrResumeTimer();
      }
    });
  }
}

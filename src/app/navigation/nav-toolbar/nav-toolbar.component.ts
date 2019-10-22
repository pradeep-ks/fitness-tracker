import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.css']
})
export class NavToolbarComponent implements OnInit {

  @Output()
  sidenavToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenavToggle.emit();
  }
}

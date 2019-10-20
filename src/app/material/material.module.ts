import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';

const MaterialModulesList = [
  CommonModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: [MaterialModulesList],
  exports: [MaterialModulesList]
})
export class MaterialModule { }

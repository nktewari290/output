import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
// import { MatLabelModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  // MatLabelModule,
  MatChipsModule,
  MatButtonModule
]

@Component({
  selector: 'app-root',
  imports: [materialModules],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}

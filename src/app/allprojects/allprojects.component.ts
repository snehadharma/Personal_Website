import { Component, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-allprojects',
  imports: [],
  templateUrl: './allprojects.component.html',
  styleUrl: './allprojects.component.css'
})
export class AllprojectsComponent {
  @Input() project_list!: Project;
}

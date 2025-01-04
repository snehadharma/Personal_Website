import { Component } from '@angular/core';
import { AllprojectsComponent } from '../allprojects/allprojects.component';
import {CommonModule} from '@angular/common';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  imports: [AllprojectsComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  project_list: Project = {
    title: 'Evil Hangman',
    photo: 'assets/me.jpg', 
    description: 'This thinaodkfnalksdjnv ajdfakds asdjfh adkjfnakdsjfaka akdjfn.'
  };
}

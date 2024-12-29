import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    {
        path : 'contact-component',
        component : ContactComponent
    }, 
    {
        path : 'projects-component',
        component : ProjectsComponent
    }, 
    {
        path : 'resume-component',
        component : ResumeComponent
    }, 

];

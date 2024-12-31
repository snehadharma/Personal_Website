import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';

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
    {
        path : 'home-component', 
        component : HomeComponent
    }, 
    { path: '',   redirectTo: '/home-component', pathMatch: 'full' }, // redirect to `first-component`

];

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { List1Component } from './list1/list1.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'list1',
    component: List1Component
  },
  {
    path: 'project/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'list1/newform',
    component: NewProjectComponent
  },
  {
    path: 'list1/newform/edit-project',
    component: EditProjectComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

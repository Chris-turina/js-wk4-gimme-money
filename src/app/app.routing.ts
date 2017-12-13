import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { List1Component } from './list1/list1.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

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
    path: 'projectDetail',
    component: ProjectDetailComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

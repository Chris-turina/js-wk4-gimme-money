import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService} from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Project } from '../project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  providers: [ProjectService]
})
export class NewProjectComponent implements OnInit {

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {

  }

  submitForm(title: string, shortDescription: string, companyStarter: string, howMuch: string, backers: number, timeRemaining: number, projectImage: string) {
    var newProject: Project = new Project(title,shortDescription,companyStarter,howMuch,backers,timeRemaining,projectImage);
    this.projectService.addProject(newProject);

  }

  addButtonClicked() {
    this.router.navigate(['/list1'])
  }

}

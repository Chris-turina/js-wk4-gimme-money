import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
      console.log(this.projectToDisplay)
    });
    console.log(this.projectToDisplay)

    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
    console.log(this.projectToDisplay.title)

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService} from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Project } from '../project.model';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.scss'],
  providers: [ProjectService]
})
export class List1Component implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectService: ProjectService) { }

  goToDetailPage(clickedProject) {
    this.router.navigate(['project', clickedProject.$key]);
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}

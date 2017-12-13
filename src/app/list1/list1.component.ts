import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AlbumService} from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.scss']
})
export class List1Component implements OnInit {

  constructor(private router: Router) { }

  goToDetailPage(clickedProject) {
    this.router.navigate(['project', clickedProject]);
  };

  ngOnInit() {
  }

}

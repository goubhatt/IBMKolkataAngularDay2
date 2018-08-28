import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../services/actor.service';

import { Actor } from '../../models/Actor';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: [
    './actorlist.component.css',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    '../../../../node_modules/font-awesome/css/font-awesome.min.css'
  ]
})
export class ActorlistComponent implements OnInit {

  actors: Actor[];
  tempActor: Actor;
  selectedIndex: number;

  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.actors = this.actorService.getActorList();
    this.selectedIndex = -1;
  }

  deleteActor(index) {
    this.actorService.deleteActor(index);
    this.selectedIndex = -1;
  }

  editActor(index) {
    this.selectedIndex = index;
    this.tempActor = Object.assign({}, this.actors[index]);
  }

  saveActor(index) {
    this.actorService.saveActor(index, this.tempActor);
    this.selectedIndex = -1;
  }

  cancelEdit() {
    this.selectedIndex = -1;
  }
}

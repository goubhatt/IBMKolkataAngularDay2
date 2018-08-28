import { Injectable } from '@angular/core';

// Import the Actor model

import { Actor } from '../models/Actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private actorList: Actor[];

  constructor() {
    this.actorList = [
      { name: 'Amitabh Bachhan', city: 'Mumbai' },
      { name: 'Kamal Hasan', city: 'Chennai' },
      { name: 'Madhuri Dixit', city: 'Mumbai' },
      { name: 'Nandita Das', city: 'Kolkata' },
      { name: 'Rajnikant', city: 'Chennai' }
    ];
   }

   getActorList() {
     return this.actorList;
   }

   addActor(actor: Actor) {
     this.actorList.push(actor);
   }

   deleteActor(index: number) {
     this.actorList.splice(index, 1);
   }

   saveActor(index: number, newActor: Actor) {
     this.actorList.splice(index, 1, newActor);
   }

}

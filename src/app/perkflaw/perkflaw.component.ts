import { Component, OnInit, Input } from '@angular/core';
import {WormStatus} from '../wormStatus';
import {PerkFlaw} from '../perkflaw';
import {PerkflawService} from '../perkflaw.service';

@Component({
  selector: 'app-perkflaw',
  templateUrl: './perkflaw.component.html',
  styleUrls: ['./perkflaw.component.css']
})
export class PerkflawComponent implements OnInit {
  @Input() wormStatus: WormStatus;
  perkFlaws: PerkFlaw[];
  constructor(private perkFlawService: PerkflawService) { }

  ngOnInit() {
    this.getPerkFlaws();
  }

  getPerkFlaws(){
    this.perkFlaws = this.perkFlawService.getPerkFlaws();
  }

  addPerkFlaw(perkFlaw: PerkFlaw) {

    // Check if this shard is already in the list of shards.
    var alreadyAdded = this.wormStatus.selectedPerkFlaws.some(function (s) {
      return s == perkFlaw.id;
    });
    
    // If it isn't already added, add it to the list, provided it validates.
    if (!alreadyAdded) {
      if ((perkFlaw.shardPointChange + this.wormStatus.shardPoints >= 0) && (perkFlaw.characterPointChange + this.wormStatus.characterPoints >= 0))  {
        this.wormStatus.shardPoints += perkFlaw.shardPointChange;
        this.wormStatus.characterPoints += perkFlaw.characterPointChange;
        this.wormStatus.selectedPerkFlaws.push(perkFlaw.id);
      }
      else{
        console.log("Not enough points!") // TODO: Create better messenging.
      }
    }
    // Otherwise, remove it from the list.
    else
    {
      if ((this.wormStatus.shardPoints - perkFlaw.shardPointChange >= 0) && (this.wormStatus.characterPoints - perkFlaw.characterPointChange >= 0))  {
        var toRemove = this.wormStatus.selectedPerkFlaws.indexOf(perkFlaw.id);
        this.wormStatus.shardPoints -= perkFlaw.shardPointChange;
        this.wormStatus.characterPoints -= perkFlaw.characterPointChange;
        this.wormStatus.selectedPerkFlaws.splice(toRemove, 1);
      }
      else{
        console.log("Removing this Perk or Flaw would put you below zero points!");
      }
    }
  }


}

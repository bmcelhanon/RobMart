import { Component, OnInit, Input } from '@angular/core';
import { Shard } from '../shard';
import { WormStatus, WormSelectedShard } from '../wormStatus';

@Component({
  selector: 'app-shard-detail',
  templateUrl: './shard-detail.component.html',
  styleUrls: ['./shard-detail.component.css']
})
export class ShardDetailComponent implements OnInit {
  @Input() selectedShard: Shard;
  @Input() wormStatus: WormStatus;

  get shardStatus(): number {
    var selectedShard = this.selectedShard;
    var references = this.wormStatus.selectedShards.filter(function (s) {
      return s.id == selectedShard.id;
    });

    if (references.length > 0) {
      if (references[0].secondTrigger == true)
        return 2;
      else
        return 1;
    }
    else {
        return 0;
    }
  }
  constructor() {}
  
  ngOnInit() {
  }

  add() {
    if (this.shardStatus == 0) {
      if (this.selectedShard.pointCost <= this.wormStatus.shardPoints && this.wormStatus.permittedShardCount > 0) {
        this.wormStatus.shardPoints -= this.selectedShard.pointCost;
        this.wormStatus.permittedShardCount -= 1;
        var wormSelectedShard: WormSelectedShard = {
          id : this.selectedShard.id,
          secondTrigger: false,
          subPowers: []
        }
        this.wormStatus.selectedShards.push(wormSelectedShard);
      }
      else{
        console.log("Not enough shard points!") // TODO: Create better messenging.
      }
    }
  }

  remove() {
    if (this.shardStatus == 2){
      this.wormStatus.shardPoints += 3;
      this.wormStatus.characterPoints += 4;
    }

    if (this.shardStatus >= 1){
      this.wormStatus.shardPoints += this.selectedShard.pointCost;
      this.wormStatus.permittedShardCount += 1;
    }
  
    // If it isn't already added, add it to the list, provided it validates.
    while (this.shardStatus > 0) {
      var id = this.selectedShard.id
      var shardToRemove = this.wormStatus.selectedShards.filter(function (s) {
        return s.id == id;
      });
      var toRemove = this.wormStatus.selectedShards.indexOf(shardToRemove[0]);
      this.wormStatus.selectedShards.splice(toRemove, 1);
    }
  }

  secondTrigger(){
    var hasResources = this.wormStatus.characterPoints >= 4 && this.wormStatus.shardPoints >= 3
    if (this.shardStatus == 1 && hasResources){
      this.wormStatus.shardPoints -= 3;
      this.wormStatus.characterPoints -= 4;
      var id = this.selectedShard.id
      var shardToUpdate = this.wormStatus.selectedShards.filter(function (s) {
        return s.id == id;
      });
      var shardToUpdateIndex = this.wormStatus.selectedShards.indexOf(shardToUpdate[0]);
      this.wormStatus.selectedShards[shardToUpdateIndex].secondTrigger = true;
    }
  }
}

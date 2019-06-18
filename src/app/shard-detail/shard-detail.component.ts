import { Component, OnInit, Input } from '@angular/core';
import { Shard } from '../shard';
import { WormStatus } from '../wormStatus';

@Component({
  selector: 'app-shard-detail',
  templateUrl: './shard-detail.component.html',
  styleUrls: ['./shard-detail.component.css']
})
export class ShardDetailComponent implements OnInit {
  @Input() selectedShard: Shard;
  @Input() wormStatus: WormStatus;

  constructor() {}

  ngOnInit() {}

  getButtonText() : string {
    var selectedShard = this.selectedShard;
    // Check if this shard is already in the list of shards.
    var alreadyAdded = this.wormStatus.selectedShards.some(function (s) {
      return s == selectedShard.id;
    });

    if (alreadyAdded){
      return "Remove";
    }
    return "Add";
  }

  toggle() {
    var selectedShard = this.selectedShard;
    // Check if this shard is already in the list of shards.
    var alreadyAdded = this.wormStatus.selectedShards.some(function (s) {
      return s == selectedShard.id;
    });
    
    // If it isn't already added, add it to the list, provided it validates.
    if (!alreadyAdded) {
      if (this.selectedShard.pointCost <= this.wormStatus.shardPoints) {
        this.wormStatus.shardPoints -= this.selectedShard.pointCost;
        this.wormStatus.selectedShards.push(this.selectedShard.id);
      }
      else{
        console.log("Not enough shard points!") // TODO: Create better messenging.
      }
    }
    // Otherwise, remove it from the list.
    else
    {
      var toRemove = this.wormStatus.selectedShards.indexOf(this.selectedShard.id);
      this.wormStatus.shardPoints += this.selectedShard.pointCost;
      this.wormStatus.selectedShards.splice(toRemove, 1);
    }
  }
}

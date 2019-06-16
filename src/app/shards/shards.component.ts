import { Component, OnInit, Input } from '@angular/core';
import { Shard } from '../shard';
import { ShardService } from '../shard.service';
import { WormStatus } from '../wormStatus';

@Component({
  selector: 'app-shards',
  templateUrl: './shards.component.html',
  styleUrls: ['./shards.component.css']
})
export class ShardsComponent implements OnInit {
  @Input() wormStatus: WormStatus;
  shards: Shard[];
  constructor(private shardService:ShardService) { }

  ngOnInit() {
    this.getShards();
  }

  getShards(){
    this.shards = this.shardService.getShards();
  }

  addShard(shard: Shard) {

    // Check if this shard is already in the list of shards.
    var alreadyAdded = this.wormStatus.selectedShards.some(function (s) {
      return  s == shard.id;
    });
    
    // If it isn't already added, add it to the list, provided it validates.
    if (!alreadyAdded) {
      if (shard.pointCost <= this.wormStatus.shardPoints) {
        this.wormStatus.shardPoints -= shard.pointCost;
        this.wormStatus.selectedShards.push(shard.id);
      }
      else{
        console.log("Not enough shard points!") // TODO: Create better messenging.
      }
    }
    // Otherwise, remove it from the list.
    else
    {
      var toRemove = this.wormStatus.selectedShards.indexOf(shard.id);
      this.wormStatus.shardPoints += shard.pointCost;
      this.wormStatus.selectedShards.splice(toRemove, 1);
    }
  }
}

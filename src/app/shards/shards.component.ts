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
  shardTypes: string[];
  selectedShardType: number = 1;
  selectedShard: Shard = null;
  constructor(private shardService:ShardService) { }

  ngOnInit() {
    this.getShards();
    this.getShardTypes();
  }

  getShards(){
    var shardType = this.selectedShardType;
    this.shards = this.shardService.getShards().filter(function(shard){
      return shard.type == shardType;
    });
  }

  getShardTypes(){
    this.shardTypes = this.shardService.getShardTypes();
  }

  selectShard(shard: Shard){
    this.selectedShard = shard;
    this.selectShardType(this.shardTypes[shard.type-1])
  }

  selectShardType(shardType: string){
    this.selectedShardType = this.shardTypes.indexOf(shardType)+1;
    this.getShards();
  }

  getFullShard(shardId: number){
    var references = this.shardService.getShards().filter(function (s) {
      return s.id == shardId;
    });
    return references[0]
  }

  addSlot(){
    if (this.wormStatus.shardPoints >= 1){
      this.wormStatus.shardPoints -= 1;
      this.wormStatus.permittedShardCount += 1;
    }
  }

  removeSlot(){
    if (this.wormStatus.permittedShardCount >= 1 && (this.wormStatus.permittedShardCount + this.wormStatus.selectedShards.length > 3)){
      this.wormStatus.shardPoints += 1;
      this.wormStatus.permittedShardCount -= 1;
    }
  }
}

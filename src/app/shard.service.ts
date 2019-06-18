import { Injectable } from '@angular/core';
import { Shard } from './shard';
import { SHARDLIST, SHARDTYPES } from './data-shardlist';

@Injectable({
  providedIn: 'root'
})
export class ShardService {

  constructor() { }

  getShards() : Shard[] {
    return SHARDLIST;
  }

  getShardTypes() : string[] {
    return SHARDTYPES;
  }
}

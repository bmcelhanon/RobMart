import { Injectable } from '@angular/core';
import { Shard } from './shard';
import { SHARDLIST } from './data-shardlist';

@Injectable({
  providedIn: 'root'
})
export class ShardService {

  constructor() { }

  getShards() : Shard[] {
    return SHARDLIST;
  }
}

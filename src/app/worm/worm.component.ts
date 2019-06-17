import { Component, OnInit, Input } from '@angular/core';
import { WormStatus } from '../wormStatus';

@Component({
  selector: 'app-worm',
  templateUrl: './worm.component.html',
  styleUrls: ['./worm.component.css']
})
export class WormComponent implements OnInit {

  wormStatus: WormStatus = new WormStatus();
  selectedView: number = 0;
  constructor() { 
    this.wormStatus.characterPoints = 15;
    this.wormStatus.shardPoints = 15;
    this.wormStatus.selectedShards = [];
    this.wormStatus.selectedPerkFlaws = [];
  }

  ngOnInit() {
  }
}

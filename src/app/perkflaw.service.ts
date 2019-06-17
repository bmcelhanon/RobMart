import { Injectable } from '@angular/core';
import { PerkFlaw } from './perkflaw';
import { PERKFLAWLIST } from './data-perkflaw';

@Injectable({
  providedIn: 'root'
})
export class PerkflawService {

  constructor() { }

  getPerkFlaws() : PerkFlaw[] {
    return PERKFLAWLIST;
  }
}

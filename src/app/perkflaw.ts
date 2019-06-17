export class PerkFlaw {
    id: number;
    name: string;
    description: string;
    characterPointChange: number;
    shardPointChange: number;
    limit: number;
    requires: number[];
    incompatible: number[];
}
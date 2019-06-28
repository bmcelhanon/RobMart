export class WormStatus {
    characterPoints: number;
    shardPoints: number;
    selectedShards: WormSelectedShard[];
    selectedPerkFlaws: number[];
    permittedShardCount: number;
}

export class WormSelectedShard{
    id: number;
    secondTrigger: boolean;
    subPowers: number[];
}
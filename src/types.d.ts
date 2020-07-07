interface CreepMemory {
    role: string;
    room?: string;
    working: boolean;
    sourceId?: string;
    nextRoom?: string;
    claimRoomId?: string;
    homeRoom?: string;
    mineRoom?: string;
}

interface Memory {
    uuid: number;
    log: any;
    scoutData: any;
    GameStage: number;
}

interface StructureSpawn {
    SpawnWorker(energy: number, role: string): void;
    SpawnMiner(energy: number, sourceId: string): void;
    SpawnCarry(energy: number): void;
    SpawnScout(): void;
    SpawnDistanceMiner(energy: number, homeRoom: string, mineRoom: string, sourceId: string): void;
}

// `global` extension samples
declare namespace NodeJS {
    interface Global {
        log: any;
    }
}

import { ErrorMapper } from "utils/ErrorMapper";

export const loop = ErrorMapper.wrapLoop(() => {

  console.log("asd");
    // ---------------------------------------------------------------------------------------------------------
    // Performance Timer
    var startGlobal = new Date().getTime();

    // ---------------------------------------------------------------------------------------------------------
    // Resource Monitor
    var endGlobal = new Date().getTime();
    var timeGlobal = endGlobal - startGlobal;

    var infoRoom = Game.spawns.Nexus.room.name;

    Game.rooms[infoRoom].visual.text('⏳ ' + 'Performance: ' + timeGlobal + 'ms', 0, 1, { align: 'left', opacity: 1 });
    Game.rooms[infoRoom].visual.text(
        '⭐' + 'Energy: ' + Game.rooms[infoRoom].energyAvailable + ' / ' + Game.rooms[infoRoom].energyCapacityAvailable,
        0,
        2,
        { align: 'left', opacity: 1 }
    );
    Game.rooms[infoRoom].visual.text('🚀' + 'Creeps: ' + Object.keys(Memory.creeps).length, 0, 3, {
        align: 'left',
        opacity: 1
    });
});

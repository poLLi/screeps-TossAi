export const NexusBO: any = {
    // Nexsus Center Position = { Spawn1.X, Spawn.Y - 1 }

    // RCL1: 1x Spawn
    RCL1: {
        Spawn: [{ x: 0, y: 0 }]
    },

    // RCL2: 5x Extensions, 3x Roads
    RCL2: {
        Extensions: [
            { x: -2, y: 1 },
            { x: -3, y: 1 },
            { x: -3, y: 2 },
            { x: -3, y: 3 },
            { x: -2, y: 3 }
        ],
        Roads: [
            { x: 0, y: 2 },
            { x: -1, y: 1 },
            { x: -2, y: 2 }
        ]
    },

    // RCL3: 5x Extensions, 10x Roads, 1x Container, 1x Tower
    RCL3: {
        Extensions: [
            { x: 2, y: 1 },
            { x: 2, y: 3 },
            { x: 3, y: 1 },
            { x: 3, y: 2 },
            { x: 3, y: 3 }
        ],
        Roads: [
            { x: -2, y: 0 },
            { x: -1, y: 1 },
            { x: 0, y: -2 },
            { x: 1, y: -1 },
            { x: 2, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 1, y: 3 },
            { x: 0, y: 4 },
            { x: -1, y: 3 }
        ],
        container: [{ x: 1, y: 2 }],
        tower: [{ x: 0, y: -1 }]
    },

    // RCL4: 10x Extensions, 12x Roads, 1x Storage
    RCL4: {
        Extensions: [
            { x: -1, y: 4 },
            { x: -2, y: 5 },
            { x: -1, y: 5 },
            { x: -4, y: 5 },
            { x: -3, y: 6 },
            { x: 1, y: 4 },
            { x: 2, y: 5 },
            { x: 1, y: 5 },
            { x: 3, y: 6 },
            { x: 4, y: 5 }
        ],
        Roads: [
            { x: -2, y: 4 },
            { x: -3, y: 5 },
            { x: 2, y: 4 },
            { x: 3, y: 5 },
            { x: -3, y: 0 },
            { x: -4, y: 0 },
            { x: -5, y: 0 },
            { x: -6, y: 0 },
            { x: 3, y: 0 },
            { x: 4, y: 0 },
            { x: 5, y: 0 },
            { x: 6, y: 0 }
        ],
        Storage: [{ x: 0, y: 0 }]
    },

    // RCL5: 10x Extensions, 1x Link, 1x Tower, 15x Roads
    RCL5: {
        Extensions: [
            { x: -2, y: 6 },
            { x: -4, y: 4 },
            { x: 2, y: 6 },
            { x: 4, y: 4 },
            { x: -5, y: 6 },
            { x: -5, y: 7 },
            { x: -4, y: 7 },
            { x: 5, y: 6 },
            { x: 5, y: 7 },
            { x: 4, y: 7 }
        ],
        Roads: [
            { x: -3, y: 7 },
            { x: -4, y: 6 },
            { x: -5, y: 5 },
            { x: 3, y: 7 },
            { x: 4, y: 6 },
            { x: 5, y: 5 },
            { x: -3, y: 4 },
            { x: -4, y: 3 },
            { x: 3, y: 4 },
            { x: 4, y: 3 },
            { x: 0, y: 5 },
            { x: -1, y: 6 },
            { x: 1, y: 6 },
            { x: -1, y: 7 },
            { x: 1, y: 7 }
        ],
        Tower: [{ x: 0, y: 6 }],
        Link: [{ x: -1, y: 2 }]
    },

    // RCL6: 10x Extensions, 1x Terminal, 8x Road
    RCL6: {
        Extensions: [
            { x: -4, y: 2 },
            { x: -5, y: 1 },
            { x: -6, y: 1 },
            { x: -6, y: 2 },
            { x: -5, y: 3 },
            { x: 4, y: 2 },
            { x: 5, y: 1 },
            { x: 6, y: 1 },
            { x: 6, y: 2 },
            { x: 5, y: 3 }
        ],
        Roads: [
            { x: -5, y: 2 },
            { x: 5, y: 2 },
            { x: 0, y: -3 },
            { x: 0, y: -4 },
            { x: -2, y: -2 },
            { x: 2, y: 2 },
            { x: -3, y: -3 },
            { x: 3, y: 3 }
        ],
        Terminal: [{ x: 0, y: -3 }]
    },

    // RCL6: 10x Extensions, 1x Spawn, 2x Road
    RCL7: {
        Extensions: [
            { x: -5, y: 4 },
            { x: -6, y: 4 },
            { x: -6, y: 5 },
            { x: 5, y: 4 },
            { x: 6, y: 4 },
            { x: 6, y: 5 },
            { x: -2, y: 7 },
            { x: -3, y: 8 },
            { x: 2, y: 7 },
            { x: 3, y: 8 }
        ],
        Roads: [
            { x: -1, y: 8 },
            { x: 1, y: 8 }
        ],
        Spawn: [{ x: -1, y: 0 }]
    },

    // RCL6: 10x Extensions, 1x Spawn
    RCL8: {
        Extensions: [
            { x: -4, y: 1 },
            { x: -6, y: 3 },
            { x: -6, y: 6 },
            { x: -4, y: 8 },
            { x: -2, y: 8 },
            { x: 4, y: 1 },
            { x: 6, y: 3 },
            { x: 6, y: 6 },
            { x: 4, y: 8 },
            { x: 2, y: 8 }
        ],
        Spawn: [{ x: 1, y: 0 }]
    }
};

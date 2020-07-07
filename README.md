# TossAi

> The ONE!, the one AI that will set doom to all mankind.

## What is TossAi?

TossAi is a Screeps "AI" named after the Protoss Race in Starcraft. With their highly advanced technology and potent psionic abilities, the Protoss once considered themselves the most powerful species in the galaxy. Their war with the Zerg has proved otherwise: even the most individually capable warrior cannot overcome such insurmountable numbers. The lesson has been hard one for the Protoss, for their society is built around core philosophies that have been rigidly adhered to for over a thousand years. However, the Zerg invasion of the Protoss homeworld of Aiur has brought the race to a crossroads: the Protoss must embrace change if they are to survive and prevail. Now new tactics and technologies are being brought to bear in the increasingly desperate battle against the Zerg, and ancient, terrible weapons the Protoss set aside long ago are being unleashed.

### What is Screeps?

Screeps is an [MMO strategy game for programmers](https://screeps.com/). The core objective is to expand your colony, gathering resources and fighting other players along the way. To control your units, you code an AI in JavaScript; everything from moving, mining, building, fighting, and trading is entirely driven by your code. Because Screeps is an MMO, it takes place on a single server that runs 24/7, populated by every other player and their army of creeps. When you log off, your population continues buzzing away with whatever task you set them. Screeps pits your programming prowess head-to-head with other people to see who can think of the most efficient methods of completing tasks or imagine new ways to defeat enemies.

### Can I run PoLLi-MIND myself?

If u dare so, try it! BUT... Scripting your own AI for Screeps is probitly the better way to go.

## Installing

For a more detailed description on how to run it, look at the [Screeps-Typescript-Starter Template](https://github.com/screepers/screeps-typescript-starter).

1. Clone the repo
2. run:

```
npm install
```

3. Rename the "screeps.example.json" to "screeps.json"
4. Edit the "screeps.json"

```
{
    "pserver": {
        "email": YOUR LOGIN NAME
        "password": YOUR LOIN PASSWORD
        "protocol": "http",
        "hostname": "YOUR.SERVER.IP.HERE",
        "port": 21025,
        "path": "/",
        "branch": "/main" // <---- set a branch where u wanno push it to!
    }
}
```

5. run:

```
npm run watch
```

6. Have fun!

## Build with

-   [Screeps-Typescript-Starter Template](https://github.com/screepers/screeps-typescript-starter)

## Dependencies

You will need:

-   Node.JS (10.x)
-   Package Manager (Yarn or npm)
-   Rollup CLI (Optional, install via npm install -g rollup)

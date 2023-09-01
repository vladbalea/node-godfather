
# Godfather

Node.js framework for building SA-MP and open.mp scripts with the [samp-node](https://github.com/AmyrAhmady/samp-node) plugin.


## Installation

```bash
npm install node-godfather
```
    
## Usage example

```typescript
import { PlayerEvent, DialogStyleEnum } from "godfather"

PlayerEvent.connect((player) => {
    player.setSpectating(true)
    
    player.showDialog(DialogStyleEnum.MSGBOX, "Hello", "Do you want to access the server?", "Spawn", "Leave", ((response) => {
        if (!response) {
            return player.kick()
        }
        player.sendMessage("Welcome!")
        player.setSpawnInfo(0, 101, { x: 0, y: 0, z: 3 }, 3)

        player.world = 0
        player.interior = 0
        player.health = 100
        player.armour = 0
    
        player.setSpectating(false)
    }))
})

PlayerEvent.requestClass((player) => {
    player.spawn()
})
```

# Open Godfather :warning: Unstable & Not Complete :warning:

Fully-typed Node.js library for building open.mp scripts with the [samp-node](https://github.com/AmyrAhmady/samp-node) plugin.

## Getting started

One-step installation, you don't need to do anything manually. Run the command below to start a Typescript project in your current directory.

```bash
npx github:vladgitx/og-cli
```

That's it! You can now edit `src/index.ts` and start the server with `npm run start`. You can find more about the Open Godfather CLI [here](https://github.com/vladgitx/og-cli).

### You know what you're doing?

If you don't want to use the CLI, you can just run `npm install github:vladgitx/open-godfather` in your existing project and do the rest by yourself.
    
## Usage example

The player is immediately placed into spectate mode when they connect, and all that's left is to spawn them. This eliminates class selection and team assignments, simplifying the initialization process.

```typescript
import { og } from "open-godfather"

og.events.on("playerConnect", async (player) => {
    const result = await player.dialog.show.messageBox("Hey", "Wanna spawn?", "Yes", "No")
	
    if (result?.action) {
        player.spawn(new og.Vector3(1664.464, 1410.141, 10.642))
        player.sendMessage("Welcome to the server!")
    }
})
```

### Commands

The player can spawn a car with a specific model ID using the "/car", "/vehicle", or "/veh" command. If the model is not specified, it will use 411 (Infernus).

```typescript
og.commands.add("/car", ["/vehicle", "/veh"], (player, modelParam = "411") => {
    const vehicle = og.vehicles.new(parseInt(modelParam), player.position, player.rotation)

    if (vehicle) {
        player.putIntoVehicle(vehicle)

        vehicle.params.engine = "on"
        vehicle.params.lights = "on"
    }
})
```

## Contributing

Contributions are always welcome, since there's plenty of work ahead (pickups, checkpoints, etc.). This project follows a very consistent code structure, so review existing modules before contributing.

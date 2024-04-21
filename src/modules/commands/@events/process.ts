import { playersMp } from "@/singletons/players"
import { SampEvents } from "@/wrapper"
import { commandFactory } from "../factory"
import { dispatcher } from "@/modules/dispatcher"

SampEvents.onPlayerCommandText((playerId: number, cmdText: string) => {
    const player = playersMp.at(playerId)

    if (!player) {
        return 1
    }

    const params = cmdText.trim().split(/\s+/)
    const commandStr = params[0].toLowerCase()

    params.shift()

    if (commandStr === "/") {
        return 1
    }

    const command = commandFactory.at(commandStr)

    if (command) {
        dispatcher.emit("playerCommand", player, commandStr, command, () => command.callback(player, ...params))
    } else {
        dispatcher.emit("playerCommand", player, commandStr, undefined, () => {})
    }

    return 1
})

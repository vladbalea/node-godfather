import { dispatcher } from "@/lib/dispatcher"
import { vehicles } from "../handler"
import { players } from "@/components/player"
import { gameCallbacks } from "@/wrapper/game"

// "OnVehicleSpawn" is a misleading name because it's called only when the vehicle RESPAWNS
gameCallbacks.onVehicleSpawn((vehicleId) => {
    const vehicle = vehicles.pool.at(vehicleId)

    if (vehicle) {
        vehicle.params.reset()
        vehicle.params.windows.reset()

        dispatcher.emit("vehicleRespawn", vehicle)
    }
})

gameCallbacks.onVehicleDeath((vehicleId, closestPlayerId) => {
    const vehicle = vehicles.pool.at(vehicleId)
    const closestPlayer = players.pool.at(closestPlayerId)

    if (vehicle) {
        dispatcher.emit("vehicleDeath", vehicle, closestPlayer)
    }
})

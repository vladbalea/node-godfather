import { Vector3 } from "../modules/vector3"
import { type VehicleParamsType } from "../modules/vehicle"

export const CONFIG = {
    player: {
        team: 0,
        color: "FFFFFF",
        skin: 0,
        cash: 0,
        spawn: {
            position: new Vector3(0, 0, 3),
            rotation: 0,
            world: 0,
            interior: 0,
        },
    },
    vehicle: {
        interior: 0,
        plate: "",
        primaryColor: -1,
        secondaryColor: -1,
        respawnDelay: -1,
        siren: false,
        params: {
            engine: "off",
            lights: "off",
            alarm: "off",
            doors: "unlocked",
            bonnet: "closed",
            boot: "closed",
            objective: "off",
        } as VehicleParamsType,
    },
    message: {
        color: "FFFFFF",
    },
    chatBubble: {
        color: "FFFFFF",
        distance: 12,
        expire: 5000,
    },
    playerAttachedObjects: {
        limit: 10,
    },
}

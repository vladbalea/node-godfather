import { nativeFunctions } from "@/natives"
import { type PlayerMp } from "../instance"

export class PlayerAnimations {
    constructor(private player: PlayerMp) {}

    set(
        library: string,
        name: string,
        speed: number,
        loop: boolean,
        lockX: boolean,
        lockY: boolean,
        freeze: boolean,
        time: number,
        forceSync = true,
    ) {
        nativeFunctions.applyAnimation(this.player.id, library, name, speed, loop, lockX, lockY, freeze, time, forceSync)
    }

    clear() {
        nativeFunctions.clearAnimations(this.player.id, true)
    }

    get currentIndex() {
        return nativeFunctions.getPlayerAnimationIndex(this.player.id)
    }
}

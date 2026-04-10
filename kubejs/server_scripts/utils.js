let $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")
let $SoundSource = Java.loadClass("net.minecraft.sounds.SoundSource")

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function milfPlaySound(/**@type {$BlockRightClickedKubeEvent_} */ event, resourceLocation, args){
    args = args || {}
    let level = event.level
    let player = args.playLocal ? event.player : null
    let pos = args.pos ? args.pos : event.player.blockPosition()
    let source = args.source ? $SoundSource[args.source] : $SoundSource.BLOCKS

    let soundEvent = $BuiltInRegistries.SOUND_EVENT.get(resourceLocation)    

    level["playSound(net.minecraft.world.entity.player.Player,net.minecraft.core.BlockPos,net.minecraft.sounds.SoundEvent,net.minecraft.sounds.SoundSource,float,float)"]
        (player, pos, soundEvent, source, args.volume || 1, args.pitch || 1)
}
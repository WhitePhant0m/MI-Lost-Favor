let $HitResult$Type = Java.loadClass("net.minecraft.world.phys.HitResult$Type")

ClientEvents.highlight(event =>{
    if (event.player.mainHandItem.id != "milf:mi_upgrader") return
    if (event.client.hitResult.type != $HitResult$Type.BLOCK) return
    if (!Client.level.getBlock(/**@type {$BlockHitResult_} */(Client.hitResult).blockPos).blockState.block.hasTag("milf:upgradable")) return
    
    event.addTargetBlock(0xc6b2db)
})


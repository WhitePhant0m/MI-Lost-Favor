const $ChunkPos = Java.loadClass("net.minecraft.world.level.ChunkPos")

BlockEvents.rightClicked("kubejs:chunk_flag", event =>{
    if(event.getHand()=="OFF_HAND") event.cancel()
    const chunkManager = $FTBChunksAPI.getManager()
    const currentChunk = chunkManager.getChunk($ChunkDimPos(event.player))
    const blockChunkPos = new $ChunkPos(event.block.getPos())
    if(event.block.getProperties().enabled == "false"){
        event.block.set(event.block.id, Object.assign({}, event.block.getProperties(), {enabled:true}))
        //chunkManager.getChunk($ChunkDimPos(event.player)).teamData.claim(event.player, $ChunkDimPos(event.player), true)
        $FTBChunksAPI.claimAsPlayer(event.player, event.level.dimension, blockChunkPos, false);
        sendImmersiveMessage(Text.translatable("milf.flags.claimed"), event.getPlayer(), defaultChunkClaimNotificationStyle, event)     
        
    } else if (event.block.getProperties().enabled == "true"){
        if (chunkManager.getChunk($ChunkDimPos(event.level, event.block.pos))){
            if (chunkManager.getChunk($ChunkDimPos(event.level, event.block.pos)).teamData.team.getRankForPlayer(event.player.uuid).isAllyOrBetter()) {
                chunkManager.getChunk($ChunkDimPos(event.level, event.block.pos)).unclaim(event.player.createCommandSourceStack(), true)
                event.block.set(event.block.id, Object.assign({}, event.block.getProperties(), {enabled:false}))
                sendImmersiveMessage(Text.translatable("milf.flags.unclaimed"), event.getPlayer(), defaultChunkClaimNotificationStyle, event)
            }
        }
    }
})

BlockEvents.placed("kubejs:chunk_flag", event =>{
    const chunkManager = $FTBChunksAPI.getManager()
    const blockChunkPos = new $ChunkPos(event.block.getPos())
    $FTBChunksAPI.claimAsPlayer(event.player, event.level.dimension, blockChunkPos, false);
    const color = chunkManager.getChunk($ChunkDimPos(event.level, event.block.pos)).teamData.team.coloredName.getStyle().getColor().getArgb()
    //console.log(chunkManager.getChunk($ChunkDimPos(event.level, event.block.pos)).teamData.team.coloredName.getStyle().getColor().getIntValue())
    sendImmersiveMessage(Text.translatable("milf.flags.claimed"), event.getPlayer(), Object.assign({}, defaultChunkClaimNotificationStyle, {background:{borderTopColor:color}}) , event)    
})

BlockEvents.broken("kubejs:chunk_flag", event =>{
    const chunkManager = $FTBChunksAPI.getManager()
    event.block.set(event.block.id, Object.assign({}, event.block.getProperties(), {enabled:false}))
    if (chunkManager.getChunk($ChunkDimPos(event.level, event.block.pos))){
        if (chunkManager.getChunk($ChunkDimPos(event.level, event.block.pos)).teamData.team.getRankForPlayer(event.player.uuid).isAllyOrBetter()) {
            chunkManager.getChunk($ChunkDimPos(event.level, event.block.pos)).unclaim(event.player.createCommandSourceStack(), true)
            sendImmersiveMessage(Text.translatable("milf.flags.unclaimed"), event.getPlayer(), defaultChunkClaimNotificationStyle, event)
        }
    }     
    
})

function gradientToMutableComponent(component, from, to){
    return Component.ofString(`<grad from=${from} to=${to} hue uni>`).append(component).append(Text.ofString(`</grad>`))
}



const defaultChunkClaimNotificationStyle = {
    anchor:"CENTER_CENTER",
    slideIn:"down",
    slideOut:"down",
    slideInDuration:0.7,
    slideOutDuration:0.4,
    //slideOut:"right",
    typewriter:{speed:1.5, sound:"LOWSHORT", centerAligned:true},
    fadeIn:1,
    fadeOut:0.3,
    background:true,
    y:170,
    queue:false,
    size:2,
    duration:1.5
}
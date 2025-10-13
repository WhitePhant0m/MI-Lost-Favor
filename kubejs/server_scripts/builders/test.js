const $FTBChunksAPI = Java.loadClass("dev.ftb.mods.ftbchunks.api.FTBChunksAPI").api()
const $ChunkDimPos = Java.loadClass("dev.ftb.mods.ftblibrary.math.ChunkDimPos")
const placerBlocks = global.AnotherDefinitelyUniqueNameForPlacerBlocksThisTime

const angleToFacing = {
    0:"east",90:"north",180:"west",270:"south",
    "east":0,"north":90,"west":180,"south":270
}

BlockEvents.rightClicked(placerBlocks, event => {
    if(event.getHand()=="OFF_HAND") event.cancel()

    //#region FTB chunks stuff
    const chunkManager = $FTBChunksAPI.getManager()
    const currentChunk = chunkManager.getChunk($ChunkDimPos(event.player))
    for(let i = -1;i <= 1; i++){
        for(let k = -1;k <= 1; k++){
            if (chunkManager.getChunk($ChunkDimPos(event.player).offset(i,k))){
                //if (chunkManager.getChunk($ChunkDimPos(event.player).offset(i,k)).teamData.team.getRankForPlayer(event.player.uuid).isAllyOrBetter()) console.log("ally");
                if (!chunkManager.getChunk($ChunkDimPos(event.player).offset(i,k)).teamData.team.getRankForPlayer(event.player.uuid).isAllyOrBetter()) event.cancel()
            }
        }
    }
    //#endregion

    //#region variables
    const templateName = event.block.getId().toString().slice(7, -7)
    const template = NBTIO.read(`kubejs/data/immersiveengineering/structure/multiblocks/${templateName}.nbt`)

    const playerFacing = event.player.getHorizontalFacing()
    const blockFacing = event.block.getProperties().facing

    const angle = angleToFacing[playerFacing]
    const angleRad = angle * (Math.PI / 180)

    const blockAngle = angleToFacing[blockFacing]
    const blockAngleRad = blockAngle * (Math.PI / 180)

    const structureVec3i = Vec3i(template.size[0], template.size[1], template.size[2])
    const structureVec3irotated_player = rotateVec3i(structureVec3i, angleRad)
    const structureVec3irotated_block = rotateVec3i(structureVec3i, blockAngleRad)
    const structureX_player = structureVec3irotated_player.getX(), structureY_player = structureVec3irotated_player.getY(), structureZ_player = structureVec3irotated_player.getZ()
    const structureX_block = structureVec3irotated_block.getX(), structureY_block = structureVec3irotated_block.getY(), structureZ_block = structureVec3irotated_block.getZ()

    const offsetVec3i = new Vec3i(1,0,0)
    const blockPos_player = event.block.getPos().offset(rotateVec3i(offsetVec3i, angleRad))
    const blockPos_block = event.block.getPos().offset(rotateVec3i(offsetVec3i, blockAngleRad))

    const x_player = blockPos_player.getX(), y_player = blockPos_player.getY(), z_player= blockPos_player.getZ()
    const x_block = blockPos_block.getX(), y_block = blockPos_block.getY(), z_block= blockPos_block.getZ()

    const air = 'minecraft:air'

    let xmin_player = 0, zmin_player = 0,  xmax_player = structureX_player - 1, zmax_player = structureZ_player - 1
    let xmin_block = 0, zmin_block = 0,  xmax_block = structureX_block - 1, zmax_block = structureZ_block - 1

    if(structureX_player < 0){[xmin_player,xmax_player] = [structureX_player + 1,0]}
    if(structureZ_player < 0){[zmin_player,zmax_player] = [structureZ_player + 1,0]}
    if(structureX_block < 0){[xmin_block,xmax_block] = [structureX_block + 1,0]}
    if(structureZ_block < 0){[zmin_block,zmax_block] = [structureZ_block + 1,0]}

    let canPlace = true
    //#endregion

    //#region preview logic
    if(event.player.mainHandItem.isEmpty()){
        if(event.player.isCrouching()){
            event.server.runCommandSilent(`kill @e[type=block_display,x=${structureX_block < 0 ? x_block : x_block-1},y=${y_block-1},z=${structureZ_block < 0 ? z_block : z_block-1},dx=${structureX_block},dy=${structureY_block},dz=${structureZ_block}]`)
            event.block.set(event.block.id, Object.assign({}, event.block.getProperties(), {enabled:false}))
            particleFrame("minecraft:instant_effect", {x:x_block,y:y_block,z:z_block}, {x:structureX_block,y:structureY_block,z:structureZ_block}, event)
            event.cancel()
        }
        for(let xa = xmin_player; xa <= xmax_player; xa++){
            for(let ya = 0; ya <= structureY_player-1; ya++){
                for(let za = zmin_player; za <= zmax_player; za++){
                    if(event.level.getBlock(x_player + xa, y_player + ya, z_player + za) != air){
                        canPlace = false
                        event.getLevel().spawnParticles("minecraft:gust", false, x_player + xa + 0.5, y_player + ya + 0.5, z_player + za + 0.5, 0.2, 0.2, 0.2, 1, 0)
                    }
                }
            }
        }
        if(!canPlace) {
            event.player.tell([Text.gray('Not enough space to place this one')]);
            particleFrame("minecraft:instant_effect", {x:x_player,y:y_player,z:z_player}, {x:structureX_player,y:structureY_player,z:structureZ_player}, event)
            event.cancel()
        }
        if(event.block.getProperties().enabled == "true") event.server.runCommandSilent(`kill @e[type=block_display,x=${structureX_block < 0 ? x_block : x_block-1},y=${y_block-1},z=${structureZ_block < 0 ? z_block : z_block-1},dx=${structureX_block},dy=${structureY_block},dz=${structureZ_block}]`)
        event.block.set(event.block.id, Object.assign({}, event.block.getProperties(), {facing:playerFacing}))
        event.block.set(event.block.id, Object.assign({}, event.block.getProperties(), {enabled:true}))
        
        for(let i in template.blocks){        
            let pos = template.blocks.getCompound(i).pos;
            let vec3iPos = Vec3i(pos[0],pos[1],pos[2])
            let rotatedVec = rotateVec3i(vec3iPos, angleRad)
            let state = template.blocks.getCompound(i).state;
            let blockID = String(template.palette.getCompound(state).Name).slice(1, -1)
            let blockProperties = template.palette.getCompound(state).getCompound("Properties")
            let realProperties = {
                facing:`${directionRelativeToPlayer(String(blockProperties.facing).slice(1, -1)) || ""}`,
                type:`${String(blockProperties.type).slice(1, -1) || ""}`,
                multiblockslave:String(blockProperties.multiblockslave).slice(1, -1) === "true" ? true : false
            }

            if (String(blockProperties.east).slice(1, -1) === "true") {realProperties[directionRelativeToPlayer("east")] = true}
            if (String(blockProperties.west).slice(1, -1) === "true") {realProperties[directionRelativeToPlayer("west")] = true}
            if (String(blockProperties.south).slice(1, -1) === "true") {realProperties[directionRelativeToPlayer("south")] = true}
            if (String(blockProperties.north).slice(1, -1) === "true") {realProperties[directionRelativeToPlayer("north")] = true}

            event.server.runCommandSilent(`summon block_display ${blockPos_player.offset(rotatedVec).getX()}.0 ${blockPos_player.offset(rotatedVec).getY()} ${blockPos_player.offset(rotatedVec).getZ()}.0 {Glowing:1b,view_range:0.3f,transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[0f,0f,0f],scale:[1.001f,1.001f,1.001f]},block_state:{Name:"${blockID}",Properties:${JSON.stringify(realProperties)}}}`)
        }
        particleFrame("minecraft:wax_on", {x:x_player,y:y_player,z:z_player}, {x:structureX_player,y:structureY_player,z:structureZ_player}, event)
    }
    //#endregion

    //#region placement logic
    else if(event.player.getMainHandItem().getTags().toString().includes("c:tools/wrench")){
        if(event.block.getProperties().enabled == "false"){
            event.player.tell([Text.gray('You have to choose a valid direction first')]);
            event.cancel()
        }
        event.server.runCommandSilent(`kill @e[type=block_display,x=${structureX_block < 0 ? x_block : x_block-1},y=${y_block-1},z=${structureZ_block < 0 ? z_block : z_block-1},dx=${structureX_block},dy=${structureY_block},dz=${structureZ_block}]`)

        for(let xa = xmin_block; xa <= xmax_block; xa++){
            for(let ya = 0; ya <= structureY_block-1; ya++){
                for(let za = zmin_block; za <= zmax_block; za++){
                    if(event.level.getBlock(x_block + xa, y_block + ya, z_block + za) != air){
                        canPlace = false
                        event.getLevel().spawnParticles("minecraft:gust", false, x_block + xa + 0.5, y_block + ya + 0.5, z_block + za + 0.5, 0.2, 0.2, 0.2, 1, 0)
                    }
                }
            }
        }
        if(!canPlace) {
            event.player.tell([Text.gray('Not enough space to place this one')]);
            particleFrame("minecraft:instant_effect", {x:x_block,y:y_block,z:z_block}, {x:structureX_block,y:structureY_block,z:structureZ_block}, event)
            event.cancel()
        }
        for(let i in template.blocks){        
            let pos = template.blocks.getCompound(i).pos;
            let vec3iPos = Vec3i(pos[0],pos[1],pos[2])
            let rotatedVec = rotateVec3i(vec3iPos, blockAngleRad)
            let state = template.blocks.getCompound(i).state;
            let blockID = String(template.palette.getCompound(state).Name).slice(1, -1)
            let blockProperties = template.palette.getCompound(state).getCompound("Properties")
            let realProperties = {
                facing:`${directionRelativeToBlock(String(blockProperties.facing).slice(1, -1)) || ""}`,
                type:`${String(blockProperties.type).slice(1, -1) || ""}`,
                multiblockslave:String(blockProperties.multiblockslave).slice(1, -1) === "true" ? true : false
            }

            if (String(blockProperties.east).slice(1, -1) === "true") {realProperties[directionRelativeToBlock("east")] = true}
            if (String(blockProperties.west).slice(1, -1) === "true") {realProperties[directionRelativeToBlock("west")] = true}
            if (String(blockProperties.south).slice(1, -1) === "true") {realProperties[directionRelativeToBlock("south")] = true}
            if (String(blockProperties.north).slice(1, -1) === "true") {realProperties[directionRelativeToBlock("north")] = true}

            let block = Block.withProperties(blockID, realProperties)
            event.getLevel().setBlockAndUpdate(blockPos_block.offset(rotatedVec), block)
        }
        event.block.set(event.block.id, Object.assign({}, event.block.getProperties(), {enabled:false}))
    }

    //#endregion

    function directionRelativeToPlayer(direction){
        if (direction === "down" || direction === "up") return direction
        return angleToFacing[(angleToFacing[direction] + angleToFacing[playerFacing]) % 360]
    }
    function directionRelativeToBlock(direction){
        if (direction === "down" || direction === "up") return direction
        return angleToFacing[(angleToFacing[direction] + angleToFacing[blockFacing]) % 360]
    }
})

function rotateVec3i(vec3i, angle){
    return Vec3i(Math.round(vec3i.getX() * Math.cos(angle) + vec3i.getZ() * Math.sin(angle)), vec3i.getY(), Math.round(-vec3i.getX() * Math.sin(angle) + vec3i.getZ() * Math.cos(angle)))
}

function particleFrame(type, startPos, size, event){
    let xm = 0, ym = 0, zm = 0
    let xmx = size.x, ymx = size.y, zmx = size.z

    if(size.x < 0){
        [xm,xmx] = [xmx,xm]
        startPos.x += 1
    }
    if(size.z < 0){
        [zm,zmx] = [zmx,zm]
        startPos.z += 1
    }
    if(size.y < 0){[ym,ymx] = [ymx,ym]}

    for(let i = xm; i<= xmx; i += 0.1){
        event.getLevel().spawnParticles(type, false, startPos.x + i, startPos.y, startPos.z, 0, 0, 0, 1, 0)
        event.getLevel().spawnParticles(type, false, startPos.x + size.x - i, startPos.y + size.y, startPos.z, 0, 0, 0, 1, 0)
        event.getLevel().spawnParticles(type, false, startPos.x + size.x - i, startPos.y, startPos.z + size.z, 0, 0, 0, 1, 0)
        event.getLevel().spawnParticles(type, false, startPos.x + i, startPos.y + size.y, startPos.z + size.z, 0, 0, 0, 1, 0)

    }
    for(let i = ym; i<= ymx; i += 0.1){
        event.getLevel().spawnParticles(type, false, startPos.x, startPos.y + i, startPos.z, 0, 0, 0, 1, 0)
        event.getLevel().spawnParticles(type, false, startPos.x + size.x, startPos.y + size.y - i, startPos.z, 0, 0, 0, 1, 0)
        event.getLevel().spawnParticles(type, false, startPos.x + size.x, startPos.y + i, startPos.z + size.z, 0, 0, 0, 1, 0)
        event.getLevel().spawnParticles(type, false, startPos.x, startPos.y + size.y - i, startPos.z + size.z, 0, 0, 0, 1, 0)

    }
    for(let i = zm; i<= zmx; i += 0.1){
        event.getLevel().spawnParticles(type, false, startPos.x, startPos.y, startPos.z + i, 0, 0, 0, 1, 0)
        event.getLevel().spawnParticles(type, false, startPos.x + size.x, startPos.y + size.y, startPos.z + i, 0, 0, 0, 1, 0)
        event.getLevel().spawnParticles(type, false, startPos.x + size.x, startPos.y, startPos.z + size.z - i, 0, 0, 0, 1, 0)
        event.getLevel().spawnParticles(type, false, startPos.x, startPos.y + size.y, startPos.z + size.z - i, 0, 0, 0, 1, 0)

    }
}

BlockEvents.broken(placerBlocks, event => {
    const templateName = event.block.getId().toString().slice(7, -7)
    const template = NBTIO.read(`kubejs/data/immersiveengineering/structure/multiblocks/${templateName}.nbt`)

    const blockFacing = event.block.getProperties().facing
    const blockAngle = angleToFacing[blockFacing]
    const blockAngleRad = blockAngle * (Math.PI / 180)

    const structureVec3i = Vec3i(template.size[0], template.size[1], template.size[2])
    const structureVec3irotated_block = rotateVec3i(structureVec3i, blockAngleRad)
    const structureX_block = structureVec3irotated_block.getX(), structureY_block = structureVec3irotated_block.getY(), structureZ_block = structureVec3irotated_block.getZ()

    const offsetVec3i = new Vec3i(1,0,0)
    const blockPos_block = event.block.getPos().offset(rotateVec3i(offsetVec3i, blockAngleRad))

    const x_block = blockPos_block.getX(), y_block = blockPos_block.getY(), z_block= blockPos_block.getZ()

    if(event.block.getProperties().enabled == "true"){
        event.server.runCommandSilent(`kill @e[type=block_display,x=${structureX_block < 0 ? x_block : x_block-1},y=${y_block-1},z=${structureZ_block < 0 ? z_block : z_block-1},dx=${structureX_block},dy=${structureY_block},dz=${structureZ_block}]`)
        particleFrame("minecraft:instant_effect", {x:x_block,y:y_block,z:z_block}, {x:structureX_block,y:structureY_block,z:structureZ_block}, event)
    }
})

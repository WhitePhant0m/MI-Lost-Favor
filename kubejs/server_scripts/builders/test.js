/* const $BlockState = Java.loadClass("net.minecraft.world.level.block.state.BlockState")
const $BlockPos = Java.loadClass("net.minecraft.core.BlockPos")
const $ModelData = Java.loadClass("net.neoforged.neoforge.client.model.data.ModelData")
const $ModelBlockRenderer = Java.loadClass("net.minecraft.client.renderer.block.ModelBlockRenderer")
const $OverlayTexture = Java.loadClass("net.minecraft.client.renderer.texture.OverlayTexture")
const $RenderType = Java.loadClass("net.minecraft.client.renderer.RenderType")
const $PoseStack = Java.loadClass("com.mojang.blaze3d.vertex.PoseStack") */

const $FTBChunksAPI = Java.loadClass("dev.ftb.mods.ftbchunks.api.FTBChunksAPI").api()
const $ChunkDimPos = Java.loadClass("dev.ftb.mods.ftblibrary.math.ChunkDimPos")


/* ServerEvents.tick(event =>{
    try {
        let camera = Client.getCameraEntity().getEyePosition()
        let poseStackForRenderer = new $PoseStack()
        MILFBlocksRenderer.forEach((blockState, pos) => {
            poseStackForRenderer.translate(pos.x - camera.x,pos.y + 1 - camera.y, pos.z - camera.z)
            Client.getBlockRenderer().renderSingleBlock(
                blockState, poseStackForRenderer, Client.renderBuffers().bufferSource(), 15728880, $OverlayTexture.NO_OVERLAY, $ModelData.EMPTY, $RenderType.SOLID
            ) 
        })
    } catch (error) {
        console.log(error);
    }
})  */

const placerBlocks = global.AnotherDefinitelyUniqueNameForPlacerBlocksThisTime
console.log(placerBlocks);

BlockEvents.rightClicked(placerBlocks, event => {
    if(event.getHand()=="OFF_HAND") event.cancel()
    const blockPos = event.block.getPos()
    const x = event.block.getX()
    const y = event.block.getY()
    const z = event.block.getZ()
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
    const templateName = event.block.getId().toString().slice(7, -7)
    const template = NBTIO.read(`kubejs/data/immersiveengineering/structure/multiblocks/${templateName}.nbt`)

    const playerFacing = event.player.getHorizontalFacing()
    const angleToFacing = {
        0:"east",
        90:"north",
        180:"west",
        270:"south",
        "east":0,
        "north":90,
        "west":180,
        "south":270
    }
    const angle = angleToFacing[playerFacing]
    const angleRad = angle * (Math.PI / 180)




    const structureVec3i = Vec3i(template.size[0], template.size[1], template.size[2])
    const structureVec3irotated = rotateVec3i(structureVec3i, angleRad)
    const structureX = structureVec3irotated.getX()
    const structureY = structureVec3irotated.getY()
    const structureZ = structureVec3irotated.getZ()

    const air = 'minecraft:air'

    let xmin = 0
    let xmax = 0
    let zmin = 0
    let zmax = 0
    if(structureX < 0){
        xmin = structureX + 1
        xmax = 0
    } else {
        xmin = 0
        xmax = structureX - 1
    }

    if(structureZ < 0){
        zmin = structureZ + 1
        zmax = 0
    } else {
        zmin = 0
        zmax = structureZ - 1
    }

    particleFrame("minecraft:wax_on", {x:x,y:y,z:z}, {x:structureX,y:structureY,z:structureZ})

    for(let xa = xmin; xa <= xmax; xa++){
        for(let ya = 0; ya <= structureY-1; ya++){
            for(let za = zmin; za <= zmax; za++){
                if(xa == 0 && ya == 0 && za == 0) continue
                if(event.level.getBlock(x + xa, y + ya, z + za) != air){
                    event.player.tell([Text.gray('Not enough space to place this one')]);
                    event.cancel()
                }
            }
        }
    }

    if(!event.player.getMainHandItem().getTags().toString().includes("c:tools/wrench")) event.cancel()

    //{facing:`${String(template.palette.getCompound(state).getCompound("Properties").facing).slice(1, -1) || ""}`}

    for(let i in template.blocks){        
        let pos = template.blocks.getCompound(i).pos;
        let vec3iPos = Vec3i(pos[0],pos[1],pos[2])
        let rotatedVec = rotateVec3i(vec3iPos, angleRad)
        let state = template.blocks.getCompound(i).state;
        let blockID = String(template.palette.getCompound(state).Name).slice(1, -1)
        let blockProperties = template.palette.getCompound(state).getCompound("Properties")
        let realProperties = {
            facing:`${String(blockProperties.facing).slice(1, -1) || ""}`,
            type:`${String(blockProperties.type).slice(1, -1) || ""}`
        }

        if (String(blockProperties.east).slice(1, -1) === "true") {realProperties[directionRelativeToPlayer("east")] = true}
        if (String(blockProperties.west).slice(1, -1) === "true") {realProperties[directionRelativeToPlayer("west")] = true}
        if (String(blockProperties.south).slice(1, -1) === "true") {realProperties[directionRelativeToPlayer("south")] = true}
        if (String(blockProperties.north).slice(1, -1) === "true") {realProperties[directionRelativeToPlayer("north")] = true}

        let block = Block.withProperties(blockID, realProperties)
        event.getLevel().setBlockAndUpdate(blockPos.offset(rotatedVec), block)

        let facingProp = event.getLevel().getBlock(blockPos.offset(rotatedVec)).getProperties().facing
        if(facingProp && facingProp != "down" && facingProp != "up"){
            let facingChange = directionRelativeToPlayer(facingProp)
            event.getLevel().getBlock(blockPos.offset(rotatedVec)).set(block.id, {facing:facingChange})
        }
    }
 
    function rotateVec3i(vec3i, angle){
        return Vec3i(Math.round(vec3i.getX() * Math.cos(angle) + vec3i.getZ() * Math.sin(angle)), vec3i.getY(), Math.round(-vec3i.getX() * Math.sin(angle) + vec3i.getZ() * Math.cos(angle)))
    }
    function directionRelativeToPlayer(direction){
        return angleToFacing[(angleToFacing[direction] + angleToFacing[playerFacing]) % 360]
    }
    function particleFrame(type, startPos, size){
        let xm = 0
        let ym = 0
        let zm = 0
        let xmx = size.x
        let ymx = size.y
        let zmx = size.z

        if(size.x < 0){
            [xm,xmx] = [xmx,xm]
            startPos.x += 1
        }
        if(size.z < 0){
            [zm,zmx] = [zmx,zm]
            startPos.z += 1
        }
        if(size.y < 0){[ym,ymx] = [ymx,ym]}
        console.log([zmx,zm]);

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

})
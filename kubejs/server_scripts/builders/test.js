/* let $ModelData = Java.loadClass("net.neoforged.neoforge.client.model.data.ModelData")
let $ModelBlockRenderer = Java.loadClass("net.minecraft.client.renderer.block.ModelBlockRenderer")
let $Minecraft = Java.loadClass("net.minecraft.client.Minecraft")
let $OverlayTexture = Java.loadClass("net.minecraft.client.renderer.texture.OverlayTexture")
let $RenderType = Java.loadClass("net.minecraft.client.renderer.RenderType") */

const $FTBChunksAPI = Java.loadClass("dev.ftb.mods.ftbchunks.api.FTBChunksAPI").api()
const $ChunkDimPos = Java.loadClass("dev.ftb.mods.ftblibrary.math.ChunkDimPos")
BlockEvents.rightClicked("kubejs:saeta_plush", event => {
    /*  Client.getBlockRenderer().renderSingleBlock(
        event.getBlock().getBlockState(), event.getBlock().getPos().offset(0,1,0), Client.renderBuffers().bufferSource(), 15728880, $OverlayTexture.NO_OVERLAY, $ModelData.EMPTY, $RenderType.SOLID
    ) */
    if(!event.player.getMainHandItem().getTags().toString().includes("milf:placers")) event.cancel()
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
    const templateName = event.player.getMainHandItem().getId().slice(7, -7)
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

    const blockPos = event.block.getPos()
    const x = event.block.getX()
    const y = event.block.getY()
    const z = event.block.getZ()


    const structureVec3i = Vec3i(template.size[0], template.size[1], template.size[2])
    const structureVec3irotated = rotateVec3i(structureVec3i, angleRad)
    const structureX = structureVec3irotated.getX()
    const structureY = structureVec3irotated.getY()
    const structureZ = structureVec3irotated.getZ()

    const air = 'minecraft:air'
    let canPlace = true

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

    event.getLevel().setBlockAndUpdate(blockPos, air)

    for(let xa = xmin; xa <= xmax; xa++){
        for(let ya = 0; ya <= structureY-1; ya++){
            for(let za = zmin; za <= zmax; za++){
                if(event.level.getBlock(x + xa, y + ya, z + za) != air){
                    event.player.drop("kubejs:saeta_plush", true)
                    event.player.tell([Text.gray('Not enough space to place this one')]);
                    event.cancel()
                }
            }
        }
    }

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

})
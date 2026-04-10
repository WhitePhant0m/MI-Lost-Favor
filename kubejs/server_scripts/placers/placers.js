//priority: 10
let $FTBChunksAPI = Java.loadClass("dev.ftb.mods.ftbchunks.api.FTBChunksAPI").api()
let $ChunkDimPos = Java.loadClass("dev.ftb.mods.ftblibrary.math.ChunkDimPos")
let $NbtIo = Java.loadClass("net.minecraft.nbt.NbtIo")
/**@type {import("net.minecraft.resources.ResourceLocation").$ResourceLocation$$Original} */
let $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")
let $NbtAccounter = Java.loadClass("net.minecraft.nbt.NbtAccounter")


const PLACER_BLOCKS = Object.keys(global.AnotherDefinitelyUniqueNameForPlacerBlocksThisTime)
const BOX_BLOCKS = Object.keys(global.AnotherDefinitelyUniqueNameForBoxes)

const PLACER_BLOCKS_TO_ITEM_NAME_MAP = global.AnotherDefinitelyUniqueNameForPlacerBlocksThisTime
const BOX_BLOCKS_TO_ITEM_NAME_MAP = global.AnotherDefinitelyUniqueNameForBoxes

const ANGLE_TO_FACING = {
    270:"east",0:"north",90:"west",180:"south",
    "east":270,"north":0,"west":90,"south":180
}

const PARTICLES = {
    placed:"spectrum:shooting_star",
    dispersed:"minecraft:instant_effect",
    error:"minecraft:gust"
}
const MI_MODS = ["modern_industrialization", "mi_tweaks", "yet_another_industrialization", "extended_industrialization"]
const AIR_ID = "minecraft:air"
const NBT_HELPER = {
    getNBTCompoundTag: (modName, templateName, /**@type {import("net.minecraft.server.MinecraftServer").$MinecraftServer$$Original} */ resourceManager) => {
        try {
            let structureLocation = $ResourceLocation.fromNamespaceAndPath(modName,`structure/multiblocks/${templateName}.nbt`)
            let resource = resourceManager.getResource(structureLocation)
            
            if (!resource.isPresent()) {
                console.log(`Structure not found: ${templateName}`)
                return null
            }

            let inputStream = resource.get().open()
            let nbtData = $NbtIo["readCompressed(java.io.InputStream,net.minecraft.nbt.NbtAccounter)"](inputStream, new $NbtAccounter.unlimitedHeap())
            inputStream.close()
            
            return nbtData
        } catch (error) {
            console.log(error)
        }        
    }
}
//const NBT_FILE_PATHS = {getPath: (modName, templateName) => `${modName}:structure/multiblocks/${templateName}.nbt`}

BlockEvents.rightClicked(PLACER_BLOCKS, event => {

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

    const {template, modName} = getTemplateData(event, PLACER_BLOCKS_TO_ITEM_NAME_MAP)

    const playerFacing = event.player.getHorizontalFacing()
    const blockFacing = event.block.getProperties().facing
    const blockPos = event.block.getPos()

    const structureDataRelativeToPlayer = getStructureRelativeData(template, playerFacing, blockPos)
    const structureDataRelativeToBlock = getStructureRelativeData(template, blockFacing, blockPos)

    if (event.player.mainHandItem.isEmpty()) {
        handlePreview(event, template, structureDataRelativeToPlayer, structureDataRelativeToBlock)
    } else if (event.player.getMainHandItem().getTags().toString().includes("milf:hammers")){
        handlePlacement(event, template, modName, structureDataRelativeToPlayer, structureDataRelativeToBlock)
    }
})

BlockEvents.rightClicked(BOX_BLOCKS, event => {
    if(event.getHand()=="OFF_HAND") event.cancel()
    if(!event.player.mainHandItem.isEmpty() || !event.player.isCrouching()) event.cancel()
    const {template, modName} = getTemplateData(event, BOX_BLOCKS_TO_ITEM_NAME_MAP)

    const blockFacing = event.block.getProperties().facing
    const blockPos = event.block.getPos()

    const structureDataRelativeToBlock = getStructureRelativeData(template, blockFacing, blockPos)

    const { blockPosRelativeStart, structureVec3iRotated, angleRad, boxPos, bounds } = structureDataRelativeToBlock

    if (checkStructure(event, template, modName, structureDataRelativeToBlock)) {
        event.block.set(event.block.id.toString().slice(0,-10) + "_placer", Object.assign({}, event.block.getProperties(), {enabled:false}))
        BlockPos.betweenClosedStream(new BlockPos(blockPosRelativeStart), new BlockPos(blockPosRelativeStart.offset(Vec3itoBlockPos(structureVec3iRotated)).offset(Vec3itoBlockPos(rotateVec3i(new Vec3i(-1,-1,-1), angleRad))))).forEach(pos => {
            event.level.setBlock(pos, Blocks.AIR.defaultBlockState(), 18)
        })

        milfPlaySound(event, "minecraft:block.bamboo.break", { pos: new BlockPos(boxPos.x, boxPos.y, boxPos.z) })

        //event.server.runCommandSilent(`playsound block.bamboo.break block @p ${boxPos.x} ${boxPos.y} ${boxPos.z}`)
        particleFrameFromBounds(PARTICLES.dispersed, bounds, event)
    } else {
        event.cancel()
    }
})

BlockEvents.broken(PLACER_BLOCKS, event => {
    const { template } = getTemplateData(event, PLACER_BLOCKS_TO_ITEM_NAME_MAP)

    const blockFacing = event.block.getProperties().facing
    const blockPos = event.block.getPos()

    const structureDataRelativeToBlock = getStructureRelativeData(template, blockFacing, blockPos)
    if (event.block.getProperties().enabled == "true") removePreview(event, template, structureDataRelativeToBlock)
})

function handlePreview(/**@type {import("dev.latvian.mods.kubejs.block.BlockRightClickedKubeEvent").$BlockRightClickedKubeEvent$$Original} */ event, template, playerStructureData, blockStructureData){
    if (event.player.isCrouching()) {
        if(event.block.getProperties().enabled == "true") {
            let { boxPos } = blockStructureData
            removePreview(event, template, blockStructureData)
            milfPlaySound(event, "minecraft:block.bamboo.break", { pos: new BlockPos(boxPos.x, boxPos.y, boxPos.z) })
            //event.server.runCommandSilent(`playsound block.bamboo.break block @p ${boxPos.x} ${boxPos.y} ${boxPos.z}`)
        }
        event.cancel()
        return
    }
    if(event.block.getProperties().enabled == "true" && event.block.getProperties().facing == event.player.getHorizontalFacing()) {
        event.cancel()
        return
    }
    event.block.set(event.block.id, Object.assign({}, event.block.getProperties(), {facing:event.player.getHorizontalFacing()}))
    const canPlace = validateArea(event, playerStructureData.bounds)
    if (!canPlace) {
        handlePreviewFailure(event, template, playerStructureData, blockStructureData)
        event.cancel()
        return
    }

    updatePreview(event, template, playerStructureData, blockStructureData)
}

function handlePlacement(event, template, modName, playerStructureData, blockStructureData){
    if(event.block.getProperties().enabled == "false"){
        sendImmersiveMessage(Component.translatable("milf.placers.notification2"), event.getPlayer(), DEFAULT_WARN_NOTIFICATION_STYLE, event.server)
        event.cancel()
    }
    removePreview(event, template, blockStructureData, true)
    const canPlace = validateArea(event, blockStructureData.bounds)
    if (!canPlace) {
        handlePreviewFailure(event, template, playerStructureData, blockStructureData)
        event.cancel()
        return
    }

    placeStructure(event, template, modName, blockStructureData)
}

function placeStructure(/**@type {import("dev.latvian.mods.kubejs.block.BlockRightClickedKubeEvent").$BlockRightClickedKubeEvent$$Original} */ event, template, modName, blockStructureData){
    const { blockPosRelativeStart, facing } = blockStructureData
    event.block.set(event.block.id.toString().slice(0,-7) + "_empty_box", Object.assign({}, event.block.getProperties(), {enabled:false}))
    milfPlaySound(event, "minecraft:block.anvil.land", { pos: new BlockPos(blockStructureData.boxPos.x, blockStructureData.boxPos.y, blockStructureData.boxPos.z) })
    //event.server.runCommandSilent(`playsound block.anvil.land block @p ${blockStructureData.boxPos.x} ${blockStructureData.boxPos.y} ${blockStructureData.boxPos.z}`)
    for ( let blockNumber in  template.blocks) {
        let {blockID,  rotatedVec3i, relativeBlockProperties} = getTemplateBlockData(template, blockStructureData, blockNumber)
        if (blockID != AIR_ID) {
            let block = Block.withProperties(blockID, relativeBlockProperties)

            event.getLevel().setBlockAndUpdate(blockPosRelativeStart.offset(rotatedVec3i), block)
            if(MI_MODS.includes(modName)){
                let blockEntity = event.getLevel().getBlockEntity(blockPosRelativeStart.offset(rotatedVec3i))
                if (blockEntity != null && MI_MODS.includes(blockEntity.blockState.id.split(":")[0])){
                    // blockEntity.getActiveShape().getActiveShape().simpleMembers.forEach((blockPos, simpleMember) => {
                    //     console.log(simpleMember.getPreviewState());
                    // })
                    blockEntity.placedBy.placerId = event.player.uuid
                    let machineOrientation = blockEntity.orientation
                    switch (directionRelativeTo("south", facing)) {
                        case "east":
                            machineOrientation.facingDirection = Direction.EAST
                            break;
                        case "north":
                            machineOrientation.facingDirection = Direction.NORTH
                            break;
                        case "west":
                            machineOrientation.facingDirection = Direction.WEST
                            break;
                        case "south":
                            machineOrientation.facingDirection = Direction.SOUTH
                            break;
                    }
                    if (event.block.getProperties().machine_shape) {
                        let entityData = event.getLevel().getBlock(blockPosRelativeStart.offset(rotatedVec3i)).entityData
                        let machineShape = parseInt(event.block.getProperties().machine_shape)
                        event.getLevel().getBlock(blockPosRelativeStart.offset(rotatedVec3i)).setEntityData(Object.assign({}, entityData, {activeShape: machineShape})) 
                    }
                    blockEntity.setChanged();
                    blockEntity.sync();
                }

            }

        }
    }
}

function handlePreviewFailure(event, template, playerStructureData, blockStructureData){
    milfPlaySound(event, "minecraft:block.chain.break", { pos: new BlockPos(playerStructureData.boxPos.x, playerStructureData.boxPos.y, playerStructureData.boxPos.z) })
    //event.server.runCommandSilent(`playsound block.chain.break block @p ${playerStructureData.bounds.posX} ${playerStructureData.bounds.posX} ${playerStructureData.bounds.posY}`)
    sendImmersiveMessage(Component.translatable("milf.placers.notification1"), 
        event.getPlayer(), DEFAULT_WARN_NOTIFICATION_STYLE, event.server)
    removePreview(event, template, playerStructureData)
    removePreview(event, template, blockStructureData, true)
    // event.player.sendData("placers", {
    //     xMin:playerStructureData.bounds.xMin,
    //     yMin:playerStructureData.bounds.yMin,
    //     zMin:playerStructureData.bounds.zMin,
    //     xMax:playerStructureData.bounds.xMax,
    //     yMax:playerStructureData.bounds.yMax,
    //     zMax:playerStructureData.bounds.zMax,
    //     posX:playerStructureData.bounds.posX,
    //     posY:playerStructureData.bounds.posY,
    //     posZ:playerStructureData.bounds.posZ
    // })
    event.cancel()
}

function updatePreview(event, template, playerStructureData, blockStructureData){
    const { blockPosRelativeStart, bounds } = playerStructureData
    if (event.block.getProperties().enabled == "true") removePreview(event, template, blockStructureData)
    event.block.set(event.block.id, Object.assign({}, event.block.getProperties(), {enabled:true}))
    milfPlaySound(event, "minecraft:block.bamboo.hit", { pos: new BlockPos(playerStructureData.boxPos.x, playerStructureData.boxPos.y, playerStructureData.boxPos.z) })
    //event.server.runCommandSilent(`playsound block.bamboo.hit block @p ${playerStructureData.boxPos.x} ${playerStructureData.boxPos.y} ${playerStructureData.boxPos.z}`)
    let blocksToRenderData = []
    for ( let blockNumber in  template.blocks) {
        let {blockID,  rotatedVec3i, relativeBlockProperties} = getTemplateBlockData(template, playerStructureData, blockNumber)
        if (blockID != AIR_ID) {
            let blockPosToAdd = blockPosRelativeStart.offset(rotatedVec3i)
            //event.server.runCommandSilent(`summon block_display ${blockPosRelativeStart.offset(rotatedVec3i).getX()} ${blockPosRelativeStart.offset(rotatedVec3i).getY() + 0.5} ${blockPosRelativeStart.offset(rotatedVec3i).getZ()} {interpolation_duration:15,teleport_duration:25,Glowing:1b,view_range:0.3f,transformation:{left_rotation:[0f,0f,0f,1f],right_rotation:[0f,0f,0f,1f],translation:[-0.5f,-0.5f,-0.5f],scale:[1.001f,1.001f,1.001f]},block_state:{Name:"${blockID}",Properties:${JSON.stringify(relativeBlockProperties)}}}`)
            blocksToRenderData.push({ blockPos: { x: blockPosToAdd.getX(), y: blockPosToAdd.getY(), z: blockPosToAdd.getZ() }, id: blockID, properties: relativeBlockProperties})
        }
    }    
    let boxPos = playerStructureData.boxPos
    event.player.sendData("placers_render", {
        blocks: blocksToRenderData,
        boxPos: {x: boxPos.x, y: boxPos.y, z:boxPos.z}
    })


    particleFrameFromBounds(PARTICLES.placed, bounds, event)
}

function getTemplateBlockData(template, structureData, blockNumber){
    let pos = template.blocks.getCompound(blockNumber).pos;
    let vec3iPos = Vec3i(pos[0],pos[1],pos[2])
    let rotatedVec3i = rotateVec3i(vec3iPos, structureData.angleRad)
    let state = template.blocks.getCompound(blockNumber).state
    let blockID = template.palette.getCompound(state).getString("Name")
    let blockProperties = template.palette.getCompound(state).getCompound("Properties")
    let relativeBlockProperties = getRelativeBlockProperties(blockProperties, structureData, blockID)
    return {
        blockID : blockID,
        rotatedVec3i : Vec3itoBlockPos(rotatedVec3i),
        relativeBlockProperties : relativeBlockProperties
    }
}

function getRelativeBlockProperties(blockProperties, structureData, blockID){
    if (!blockProperties) {
        return {}
    }
    const { facing } = structureData
    let relativeProperties = { }

    if(blockProperties.facing){
        relativeProperties.facing = `${blockID != "immersiveengineering:fluid_pump" ? directionRelativeTo(String(blockProperties.facing).slice(1, -1), facing) : "north" || ""}`
    }
    
    if (blockProperties.contains("type")){
        relativeProperties.type = String(blockProperties.type).slice(1, -1)
    }
    if (blockProperties.multiblockslave){
        relativeProperties.multiblockslave = String(blockProperties.multiblockslave).slice(1, -1) === "true" ? true : false
    }
    if(blockProperties.east){
        let property = JSON.parse(blockProperties.east)
        relativeProperties[directionRelativeTo("east", facing)] = property
    }
    if(blockProperties.west){
        let property = JSON.parse(blockProperties.west)
        relativeProperties[directionRelativeTo("west", facing)] = property
    }
    if(blockProperties.south){
        let property = JSON.parse(blockProperties.south)
        relativeProperties[directionRelativeTo("south", facing)] = property
    }
    if(blockProperties.north){
        let property = JSON.parse(blockProperties.north)
        relativeProperties[directionRelativeTo("north", facing)] = property
    }
    if(blockProperties.up){
        let property = JSON.parse(blockProperties.up)
        relativeProperties["up"] = property
    }

    // if (String(blockProperties.east).slice(1, -1) === "true") {relativeProperties[directionRelativeTo("east", facing)] = true}
    // if (String(blockProperties.west).slice(1, -1) === "true") {relativeProperties[directionRelativeTo("west", facing)] = true}
    // if (String(blockProperties.south).slice(1, -1) === "true") {relativeProperties[directionRelativeTo("south", facing)] = true}
    // if (String(blockProperties.north).slice(1, -1) === "true") {relativeProperties[directionRelativeTo("north", facing)] = true}

    if (String(blockProperties.hanging).slice(1, -1) === "true") {relativeProperties.hanging = true}
    if (blockProperties.orientation) {relativeProperties.orientation = String(blockProperties.orientation).slice(1, -1)}
    
    return relativeProperties
}

function removePreview(event, template, structureData, withoutParticles) {
    const { blockPosRelativeStart, bounds } = structureData
    event.block.set(event.block.id, Object.assign({}, event.block.getProperties(), {enabled:false}))
    // event.server.runCommandSilent(
    //     `kill @e[type=block_display,x=${bounds.sizeX < 0 ? bounds.posX+0.5 : bounds.posX-0.5},y=${bounds.posY-1},z=${bounds.sizeZ < 0 ? bounds.posZ+0.5 : bounds.posZ-0.5},dx=${bounds.sizeX},dy=${bounds.sizeY},dz=${bounds.sizeZ}]`
    // )
    // let blocksToRemoveData = []
    // for (let blockNumber in template.blocks) {
    //     let { blockID, rotatedVec3i, relativeBlockProperties } = getTemplateBlockData(template, structureData, blockNumber)
    //     if (blockID != AIR_ID) {
    //         let blockPosToAdd = blockPosRelativeStart.offset(rotatedVec3i)
    //         blocksToRemoveData.push({ blockPos: { x: blockPosToAdd.getX(), y: blockPosToAdd.getY(), z: blockPosToAdd.getZ() }, id: blockID, properties: relativeBlockProperties })
    //     }
    // }
    let boxPos = structureData.boxPos
    event.player.sendData("placers_remove_render", {
        boxPos: { x: boxPos.x, y: boxPos.y, z: boxPos.z }
    })
    if (!withoutParticles) particleFrameFromBounds(PARTICLES.dispersed, bounds, event)
}

function validateArea(event, bounds) {
    const { xMin, xMax, zMin, zMax, yMin, yMax, posX, posY, posZ} = bounds;
    let valid = true
    for(let xa = xMin; xa <= xMax; xa++) {
        for(let ya = yMin; ya <= yMax; ya++) {
            for(let za = zMin; za <= zMax; za++) {
                if(event.level.getBlock(posX + xa, posY + ya, posZ + za) !== AIR_ID) {
                    event.getLevel().spawnParticles(PARTICLES.error, false, posX + xa + 0.5, posY + ya + 0.5, posZ + za + 0.5, 0.2, 0.2, 0.2, 1, 0)
                    valid = false
                }
            }
        }
    }
    return valid
}

function getTemplateData(event, blockMap) {
    const templateName = blockMap == PLACER_BLOCKS_TO_ITEM_NAME_MAP ? event.block.getId().toString().slice(5, -7) : event.block.getId().toString().slice(5, -10)
    const modName = blockMap[event.block.getId().toString()].split(':')[0]
    const template = NBT_HELPER.getNBTCompoundTag(modName, templateName, event.server.getResourceManager())
    return { modName:modName, template:template }
}

function getStructureRelativeData(template, facing, /**@type {$BlockPos_} */ blockPos){
    const angle = ANGLE_TO_FACING[facing]
    const angleRad = angle * (Math.PI / 180)
    const structureVec3i = Vec3i(template.size[0], template.size[1], template.size[2])
    const structureVec3iRotated = rotateVec3i(structureVec3i, angleRad)
    const offsetVec3i = new Vec3i(-Math.floor(structureVec3i.getX() / 2), 0, -structureVec3i.getZ())
    const blockPosRelativeStart = blockPos.offset(Vec3itoBlockPos(rotateVec3i(offsetVec3i, angleRad)))    

    return {
        facing:facing,
        angleRad:angleRad,
        structureVec3i:structureVec3i,
        structureVec3iRotated:structureVec3iRotated,
        blockPosRelativeStart:blockPosRelativeStart,
        bounds: calculateBounds(structureVec3iRotated, blockPosRelativeStart),
        boxPos: {x:blockPos.getX(), y:blockPos.getY(), z:blockPos.getZ()}
    }
}

function calculateBounds(structureVec3i, blockPosRelativeStart) {
    const posX = blockPosRelativeStart.getX(), posY = blockPosRelativeStart.getY(), posZ = blockPosRelativeStart.getZ()
    const sizeX = structureVec3i.getX(), sizeY = structureVec3i.getY(), sizeZ = structureVec3i.getZ()
    
    let xMin = 0, zMin = 0, xMax = sizeX - 1, zMax = sizeZ - 1
    
    if(sizeX < 0) [xMin, xMax] = [sizeX + 1, 0]
    if(sizeZ < 0) [zMin, zMax] = [sizeZ + 1, 0]
    
    return {xMin:xMin, xMax:xMax, zMin:zMin, zMax:zMax, yMin: 0, yMax: sizeY - 1, posX:posX, posY:posY, posZ:posZ, sizeX:sizeX, sizeY:sizeY, sizeZ:sizeZ }
}

function checkStructure(event, template, modName, blockStructureData){
    let canRemove = true
    const { blockPosRelativeStart } = blockStructureData
    for ( let blockNumber in  template.blocks) {
        let {blockID,  rotatedVec3i, relativeBlockProperties} = getTemplateBlockData(template, blockStructureData, blockNumber)

        let nbtBlock = Block.withProperties(blockID, relativeBlockProperties)
        let realBlock = event.getLevel().getBlock(blockPosRelativeStart.offset(rotatedVec3i)).getBlockState()   
        if (realBlock != nbtBlock /* && (modName != "immersiveengineering" || realBlock.block.id != BOX_BLOCKS_TO_ITEM_NAME_MAP[event.block.getId().toString()]) */) {
            canRemove = false
            event.getLevel().spawnParticles(PARTICLES.error, false, blockPosRelativeStart.offset(rotatedVec3i).getX() + 0.5, blockPosRelativeStart.offset(rotatedVec3i).getY() + 0.5, blockPosRelativeStart.offset(rotatedVec3i).getZ() + 0.5, 0.2, 0.2, 0.2, 1, 0)
        }
    }
    if (canRemove) {
        return canRemove
    } else {
        sendImmersiveMessage(Component.translatable("milf.placers.notification3"), event.getPlayer(), DEFAULT_WARN_NOTIFICATION_STYLE, event.server)
        milfPlaySound(event, "minecraft:block.chain.break", { pos: new BlockPos(blockStructureData.boxPos.x, blockStructureData.boxPos.y, blockStructureData.boxPos.z) })
        //event.server.runCommandSilent(`playsound block.chain.break block @p ${blockStructureData.boxPos.x} ${blockStructureData.boxPos.y} ${blockStructureData.boxPos.z}`)
        return canRemove
    }

}


/**@returns {$Vec3i_} */ 
function rotateVec3i(vec3i, angle){
    return Vec3i(Math.round(vec3i.getX() * Math.cos(angle) + vec3i.getZ() * Math.sin(angle)), vec3i.getY(), Math.round(-vec3i.getX() * Math.sin(angle) + vec3i.getZ() * Math.cos(angle)))
}

function Vec3itoBlockPos(/**@type {$Vec3i_} */ vec3i){
    return BlockPos(vec3i.x, vec3i.y, vec3i.z)
}

/* NetworkEvents.dataReceived("milf:immersiveMessageQueue", event => {
    console.log("hello");
    event.player.persistentData.remove("immersiveMessageQueue")
}) */

function particleFrameFromBounds ( type, bounds, event) {
    particleFrame(type, {x: bounds.posX, y: bounds.posY, z: bounds.posZ}, {x: bounds.sizeX, y: bounds.sizeY, z: bounds.sizeZ}, event)
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

function directionRelativeTo(direction, to){
    if (direction === "down" || direction === "up") return direction
    return ANGLE_TO_FACING[(ANGLE_TO_FACING[direction] + ANGLE_TO_FACING[to]) % 360]
}
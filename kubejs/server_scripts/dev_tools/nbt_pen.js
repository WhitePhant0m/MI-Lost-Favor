let nbtPenMode = 0
let nbtPenAabb = AABB.CUBE
let nbtPenMIBlockEntity

let $ActiveShapeComponent = Java.loadClass("aztech.modern_industrialization.machines.components.ActiveShapeComponent")
let $ListTag = Java.loadClass("net.minecraft.nbt.ListTag")
let $CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag")
let $IntArrayTag = Java.loadClass("net.minecraft.nbt.IntArrayTag")
let $StringTag = Java.loadClass("net.minecraft.nbt.StringTag")
let $JavaArrayList = Java.loadClass("java.util.ArrayList")
let $HashMap = Java.loadClass("java.util.HashMap")
let $Rotation = Java.loadClass("net.minecraft.world.level.block.Rotation")


ItemEvents.firstRightClicked("kubejs:nbt_pen", event => {
    if(!event.getTarget()?.block.getPos()) return
    let blockpos = event.getTarget().block.getPos()
    switch (nbtPenMode) {
        case 0:
            nbtPenAabb = AABB.ofBlock(blockpos.offset(0,0,0))
            nbtPenAabb = nbtPenAabb.minmax(AABB.ofBlock(blockpos.offset(0,0,0)))
            event.player.tell(Text.info(`RMB to add, Shift+RMB to cancel`))
            break;
        case 1:
            if(event.player.crouching) break;
            nbtPenMIBlockEntity = event.getTarget().block.getEntity()
            if(!nbtPenMIBlockEntity) break


            
            if(nbtPenMIBlockEntity.getActiveShape() instanceof $ActiveShapeComponent) {
                nbtPenMIBlockEntity = nbtPenMIBlockEntity.getActiveShape()
            }
            let NBTData = convertPosMemberMapToNBT(nbtPenMIBlockEntity.getActiveShape().simpleMembers, event.getTarget().block)
            //console.log(NBTData);
            let shape = ""
            //console.log(event.getTarget().block.entityData);
            
            if (event.getTarget().block.entityData.activeShape &&  event.getTarget().block.entityData.activeShape != 0){
                shape = `_shape_${event.getTarget().block.entityData.activeShape}`
            }
            let path = `kubejs/data/${event.getTarget().block.getId().split(":")[0]}/structure/multiblocks/${event.getTarget().block.getId().split(":")[1] + shape}.nbt`
            NBTIO.write(path, NBTData)
            event.player.tell(Text.info(`Saved to: ${path}`))
            break;
    }
    nbtPenMode ++
    nbtPenMode %= 2
    return
})

function convertPosMemberMapToNBT(map, block){

    let BSMap = new $HashMap()

    BSMap.put(new BlockPos(0,0,0), block.getBlockState())

    map.forEach((blockPos, simpleMember) => {
        let blockState = simpleMember.getPreviewState().rotate($Rotation.CLOCKWISE_180)
        BSMap.put(blockPos, blockState)
    })

    //console.log(BSMap);
    

    
    let minX = 10000, minY = 10000, minZ = 10000
    let maxX = -10000, maxY = -10000, maxZ = -10000

    BSMap.keySet().forEach(pos =>{
        minX = Math.min(minX, pos.getX())
        minY = Math.min(minY, pos.getY())
        minZ = Math.min(minZ, pos.getZ())
        maxX = Math.max(maxX, pos.getX())
        maxY = Math.max(maxY, pos.getY())
        maxZ = Math.max(maxZ, pos.getZ())
    })

    const sizeX = maxX - minX + 1
    const sizeY = maxY - minY + 1
    const sizeZ = maxZ - minZ + 1

    let paletteList = new $JavaArrayList()
    let paletteIndexMap = {}

    BSMap.values().forEach(state =>{
        if (!paletteIndexMap[state]) {
            paletteIndexMap[state] =  paletteList.size()
            paletteList.add(state)
        }
    })

    let blocksList = new $ListTag()
    BSMap.forEach((blockPos, blockState) => {
        
        let relativeX = sizeX - 1 - blockPos.getX() + minX
        let relativeY = blockPos.getY() - minY
        let relativeZ = sizeZ - 1 - blockPos.getZ() + minZ

        let blockCompound = new $CompoundTag()
        //let nbtData = $NbtIo["readCompressed(java.io.InputStream,net.minecraft.nbt.NbtAccounter)"](inputStream, new $NbtAccounter.unlimitedHeap())
        //blockCompound["put(string, net.minecraft.nbt.IntArrayTag(int[]))"]("pos", new $IntArrayTag([relativeX, relativeY, relativeZ]))
        blockCompound.put("pos", NBT.intArrayTag([relativeX, relativeY, relativeZ]))
        
        blockCompound.putInt("state", paletteIndexMap[blockState])

        blocksList.add(blockCompound)
    })

    let paletteTag = new $ListTag()
    paletteList.forEach(state =>{
        paletteTag.add(serializeBlockState(state))
    })

    let root = new $CompoundTag()
    root.put("size", NBT.intArrayTag([sizeX, sizeY, sizeZ]))
    root.put("palette", paletteTag)
    root.put("blocks", blocksList)
    root.put("entities", new $ListTag())

    return root
}

function serializeBlockState(state){
    let tag = new $CompoundTag()

    tag.putString("Name", state.getBlock().builtInRegistryHolder().key().location().toString())

    if (!state.getProperties().isEmpty()) {
        let propertiesTag = new $CompoundTag()

        state.getProperties().forEach( property => {
            let value = state.getValue(property).toString()
            propertiesTag.putString(property.getName(), value)
        })
        tag.put("Properties", propertiesTag)
    }
    return tag
}
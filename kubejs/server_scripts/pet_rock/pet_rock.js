const oreIds = global.oresWithSamples.reduce((acc, ore) => {
    const normalOre = `${ore.directory}:${ore.itemName}_ore`
    const deepslateOre = `${ore.directory}:deepslate_${ore.itemName}_ore`
    const itemName = ore.itemName
    acc[normalOre] = itemName.charAt(0).toUpperCase() + itemName.slice(1)
    acc[deepslateOre] = itemName.charAt(0).toUpperCase() + itemName.slice(1)
    return acc
}, {"minecraft:waxed_weathered_cut_copper_stairs" : "test",
    "xkdeco:mimic/arts_and_crafts/light_blue_polished_soapstone_wall" : "test",
    "chipped:vertical_disordered_crying_obsidian_bricks" : "test",
    "framedblocks:framed_ext_inner_double_corner_slope_panel": "test",
    "framedblocks:framed_flat_ext_inner_double_slope_panel_corner" : "test"
})



ItemEvents.firstRightClicked("milf:pet_rock_on_a_leash", event => {
    if (event.hand == "OFF_HAND") return false
    if (event.level.isClientSide()) return false
    let item = event.getItem()
    if (event.player.cooldowns.isOnCooldown(item)) return

    let playerPos = event.player.getOnPos()
    
    item.setDamage(item.damageValue + 1)

    // console.log(item.damageValue);
    // console.log(item.maxDamage);

    if(item.damageValue == item.maxDamage){
        item.count--
        event.player.give(Item.of("milf:pet_rock"))
        event.player.inventoryMenu.broadcastFullState()
    }
    

    event.player.cooldowns.addCooldown(item, 120)
    
    let aabb = AABB.of(playerPos.x - 1, playerPos.y, playerPos.z - 1, playerPos.x + 1, playerPos.y - 60, playerPos.z +1)

    let isAny = false
    let oresBelow = {}

    BlockPos.betweenClosedStream(aabb).forEach(blockPos =>{
        let state = event.level.getBlockState(blockPos)

        if(!state.isAir()){
            if (oreIds[state.block.id]){
                //event.player.tell(Component.ofString(oreIds[state.block.id]))
                oresBelow[state.block.id] = (oresBelow[state.block.id] || 0) + 1
                isAny = true
            }
        }
    })

    if (!isAny) {
        //event.player.tell(Component.ofString("PILK"))
        event.player.sendData("pet_rock", {
            ores: null
        })
    } else {
        // for (const [ore, amount] of Object.entries(oresBelow)){
        //     event.player.tell(Component.ofString(oreIds[ore] + " x" + amount))
        // }

        event.player.sendData("pet_rock", {
            ores: oresBelow
        })
    }


})

const MI_UPGRADES = global.MI_UPGRADES

ServerEvents.tags('block', event => {

    for(const upgradable of Object.keys(MI_UPGRADES)){
        event.add('milf:upgradable', upgradable)
    }
})

BlockEvents.rightClicked(Object.keys(MI_UPGRADES), event => {
    if(event.getHand()=="OFF_HAND") event.cancel()
    if (event.player.mainHandItem.id == "milf:mi_upgrader") {
        let block = event.block
        let blockEntity = block.getEntity()

        if(event.player.inventory.hasAnyOf(MI_UPGRADES[block.getId()].upgradeMaterial) || event.player.creative){
            if(!event.player.creative){
                let itemIndex = event.player.inventory.find(Item.of(MI_UPGRADES[block.getId()].upgradeMaterial))
                let item = event.player.inventory.getItem(itemIndex)
                item.count--
                event.player.inventoryMenu.broadcastFullState()
            }

            particleFrame(PARTICLES.dispersed, block.getPos(), {x:1, y:1, z:1}, event)
            
            let entityData = block.getEntityData()
            let newBlock = Block.withProperties(MI_UPGRADES[block.getId()].upgradesTo, block.getProperties())
            let level = event.getLevel()
            let blockPos = block.getPos()
            
            level.removeBlockEntity(blockPos)
            level.setBlockAndUpdate(blockPos, newBlock)
            level.getBlock(blockPos).setEntityData(entityData) 

            event.server.runCommandSilent(`playsound immersive_machinery:hatch_open block @p ${blockPos.x} ${blockPos.y} ${blockPos.z}`)

            blockEntity.setChanged();
            blockEntity.sync();
        } else {
            sendImmersiveMessage(Component.translatable("milf.mi_upgrade_notification_1")
            .append(Component.translatable(Item.getItem(MI_UPGRADES[block.getId()].upgradeMaterial).getDescriptionId()))
            .append(Component.translatable("milf.mi_upgrade_notification_2")), 
                    event.getPlayer(), DEFAULT_WARN_NOTIFICATION_STYLE, event.server)
        }
        event.cancel()
    }
})

ServerEvents.recipes(event => {

    for( const [ key, value] of Object.entries(MI_UPGRADES)){

        event.shaped(value.upgradesTo, 
            [
                " K ",
                " U ",
                " M "
            ], 
            {
                K: { item: key },
                U: { item: "milf:mi_upgrader" },
                M: { item: value.upgradeMaterial}
        }).keepIngredient("milf:mi_upgrader").modifyResult("milf:mi_upgrader_recipe")

    }

    milfShaped(event, {
        pattern: [
            "R  ",
            "Rrr",
            "CRR"
        ],
        key: {
            R: { item: "modern_industrialization:steel_rod" },
            r: { item: "modern_industrialization:steel_ring" },
            C: { item: "immersiveengineering:component_iron" }
        },
        outputItems: [[{ id: "milf:mi_upgrader" }, 1]],
    })


})

ServerEvents.modifyRecipeResult("milf:mi_upgrader_recipe", event =>{

    let prev = event.grid.getItem(0)

    //console.log(prev)
    

    let outputItem = new $ItemStack(event.item.asHolder(), 1, prev.componentsPatch)
    // try {
    //     console.log(outputItem);
        
    // } catch (error) {
    //     console.log(error);
        
    // }
    
    event.success(outputItem)
})


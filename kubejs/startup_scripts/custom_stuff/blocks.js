StartupEvents.registry('block', event => {
    
    event.create('radio_tower_block') 
    .item(i => i.maxStackSize(64))
    .displayName('Radio tower block') 
    .hardness(1.0) 
    .soundType("chain")
    .requiresTool(true) 
    .tagBlock('minecraft:mineable/pickaxe')
    .texture('custom_stuff:blocks/radio_tower_block')

    event.create('radio_tower_slab', "slab") 
    .item(i => i.maxStackSize(64))
    .displayName('Radio tower slab') 
    .hardness(1.0) 
    .soundType("chain")
    .requiresTool(true) 
    .tagBlock('minecraft:mineable/pickaxe')
    .texture('custom_stuff:blocks/radio_tower_block')

})
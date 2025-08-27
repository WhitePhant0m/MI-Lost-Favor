StartupEvents.registry('item', event => {

    
    // Simple function for simple items
    let simpleItemAdd = (args) => {
        {
            event.create(args.item)
                .texture(`kubejs:item/${args.item}`)
                .rarity(args.rarity || 'common')
                .glow(args.isGlow || false)
                .maxStackSize(args.stackSize || 64)
                .translationKey(`item.kubejs.${args.item}`)
        }
    }

    simpleItemAdd({ item: 'amber_visage', rarity: 'epic', stackSize: 16})



})
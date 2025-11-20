ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/pickaxe', [
        'mi_tweaks:advanced_large_steam_furnace'
    ])

    event.add('minecraft:needs_stone_tool', [
        'mi_tweaks:advanced_large_steam_furnace'
    ])
})
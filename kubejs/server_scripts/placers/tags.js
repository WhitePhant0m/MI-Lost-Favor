ServerEvents.tags('item', event => {
    const hammers = ['another_furniture:furniture_hammer', 'ytech:iron_hammer', 'grimoireofgaia:minotaur_hammer', 'ytech:copper_hammer', 'immersiveengineering:hammer', 'framedblocks:framed_hammer', 'born_in_chaos_v1:skullbreaker_hammer', 'ytech:tin_hammer', 'eternal_starlight:thermal_springstone_hammer', 'modern_industrialization:diamond_hammer', 'modern_industrialization:netherite_hammer', 'ytech:bronze_hammer', 'modern_industrialization:iron_hammer', 'ytech:golden_hammer', 'ytech:lead_hammer', 'hexerei:warhammer', 'born_in_chaos_v1:nut_hammer', 'ytech:stone_hammer', 'modern_industrialization:steel_hammer', 'born_in_chaos_v1:stop_hammer', 'eternal_starlight:starfire_hammer']
    hammers.forEach(hammer =>{
        event.add('milf:hammers', hammer)
    })
})

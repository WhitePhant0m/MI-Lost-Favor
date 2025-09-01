LootJS.modifiers(event => {

    event.addTableModifier("pastel:chests/ruined_pedestal_stone").addLoot("kubejs:old_tablet")
    event.addTableModifier("pastel:chests/ruined_pedestal_deepslate").addLoot("kubejs:old_tablet")
    event.addTableModifier("pastel:chests/ancient_ruins_main").addLoot("kubejs:old_diary").setCount([1,1])
    event.addTableModifier("pastel:chests/city_below/moonstone_temple_roof_ridge").addLoot("kubejs:holy_book_of_color").setCount([1,1])
    //wip
    event.addTableModifier("pastel:chests/excavation_side/hidden").addLoot("minecraft:water_bucket").setCount([1,1])


})
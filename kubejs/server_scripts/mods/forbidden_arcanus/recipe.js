ServerEvents.recipes(event => {

    const removing_by_recipe_id = [
    ]

    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
    });

    event.remove({
        output: [
            "forbidden_arcanus:mundabitur_dust",
        ]
    })

    event.shapeless(Item.of("forbidden_arcanus:mundabitur_dust", 4), [
        "minecraft:gunpowder",
        "minecraft:phantom_membrane",
        "minecraft:bone_meal",
        "forbidden_arcanus:arcane_crystal_dust",
        "minecraft:redstone",
        "minecraft:blaze_powder",
        "occultism:echo_dust",
    ]);

});
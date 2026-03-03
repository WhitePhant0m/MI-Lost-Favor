ServerEvents.recipes(event => {

    const removing_by_recipe_id = [
    ]

    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
    });

    event.remove({
        output: [
            "forbidden_arcanus:mundabitur_dust",
            "forbidden_arcanus:clibano_core",
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

    customPedestalCraft(event, {
        tier: "advanced", onyx: 8, citrine: 32, time: 600, experience: 8.0, yield_upgrades: true,
        pattern: [
            'qqq',
            'qwq',
            'qqq'
        ],
        key: {
            q: 'forbidden_arcanus:darkstone',
            w: 'minecraft:blast_furnace'
        },
        result: {
            "id": "forbidden_arcanus:clibano_core",
            "count": 1
        },
        advancement: "spectrum:create_onyx_shard"
    })

});
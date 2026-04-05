ServerEvents.recipes(event => {
    
    event.remove({output: [
        "occultism:raw_silver_block",
        "occultism:silver_ingot",
        "occultism:silver_block",
        "occultism:silver_nugget",
        "occultism:raw_silver",
    ]})
    event.replaceOutput({ output: 'occultism:netherite_dust' }, 'occultism:netherite_dust', 'modern_industrialization:netherite_dust')
    customAlchemicalForgeCraft(event, {
        affinities: [
            "toxony:moon",
            "toxony:soul",
            "toxony:wind"
        ],
        auxiliary: [
            {
                "item": "enchanted:spirit_of_otherwhere"
            },
            {
                "item": "enchanted:attuned_stone_charged"
            }
        ],
        main: {
            "tag" : "c:seeds"
        },
        result: "occultism:datura_seeds"
    })
    
})


KubeJSTweaks.beforeRecipes(event => {

    const disableByRecipeID = [
        "occultism:blasting/netherite_ingot_from_dust",
        "occultism:blasting/iron_ingot_from_dust",
        "occultism:blasting/gold_ingot_from_dust",
        "occultism:blasting/copper_ingot_from_dust",

        "occultism:smelting/netherite_ingot_from_dust",
        "occultism:smelting/silver_ingot_from_ore",
        "occultism:smelting/silver_ingot_from_dust",
        "occultism:smelting/silver_ingot_from_raw",
        "occultism:smelting/gold_ingot_from_dust",
        "occultism:smelting/iron_ingot_from_dust",
        "occultism:smelting/copper_ingot_from_dust"
    ]

    disableByRecipeID.forEach(id => {
        event.disable(id)
    })


})
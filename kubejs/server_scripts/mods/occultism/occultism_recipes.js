ServerEvents.recipes(event => {
    
    event.remove({output: [
        "occultism:raw_silver_block",
        "occultism:silver_ingot",
        "occultism:silver_block",
        "occultism:silver_nugget",
        "occultism:raw_silver",
    ]})

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
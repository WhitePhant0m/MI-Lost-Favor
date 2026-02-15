ServerEvents.recipes(event => {
    
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
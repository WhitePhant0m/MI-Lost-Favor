ServerEvents.recipes(event => {
    
    customAlchemicalForgeCraft(event, {
        affinities: [
            "toxony:moon",
            "toxony:soul",
            "toxony:wind"
        ],
        auxiliary: [
            {
                "item": "enchanted:demonic_blood"
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
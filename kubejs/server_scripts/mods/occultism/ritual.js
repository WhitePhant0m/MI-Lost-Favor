//https://github.com/klikli-dev/occultism-kubejs/blob/version/1.21.1/runs/client/kubejs/server_scripts/example.js 

ServerEvents.recipes(event => {

    
    // event.recipes.occultism.ritual(
    //     'ars_elemental:curio_bag',
    //     [
    //         "hexerei:infused_fabric",
    //         "hexerei:infused_fabric",
    //         "hexerei:infused_fabric",
    //         "enchanted:creeper_heart"
    //     ],
    //     '#c:chests',
    //     'occultism:craft_foliot'
    // ).dummy("kubejs:craft_curio_bag")

    event.recipes.occultism.ritual(
        'kubejs:vial_of_liquid_confidence',
        [
            "occultism:afrit_essence",
            "paganbless:wican_ward",
            "paganbless:chopped_rue",
            "paganbless:chopped_lavender",
            "enchanted:soul_of_the_world",
            "enchanted:mystic_unguent",
            "enchanted:drop_of_luck",
            "enchanted:tear_of_the_goddess",
            "pastel:onyx_shard",
        ],
        'toxony:toxin_flask',
        'occultism:craft_afrit',
        180
    ).dummy("kubejs:craft_vial_of_liquid_confidence")

});
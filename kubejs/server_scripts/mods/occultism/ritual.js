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
    // ).dummy("milf:craft_curio_bag")

    event.recipes.occultism.ritual(
        'milf:vial_of_liquid_confidence',
        [
            "occultism:afrit_essence",
            "paganbless:wican_ward",
            "paganbless:chopped_rue",
            "paganbless:chopped_lavender",
            "enchanted:soul_of_the_world",
            "enchanted:mystic_unguent",
            "enchanted:drop_of_luck",
            "enchanted:tear_of_the_goddess",
            "spectrum:onyx_shard",
        ],
        'toxony:toxin_flask',
        'occultism:craft_afrit',
        180
    ).dummy("milf:craft_vial_of_liquid_confidence")

});
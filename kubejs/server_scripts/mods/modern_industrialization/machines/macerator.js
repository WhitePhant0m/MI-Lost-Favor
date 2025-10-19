ServerEvents.recipes(event => {
    event.remove({id: "modern_industrialization:vanilla_recipes/macerator/red_sandstone_to_sand"})
    event.remove({id: "modern_industrialization:vanilla_recipes/macerator/sandstone_to_sand"})
    event.recipes.modern_industrialization.macerator(8, 40)
    .itemIn("#c:sandstone/uncolored_blocks")
    .itemOut("2x minecraft:sand")
    .itemOut("modern_industrialization:saltpeter_dust", 0.5)
    event.recipes.modern_industrialization.macerator(8, 40)
    .itemIn("#c:sandstone/red_blocks")
    .itemOut("2x minecraft:sand")
    .itemOut("modern_industrialization:saltpeter_dust", 0.5)

    //ae stuff
     event.recipes.modern_industrialization.macerator(8, 40)
    .itemIn("extendedae:entro_crystal")
    .itemOut("extendedae:entro_dust")

     event.recipes.modern_industrialization.macerator(8, 40)
    .itemIn("advanced_ae:shattered_singularity")
    .itemOut("2x advanced_ae:quantum_infused_dust")

    const oresToChange = ['iron', 'gold', 'copper', 'tin', 'lead']
    oresToChange.forEach(ore =>{
        miMachineCraft(event, {energy:2, time:100, machine:"modern_industrialization:macerator",
            inputItems:[
                [{tag:`c:raw_materials/${ore}`}],
            ],
            outputItems:[
                [{item:`kubejs:crushed_${ore}`}, 2],
                [{item:`kubejs:crushed_${ore}`}, 1, 0.5]
            ]
        })
    })



})
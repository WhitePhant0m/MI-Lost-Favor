ServerEvents.recipes(event => {

    event.forEachRecipe({output:/.*fine_wire/, type:"modern_industrialization:wiremill"}, r => {
        event.recipes.modern_industrialization.wiremill(8, 100)
        .itemIn(r.originalRecipeIngredients[0])
        .itemOut("2x " + r.originalRecipeResult.id)
        event.remove({output : r.originalRecipeResult.id})
    })

    miMachineCraft(event, {energy:2, time:100, machine:"modern_industrialization:wiremill",
        inputItems:[
            [{item:"minecraft:short_grass"}]
        ],
        outputItems:[
            [{item:"ytech:grass_twine"}]
        ]
    })

    miMachineCraft(event, {energy:2, time:100, machine:"modern_industrialization:wiremill",
        inputItems:[
            [{item:"minecraft:tall_grass"}]
        ],
        outputItems:[
            [{item:"ytech:grass_twine"}, 2]
        ]
    })

})
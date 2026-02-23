ServerEvents.recipes(event => {

    miMachineCraft(event, {energy:8, time:100, machine:"modern_industrialization:mixer",
        inputItems:[
            [{tag:"c:plates/aluminum"}],
            [{tag:"c:dusts/aluminum"}],
        ],
        outputItems:[
            [{item:"kubejs:cd"}]
        ]
    })

    miMachineCraft(event, {energy:8, time:600, machine:"modern_industrialization:mixer",
        inputItems:[
            [{tag:"c:dusts/diamond"}],
            [{tag:"c:nuggets/steel"}, 1, 0],
        ],
        outputItems:[
            [{item:"modern_industrialization:diamond_tiny_dust"}, 4]
        ]
    })

    miMachineCraft(event, {energy:2, time:100, machine:"modern_industrialization:mixer",
        inputItems:[
            [{item:"minecraft:clay_ball"}, 2],
            [{item:"minecraft:kelp"}],
        ],
        outputItems:[
            [{item:"architects_palette:algal_blend"}, 4]
        ]
    })
    miMachineCraft(event, {energy:2, time:100, machine:"modern_industrialization:mixer",
        inputItems:[
            [{item:"modern_industrialization:brick_dust"}, 2],
            [{item:"architects_palette:algal_blend"}, 2],
        ],
        outputItems:[
            [{item:"kubejs:fire_clay_ball"}, 4]
        ],
        removeRecipe: true
    })
    
    miMachineCraft(event, {energy:2, time:100, machine:"modern_industrialization:mixer",
        inputItems:[
            [{item:"modern_industrialization:salt_crushed_dust"}],
            [{item:"minecraft:tuff"}],
        ],
        inputFluids:[
            [{fluid:"minecraft:water"}, 1000],
            [{fluid:"modern_industrialization:creosote"}, 500]
        ],
        outputItems:[
            [{item:"architects_palette:cerebral_plate"}, 16]
        ]
    })
    
})
ServerEvents.recipes(event => {

    miMachineCraft(event, {energy:16, time:1000, machine:"modern_industrialization:microbial_fabricator",
        inputItems:[
            [{item:"pastel:bottle_of_fading"}, 1],
            [{item:"ae2:mysterious_cube"}, 1],
            [{item:"pastel:onyx_powder"}, 4],
        ],
        outputItems:[
            [{item:"justdirethings:gooblock_tier1"}, 1]
        ],
        removeRecipe:true,
    })

    miMachineCraft(event, {energy:16, time:2000, machine:"modern_industrialization:microbial_fabricator",
        inputItems:[
            [{item:"pastel:bottle_of_failing"}, 1],
            [{item:"justdirethings:gooblock_tier1"}, 1],
            [{item:"pastel:midnight_chip"}, 4],
        ],
        outputItems:[
            [{item:"justdirethings:gooblock_tier2"}, 1]
        ],
        removeRecipe:true,
        custom_condition:"milf:microbial_fabricator_bioactive_coating"
    })

    miMachineCraft(event, {energy:16, time:4000, machine:"modern_industrialization:microbial_fabricator",
        inputItems:[
            [{item:"pastel:bottle_of_ruin"}, 1],
            [{item:"justdirethings:gooblock_tier2"}, 1],
            [{item:"pastel:moonstone_powder"}, 4],
        ],
        outputItems:[
            [{item:"justdirethings:gooblock_tier3"}, 1]
        ],
        removeRecipe:true,
        custom_condition:"milf:microbial_fabricator_thermophilic_dermis"
    })


    miMachineCraft(event, {energy:16, time:4000, machine:"modern_industrialization:microbial_fabricator",
        inputItems:[
            [{item:"pastel:vegetal"}, 64],
            [{item:"modern_industrialization:rubber_sheet"}, 1],
            [{item:"kubejs:storage_blueprint"}, 1],
        ],
        outputItems:[
            [{item:"kubejs:bioactive_coating"}, 1]
        ],
        removeRecipe:true,
    })

    miMachineCraft(event, {energy:16, time:8000, machine:"modern_industrialization:microbial_fabricator",
        inputItems:[
            [{item:"pastel:stratine_gem"}, 1],
            [{item:"modern_industrialization:rubber_sheet"}, 1],
            [{item:"kubejs:automation_blueprint"}, 1],
        ],
        outputItems:[
            [{item:"kubejs:thermophilic_dermis"}, 1]
        ],
        removeRecipe:true,
    })

    miMachineCraft(event, {energy:16, time:12000, machine:"modern_industrialization:microbial_fabricator",
        inputItems:[
            [{item:"pastel:aether_vestiges"}, 1],
            [{item:"modern_industrialization:rubber_sheet"}, 1],
            [{item:"kubejs:divine_blueprint"}, 1],
        ],
        outputItems:[
            [{item:"kubejs:symbiote_membrane"}, 1]
        ],
        removeRecipe:true,
    })

    miMachineCraft(event, {energy:16, time:12000, machine:"modern_industrialization:microbial_fabricator",
        inputItems:[
            [{item:"justdirethings:gooblock_tier3"}, 1],
            [{item:"kubejs:blank_blueprint"}, 1],
            [{item:"pastel:onyx_powder"}, 16],
        ],
        outputItems:[
            [{item:"kubejs:goo_coated_blank_blueprint"}, 1]
        ],
        removeRecipe:true,
    })


})



MIRecipeEvents.customCondition(event => {
    let coatings = ["bioactive_coating", "thermophilic_dermis", "symbiote_membrane"]
    coatings.forEach(coating =>{
        event.register(`milf:microbial_fabricator_${coating}`,
                (context, recipe) => {
                    if(context.level.getBlock(context.blockEntity.blockPos).entityData.upgradesItemStack.id == `kubejs:${coating}`){
                        return true
                    } 
                    return false
                },
                Text.of(`A ${idToName(coating)} must be used as a machine upgrade`));
    })

    function idToName(id) {
        return id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

});
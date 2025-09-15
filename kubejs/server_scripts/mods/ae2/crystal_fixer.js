ServerEvents.recipes(event => {

    function ae_crystal_fixer_recipe(input, fuel, output, chance){
        chance = chance || 5000
        let recipe = {
            "type": "extendedae:crystal_fixer",
            "chance": chance,
            "input": {
                "count": input[1],
                "id": input[0]
            },
            "output": {
                "count": output[1],
                "id": output[0]
            }
        }
        recipe.fuel = {"ingredient": fuel}
        event.custom(recipe)
    }


    ae_crystal_fixer_recipe(["minecraft:amethyst_block", 1], {"item" : "pastel:moonstruck_nectar"}, ["minecraft:budding_amethyst", 1], 9000)
    ae_crystal_fixer_recipe(["pastel:citrine_block", 1], {"item" : "pastel:moonstruck_nectar"}, ["pastel:budding_citrine", 1], 9000)
    ae_crystal_fixer_recipe(["pastel:topaz_block", 1], {"item" : "pastel:moonstruck_nectar"}, ["pastel:budding_topaz", 1], 9000)
    ae_crystal_fixer_recipe(["pastel:moonstone_block", 1], {"item" : "pastel:moonstruck_nectar"}, ["pastel:budding_moonstone", 1], 6000)
    ae_crystal_fixer_recipe(["pastel:onyx_block", 1], {"item" : "pastel:moonstone_core"}, ["pastel:budding_onyx", 1], 8000)


})
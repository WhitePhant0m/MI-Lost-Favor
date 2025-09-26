ServerEvents.recipes(event => {

    function milling_recipe(input,output, bonusChance){
        bonusChance = bonusChance || 0.5
        let recipe =
            {
                "type": "ytech:milling",
                "bonusChance": bonusChance,
                "ingredient": input,
                "result" : output[0],
            }
        recipe.result.count = output[1]
        event.custom(recipe)
    }

    milling_recipe({item :"minecraft:raw_iron"}, [{id:"modern_industrialization:iron_dust"}, 1],  )

})
ServerEvents.recipes(event => {

    function alloying_recipe(input1,input2,output,temp,time){
        let recipe =
            {
                "type": "ytech:alloying",
                "minTemp" : temp || 1250,
                "smeltingTime": time || 200,
                "result" : output[0],
                "ingredient1" : {},
                "ingredient2" : {}

            }
        recipe.ingredient1.ingredient = input1[0]
        recipe.ingredient1.count = input1[1]
        recipe.ingredient2.ingredient = input2[0]
        recipe.ingredient2.count = input2[1]

        recipe.result.count = output[1]
        event.custom(recipe)
    }

    alloying_recipe([{tag: "c:sands"},1],[{tag: "c:dusts/bronze"},1],[{id:"kubejs:bronze_glass"},2], 1000)
    alloying_recipe([{tag: "c:cobblestones"},1],[{item: "ytech:pebble"},1],[{id:"minecraft:smooth_stone"},1], 800)

})
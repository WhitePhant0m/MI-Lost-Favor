ServerEvents.recipes(event => {

    function chopping_recipe(input,output,tool, hitCount){
        hitCount = hitCount || 3
        let recipe =
            {
                "type": "ytech:chopping",
                "hitCount": hitCount,
                "ingredient": input,
                "result" : output[0],
                "tool" : tool
            }
        recipe.result.count = output[1]
        event.custom(recipe)
    }

    chopping_recipe({tag:"c:bones"}, [{id:"ytech:bone_needle"}, 1], {item : "ytech:sharp_flint"} )
    chopping_recipe({tag:"minecraft:planks"}, [{id:"minecraft:stick"}, 3], {tag : "minecraft:axes"} )

})
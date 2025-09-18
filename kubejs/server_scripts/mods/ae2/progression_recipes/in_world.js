ServerEvents.recipes(event => {


    let craft_removal_list = [

    ]

    function ae2fluid_recipe(fluid,items,output){
        let recipe = {
            "type": "ae2:transform",
             "circumstance": {
                "type": "fluid",
                "tag": fluid
            },
            "ingredients": [],
            "result": {
                "count": output[1],
                "id": output[0]
            }
        }
        items.forEach(i => {
            i[0].count = i[1]
            recipe.ingredients.push(i[0])
        });
        event.custom(recipe)
        craft_removal_list.push(output[0])
    }

    
    ae2fluid_recipe("minecraft:water",
        [
            [{ "item": "ae2:charged_certus_quartz_crystal" }, 1],
            [{ "tag": "c:gems/quartz" }, 1],
            [{ "item": "minecraft:amethyst_shard" }, 1],
        ],
        ["ae2:fluix_crystal", 1]
    )
    

    event.forEachRecipe({output:craft_removal_list}, r => {
        event.remove({output: r.getOriginalRecipeResult()})
    })

})
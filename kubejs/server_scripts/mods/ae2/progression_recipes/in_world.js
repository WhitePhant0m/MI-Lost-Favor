ServerEvents.recipes(event => {


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
    }

    ae2fluid_recipe("pastel:liquid_crystal",
        [
            [{ "item": "extendedae:entro_seed" }, 1],
            [{ "item": "kubejs:quantum_blueprint" }, 1],
        ],
        ["kubejs:divine_blueprint", 1]
    )

})
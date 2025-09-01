ServerEvents.recipes(event => {

    function vacuum_freezer_recipe(energy,time,inputs,outputs,fluids,token){
        fluids = fluids || [];
        energy = energy
        var recipe = event.recipes.modern_industrialization.vacuum_freezer(energy, time);
        inputs.forEach((input) => {Array.isArray(input) ? recipe.itemIn(input[0], input[1]) : recipe.itemIn(input)})
        fluids.forEach((fluid) => {recipe.fluidIn(fluid[0], fluid[1])})
        outputs.forEach((out) => {recipe.itemOut(out)})
        if (token != undefined){recipe.itemIn(token, 0)}
    }

    vacuum_freezer_recipe(64,300,
        [["immersiveengineering:mold_plate", 0]],
        ["modern_industrialization:plastic_plate"],
        [["modern_industrialization:polyethylene", 500]])

})
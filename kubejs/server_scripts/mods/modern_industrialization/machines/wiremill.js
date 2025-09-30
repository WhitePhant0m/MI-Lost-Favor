ServerEvents.recipes(event => {

    event.forEachRecipe({output:/.*fine_wire/, type:"modern_industrialization:wiremill"}, r => {
        event.recipes.modern_industrialization.wiremill(8, 100)
        .itemIn(r.originalRecipeIngredients[0])
        .itemOut("2x " + r.originalRecipeResult.id)
        event.remove({output : r.originalRecipeResult.id})
    })

    function wiremill_recipe(energy,time,inputs,outputs){
        energy = energy || 3200
        var recipe = event.recipes.modern_industrialization.wiremill(energy, time);
        inputs.forEach((input) => {Array.isArray(input) ? recipe.itemIn(input[0], input[1]) : recipe.itemIn(input)})
        outputs.forEach((out) => {recipe.itemOut(out)})
    }

    wiremill_recipe(2,100,
        ["minecraft:short_grass"],
        ["ytech:grass_twine"],
    )

    wiremill_recipe(2,100,
        ["minecraft:tall_grass"],
        ["2x ytech:grass_twine"],
    )


})
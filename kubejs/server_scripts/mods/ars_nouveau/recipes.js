ServerEvents.recipes(event => {
    const removing_by_recipe_id = [
        "ars_nouveau:archwood_to_chest"
    ]

    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
    });

    event.remove({output:  [
        "ars_nouveau:volcanic_sourcelink",
    ]})
})
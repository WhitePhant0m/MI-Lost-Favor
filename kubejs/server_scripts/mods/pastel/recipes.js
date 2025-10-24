ServerEvents.recipes(event => {

    const removing_by_recipe_id = [
        "pastel:smelting/blackslag_ores/iron"
    ]

    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
    });

})
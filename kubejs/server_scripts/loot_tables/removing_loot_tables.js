LootJS.modifiers(event => {
    const remove_loot_tables = [
        "immersiveengineering:chests/engineers_house",
        "immersiveengineering:gameplay/hero_of_the_village/machinist",
        "modern_industrialization:gameplay/hero_of_the_village/industrialist_gift",
        "hexerei:chests/courier_package",
    ]

    remove_loot_tables.forEach(table => {
        event.addTableModifier(table).removeLoot(Ingredient.all)
    });
})
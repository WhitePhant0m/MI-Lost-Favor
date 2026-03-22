StartupEvents.registry('armor_material', event => {

    event.create("milf:meze")
    .defense({
        helmet: 3,
        chestplate: 1,
        leggings: 1,
        boots: 1
    })
    .enchantmentValue(24)
    .repairIngredient(() => Ingredient.of("#c:ingots/netherite"))
    .toughness(4)
    .knockbackResistance(0.15)

})
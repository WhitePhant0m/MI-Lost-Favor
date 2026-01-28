/**
 * YTech remaining shaped recipe
 *  - `args`:
 *      - `key` : 
 *      - `pattern` : 
 *      - `outputItems` : 
 *      - --------
 *      - `removeRecipe`: Boolean - if true: removes all other default recipes with this outputs
 *      - `compatOff`: Boolean - if true : function will NOT add compatible mi recipe, if not specified then recipe WILL be added
*/
const yTechShaped = (/**@type {$RecipesKubeEvent_}*/ event, args) => {
    let recipe = {
        type: "ytech:remaining_shaped_crafting",
        category: "misc",
        key: args.key,
        pattern: args.pattern,
        result: Object.assign({}, args.outputItems[0][0], { count: args.outputItems[0][1] || 1 }),
    }
    if (!args.compatOff) {
        let itemInputs = []
        let amounts = args.pattern.join("")
        Object.entries(args.key).forEach(m => {
            let regex = new RegExp(m[0], 'g')
            if (m[0] == "#" || m[0] == "@") {
                itemInputs.push([m[1], (amounts.match(regex) || []).length, 0])
                return
            }
            itemInputs.push([m[1], (amounts.match(regex) || []).length])
        })
        miMachineCraft(event, {
            energy: 2, time: 200, machine: "modern_industrialization:assembler",
            inputItems: itemInputs,
            outputItems: [[{ item: recipe.result.id }, recipe.result.count]]
        })
    }
    if (args.removeRecipe) { event.remove({ output: args.outputItems[0][0].id }) }
    if (args.removeRecipeType) { event.remove({ output: args.outputItems[0][0].id, type: args.removeRecipeType }) }
    event.custom(recipe)
}


ServerEvents.recipes(event => {
    // (`･Θ･´) - Some recipes are located in data because it is easier to change a recipe there and delete the previous recipe at the same time (overwrite)
    event.remove({
        output: [
            'ytech:tin_plate',
            'ytech:lead_plate',
            'ytech:copper_plate',
            'ytech:golden_plate',
            'ytech:bronze_plate',
            'ytech:iron_plate',
            'ytech:tin_block',
            'ytech:lead_block',
            'ytech:bronze_block',
            'ytech:raw_galena_block',
            'ytech:raw_cassiterite_block',
            "ytech:crushed_iron",

        ]
    })

    const removing_by_recipe_id = [
        "ytech:bronze_ingot_from_alloying"
    ]

    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
    });

    event.recipes.ytech.hammering("heavy_weighted_pressure_plate", "iron_block")
        .tool("#c:hammers");;

    event.replaceInput({ output: 'ytech:reinforced_bricks' }, 'modern_industrialization:copper_bolt', 'modern_industrialization:fire_clay_brick')
    event.replaceInput({ output: 'ytech:reinforced_bricks' }, 'modern_industrialization:copper_plate', 'modern_industrialization:fire_clay_brick')
    event.replaceInput({ input: 'ytech:crushed_copper' }, 'ytech:crushed_copper', 'kubejs:crushed_copper')
    event.replaceInput({ input: 'ytech:crushed_gold' }, 'ytech:crushed_gold', 'kubejs:crushed_gold')
    event.replaceInput({ input: 'ytech:crushed_iron' }, 'ytech:crushed_iron', 'kubejs:crushed_iron')
    event.replaceInput({ input: 'ytech:crushed_galena' }, 'ytech:crushed_galena', 'kubejs:crushed_lead')
    event.replaceInput({ input: 'ytech:crushed_cassiterite' }, 'ytech:crushed_cassiterite', 'kubejs:crushed_tin')
    event.replaceInput({ input: 'ytech:raw_galena' }, 'ytech:raw_galena', 'modern_industrialization:raw_lead')
    event.replaceInput({ input: 'ytech:raw_cassiterite' }, 'ytech:raw_cassiterite', 'modern_industrialization:raw_tin')
    event.replaceOutput({ output: 'ytech:crushed_gold' }, 'ytech:crushed_gold', 'kubejs:crushed_gold')
    event.replaceOutput({ output: 'ytech:crushed_cassiterite' }, 'ytech:crushed_cassiterite', 'kubejs:crushed_tin')
    event.replaceOutput({ output: 'ytech:crushed_galena' }, 'ytech:crushed_galena', 'kubejs:crushed_lead')
    event.replaceOutput({ output: 'ytech:crushed_copper' }, 'ytech:crushed_copper', 'kubejs:crushed_copper')
    event.replaceOutput({ output: 'ytech:crushed_iron' }, 'ytech:crushed_iron', 'kubejs:crushed_iron')
    event.replaceOutput({ output: 'ytech:bronze_ingot' }, 'ytech:bronze_ingot', 'modern_industrialization:bronze_ingot')
    event.replaceOutput({ output: 'ytech:tin_ingot' }, 'ytech:tin_ingot', 'modern_industrialization:tin_ingot')
    event.replaceOutput({ output: 'ytech:lead_ingot' }, 'ytech:lead_ingot', 'modern_industrialization:lead_ingot')
    event.replaceOutput({ output: 'ytech:tin_rod' }, 'ytech:tin_rod', 'modern_industrialization:tin_rod')
    event.replaceOutput({ output: 'ytech:copper_rod' }, 'ytech:copper_rod', 'modern_industrialization:copper_rod')
    event.replaceOutput({ output: 'ytech:golden_rod' }, 'ytech:golden_rod', 'modern_industrialization:gold_rod')
    event.replaceOutput({ output: 'ytech:iron_rod' }, 'ytech:iron_rod', 'modern_industrialization:iron_rod')
    event.replaceOutput({ output: 'ytech:lead_rod' }, 'ytech:lead_rod', 'modern_industrialization:lead_rod')
    event.replaceOutput({ output: 'ytech:bronze_rod' }, 'ytech:bronze_rod', 'modern_industrialization:bronze_rod')
    event.replaceOutput({ output: 'ytech:golden_bolt' }, 'ytech:golden_bolt', 'modern_industrialization:gold_bolt')
    event.replaceOutput({ output: 'ytech:copper_bolt' }, 'ytech:copper_bolt', 'modern_industrialization:copper_bolt')
    event.replaceOutput({ output: 'ytech:iron_bolt' }, 'ytech:iron_bolt', 'modern_industrialization:iron_bolt')
    event.replaceOutput({ output: 'ytech:lead_bolt' }, 'ytech:lead_bolt', 'modern_industrialization:lead_bolt')
    event.replaceOutput({ output: 'ytech:tin_bolt' }, 'ytech:tin_bolt', 'modern_industrialization:tin_bolt')
    event.replaceOutput({ output: 'ytech:bronze_bolt' }, 'ytech:bronze_bolt', 'modern_industrialization:bronze_bolt')

    event.custom({
        "type": "ytech:remaining_shapeless_crafting",
        "category": "misc",
        "ingredients": [
            { "tag": "c:bricks" },
            { "tag": "c:mortar_and_pestles" }
        ],
        "result": { "id": "modern_industrialization:brick_dust", "count": 1 }
    })

    event.remove({ type: "map_atlases:crafting_atlas" })

    milfShaped(event, {
        pattern: [
            "QQ",
            "WW"
        ],
        key: {
            Q: { item: "immersiveengineering:hemp_fiber" },
            W: { item: "minecraft:stick" }
        },
        outputItems: [[{ id: "ytech:crafting_workspace" }, 2]],
        //removeRecipeType:"minecraft:crafting_shaped"
    })

})
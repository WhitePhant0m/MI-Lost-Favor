/**
 * Ytech block hit recipe
 *  - `args`:
 *      - `inputItems` : an array of arrays of the following structure : [{ tag|item : name }, amount], items defaults to 1 item
 *      - `outputItems` : an array of arrays of the following structure : [{ id : name }, amount], items defaults to 1 item
 *      - `block` : {item|tag : name} defaults to {tag : "c:stones"}
 *      - --------
 *      - `removeRecipe`: self explanatory
 *      - `compatOff`: doesn't add MI and IE recipes if true (unpacker and metal_press)
*/
const ytechBlockHitCraft = (event, args) => {
    let recipe = {
        type: "ytech:block_hit",
        block: args.block || {tag : "c:stones"},
        ingredient: args.inputItems[0][0],
        result: Object.assign({},args.outputItems[0][0], {count: args.outputItems[0][1] || 1}),
    }
    if(!args.compatOff){
        iePressCraft(event, {energy:3200,
            inputItems:args.inputItems,
            outputItems:args.outputItems,
            mold:{item:"immersiveengineering:mold_unpacking"}
        })
    }
    if(args.removeRecipe){event.remove({output: args.outputItems[0][0].id})}
    event.custom(recipe)
}

ServerEvents.recipes(event => {

    function block_hit_recipe(input, output, block){
        ytechBlockHitCraft(event,{
            inputItems:[[input]],
            outputItems:[output],
            block:block
        })
    }


    block_hit_recipe({item:"modern_industrialization:bronze_machine_casing"}, [{id:"kubejs:bronze_machine_bit"}, 12], {tag : "minecraft:anvil"} )
    block_hit_recipe({item:"modern_industrialization:frostproof_machine_casing"}, [{id:"kubejs:basic_machine_bit"}, 12], {tag : "minecraft:anvil"} )
    block_hit_recipe({item:"modern_industrialization:steel_machine_casing"}, [{id:"kubejs:steel_machine_bit"}, 12], {tag : "minecraft:anvil"} )

    block_hit_recipe({tag:"c:cobblestones"}, [{id:"ytech:pebble"}, 4], {tag : "c:stones"} )


})
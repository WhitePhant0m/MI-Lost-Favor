/**
 * Ytech block hit recipe
 *  - `args`:
 *      - `inputItems` : Array (max 1 elements) - each element looks like this : [{ tag|item : name }, amount], amount defaults to 1 if not specified
 *      - `outputItems` : Array (max 1 elements) - each element looks like this : [{ id : name }, amount], amount defaults to 1 if not specified
 *      - `block` : {item|tag : name}, defaults to {tag : "c:stones"}
 *      - --------
 *      - `removeRecipe`: Boolean - if true: removes all other default recipes with this outputs
 *      - `compatOff`: Boolean - if true : function will NOT add compatible mi recipe, if not specified then recipe WILL be added
*/
const ytechBlockHitCraft = (event, args) => {
    let recipe = {
        type: "ytech:block_hit",
        block: args.block || {tag : "c:stones"},
        ingredient: args.inputItems[0][0],
        result: Object.assign({},args.outputItems[0][0], {count: args.outputItems[0][1] || 1}),
    }
    if(!args.compatOff){
        //console.log(args.outputItems[0][0].id.slice(1));
        
        if(args.outputItems[0][0].id.slice(-4) == "_bit") {            
            args.outputItems[0][1] = args.outputItems[0][1] * 1.5
        }
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


    ytechBlockHitCraft(event, {
            inputItems:[[{item:"modern_industrialization:bronze_machine_casing"}]],
            outputItems:[[{id:"moderndynamics:machine_extender"}, 1]],
            block:{tag : "c:storage_blocks/coal"},
            removeRecipe:true,
            compatOff:true
    })
})
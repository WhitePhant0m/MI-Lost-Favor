/**
 * Ytech chopping recipe
 *  - `args`:
 *      - `inputItems` : an array of arrays of the following structure : [{ tag|item : name }], (max 1)
 *      - `outputItems` : an array of arrays of the following structure : [{ id : name }, amount], items defaults to 1 item (max 1)
 *      - `hitCount` : defaults to 3
 *      - `tool` : {item|tag : name}, defaults to {tag : "minecraft:axes"}
 *      - --------
 *      - `removeRecipe`: self explanatory
 *      - `compatOff`: doesn't add MI recipe if true
*/
const ytechChoppingCraft = (event, args) => {
    let recipe = {
        type: "ytech:chopping",
        hitCount: args.hitCount || 3,
        tool: args.tool || {tag : "minecraft:axes"},
        ingredient: args.inputItems[0][0],
        result: Object.assign({},args.outputItems[0][0], {count: args.outputItems[0][1] || 1}),
    }
    if(!args.compatOff){
        miMachineCraft(event, {energy:2, time:100, machine:"modern_industrialization:cutting_machine",
            inputItems:args.inputItems,
            outputItems:[[{item:recipe.result.id}, recipe.result.count]],
            inputFluids:[[{fluid:"modern_industrialization:lubricant"}, 1]]
        })
    }
    if(args.removeRecipe){event.remove({output: args.outputItems[0][0].id})}
    event.custom(recipe)
}

ServerEvents.recipes(event => {

    ytechChoppingCraft(event,{
        inputItems:[[{tag: "c:bones"}]],
        outputItems:[[{id:"ytech:bone_needle"}]],
        tool: {item : "ytech:sharp_flint"},
    })

    ytechChoppingCraft(event,{
        inputItems:[[{tag: "minecraft:planks"}]],
        outputItems:[[{id:"minecraft:stick"}, 3]],
        tool: {tag : "minecraft:axes"},
        removeRecipe:true
    })

})
/**
 * Minecraft shaped recipe
 *  - `args`:
 *      - `key` : 
 *      - `pattern` : 
 *      - `outputItems` : 
 *      - --------
 *      - `removeRecipe`: Boolean - if true: removes all other default recipes with this outputs
 *      - `compatOff`: Boolean - if true : function will NOT add compatible mi recipe, if not specified then recipe WILL be added
*/
const milfShaped = (/**@type {$RecipesKubeEvent_}*/ event, args) => {
    let recipe = {
        type: "minecraft:crafting_shaped",
        category: "misc",
        key: args.key,
        pattern: args.pattern,
        result: Object.assign({},args.outputItems[0][0], {count: args.outputItems[0][1] || 1}),
    }
    if(!args.compatOff){
        let itemInputs = []
        let amounts = args.pattern.join("")
        Object.entries(args.key).forEach(m =>{
            let regex = new RegExp(m[0],'g')
            itemInputs.push([m[1], (amounts.match(regex) || []).length])
            //itemInputs.push((amounts.match(regex) || []).length + "x " + m[1])
        })
        miMachineCraft(event, {energy:2, time:200, machine:"modern_industrialization:assembler",
            inputItems:itemInputs,
            outputItems:[[{item:recipe.result.id}, recipe.result.count]]
        })
    }
    if(args.removeRecipe){event.remove({output: args.outputItems[0][0].id})}
    if(args.removeRecipeType){event.remove({output: args.outputItems[0][0].id, type: args.removeRecipeType})}
    event.custom(recipe)
}

const milfSmelting = (/**@type {$RecipesKubeEvent_}*/ event, args) => {
    let recipe = {
        type: "minecraft:smelting",
        category: "misc",
        cookingtime:args.cookingtime || 200,
        experience: args.experience || 0.7,
        ingredient: args.inputItems[0][0],
        result: Object.assign({},args.outputItems[0][0], {count: args.outputItems[0][1] || 1}),
    }
    if(!args.compatOff){
        miMachineCraft(event, {energy:2, time:200, machine:"modern_industrialization:mi_furnace",
            inputItems:args.inputItems,
            outputItems:[[{item:recipe.result.id}, recipe.result.count]]
        })
    }
    if(args.removeRecipe){event.remove({output: args.outputItems[0][0].id})}
    if(args.removeRecipeType){event.remove({output: args.outputItems[0][0].id, type: args.removeRecipeType})}
    event.custom(recipe)
}
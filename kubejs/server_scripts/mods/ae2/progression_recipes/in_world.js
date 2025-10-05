/**
 * AE in world fluid recipe
 *  - `args`:
 *      - `inputItems` : an array of arrays of the following structure : [{ tag|item : name }, amount], items defaults to 1 item
 *      - `outputItems` : an array of arrays of the following structure : [{ id : name }, amount], items defaults to 1 item (max 1)
 *      - `inputFluids` : an array of arrays of the following structure : [{ fluid : name }, amount], fluid defaults to 1000mb item (max 1)
 *      - --------
 *      - `removeRecipe`: self explanatory
 *      - `compatOff`: doesn't add MI and IE recipes if true (mixer)
*/
const aeInWorldRecipe = (event, args) => {
    let recipe = {
        type: "ae2:transform",
        circumstance:{type: "fluid", tag:args.inputFluids[0][0].fluid},
        ingredients: [],
        result: Object.assign({},args.outputItems[0][0], {count: args.outputItems[0][1] || 1}),
    }
    args.inputItems.forEach((input) => {recipe.ingredients.push(Object.assign({},input[0], {count:input[1] || 1}))})
    if(!args.compatOff){
        miMachineCraft(event, {energy:2, time:200, machine:"modern_industrialization:mixer",
            inputItems:args.inputItems,
            outputItems:[[{item:recipe.result.id}, recipe.result.count]],
            inputFluids:args.inputFluids
        })
    }
    if(args.removeRecipe){event.remove({output: args.outputItems[0][0].id})}
    event.custom(recipe)
}

ServerEvents.recipes(event => {

    aeInWorldRecipe(event,{
        inputItems:[
            [{ "item": "ae2:charged_certus_quartz_crystal" }, 1],
            [{ "tag": "c:gems/quartz" }, 1],
            [{ "item": "minecraft:amethyst_shard" }, 1],
        ],
        outputItems:[[{id:"ae2:fluix_crystal"}]],
        inputFluids: [[{fluid : "minecraft:water"}]],
        removeRecipe:true
    })

})
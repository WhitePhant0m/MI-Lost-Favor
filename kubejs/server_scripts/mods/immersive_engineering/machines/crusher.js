/**
 * IE crusher recipe
 *  - `args`:
 *      - `energy` : self explanatory, defaults to 102400
 *      - `time` : time in ticks (20 = 1sec), defaults to 200
 *      - --------
 *      - `inputItems` : Array (max 1 elements) - each element looks like this : [{ tag|item : name }, amount], amount defaults to 1 if not specified
 *      - `outputItems` : Array (max ? elements) - first element looks like this : [{ item : name }, amount], every next one : [{ item : name }, amount, chance] amount defaults to 1 if not specified 
 *      - --------
 *      - `removeRecipe`: Boolean - if true: removes all other default recipes with this outputs
 *      - `compatOff`: Boolean - if true : function will NOT add compatible mi recipe, if not specified then recipe WILL be added
*/
const ieCrusherCraft = (event, args) => {
    let recipe = {
        type: "immersiveengineering:crusher",
        input: args.inputItems[0][0],
        secondaries: [],
        energy: args.energy || 102400,
        time: args.time || 200
    }
    args.outputItems.forEach((out, index) => {index == 0 ? recipe.result = {basePredicate:out[0], count:out[1] || 1} : recipe.secondaries.push({output:out[0], count:out[1] || 1, chance:out[2]})})
    if(!args.compatOff){
        miMachineCraft(event, {energy:32, time:args.time || 200, machine:"modern_industrialization:macerator",
            inputItems:args.inputItems,
            outputItems:args.outputItems
        })
    }
    if(args.removeRecipe){event.remove(args.outputItems.forEach((out) => {event.remove({output: out})}))}
    event.custom(recipe)
}

ServerEvents.recipes(event => {

    ieCrusherCraft(event,{
        inputItems:[[{"item": "extendedae:entro_crystal"}]],
        outputItems:[[{item: "extendedae:entro_dust"}, 1]],
        compatOff:true
    })

    ieCrusherCraft(event,{
        inputItems:[[{"item": "advanced_ae:shattered_singularity"}]],
        outputItems:[[{item: "advanced_ae:quantum_infused_dust"}, 2]],
        compatOff:true
    })

})
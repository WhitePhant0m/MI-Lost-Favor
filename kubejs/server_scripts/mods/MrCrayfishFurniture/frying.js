/**
 * MrCrayfishFurniture frying recipe
 *  - `args`:
 *      - `inputItems` : Array (max 1 elements) - each element looks like this : [{ tag|item : name }, amount], amount defaults to 1 if not specified
 *      - `outputItems` : Array (max 1 elements) - each element looks like this : [{ id : name }, amount], amount defaults to 1 if not specified
 *      - `cookingtime` : defaults to 100
 *      - `experience` : defaults to 0.5
 *      - `category` : 
 *      - --------
 *      - `removeRecipe`: Boolean - if true: removes all other default recipes with this outputs
 *      - `compatOff`: Boolean - if true : function will NOT add compatible mi recipe, if not specified then recipe WILL be added
*/
const cfmFryingCraft = (event, args) => {
    let recipe = {
        type: "refurbished_furniture:frying_pan_cooking",
        cookingtime: args.cookingtime || 100,
        experience: args.experience || 0.5,
        category: args.category || "food",
        ingredient: Object.assign({},args.inputItems[0][0], {count: args.inputItems[0][1] || 1}),
        result: Object.assign({},args.outputItems[0][0], {count: args.outputItems[0][1] || 1}),
    }
    if(!args.compatOff){
        cfmGrillCraft(event, {
            inputItems:args.inputItems,
            outputItems:args.outputItems,
            compatOff:true
        })
    }
    if(args.removeRecipe){event.remove({output: args.outputItems[0][0].id})}
    event.custom(recipe)
}
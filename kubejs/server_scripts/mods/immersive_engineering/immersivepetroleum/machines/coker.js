function ieCokerRecipe(event, args){
    let recipe = {
        type: "immersivepetroleum:coker",
        energy:args.energy || 15360,
        input:Object.assign({},{"basePredicate": args.inputItems[0][0]}, {count:args.inputItems[0][1] || 1}),
        inputfluid: Object.assign({}, args.inputFluids[0][0], {amount:args.inputFluids[0][1] || 1000}),
        result:Object.assign({}, args.outputItems[0][0], {count:args.outputItems[0][1] || 1}),
        resultfluid: {id:args.outputFluids[0][0].fluid, amount:args.outputFluids[0][1] || 1},
        time:args.time || 1
    }
    if(!args.compatOff){
        miMachineCraft(event, {energy:8, time:100, machine:"modern_industrialization:distillation_tower",
            outputItems:args.outputItems,
            inputFluids:args.inputFluids,
            outputFluids:args.outputFluids
        })
    }
    //if(args.removeRecipe){args.outputFluids.forEach((out) => {event.remove({output: out[0].fluid})})}
    event.custom(recipe)
}

ServerEvents.recipes(event => {
    ieCokerRecipe(event, {
        outputItems:[[ { id: "immersivepetroleum:petcoke"}, 1]],
        inputItems:[[ { item:"immersivepetroleum:bitumen"} , 1 ]],
        outputFluids:[[ {fluid :"modern_industrialization:sulfuric_light_fuel"} , 140 ]],
        inputFluids:[[ {fluid :"modern_industrialization:sulfuric_heavy_fuel"} , 200 ]],
        compatOff:true,
        time:30
    })
})
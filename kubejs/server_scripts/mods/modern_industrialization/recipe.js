/**
 * any MI machine recipe
 *  - `args`: everything is optional
 *      - `energy` : energy|steam consumption/tick, defaults to 8; allowed machine tier depends on this `1-3` : bronze tier; `4-7` : steel tier; `8+` electric tier
 *      - `time` : time in ticks (20 = 1sec), defaults to 100
 *      - `machine` : String - mi machine name, defaults to "modern_industrialization:chemical_reactor" (has all inputs and outputs)
 *      - `token` : item that will not be consumed upon craft, {item|tag : name}
 *      - --------
 *      - `multiplyEnergy`: Boolean - (more items = more energy) if true: energy = energy + (inputs.length + fluids.length) * (energy / 4)
 *      - `removeRecipe`: Boolean - if true: removes all other default recipes with this outputs
 *      - --------
 *      - `ins/outs` : Arrays - each element looks like this : [{ tag|item|fluid : name }, amount, probability], amount defaults to 1 for items and 1000 for fluids if not specified
 *          - `inputItems`
 *          - `outputItems`
 *          - `inputFluids`
 *          - `outputFluids`

*/

const miMachineCraft = (event, args) => {
    const fluidsin = args.inputFluids || [];
    const fluidsout = args.outputFluids || [];
    const inputs = args.inputItems || [];
    const outputs = args.outputItems || [];
    const energy = args.multiplyEnergy ? args.energy + (inputs.length + fluids.length) * (energy / 4) : args.energy || 8
    const time = args.time || 100

    let recipe = {
        "type" : args.machine || "modern_industrialization:chemical_reactor",
        "eu" : energy,
        "duration" : time,
        "item_inputs" : [],
        "item_outputs" : [],
        "fluid_inputs" : [],
        "fluid_outputs" : [],

    }

    inputs.forEach((input) => {recipe.item_inputs.push(Object.assign({}, input[0], {amount:input[1] || 1}, {probability:input[2]}))})
    outputs.forEach((out) => {recipe.item_outputs.push(Object.assign({}, out[0], {amount:out[1] || 1}, {probability:out[2]}))})
    fluidsin.forEach((input) => {recipe.fluid_inputs.push(Object.assign({}, input[0], {amount:input[1] || 1000} , {probability:input[2]}))})
    fluidsout.forEach((out) => {recipe.fluid_outputs.push(Object.assign({}, out[0], {amount:out[1] || 1000}, {probability:out[2]}))})

    if(args.removeRecipe){outputs.forEach((out) => {event.remove({output: out})})}
    if(args.token){recipe.item_inputs.push(Object.assign({}, args.token, {amount:1}, {probability:0}))}
    event.custom(recipe)
};



ServerEvents.recipes(event => {
    event.remove({
        output: [
            'modern_industrialization:netherite_hammer',
            'modern_industrialization:steel_hammer',
            'modern_industrialization:diamond_hammer',
            'modern_industrialization:iron_hammer',
            "modern_industrialization:diamond_tiny_dust"
        ]
    })

    const removing_by_recipe_id = [
        /modern_industrialization:materials\/.*\/craft\/ring/,
        "modern_industrialization:materials/fire_clay_dust",
        "modern_industrialization:materials/bronze_dust",
        "modern_industrialization:materials/blast_furnace/bauxite_to_aluminum_ingot",
        "modern_industrialization:vanilla_recipes/easy_chest",
        "modern_industrialization:vanilla_recipes/easy_chest",
    ]

    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
    });

    //WIP, crutch solution

    event.remove({ output: /ae2:*/, type: 'modern_industrialization:packer' })
    event.remove({ output: /ae2:*/, type: 'modern_industrialization:assembler' })
    // event.remove({ output: /ae2:*/, type: 'modern_industrialization:electrolyzer' })

    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "clay_ball" },
            { "item": "clay_ball"},
            { "item": "modern_industrialization:brick_dust"},
            { "item": "modern_industrialization:brick_dust"},
        ],
        output: "modern_industrialization:fire_clay_dust",
        amount: 3,
    })

    //bronze_glass_recipes
    /*
    event.shaped(
        Item.of('kubejs:bronze_glass', 8),
        [
            'BRB',
            'RGR', 
            'BRB'
        ],
        {
            R: '#c:rods/bronze',
            B: '#c:bolts/bronze', 
            G: '#c:glass_blocks'
        }
    )

    event.recipes.modern_industrialization.assembler(32,200)
    .itemIn("#c:glass_blocks")
    .itemIn("4x #c:rods/bronze")
    .fluidIn("modern_industrialization:soldering_alloy" , 100)
    .itemOut('8x kubejs:bronze_glass')


    event.shaped(
        Item.of('kubejs:bronze_machine_bit', 16),
        [
            'BRB',
            'RGR', 
            'BRB'
        ],
        {
            R: '#c:rods/bronze',
            B: '#c:bolts/bronze', 
            G: 'modern_industrialization:bronze_machine_casing'
        }
    )

    event.recipes.modern_industrialization.assembler(32,200)
    .itemIn("modern_industrialization:bronze_machine_casing")
    .itemIn("4x #c:rods/bronze")
    .fluidIn("modern_industrialization:soldering_alloy" , 100)
    .itemOut('16x kubejs:bronze_machine_bit')
    */

    event.shaped(
        Item.of('kubejs:radio_tower_block', 8),
        [
            'ASA',
            'S S', 
            'ASA'
        ],
        {
            A: '#c:plates/aluminum',
            S: '#c:plates/stainless_steel', 
        }
    )

    event.shaped(
        Item.of('kubejs:radio_tower_slab', 6),
        [
            '   ',
            'BBB', 
            '   '
        ],
        {
            B: 'kubejs:radio_tower_block',
        }
    )


    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "i": {
                "tag": "c:ingots/aluminum"
                },
                "d": {
                "tag": "c:dyes/blue"
                },
                "r": {
                "tag": "c:rods/aluminum"
                },
                "p": {
                "tag": "c:paper"
                }
            },
            "pattern": [
                "rir",
                "ddd",
                "ppp"
            ],
            "result": {
                "components": {
                "immersiveengineering:blueprint": "MI components"
                },
                "count": 1,
                "id": "immersiveengineering:blueprint"
            },
            "show_notification": false
        })



    event.replaceOutput(
        { output: 'modern_industrialization:steel_block' },
        'modern_industrialization:steel_block',
        'immersiveengineering:storage_steel'
    )

    event.replaceInput(
        { input: 'modern_industrialization:steel_block' },
        'modern_industrialization:steel_block',
        'immersiveengineering:storage_steel'
    )


    event.replaceInput(
        { output: 'modern_industrialization:analog_circuit' },
        'modern_industrialization:analog_circuit_board',
        'immersiveengineering:component_electronic'
    )

    const craftWithFluidPipes = [
        'extended_industrialization:electric_canning_machine',
        'extended_industrialization:electric_composter',
        'extended_industrialization:machine_chainer_relay',
        'extended_industrialization:mv_solar_panel',
        'extended_industrialization:steel_alloy_smelter',
        'extended_industrialization:steel_brewery',
        'extended_industrialization:steel_canning_machine',
        'extended_industrialization:steel_honey_extractor',
        'modern_industrialization:steel_upgrade',
        'extended_industrialization:hv_solar_panel', 
        'extended_industrialization:lv_solar_panel', 
        'modern_industrialization:pump', 
        'modern_industrialization:advanced_pump', 
        /*
        'modern_industrialization:bronze_compressor', 
        'modern_industrialization:bronze_cutting_machine', 
        'modern_industrialization:bronze_macerator', 
        'modern_industrialization:bronze_mixer', 
        'modern_industrialization:bronze_water_pump', 
        'extended_industrialization:bronze_bending_machine',
        'extended_industrialization:bronze_composter',
        'extended_industrialization:bronze_waste_collector',
        */
        'modern_industrialization:electric_water_pump', 
        'modern_industrialization:electric_mixer', 
        'modern_industrialization:distillery', 
        'modern_industrialization:hv_steam_turbine', 
        'modern_industrialization:lv_steam_turbine', 
        'modern_industrialization:mv_steam_turbine', 
        'modern_industrialization:steel_unpacker', 
        'modern_industrialization:steel_packer', 
        'modern_industrialization:oil_drilling_rig', 
        'modern_industrialization:steel_wiremill', 
        'modern_industrialization:aluminum_drill', 
        'modern_industrialization:bronze_drill', 
        'modern_industrialization:copper_drill', 
        'modern_industrialization:stainless_steel_drill',
    ]

    craftWithFluidPipes.forEach(item => {
        event.replaceInput(
            { output: item },
            '#modern_industrialization:fluid_pipes',
            'moderndynamics:fluid_pipe'
        )
    });

    const craftWithItemPipes = [
        'modern_industrialization:steam_quarry', 
        'modern_industrialization:steel_packer', 
        'modern_industrialization:steel_unpacker', 
        'modern_industrialization:bronze_drill', 
        'modern_industrialization:copper_drill', 
        'modern_industrialization:gold_drill', 
        'modern_industrialization:stainless_steel_drill', 
        'modern_industrialization:steel_drill', 
        'modern_industrialization:titanium_drill', 
        'extended_industrialization:machine_chainer_relay'
    ]

    craftWithItemPipes.forEach(item => {
        event.replaceInput(
            { output: item },
            '#modern_industrialization:item_pipes',
            'moderndynamics:item_pipe'
        )
    });

    const pipeTypes = ["fluid", "item"]
    pipeTypes.forEach(type => {
        global.dyeColors.forEach(color => {
            event.replaceInput(
                { output: `modern_industrialization:${color.name}_${type}_pipe` },
                'modern_industrialization:bronze_curved_plate',
                'modern_industrialization:aluminum_curved_plate'
            )
        });

        event.replaceInput(
            { output: `modern_industrialization:${type}_pipe` },
            'modern_industrialization:bronze_curved_plate',
            'modern_industrialization:aluminum_curved_plate'
        )
    });





})
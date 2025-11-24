//priority 10
ServerEvents.recipes(event => {

    var wrench = "modern_industrialization:wrench"
    let craft_removal_list = [
       
    ]

    //#region Array functions

    Array.prototype.layerAll = function(letter) {
        this.fill(letter.repeat(3))
        return this
    }

    Array.prototype.layerRow = function(letter, row) {
        this.splice(row, 1, letter.repeat(3))
        return this
    }

    Array.prototype.layerOne = function(letter, row, index) {
        this.splice(row, 1, this[row].substring(0, index) + letter + this[row].substring(index + 1))
        return this
    }

    Array.prototype.layerCorners = function(letter) {
        this.splice(0, 1, letter + this[0].substring(1, 2) + letter)
        this.splice(2, 1, letter + this[2].substring(1, 2) + letter)
        return this
    }

    Array.prototype.layerSides = function(letter) {
        this.splice(0, 1, this[0].substring(0, 1) + letter + this[0].substring(2, 3))
        this.splice(1, 1, letter + this[1].substring(1, 2) + letter)
        this.splice(2, 1, this[2].substring(0, 1) + letter + this[2].substring(2, 3))
        return this
    }

    Array.prototype.layerCentre = function(letter) {
        this.layerOne(letter,1,1)
        return this
    }

    Array.prototype.layerFront = function(letter) {
        this.layerOne(letter,2,1)
        return this
    }

    Array.prototype.layerRight = function(letter) {
        this.layerOne(letter,1,0)
        return this
    }

    Array.prototype.layerLeft = function(letter) {
        this.layerOne(letter,1,2)
        return this
    }

    Array.prototype.layerBack = function(letter) {
        this.layerOne(letter,0,1)
        return this
    }

    Array.prototype.layerPlus = function(letter) {
        this.layerOne(letter,0,1)
        this.layerRow(letter,1)
        this.layerOne(letter,2,1)
        return this
    }

    //#endregion

    function assembler_recipe(energy,time,inputs,outputs,fluids,token){
        fluids = fluids || [];
        energy = energy + inputs.length * (energy / 4)
        var recipe = event.recipes.modern_industrialization.assembler(energy, time);
        inputs.forEach((input) => {Array.isArray(input) ? recipe.itemIn(input[0], input[1]) : recipe.itemIn(input)})
        fluids.forEach((fluid) => {recipe.fluidIn(fluid[0], fluid[1])})
        outputs.forEach((out) => {recipe.itemOut(out)})
        if (token != undefined){recipe.itemIn(token, 0)}
    }

    function packer_recipe(energy,time,inputs,outputs){
        var recipe = event.recipes.modern_industrialization.packer(energy, time);
        inputs.forEach((input) => {Array.isArray(input) ? recipe.itemIn(input[0], input[1]) : recipe.itemIn(input)})
        outputs.forEach((out) => {
            recipe.itemOut(out)
        })
    }

    function workspace_recipe(grid, materials, output, materialset, tool, nocompat){
        nocompat = nocompat || false
        materialset = materialset || {}
        event.recipes.ytech.workspace_crafting(
            output,  // crafting result
            tool || wrench,   
            grid[2],  // bottom layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            grid[1],  // middle layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            grid[0],     // top layer pattern like for shaped crafting (['XXX','XXX','XXX'])
            Object.assign({}, materials, materialset) // ingredient mapping e.g.: {X: 'minecraft:andesite'}
        );
        craft_removal_list.push(output)
        if (!nocompat) {
            let mats = []
            var amounts = grid[0].concat(grid[1],grid[2]).join("")
            switch(materialset){
                case bronzeMaterialset:
                    mats.push("modern_industrialization:bronze_machine_casing","4x moderndynamics:fluid_pipe","kubejs:bronze_glass","kubejs:small_copper_fluid_container")
                    break;
                case bronzeBits:
                    mats.push("modern_industrialization:bronze_machine_casing")
                    break;
                case steelUpgrade:
                    mats.push("modern_industrialization:steel_upgrade")
                    Object.entries(materials).forEach(m =>{
                        let regex = new RegExp(m[0],'g')
                        mats.push((amounts.match(regex) || []).length + "x " + m[1])
                    })
                    packer_recipe(4,400,mats,[output])
                    return;
                case steelBits:
                    mats.push("modern_industrialization:steel_machine_casing")
                    break;
                case steelMaterialset:
                    mats.push("modern_industrialization:steel_machine_casing","immersiveengineering:fluid_pipe","kubejs:steel_infused_glass","kubejs:small_steel_fluid_container")
                    break;
                case basicMaterialset:
                    mats.push("modern_industrialization:basic_machine_hull")
                    break;
                case basicBits:
                    mats.push("modern_industrialization:frostproof_machine_casing")
                    break;

            }
            Object.entries(materials).forEach(m =>{
                let regex = new RegExp(m[0],'g')
                mats.push((amounts.match(regex) || []).length + "x " + m[1])
            })
            //event.remove({ type: 'modern_industrialization:assembler', output: output})
            assembler_recipe(8,400,mats,[output])
        }
    }

    //#region MI bronze machines
    var bronzeMaterialset = {M:'kubejs:bronze_machine_bit', P:"moderndynamics:fluid_pipe", G:"kubejs:bronze_glass", F:"kubejs:small_copper_fluid_container"}
    var bronzeBits = {M:'kubejs:bronze_machine_bit'}

    //tank
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCentre("G"),
            ['   ','   ','   '].layerAll("M").layerSides("G").layerCentre(" "),
            ['   ','   ','   '].layerAll("M").layerCentre("G")
        ],
        {G:"kubejs:bronze_glass"},
        'modern_industrialization:bronze_tank', bronzeBits
    )
    //barrel
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCentre("G"),
            ['   ','   ','   '].layerAll("M").layerSides("G").layerCentre(" "),
            ['   ','   ','   '].layerAll("M").layerCentre("G")
        ],
        {G:"labels:label"},
        'modern_industrialization:bronze_barrel', bronzeBits
    )
    //furnace
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCentre("C"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre("S").layerBack("P"),
            ['   ','   ','   '].layerAll("B").layerCentre("F")
        ],
        {B:'modern_industrialization:fire_clay_bricks',S:"ytech:primitive_smelter",C:"ytech:reinforced_brick_chimney"},
        'modern_industrialization:bronze_mi_furnace', bronzeMaterialset
    )
    //steam_blast_furnace
    workspace_recipe([
            ['   ','   ','   '].layerAll("B").layerCentre("C"),
            ['   ','   ','   '].layerAll("B").layerFront(" ").layerCentre("S"),
            ['   ','   ','   '].layerAll("B")
        ],
        {B:'modern_industrialization:fire_clay_bricks',S:"ytech:primitive_smelter",C:"ytech:reinforced_brick_chimney"},
        'modern_industrialization:steam_blast_furnace'
    )
    //coke_oven
    workspace_recipe([
            ['   ','   ','   '].layerAll("B").layerCentre("C"),
            ['   ','   ','   '].layerAll("B").layerFront(" ").layerCentre("S"),
            ['   ','   ','   '].layerAll("B")
        ],
        {B:'minecraft:bricks',S:"ytech:primitive_smelter",C:"ytech:reinforced_brick_chimney"},
        'modern_industrialization:coke_oven'
    )
    //macerator
    workspace_recipe([
            ['   ','   ','   '].layerCorners("g").layerSides("r"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre(" "),
            ['   ','   ','   '].layerAll("M").layerPlus("P").layerCentre("F")
        ],
        {g:"#c:gears/copper",r:"#c:rods/copper"},
        'modern_industrialization:bronze_macerator', bronzeMaterialset
    )
    //compressor
    workspace_recipe([
            ['   ','   ','   '].layerCorners("M").layerSides("r"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre("h"),
            ['   ','   ','   '].layerAll("M").layerPlus("P").layerCentre("F")
        ],
        {r:"#c:rods/copper",h:"modern_industrialization:forge_hammer"},
        'modern_industrialization:bronze_compressor', bronzeMaterialset
    )
    //cutting_machine
    workspace_recipe([
            ['   ','   ','   '].layerCorners("M").layerSides("r"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre("h"),
            ['   ','   ','   '].layerAll("M").layerPlus("P").layerCentre("F")
        ],
        {r:"#c:gears/copper",h:"modern_industrialization:copper_blade"},
        'modern_industrialization:bronze_cutting_machine', bronzeMaterialset
    )
    //composter
    workspace_recipe([
            ['   ','   ','   '].layerCorners("M").layerSides("r"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre("h"),
            ['   ','   ','   '].layerAll("M").layerPlus("P").layerCentre("F")
        ],
        {r:"#c:rods/copper",h:"minecraft:composter"},
        'extended_industrialization:bronze_composter', bronzeMaterialset
    )
    //pump
    workspace_recipe([
            ['   ',' P ','   '].layerCorners("g").layerSides("r"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre("h"),
            ['   ','   ','   '].layerAll("M").layerPlus("P").layerCentre("F")
        ],
        {r:"#c:rods/copper",h:"modern_industrialization:copper_rotor",g:"#c:gears/copper"},
        'modern_industrialization:bronze_water_pump', bronzeMaterialset
    )
    //mixer
    workspace_recipe([
            ['   ','   ','   '].layerCentre("G").layerSides("r").layerCorners("g"),
            ['   ','   ','   '].layerAll("M").layerSides("G").layerCentre("h"),
            ['   ','   ','   '].layerAll("M").layerPlus("P").layerCentre("F")
        ],
        {r:"#c:rods/copper",h:"modern_industrialization:copper_rotor",g:"#c:gears/copper"},
        'modern_industrialization:bronze_mixer', bronzeMaterialset
    )
    //solar_boiler
    workspace_recipe([
            ['   ','   ','   '].layerCentre("G").layerSides("s").layerCorners("M"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre("F"),
            ['   ','   ','   '].layerAll("B").layerCentre("P")
        ],
        {s:"#c:plates/silver",B:"modern_industrialization:fire_clay_bricks"},
        'extended_industrialization:bronze_solar_boiler', bronzeMaterialset
    )
    //bronze_boilder
    workspace_recipe([
            ['   ','   ','   '].layerCentre("F").layerSides("r").layerCorners("M"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre("h"),
            ['   ','   ','   '].layerAll("B").layerCentre("P")
        ],
        {r:"#c:rods/copper",h:"minecraft:furnace",B:"modern_industrialization:fire_clay_bricks"},
        'modern_industrialization:bronze_boiler', bronzeMaterialset
    )
    //waste_collector
    workspace_recipe([
            ['   ','   ','   '].layerCentre("m").layerSides("r").layerCorners("M"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre("h"),
            ['   ','   ','   '].layerAll("M").layerPlus("P").layerCentre("F")
        ],
        {r:"#c:rods/copper",h:"minecraft:composter",m:"ytech:copper_mesh"},
        'extended_industrialization:bronze_waste_collector', bronzeMaterialset
    )
   
    //bending_machine
    workspace_recipe([
            ['   ','   ','   '].layerAll("g").layerSides("r"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre(" "),
            ['   ','   ','   '].layerAll("M").layerPlus("P").layerCentre("F")
        ],
        {r:"#c:rods/copper",g:"#c:gears/copper"},
        'extended_industrialization:bronze_bending_machine', bronzeMaterialset
    )
    //large_steam_furnace
    workspace_recipe([
            ['   ','   ','   '].layerCorners("c").layerPlus("C"),
            ['   ',' f ','   '].layerCorners("c").layerSides("C"),
            ['   ','   ','   '].layerCorners("c").layerPlus("P")
        ],
        {c:"modern_industrialization:bronze_curved_plate",P:"modern_industrialization:fire_clay_bricks",f:"modern_industrialization:bronze_mi_furnace",C:"modern_industrialization:bronze_machine_casing_pipe"},
        'mi_tweaks:advanced_large_steam_furnace'
    )
    //large_steam_macerator
    workspace_recipe([
            ['   ','   ','   '].layerCorners("c").layerPlus("C"),
            ['   ',' f ','   '].layerCorners("c").layerSides("C"),
            ['   ','   ','   '].layerCorners("c").layerPlus("P")
        ],
        {c:"modern_industrialization:bronze_curved_plate",P:"modern_industrialization:bronze_plated_bricks",f:"modern_industrialization:bronze_macerator",C:"modern_industrialization:bronze_machine_casing_pipe"},
        'extended_industrialization:large_steam_macerator'
    )
    //Large steam boiler
    workspace_recipe([
            ['   ','   ','   '].layerCorners("c").layerPlus("C").layerCentre("a"),
            ['   ',' f ','   '].layerCorners("c").layerSides("C"),
            ['   ','   ','   '].layerCorners("c").layerPlus("P")
        ],
        {c:"modern_industrialization:bronze_curved_plate",P:"modern_industrialization:fire_clay_bricks",f:"modern_industrialization:bronze_boiler",C:"modern_industrialization:bronze_plated_bricks",a:"modern_industrialization:analog_circuit"},
        'modern_industrialization:large_steam_boiler'
    )
    //Steam farmer
    workspace_recipe([
            ['   ','   ','   '].layerCorners("c").layerPlus("C").layerCentre("a"),
            ['   ',' f ','   '].layerCorners("c").layerSides("C"),
            ['   ','   ','   '].layerCorners("c").layerPlus("P")
        ],
        {c:"modern_industrialization:bronze_curved_plate",P:"modern_industrialization:bronze_plated_bricks",f:"extended_industrialization:steel_combine",C:"modern_industrialization:bronze_machine_casing_pipe",a:"modern_industrialization:analog_circuit"},
        'extended_industrialization:steam_farmer'
    )
    //item_output
    workspace_recipe([
            ['   ','   ','   '].layerPlus("M").layerCentre("p"),
            ['   ','   ','   '].layerPlus("M").layerPlus("p").layerCentre("A"),
            ['   ','   ','   '].layerPlus("M").layerCentre("h")
        ],
        {p:"moderndynamics:item_pipe",h:"minecraft:hopper",A:"moderndynamics:extractor"},
        'modern_industrialization:bronze_item_output_hatch', bronzeBits
    )
    //item_input
    workspace_recipe([
            ['   ','   ','   '].layerPlus("M").layerCentre("h"),
            ['   ','   ','   '].layerPlus("M").layerPlus("p").layerCentre("A"),
            ['   ','   ','   '].layerPlus("M").layerCentre("p")
        ],
        {p:"moderndynamics:item_pipe",h:"minecraft:hopper",A:"moderndynamics:attractor"},
        'modern_industrialization:bronze_item_input_hatch', bronzeBits
    )
    //fluid_output
    workspace_recipe([
            ['   ','   ','   '].layerPlus("M").layerCentre("p"),
            ['   ','   ','   '].layerPlus("M").layerPlus("p").layerCentre("A"),
            ['   ','   ','   '].layerPlus("M").layerCentre("h")
        ],
        {p:"moderndynamics:fluid_pipe",h:"minecraft:hopper",A:"moderndynamics:extractor"},
        'modern_industrialization:bronze_fluid_output_hatch', bronzeBits
    )
    //fluid_input
    workspace_recipe([
            ['   ','   ','   '].layerPlus("M").layerCentre("h"),
            ['   ','   ','   '].layerPlus("M").layerPlus("p").layerCentre("A"),
            ['   ','   ','   '].layerPlus("M").layerCentre("p")
        ],
        {p:"moderndynamics:fluid_pipe",h:"minecraft:hopper",A:"moderndynamics:attractor"},
        'modern_industrialization:bronze_fluid_input_hatch', bronzeBits
    )
    //#endregion

    //#region steel machines
    var steelMaterialset = {M:'kubejs:steel_machine_bit', P:"immersiveengineering:fluid_pipe", G:'kubejs:steel_infused_glass', F:'kubejs:small_steel_fluid_container'}
    var steelUpgrade = {M:'kubejs:steel_machine_bit', P:"immersiveengineering:fluid_pipe", G:'kubejs:steel_infused_glass'}
    var steelBits = {M:'kubejs:steel_machine_bit'}

    function steelMachineUpgrade(base, output){
        workspace_recipe([
                ['   ','   ','   '].layerPlus("M"),
                ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre("B"),
                ['   ','   ','   '].layerPlus("P")
            ],
            {B:base},
            output, steelUpgrade
        )
    }
    //furnace
    steelMachineUpgrade("modern_industrialization:bronze_mi_furnace", "modern_industrialization:steel_mi_furnace")
    //boiler
    steelMachineUpgrade("modern_industrialization:bronze_boiler", "modern_industrialization:steel_boiler")
    //solar_boiler
    steelMachineUpgrade("extended_industrialization:bronze_solar_boiler", "extended_industrialization:steel_solar_boiler")
    //macerator
    steelMachineUpgrade("modern_industrialization:bronze_macerator", "modern_industrialization:steel_macerator")
    //cutting_machine
    steelMachineUpgrade("modern_industrialization:bronze_cutting_machine", "modern_industrialization:steel_cutting_machine")
    //water_pump
    steelMachineUpgrade("modern_industrialization:bronze_water_pump", "modern_industrialization:steel_water_pump")
    //bending_machine
    steelMachineUpgrade("extended_industrialization:bronze_bending_machine", "extended_industrialization:steel_bending_machine")
    //mixer
    steelMachineUpgrade("modern_industrialization:bronze_mixer", "modern_industrialization:steel_mixer")
    //waste_collector
    steelMachineUpgrade("extended_industrialization:bronze_waste_collector", "extended_industrialization:steel_waste_collector")
    //compressor
    steelMachineUpgrade("modern_industrialization:bronze_compressor", "modern_industrialization:steel_compressor")
    //composter
    steelMachineUpgrade("extended_industrialization:bronze_composter", "extended_industrialization:steel_composter")

    //honey_extractor
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerSides("g"),
            ['   ','   ','   '].layerAll("M").layerSides("G").layerFront("R").layerCentre(" "),
            ['   ','   ','   '].layerAll("M").layerPlus("P").layerCentre("F")
        ],
        {R:"modern_industrialization:tin_rotor",g:"modern_industrialization:bronze_gear"},
        'extended_industrialization:steel_honey_extractor', steelMaterialset
    )
    //wiremill
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCorners("R"),
            ['   ','   ','   '].layerAll("M").layerCorners("g").layerCentre(" ").layerFront("G"),
            ['   ','   ','   '].layerAll("M").layerPlus("P").layerCentre("F")
        ],
        {R:"modern_industrialization:bronze_rotor",g:"modern_industrialization:bronze_gear"},
        'modern_industrialization:steel_wiremill', steelMaterialset
    )
    //alloy_smelter
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCorners("w"),
            ['   ','   ','   '].layerAll("M").layerCorners("w").layerCentre("A").layerFront("G"),
            ['   ','   ','   '].layerAll("M").layerPlus("P").layerCentre("F")
        ],
        {w:"modern_industrialization:cupronickel_wire",A:"ytech:primitive_alloy_smelter"},
        'extended_industrialization:steel_alloy_smelter', steelMaterialset
    )
    //packer
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCorners("g").layerCentre("p"),
            ['   ','   ','   '].layerAll("M").layerCorners("g").layerSides("p").layerCentre(" ").layerFront("G"),
            ['   ','   ','   '].layerAll("M").layerPlus("P").layerCentre("F")
        ],
        {g:"modern_industrialization:bronze_gear",p:"minecraft:piston"},
        'modern_industrialization:steel_packer', steelMaterialset
    )
    //unpacker
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCorners("g").layerCentre("p"),
            ['   ','   ','   '].layerAll("M").layerCorners("g").layerSides("p").layerCentre(" ").layerFront("G"),
            ['   ','   ','   '].layerAll("M").layerPlus("P").layerCentre("F")
        ],
        {g:"modern_industrialization:bronze_gear",p:"minecraft:sticky_piston"},
        'modern_industrialization:steel_unpacker', steelMaterialset
    )
    //tank
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCentre("G"),
            ['   ','   ','   '].layerAll("M").layerSides("G").layerCentre(" "),
            ['   ','   ','   '].layerAll("M").layerCentre("G")
        ],
        {G:"kubejs:steel_infused_glass"},
        'modern_industrialization:steel_tank', steelBits
    )
    //barrel
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCentre("G"),
            ['   ','   ','   '].layerAll("M").layerSides("G").layerCentre(" "),
            ['   ','   ','   '].layerAll("M").layerCentre("G")
        ],
        {G:"labels:label"},
        'modern_industrialization:steel_barrel', steelBits
    )
    //item_output
    workspace_recipe([
            ['   ','   ','   '].layerPlus("M").layerCentre("p"),
            ['   ','   ','   '].layerPlus("M").layerPlus("p").layerCentre("A"),
            ['   ','   ','   '].layerPlus("M").layerCentre("h")
        ],
        {p:"moderndynamics:item_pipe",h:"minecraft:hopper",A:"moderndynamics:extractor"},
        'modern_industrialization:steel_item_output_hatch', steelBits
    )
    //item_input
    workspace_recipe([
            ['   ','   ','   '].layerPlus("M").layerCentre("h"),
            ['   ','   ','   '].layerPlus("M").layerPlus("p").layerCentre("A"),
            ['   ','   ','   '].layerPlus("M").layerCentre("p")
        ],
        {p:"moderndynamics:item_pipe",h:"minecraft:hopper",A:"moderndynamics:attractor"},
        'modern_industrialization:steel_item_input_hatch', steelBits
    )
    //fluid_output
    workspace_recipe([
            ['   ','   ','   '].layerPlus("M").layerCentre("p"),
            ['   ','   ','   '].layerPlus("M").layerPlus("p").layerCentre("A"),
            ['   ','   ','   '].layerPlus("M").layerCentre("h")
        ],
        {p:"immersiveengineering:fluid_pipe",h:"minecraft:hopper",A:"moderndynamics:extractor"},
        'modern_industrialization:steel_fluid_output_hatch', steelBits
    )
    //fluid_input
    workspace_recipe([
            ['   ','   ','   '].layerPlus("M").layerCentre("h"),
            ['   ','   ','   '].layerPlus("M").layerPlus("p").layerCentre("A"),
            ['   ','   ','   '].layerPlus("M").layerCentre("p")
        ],
        {p:"immersiveengineering:fluid_pipe",h:"minecraft:hopper",A:"moderndynamics:attractor"},
        'modern_industrialization:steel_fluid_input_hatch', steelBits
    )

    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerPlus("P"),
            ['   ','   ','   '].layerAll("M").layerSides("T").layerCentre(" "),
            ['   ','   ','   '].layerAll("M").layerPlus("P")
        ],
        {P:"immersiveengineering:fluid_pipe",T:"modern_industrialization:steel_tank"},
        'modern_industrialization:large_tank', steelBits
    )

    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerPlus("P"),
            ['   ','   ','   '].layerAll("M").layerSides("P").layerCentre("T"),
            ['   ','   ','   '].layerAll("M").layerPlus("P")
        ],
        {P:"immersiveengineering:fluid_pipe",T:"modern_industrialization:steel_tank"},
        'modern_industrialization:large_tank_hatch', steelBits
    )

    workspace_recipe([
            ['   ','   ','   '].layerSides("M").layerCentre("H"),
            ['   ','   ','   '].layerSides("M").layerCentre("C"),
            ['   ','   ','   '].layerSides("M").layerCentre("H")
        ],
        {H:"minecraft:hopper",C:"modern_industrialization:analog_circuit"},
        'modern_industrialization:configurable_chest', steelBits
    )

    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCentre("H"),
            ['   ','   ','   '].layerAll("M").layerCorners("C").layerCentre("c"),
            ['   ','   ','   '].layerAll("M").layerCentre("H")
        ],
        {H:"minecraft:hopper",C:"modern_industrialization:analog_circuit",c:"modern_industrialization:configurable_chest"},
        'extended_industrialization:large_configurable_chest', steelBits
    )



    //#endregion
   
    //#region MI basic machines
    var basicMaterialset = {M:'kubejs:basic_machine_bit', B:'modern_industrialization:portable_storage_unit', C:"modern_industrialization:tin_cable", G:'kubejs:tempered_glass'}
    var basicBits = {M:'kubejs:basic_machine_bit'}

    //tank
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCentre("G"),
            ['   ','   ','   '].layerAll("M").layerSides("G").layerCentre(" "),
            ['   ','   ','   '].layerAll("M").layerCentre("G")
        ],
        {G:"kubejs:tempered_glass"},
        'modern_industrialization:aluminum_tank', basicBits
    )
    //barrel
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCentre("G"),
            ['   ','   ','   '].layerAll("M").layerSides("G").layerCentre(" "),
            ['   ','   ','   '].layerAll("M").layerCentre("G")
        ],
        {G:"labels:label"},
        'modern_industrialization:aluminum_barrel', basicBits
    )
    //polarizer
    workspace_recipe([
            [' W ','I I',' W '].layerCorners("I").layerCentre("c"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre(" "),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {I:'modern_industrialization:inductor',W:"modern_industrialization:tin_wire",c:"modern_industrialization:analog_circuit"},
        'modern_industrialization:polarizer', basicMaterialset
    )
    //assembler
    workspace_recipe([
            [' W ','I I',' W '].layerCentre("c").layerCorners("A"),                    
            ['   ','   ','   '].layerAll("M").layerLeft("D").layerFront("G").layerCentre(" "),  
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")  
        ],
        {D:'kubejs:cd_reader', A:'modern_industrialization:robot_arm',I:"kubejs:rangefinder", W:"modern_industrialization:conveyor",c:"modern_industrialization:analog_circuit"},
        'modern_industrialization:assembler', basicMaterialset
    )
    //wiremill
    workspace_recipe([
            [' c ','I I',' c '].layerCentre("m").layerCorners("A"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre(" "),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {A:'modern_industrialization:aluminum_blade',I:"modern_industrialization:steel_rod_magnetic",c:"modern_industrialization:analog_circuit", m:"immersiveengineering:mold_wire"},
        'modern_industrialization:electric_wiremill', basicMaterialset
    )
    //mixer
    workspace_recipe([
            ['   ','   ','   '].layerCentre("G").layerCorners("A").layerSides("w"),
            ['   ','   ','   '].layerAll("M").layerSides("G").layerCentre("r"),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {A:'modern_industrialization:motor',w:"modern_industrialization:tin_wire",r:"modern_industrialization:aluminum_rotor"},
        'modern_industrialization:electric_mixer', basicMaterialset
    )
    //cutting_machine
    workspace_recipe([
            [' c ','w w',' c '].layerCentre("c").layerCorners("A"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre("r"),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {A:'modern_industrialization:motor',w:"modern_industrialization:analog_circuit",c:"modern_industrialization:conveyor",r:"modern_industrialization:invar_rotary_blade"},
        'modern_industrialization:electric_cutting_machine', basicMaterialset
    )
    //packer
    workspace_recipe([
            [' c ','w w',' c '].layerCentre("p").layerCorners("A"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre(" "),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {A:'modern_industrialization:piston',w:"modern_industrialization:analog_circuit",p:"modern_industrialization:motor",c:"modern_industrialization:tin_wire"},
        'modern_industrialization:electric_packer', basicMaterialset
    )
    //furnace
    workspace_recipe([
            [' c ','w w',' c '].layerCentre("p").layerCorners("c"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre(" "),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {w:"modern_industrialization:analog_circuit",p:"modern_industrialization:motor",c:"modern_industrialization:cupronickel_wire_magnetic"},
        'modern_industrialization:electric_mi_furnace', basicMaterialset
    )
    //brewery
    workspace_recipe([
            [' c ','w w',' c '].layerCentre("r").layerCorners("g"),
            ['   ','   ','   '].layerAll("M").layerSides("G").layerCentre("r"),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {g:"minecraft:glass_bottle",r:"minecraft:blaze_rod",w:"modern_industrialization:analog_circuit",c:"modern_industrialization:pump"},
        'extended_industrialization:electric_brewery', basicMaterialset
    )
    //waste_collector
    workspace_recipe([
            ['   ','   ','   '].layerCentre("R").layerCorners("r").layerSides("r"),
            ['   ','   ','   '].layerAll("M").layerSides("G").layerCentre("c"),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {r:"#c:rods/steel",R:"modern_industrialization:tin_rotor",c:"modern_industrialization:pump"},
        'extended_industrialization:electric_waste_collector', basicMaterialset
    )
    //honey_extractor_collector
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCentre("G").layerLeft("w").layerRight("w").layerFront("c"),
            ['   ','   ','   '].layerAll("M").layerSides("G").layerCentre(" ").layerFront("R"),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {w:"modern_industrialization:analog_circuit",R:"modern_industrialization:tin_rotor",c:"modern_industrialization:pump"},
        'extended_industrialization:electric_honey_extractor', basicMaterialset
    )
    //unpacker
    workspace_recipe([
            [' c ','w w',' c '].layerCentre("p").layerCorners("A"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre("m"),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {m:"immersiveengineering:mold_unpacking", A:'modern_industrialization:piston',w:"modern_industrialization:analog_circuit",p:"modern_industrialization:motor",c:"modern_industrialization:tin_wire"},
        'modern_industrialization:electric_unpacker', basicMaterialset
    )
    //composter
    workspace_recipe([
            [' c ','w w',' A '].layerCentre("p").layerCorners("W"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre("m"),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {m:"minecraft:composter", A:'modern_industrialization:motor',w:"modern_industrialization:analog_circuit",p:"modern_industrialization:tin_rotor",c:"modern_industrialization:pump",W:"modern_industrialization:tin_wire"},
        'extended_industrialization:electric_composter', basicMaterialset
    )
    //bending_machine
    workspace_recipe([
            [' A ','w w',' A '].layerCentre("p").layerCorners("W"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre(" "),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {p:"modern_industrialization:motor", A:'modern_industrialization:piston',w:"modern_industrialization:analog_circuit",W:"modern_industrialization:steel_ring"},
        'extended_industrialization:electric_bending_machine', basicMaterialset
    )
    //compressor
    workspace_recipe([
            [' p ','w w',' p '].layerCentre("W").layerCorners("A"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre(" "),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {p:"modern_industrialization:motor", A:'modern_industrialization:piston',w:"modern_industrialization:analog_circuit",W:"modern_industrialization:tin_wire"},
        'modern_industrialization:electric_compressor', basicMaterialset
    )
    //alloy_smelter
    workspace_recipe([
            [' r ','w w',' r '].layerCentre("p").layerCorners("c"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre(" "),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {r:"modern_industrialization:tin_rotor",w:"modern_industrialization:analog_circuit",p:"modern_industrialization:motor",c:"modern_industrialization:cupronickel_wire_magnetic"},
        'extended_industrialization:electric_alloy_smelter', basicMaterialset
    )
    //water_pump
    workspace_recipe([
            [' p ','w w',' p '].layerCentre("r").layerCorners("c"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre(" "),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {r:"modern_industrialization:tin_rotor",w:"modern_industrialization:analog_circuit",p:"modern_industrialization:motor",c:"modern_industrialization:pump"},
        'modern_industrialization:electric_water_pump', basicMaterialset
    )
    //macerator
    workspace_recipe([
            [' p ','w w',' p '].layerCentre("r").layerCorners("p"),
            ['   ','   ','   '].layerAll("M").layerFront("G").layerCentre(" "),
            ['   ','   ','   '].layerCorners("M").layerPlus("C").layerCentre("B")
        ],
        {r:"modern_industrialization:invar_rotary_blade",w:"modern_industrialization:analog_circuit",p:"modern_industrialization:motor"},
        'modern_industrialization:electric_macerator', basicMaterialset
    )
    //#endregion
    
    //#region misc

    workspace_recipe([
            ['WWW','WTW','WWW'],
            ['   ',' B ','   '].layerCorners("S"),
            ['   ','   ','   '].layerCorners("S")
        ],
        {S:'immersiveengineering:stick_treated', T:'craftingstation:crafting_station_slab', W:'#immersiveengineering:treated_wood_slab',B:"immersiveengineering:wooden_barrel"},
        'immersiveengineering:craftingtable'
    )

    workspace_recipe([
            ['   ','   ','   '].layerCentre("S").layerCorners("R").layerSides("P"),
            ['   ','   ','   '].layerSides("S").layerCorners("R").layerCentre("C"),
            ['   ','   ','   '].layerCentre("S").layerCorners("R").layerSides("P")
        ],
        {S:'immersiveengineering:basic_engineering', R:'modern_industrialization:steel_rod', P:"modern_industrialization:steel_plate", C:"modern_industrialization:analog_circuit"},
        'modern_industrialization:multiblock_packer_3000_safety_regulations_edition', {} , "immersiveengineering:hammer"
    )

    workspace_recipe([
            [' B ',' B ',' B '],
            ['   ',' I ','   '],
            ['   ',' P ','   '].layerCorners("b").layerSides("R")
        ],
        {B:'minecraft:iron_block', I:'#c:ingots/iron', b:'#c:bolts/iron',R:'#c:rods/iron',P:"minecraft:heavy_weighted_pressure_plate"},
        'minecraft:anvil', {} , "#c:hammers"
    )

    workspace_recipe([
            ['   ','   ','   '].layerAll("I"),
            ['   ',' P ','   '],
            ['   ',' B ','   '].layerCorners("I").layerSides("I")
        ],
        {B:'minecraft:iron_block', I:'#c:ingots/iron',P:"minecraft:heavy_weighted_pressure_plate"},
        'modern_industrialization:forge_hammer', {} , "#c:hammers"
    )
    workspace_recipe([
            ['   ',' B ','   '].layerCorners("I").layerSides("I"),
            ['   ',' I ','   '],
            [' B ','BBB',' B ']
        ],
        {B:'modern_industrialization:bronze_block', I:'#c:ingots/bronze'},
        'ytech:bronze_anvil', {} , "#c:hammers"
    )
    workspace_recipe([
            ['   ','   ','   '].layerAll("I").layerCentre("W"),
            ['   ','   ','   '].layerAll("I").layerSides("W").layerFront("L").layerCentre("c"),
            ['   ','   ','   '].layerAll("I").layerCentre("W")
        ],
        {I:'immersiveengineering:sheetmetal_steel',W:"immersiveengineering:treated_wood_horizontal",L:"immersiveengineering:logic_unit",c:"modern_industrialization:analog_circuit"},
        'modern_industrialization:enigma_machine', {} , "immersiveengineering:hammer"
    )

    workspace_recipe([
            ['   ','   ','   '].layerCentre("E"),
            ['   ','   ','   '].layerCorners("C").layerPlus("G"),
            ['   ','   ','   '].layerAll("C")
        ],
        {E:'transmog:void_fragment',C:"pastel:citrine_block",G:"minecraft:glass"},
        'transmog:transmogrification_table', {} , "kubejs:amber_visage", true
    )

    workspace_recipe([
            ['   ','   ','   '],
            ['   ','   ','   '].layerCentre("S"),
            ['   ','   ','   '].layerAll("C").layerPlus("s")
        ],
        {C:'minecraft:cobblestone',S:"minecraft:stick", s:"minecraft:cobblestone_slab"},
        'hexerei:pestle_and_mortar', {} , "ytech:sharp_flint", true
    )

    workspace_recipe([
            ['   ','   ','   '].layerAll("S").layerCentre("H"),
            ['   ','   ','   '].layerAll("S").layerCentre("C").layerSides("B"),
            ['   ','   ','   '].layerAll("S").layerCentre("H")
        ],
        {C:'modern_industrialization:analog_circuit',H:"minecraft:hopper", B:"#c:barrels", S:"#c:stones"},
        'sophisticatedstorage:controller'
    )

    workspace_recipe([
            ['   ','   ','   '].layerAll("S").layerCentre("H"),
            ['   ','   ','   '].layerAll("S").layerCentre("B").layerSides(" "),
            ['   ','   ','   '].layerAll("S").layerCentre("H")
        ],
        {H:"minecraft:hopper", B:"#c:barrels", S:"#c:stones"},
        'sophisticatedstorage:storage_io'
    )

    //#region YTech

    workspace_recipe([
            ['   ','   ','   '],
            ['   ','   ','   '].layerSides("P").layerCorners("S"),
            ['   ','   ','   '].layerAll("P").layerCentre("s")
        ],
        {P:'#minecraft:planks',S:"minecraft:stick",s:"#minecraft:wooden_slabs"},
        'ytech:wooden_box', {} , "ytech:sharp_flint", true
    )

    workspace_recipe([
            ['   ','   ','   '].layerCentre("L").layerSides("T"),
            ['   ','   ','   '].layerCentre("L").layerSides("T"),
            ['   ','   ','   '].layerAll("P")
        ],
        {P:'minecraft:cobblestone',L:"#minecraft:logs", T:"ytech:grass_twine"},
        'ytech:tree_stump', {} , "ytech:sharp_flint", true
    )

    workspace_recipe([
            ['   ','   ','   '].layerCorners("T").layerSides("P"),
            ['   ','   ','   '].layerCorners("T").layerSides("P").layerFront(" "),
            ['   ','   ','   '].layerAll("C").layerCentre("F")
        ],
        {P:'ytech:pebble', T:"ytech:grass_twine",F:"ytech:fire_pit", C:"#c:cobblestones"},
        'minecraft:furnace', {} , "#c:hammers", true
    )

    workspace_recipe([
            ['   ','   ','   '].layerAll("P").layerCentre(" "),
            ['   ','   ','   '].layerAll("P").layerCentre(" ").layerFront(" "),
            ['   ','   ','   '].layerAll("C").layerCentre("F").layerFront("S")
        ],
        {P:'minecraft:brick',F:"ytech:fire_pit", C:"minecraft:bricks", S:"minecraft:brick_slab"},
        'ytech:primitive_smelter', {} , "#c:hammers", true
    )

    workspace_recipe([
            ['   ','   ','   '].layerSides("P"),
            ['   ','   ','   '].layerSides("P"),
            ['   ','   ','   '].layerSides("P")
        ],
        {P:'minecraft:brick'},
        'ytech:brick_chimney', {} , "#c:hammers", true
    )

    workspace_recipe([
            ['   ','   ','   '].layerAll("P").layerSides("C").layerCentre(" "),
            ['   ','   ','   '].layerAll("P").layerSides("C").layerCentre(" ").layerFront("S"),
            ['   ','   ','   '].layerAll("C").layerCentre("F").layerFront("S")
        ],
        {P:'minecraft:brick',F:"ytech:fire_pit", C:"minecraft:bricks", S:"minecraft:brick_slab"},
        'ytech:primitive_alloy_smelter', {} , "#c:hammers", true
    )

    workspace_recipe([
            ['   ','   ','   '].layerAll("F").layerCentre(" "),
            ['   ','   ','   '].layerAll("P").layerCentre(" "),
            ['   ','   ','   '].layerAll("F").layerCentre(" ")
        ],
        {P:'minecraft:brick', F:"modern_industrialization:fire_clay_brick"},
        'ytech:reinforced_brick_chimney', {} , "#c:hammers", true
    )

    workspace_recipe([
            ['   ','   ','   '].layerAll("B").layerCentre("s").layerLeft("s").layerRight("s"),
            ['   ','   ','   '].layerAll("S").layerBack("B").layerFront("B").layerCentre("A"),
            ['   ','   ','   '].layerAll("B").layerCentre("s").layerLeft("s").layerRight("s")
        ],
        {B:'ytech:terracotta_bricks', A:"ytech:terracotta_aqueduct", S:"minecraft:stick", s:"ytech:terracotta_brick_slab"},
        'ytech:aqueduct_valve', {} , "#c:hammers", true
    )

    workspace_recipe([
            ['   ','   ','   '].layerPlus("s").layerCorners("B").layerCentre(" "),
            ['   ','   ','   '].layerAll("S").layerCentre("A"),
            ['   ','   ','   '].layerPlus("s").layerCorners("B")
        ],
        {B:'ytech:grass_twine', A:"ytech:aqueduct_valve", S:"minecraft:stick", s:"ytech:terracotta_brick_slab"},
        'ytech:aqueduct_hydrator', {} , "#c:hammers", true
    )

    workspace_recipe([
            ['   ','   ','   '].layerAll("B").layerCentre(" "),
            ['   ','   ','   '].layerAll("s").layerCentre("A"),
            ['   ','   ','   '].layerAll("B").layerCentre("S")
        ],
        {B:'ytech:terracotta_bricks', A:"ytech:aqueduct_hydrator", S:"ytech:wooden_box", s:"ytech:terracotta_aqueduct"},
        'ytech:aqueduct_fertilizer', {} , "#c:hammers", true
    )

    workspace_recipe([
            ['   ','   ','   '].layerAll("s"),
            ['   ','   ','   '].layerAll("P").layerCentre("S").layerCorners("n"),
            ['   ','   ','   '].layerAll("P").layerCorners("n")
        ],
        {P:'#minecraft:planks', s:"#minecraft:wooden_slabs", S:"ytech:wooden_box", n:"minecraft:iron_nugget"},
        'minecraft:barrel', {} , "#c:hammers", true
    )

    workspace_recipe([
            ['   ','   ','   '].layerAll("s"),
            ['   ','   ','   '].layerCentre("S"),
            ['   ','   ','   '].layerAll("s").layerCentre("S").layerSides("C").layerFront("T").layerBack("T")
        ],
        {s:"#minecraft:wooden_slabs", S:"minecraft:stick", C:"minecraft:copper_ingot", T:"modern_industrialization:tin_ingot"},
        'ytech:potters_wheel', {} , "#c:hammers", true
    )
    //#endregion

    //#endregion


    event.forEachRecipe({output:craft_removal_list}, r => {
        //event.remove({ type: 'minecraft:crafting_shaped', output: r.getOriginalRecipeResult()})
        //event.remove({ type: 'minecraft:crafting_shapeless', output: r.getOriginalRecipeResult()})
        event.remove({output: r.getOriginalRecipeResult()})

    })
})
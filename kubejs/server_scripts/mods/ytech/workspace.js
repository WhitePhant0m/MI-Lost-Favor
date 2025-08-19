//priority 10
ServerEvents.recipes(event => {

    var wrench = "modern_industrialization:wrench"
    let craft_removal_list = [
        "modern_industrialization:electric_blast_furnace",
        "modern_industrialization:electronic_circuit_board"
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

    function workspace_recipe(grid, materials, output, materialset, tool){
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

        let mats = []
        switch(materialset){
            case bronzeMaterialset:
                mats.push("modern_industrialization:bronze_machine_casing","4x moderndynamics:fluid_pipe","kubejs:bronze_glass","kubejs:small_copper_fluid_container")
                break;
            case bronzeBits:
                mats.push("modern_industrialization:bronze_machine_casing")
                break;
            case basicMaterialset:
                mats.push("modern_industrialization:basic_machine_hull")
                break;
            case basicBits:
                mats.push("modern_industrialization:frostproof_machine_casing")
                break;
            default:

        }
        var amounts = grid[0].concat(grid[1],grid[2]).join("")
        Object.entries(materials).forEach(m =>{
            let regex = new RegExp(m[0],'g')
            mats.push((amounts.match(regex) || []).length + "x " + m[1])
        })
        //event.remove({ type: 'modern_industrialization:assembler', output: output})
        assembler_recipe(8,400,mats,[output])
        
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
        'extended_industrialization:large_steam_furnace'
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
    //item_output
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCentre("p"),
            ['   ','   ','   '].layerAll("M").layerPlus("p").layerCentre("A"),
            ['   ','   ','   '].layerAll("M").layerCentre("h")
        ],
        {p:"moderndynamics:item_pipe",h:"minecraft:hopper",A:"moderndynamics:extractor"},
        'modern_industrialization:bronze_item_output_hatch', bronzeBits
    )
    //item_input
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCentre("h"),
            ['   ','   ','   '].layerAll("M").layerPlus("p").layerCentre("A"),
            ['   ','   ','   '].layerAll("M").layerCentre("p")
        ],
        {p:"moderndynamics:item_pipe",h:"minecraft:hopper",A:"moderndynamics:attractor"},
        'modern_industrialization:bronze_item_input_hatch', bronzeBits
    )
    //fluid_output
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCentre("p"),
            ['   ','   ','   '].layerAll("M").layerPlus("p").layerCentre("A"),
            ['   ','   ','   '].layerAll("M").layerCentre("h")
        ],
        {p:"moderndynamics:fluid_pipe",h:"minecraft:hopper",A:"moderndynamics:extractor"},
        'modern_industrialization:bronze_fluid_output_hatch', bronzeBits
    )
    //fluid_input
    workspace_recipe([
            ['   ','   ','   '].layerAll("M").layerCentre("h"),
            ['   ','   ','   '].layerAll("M").layerPlus("p").layerCentre("A"),
            ['   ','   ','   '].layerAll("M").layerCentre("p")
        ],
        {p:"moderndynamics:fluid_pipe",h:"minecraft:hopper",A:"moderndynamics:attractor"},
        'modern_industrialization:bronze_fluid_input_hatch', bronzeBits
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
    
    //IE stuff
    workspace_recipe([
            ['WWW','WTW','WWW'],
            ['   ',' B ','   '].layerCorners("S"),
            ['   ','   ','   '].layerCorners("S")
        ],
        {S:'immersiveengineering:stick_treated', T:'craftingstation:crafting_station_slab', W:'#immersiveengineering:treated_wood_slab',B:"immersiveengineering:wooden_barrel"},
        'immersiveengineering:craftingtable'
    )

    //misc
    workspace_recipe([
            [' B ',' B ',' B '],
            ['   ',' I ','   '],
            ['   ',' P ','   '].layerCorners("b").layerSides("R")
        ],
        {B:'minecraft:iron_block', I:'#c:ingots/iron', b:'#c:bolts/iron',R:'#c:rods/iron',P:"minecraft:heavy_weighted_pressure_plate"},
        'minecraft:anvil', {} , "#c:hammers"
    )

    workspace_recipe([
            ['   ',' B ','   '].layerCorners("I").layerSides("I"),
            ['   ',' I ','   '],
            ['   ',' B ','   '].layerCorners("I").layerSides("I")
        ],
        {B:'minecraft:iron_block', I:'#c:ingots/iron'},
        'modern_industrialization:forge_hammer', {} , "#c:hammers"
    )
    workspace_recipe([
            ['   ','   ','   '].layerAll("I").layerCentre("W"),
            ['   ','   ','   '].layerAll("I").layerSides("W").layerFront("L").layerCentre("c"),
            ['   ','   ','   '].layerAll("I").layerCentre("W")
        ],
        {I:'immersiveengineering:sheetmetal_steel',W:"immersiveengineering:treated_wood_horizontal",L:"immersiveengineering:logic_unit",c:"modern_industrialization:analog_circuit"},
        'modern_industrialization:enigma_machine', {} , "immersiveengineering:hammer"
    )


    event.forEachRecipe({output:craft_removal_list}, r => {
        //event.remove({ type: 'minecraft:crafting_shaped', output: r.getOriginalRecipeResult()})
        //event.remove({ type: 'minecraft:crafting_shapeless', output: r.getOriginalRecipeResult()})
        event.remove({output: r.getOriginalRecipeResult()})

    })
})
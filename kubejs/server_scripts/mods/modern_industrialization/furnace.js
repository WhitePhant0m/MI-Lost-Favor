ServerEvents.recipes(event => {


    // event.remove({id: [
    //     'modern_industrialization:materials/copper/smelting/dust_to_ingot_smelting',
    // ]})

    event.remove({output: [
        'modern_industrialization:steel_furnace', 
        'modern_industrialization:electric_furnace', 
        'modern_industrialization:bronze_furnace'
    ]})
    //replaced with ytech recipe
    /*
    event.shaped('modern_industrialization:bronze_mi_furnace', [
        'PPP',
        'PEP',
        'RRR'
    ], {
        P: '#c:plates/bronze',
        E: 'minecraft:furnace',
        R: 'modern_industrialization:fire_clay_bricks'
    })
    
    event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn("5x #c:plates/bronze")
    .itemIn("minecraft:furnace")
    .itemIn("3x modern_industrialization:fire_clay_bricks")
    .itemOut("modern_industrialization:bronze_mi_furnace")

    event.shaped('modern_industrialization:steel_mi_furnace', [
        'PPP',
        'PEP',
        'RRR'
    ], {
        P: '#c:plates/steel',
        E: 'minecraft:furnace',
        R: 'modern_industrialization:fire_clay_bricks'
    })
    event.shapeless('modern_industrialization:steel_mi_furnace', ['modern_industrialization:bronze_mi_furnace', 'modern_industrialization:steel_upgrade'])
    event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn("5x #c:plates/steel")
    .itemIn("minecraft:furnace")
    .itemIn("3x modern_industrialization:fire_clay_bricks")
    .itemOut("modern_industrialization:steel_mi_furnace")
    
    event.recipes.modern_industrialization.packer(2, 100)
    .itemIn('modern_industrialization:steel_upgrade')
    .itemIn('modern_industrialization:bronze_mi_furnace')
    .itemOut('modern_industrialization:steel_mi_furnace')
    event.shaped('modern_industrialization:electric_mi_furnace', [
        'CAC',
        'CBC',
        'TAT'
    ], {
        B: 'modern_industrialization:basic_machine_hull',
        C: 'modern_industrialization:cupronickel_wire_magnetic',
        T: 'modern_industrialization:tin_cable',
        A: 'modern_industrialization:analog_circuit'
    })
    event.recipes.modern_industrialization.assembler(8, 200)
    .itemIn("modern_industrialization:basic_machine_hull")
    .itemIn("4x modern_industrialization:cupronickel_wire_magnetic")
    .itemIn("2x modern_industrialization:tin_cable")
    .itemIn("2x modern_industrialization:analog_circuit")
    .itemOut("modern_industrialization:electric_mi_furnace")
    */

    event.forEachRecipe({ type: 'minecraft:smelting' }, kubeRecipe => {
        let { originalRecipeResult: result, originalRecipeIngredients: ingredients } = kubeRecipe; 
        event.recipes.modern_industrialization.mi_furnace(2, 200).itemIn(ingredients).itemOut(result);
    });
    
    // Adding recipes that have been deleted 
    event.recipes.modern_industrialization.mi_furnace(2, 200)
    .itemIn("minecraft:raw_copper")
    .itemOut("minecraft:copper_ingot")

    event.recipes.modern_industrialization.mi_furnace(2, 200)
    .itemIn("minecraft:raw_iron")
    .itemOut("minecraft:iron_ingot")

    event.recipes.modern_industrialization.mi_furnace(2, 200)
    .itemIn("minecraft:raw_gold")
    .itemOut("minecraft:gold_ingot")

    const minecraft_metals_for_furnace = ['copper', 'gold', 'iron'];
    const MI_metals_for_furnace = ['antimony', 'lead', 'tin', 'nickel'];

    MI_metals_for_furnace.forEach(metal => {        
        event.remove({type: 'minecraft:smelting', input: `modern_industrialization:raw_${metal}`})
        event.remove({type: 'minecraft:smelting', input: `modern_industrialization:${metal}_dust`})
        event.remove({type: 'minecraft:smelting', input: `modern_industrialization:${metal}_ore`})
        event.remove({type: 'minecraft:smelting', input: `modern_industrialization:deepslate_${metal}_ore`})
        event.remove({type: 'minecraft:smelting', input: `modern_industrialization:${metal}_tiny_dust`})
    });

    minecraft_metals_for_furnace.forEach(metal => {        
        event.remove({type: 'minecraft:smelting', input: `minecraft:raw_${metal}`})
        event.remove({type: 'minecraft:smelting', input: `modern_industrialization:${metal}_dust`})
        event.remove({type: 'minecraft:smelting', input: `minecraft:${metal}_ore`})
        event.remove({type: 'minecraft:smelting', input: `minecraft:deepslate_${metal}_ore`})
        event.remove({type: 'minecraft:smelting', input: `modern_industrialization:${metal}_tiny_dust`})
    });

    event.remove({type: 'minecraft:smelting', input: `modern_industrialization:raw_iridium`})
    event.remove({type: 'minecraft:smelting', input: `modern_industrialization:iridium_dust`})
    event.remove({type: 'minecraft:smelting', input: `modern_industrialization:iridium_ore`})
    event.remove({type: 'minecraft:smelting', input: `modern_industrialization:iridium_tiny_dust`})

})

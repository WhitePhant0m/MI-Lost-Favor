ServerEvents.recipes(event => {


    // event.remove({id: [
    //     'modern_industrialization:materials/copper/smelting/dust_to_ingot_smelting',
    // ]})

    event.remove({output: [
        'modern_industrialization:steel_furnace', 
        'modern_industrialization:electric_furnace', 
        'modern_industrialization:bronze_furnace'
    ]})

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

    event.recipes.modern_industrialization.mi_furnace(2, 200)
    .itemIn("minecraft:sand")
    .itemOut("minecraft:glass")

    event.recipes.modern_industrialization.mi_furnace(2, 200)
    .itemIn("#c:cobblestones")
    .itemOut("minecraft:stone")

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

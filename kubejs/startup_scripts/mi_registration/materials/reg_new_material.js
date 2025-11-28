// Registration new materials
MIMaterialEvents.addMaterials(event => {

    // Constantan
    event.createMaterial('Constantan', 'constantan', 0xf1885b,
        builder => {
        builder
            .materialSet('shiny')
            .addParts('ingot', 'nugget', 'dust', 'tiny_dust', 'plate')
            .defaultRecipes()
    })

    // Saltpeter
    event.createMaterial('Saltpeter', 'saltpeter', 0x9C9E9E,
        builder => {
        builder
            .materialSet('shiny')
            .addParts('dust', 'tiny_dust')
            .defaultRecipes()
    })

    // HOP Graphite
    event.createMaterial('HOP Graphite', 'hop_graphite', 0x111212,
        builder => {
        builder
            .materialSet('dull')
            .addParts('ingot', 'dust', 'tiny_dust', 'plate')
            .defaultRecipes()
    })

    // Plastic
    event.createMaterial('Plastic', 'plastic', 0x9A9F9C,
        builder => {
        builder
            .materialSet('dull')
            .addParts('plate', 'dust', 'tiny_dust')
            .defaultRecipes()
    })

    // Netherite
    event.createMaterial('Netherite', 'netherite', 0x5a5455, builder => {
        builder.addParts('nugget', 'dust', 'tiny_dust', 'rod')
            .addExternalPart('ingot', 'minecraft:netherite_ingot')
            .defaultRecipes()
    })

    // Certus quartz
    event.createMaterial('Certus quartz', 'certus_quartz', 0xd5f4f7,
        builder => {
        builder
            .materialSet('shiny')
            .addExternalPart('ingot', 'ae2:certus_quartz_crystal')
            .addExternalPart('dust', 'ae2:certus_quartz_dust')
            .addParts('rod', "plate", "large_plate")
            .machineCasing(8.0)
            .defaultRecipes()
    })

    event.createMaterial('Ferricore', 'ferricore', 0x54ccc2,
        builder => {
        builder
            .materialSet('shiny')
            .addExternalPart('ingot', 'justdirethings:ferricore_ingot')
            .addParts('rod', "plate", "large_plate", "ring", "curved_plate", "bolt", "gear", "dust")
            .machineCasing(8.0)
            .defaultRecipes()
    })

    event.createMaterial('Blazegold', 'blazegold', 0xb0501c,
        builder => {
        builder
            .materialSet('shiny')
            .addExternalPart('ingot', 'justdirethings:blazegold_ingot')
            .addParts('rod', "plate", "large_plate", "ring", "curved_plate", "bolt", "gear", "dust")
            .machineCasing(8.0)
            .defaultRecipes()
    })

    event.createMaterial('Eclipse alloy', 'eclipse_alloy', 0x15203b,
        builder => {
        builder
            .materialSet('shiny')
            .addExternalPart('ingot', 'justdirethings:eclipsealloy_ingot')
            .addParts('rod', "plate", "large_plate", "ring", "curved_plate", "bolt", "gear", "dust")
            .machineCasing(8.0)
            .defaultRecipes()
    })

    event.createMaterial('Celestigem', 'celestigem', 0x54ccc2,
        builder => {
        builder
            .materialSet('shiny')
            .addExternalPart('ingot', 'justdirethings:celestigem')
            .addParts('rod', "plate", "large_plate", "ring", "curved_plate", "bolt", "gear", "dust")
            .machineCasing(8.0)
            .defaultRecipes()
    })

})
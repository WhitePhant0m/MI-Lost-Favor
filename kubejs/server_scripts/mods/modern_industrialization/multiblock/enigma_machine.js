ServerEvents.recipes(event => {

    event.recipes.modern_industrialization.enigma_machine(42, 1000)
        .itemIn('kubejs:blueprint_pack', 0)
        .itemIn('16x pastel:shimmerstone_gem')
        .itemIn('kubejs:disk_from_space', 0)
        .itemOut("kubejs:mysterious_blueprint")

    event.recipes.modern_industrialization.enigma_machine(42, 1000)
        .itemIn('kubejs:blueprint_pack', 0)
        .itemIn('16x pastel:shimmerstone_gem')
        .itemIn('kubejs:old_tablet', 0)
        .itemOut("kubejs:storage_blueprint")

    event.recipes.modern_industrialization.enigma_machine(42, 10000)
        .itemIn('kubejs:blueprint_pack', 0)
        .itemIn('16x pastel:shimmerstone_gem')
        .itemIn('kubejs:old_diary', 0)
        .itemOut("kubejs:automation_blueprint")

    event.recipes.modern_industrialization.enigma_machine(42, 10000)
        .itemIn('kubejs:blueprint_pack', 0)
        .itemIn('pastel:bottle_of_ruin')
        .itemIn('kubejs:holy_book_of_color', 0)
        .itemOut("kubejs:quantum_blueprint")

    event.recipes.modern_industrialization.enigma_machine(420, 10000)
        .itemIn('kubejs:blueprint_pack', 0)
        .itemIn('8x pastel:bottle_of_ruin')
        .itemIn('extendedae:entro_seed', 0)
        .itemOut("kubejs:divine_blueprint")

})
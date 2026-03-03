ServerEvents.recipes(event => {

    event.recipes.modern_industrialization.enigma_machine(42, 100)
        .itemIn('kubejs:blueprint_pack', 0)
        .itemIn('spectrum:guidebook', 0)
        .itemIn('kubejs:disk_from_space', 0)
        .itemOut("kubejs:mysterious_blueprint")

    event.recipes.modern_industrialization.enigma_machine(42, 100)
        .itemIn('kubejs:blueprint_pack', 0)
        .itemIn('kubejs:mysterious_blueprint', 0)
        .itemIn('kubejs:old_tablet', 0)
        .itemOut("kubejs:storage_blueprint")

    event.recipes.modern_industrialization.enigma_machine(42, 1000)
        .itemIn('kubejs:blueprint_pack', 0)
        .itemIn('kubejs:storage_blueprint', 0)
        .itemIn('kubejs:old_diary', 0)
        .itemOut("kubejs:automation_blueprint")

    event.recipes.modern_industrialization.enigma_machine(42, 1000)
        .itemIn('kubejs:blueprint_pack', 0)
        .itemIn('kubejs:automation_blueprint', 0)
        .itemIn('kubejs:holy_book_of_color', 0)
        .itemOut("kubejs:quantum_blueprint")

/*     event.recipes.modern_industrialization.enigma_machine(42, 10000)
        .itemIn('kubejs:blueprint_pack', 0)
        .itemIn('kubejs:quantum_blueprint', 0)
        .itemIn('kubejs:old_notes', 0)
        .itemOut("kubejs:divine_blueprint") */

})
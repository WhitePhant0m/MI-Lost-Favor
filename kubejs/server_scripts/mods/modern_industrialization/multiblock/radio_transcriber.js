ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.radio_transcriber(42, 100)
        .itemIn('#c:paper')
        .itemIn('kubejs:disk_from_space', 0)
        .itemOut("kubejs:punched_card")
})
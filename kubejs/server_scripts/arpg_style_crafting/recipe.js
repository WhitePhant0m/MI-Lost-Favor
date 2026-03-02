ServerEvents.recipes(event => {
    yTechShaped(event, {
        pattern: [
            ' PE',
            'PPP',
            'HP '
        ],
        key: {
            E: { item: "paganbless:essence_of_the_forest" },
            P: { item: "modern_industrialization:iron_plate" },
            H: { tag: "c:hammers" }
        },
        outputItems: [[{ id: "kubejs:orb_of_the_forest" }, 1]],
        compatOff: true
    })
})
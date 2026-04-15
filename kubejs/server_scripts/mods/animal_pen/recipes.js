ServerEvents.recipes(event => {

    milfShaped(event, {
        pattern: [
            "BPB",
            "RRR",
            "BPB"
        ],
        key: {
            R: { item: "modern_industrialization:iron_rod" },
            P: { item: "modern_industrialization:copper_plate" },
            B: { item: "modern_industrialization:copper_bolt" }
        },
        outputItems: [[{ id: "animal_pen:animal_cage" }, 1]],
        removeRecipe:true
    })


})
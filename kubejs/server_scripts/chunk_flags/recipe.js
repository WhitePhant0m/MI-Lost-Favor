ServerEvents.recipes(event => {
    milfShaped(event, {
        pattern: [
            "SP ",
            "S  ",
            "S  "
        ],
        key: {
            P: {item:"labels:label"},
            S: {tag:"c:wood_sticks"}
        },
        outputItems:[[{"id": "kubejs:chunk_flag"}, 1]],
        removeRecipe:true
    })

})
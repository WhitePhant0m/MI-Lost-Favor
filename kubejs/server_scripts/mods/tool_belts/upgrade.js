ServerEvents.recipes(event => {
    event.custom({
        "type": "ytech:remaining_shapeless_crafting",
        "category": "misc",
        "ingredients": [
            {"item": "toolbelt:belt"},
            {"tag": "ytech:bone_needles"},
            {"item": "toolbelt:pouch"},
        ],
        "result": {"count": 1, "id": "toolbelt:belt", "components":{"toolbelt:belt_size":4}}
    })
})


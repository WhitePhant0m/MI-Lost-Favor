const customGateRecipe = (event, args) => {
    event.custom({
        "type": "gateways:gate_recipe",
        "group": "gateways",
        "pattern": args.pattern,
        "key": args.keys,
        "result": {
            "id": "gateways:gate_pearl"
        },
        "gateway": args.gateway
    });
};

ServerEvents.recipes(event => {


    customGateRecipe(event, {
        gateway: "gateways:basic/deer",
        pattern: [
            "B#B",
            "#A#",
            "B#B"
        ],
        keys: {
            "#": {
                "item": "ytech:antler"
            },
            "A": {
                "item": "modern_industrialization:bronze_plate"
            },
            "B": {
                "item": "minecraft:leather"
            }
        }
    })


})

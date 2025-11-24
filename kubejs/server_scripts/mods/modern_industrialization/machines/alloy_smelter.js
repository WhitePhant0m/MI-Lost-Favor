ServerEvents.recipes(event => {

    miMachineCraft(event, {
        machine:"extended_industrialization:alloy_smelter",
        energy:4,
        time:200,
        inputItems:[
            [{
                "type": "neoforge:compound",
                "amount": 1,
                "children": [
                    {
                        "tag": "c:dusts/nickel"
                    },
                    {
                        "tag": "c:ingots/nickel"
                    }
                ]
            }],
            [{
                "type": "neoforge:compound",
                "amount": 1,
                "children": [
                    {
                        "tag": "c:dusts/copper"
                    },
                    {
                        "tag": "c:ingots/copper"
                    }
                ]
            }]
        ],
        outputItems:[[{"item": "modern_industrialization:constantan_ingot"}, 2]]
    })

    miMachineCraft(event, {
        machine:"extended_industrialization:alloy_smelter",
        energy:4,
        time:200,
        inputItems:[
            [{
                "type": "neoforge:compound",
                "amount": 9,
                "children": [
                    {
                        "tag": "c:tiny_dusts/nickel"
                    },
                    {
                        "tag": "c:nuggets/nickel"
                    }
                ]
            }],
            [{
                "type": "neoforge:compound",
                "amount": 9,
                "children": [
                    {
                        "tag": "c:tiny_dusts/copper"
                    },
                    {
                        "tag": "c:nuggets/copper"
                    }
                ]
            }]
        ],
        outputItems:[[{"item": "modern_industrialization:constantan_ingot"}, 2]]
    })

    miMachineCraft(event, {energy:4, time:400, machine:"extended_industrialization:alloy_smelter",
        inputItems:[
            [{tag:`c:glass_blocks`}, 2],
            [{tag:`c:dusts/iron`}, 1]
        ],
        outputItems:[
            [{item:`immersiveengineering:insulating_glass`}, 2],
        ]
    })

})
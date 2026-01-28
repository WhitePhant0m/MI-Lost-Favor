ItemEvents.modification(event => {

    const pickaxe_modification = [
        { itemName: 'ytech:copper_pickaxe', maxDamage: 64, multiplier: 3, speed: 5.5 },
        { itemName: 'ytech:lead_pickaxe', maxDamage: 32, multiplier: 3, speed: 3 },
        { itemName: 'ytech:tin_pickaxe', maxDamage: 28, multiplier: 3, speed: 4 },
        { itemName: 'ytech:bronze_pickaxe', maxDamage: 384, multiplier: 2, speed: 5.5 },
        { itemName: 'minecraft:iron_pickaxe', maxDamage: 384, multiplier: 1, speed: 6 },
    ]
    const hammer_modification = [
        { itemName: 'ytech:stone_hammer', maxDamage: 70 },
        { itemName: 'ytech:bronze_hammer', maxDamage: 300 },
        { itemName: 'ytech:tin_hammer', maxDamage: 125 },
        { itemName: 'ytech:lead_hammer', maxDamage: 200 },
        { itemName: 'ytech:iron_hammer', maxDamage: 250 },
        { itemName: 'ytech:golden_hammer', maxDamage: 64 },
        { itemName: 'ytech:copper_hammer', maxDamage: 150 },
    ]

    pickaxe_modification.forEach(pickaxe => {
        event.modify(pickaxe.itemName, item => {
            item.setTool({
                damagePerBlock: item.tool?.damagePerBlock || 1,
                rules: [
                    { correctForDrops: true, speed: pickaxe.speed, blocks: "#minecraft:mineable/pickaxe" },
                    { correctForDrops: false, blocks: "#minecraft:incorrect_for_iron_tool" },
                ]
            });
            item.maxDamage = pickaxe.maxDamage * pickaxe.multiplier
        })
    });

    hammer_modification.forEach(hammer => {
        event.modify(hammer.itemName, item => {
            item.maxDamage = hammer.maxDamage * 3
        })
    });

});
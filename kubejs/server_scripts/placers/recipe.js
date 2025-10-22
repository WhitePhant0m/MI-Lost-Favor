ServerEvents.recipes(event => {
    placerBlocks.forEach(block => {
        const templateName = block.slice(7, -7)
        const template = NBTIO.read(`kubejs/data/immersiveengineering/structure/multiblocks/${templateName}.nbt`)
        let blocksCount = {}
        for(let i in template.blocks){
            let state = template.blocks.getCompound(i).state;
            let blockID = String(template.palette.getCompound(state).Name).slice(1, -1)
            if(blockID == "minecraft:air") continue
            blocksCount[blockID] ? blocksCount[blockID]++ : blocksCount[blockID] = 1
        }
        let inputItems = []
        Object.entries(blocksCount).forEach(([blockID, count]) => {
            inputItems.push([{item:blockID}, count])
        })
        miMachineCraft(event, {energy:8, time:200, machine:"modern_industrialization:assembler",
            inputItems:inputItems,
            outputItems:[
                [{item:block}]
            ]
        })

    })

})
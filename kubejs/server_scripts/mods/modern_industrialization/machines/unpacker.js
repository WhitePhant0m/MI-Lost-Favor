ServerEvents.recipes(event => {

    miMachineCraft(event, {energy:4, time:300, machine:"modern_industrialization:unpacker",
        outputItems:[
            [{item:"mi_tweaks:not_so_multi_but_still_block_packer_2099_3x3x3_edition"}, 2]
        ],
        inputItems:[
            [{item:"mi_tweaks:multiblock_packer_3000_safety_regulations_edition"}, 1],
        ]
    })


})
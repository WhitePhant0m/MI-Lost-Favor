ServerEvents.tags('item', event => {

    const pedestal_basic = [
        'pastel:pedestal_basic_topaz',
        'pastel:pedestal_basic_citrine',
        'pastel:pedestal_basic_amethyst',
    ]
    const basic_gemstone_shards = [
        'pastel:topaz_shard',
        'pastel:citrine_shard',
        'minecraft:amethyst_shard',
    ]
    const basic_gemstone_powders = [
        'pastel:topaz_powder',
        'pastel:amethyst_powder',
        'pastel:citrine_powder',
    ]
    const polished_gemstone_block = [
        'pastel:polished_topaz_block',
        'pastel:polished_amethyst_block',
        'pastel:polished_citrine_block',
        'pastel:polished_onyx_block',
    ]
    const notched_polished_block = [
        'pastel:notched_polished_basalt',
        'pastel:notched_polished_calcite',
    ]
    const gemstone_lamp = [
        'pastel:topaz_calcite_light',
        'pastel:amethyst_calcite_light',
        'pastel:citrine_calcite_light',
        'pastel:onyx_calcite_light',
        'pastel:topaz_basalt_light',
        'pastel:amethyst_basalt_light',
        'pastel:citrine_basalt_light',
        'pastel:onyx_basalt_light',
    ]
    const phantom_frame = [
        'pastel:phantom_frame',
        'pastel:glow_phantom_frame',
    ]
    const colored_lamp = [
        'pastel:orange_lamp',
        'pastel:magenta_lamp',
        'pastel:yellow_lamp',
        'pastel:lime_lamp',
        'pastel:pink_lamp',
        'pastel:cyan_lamp',
        'pastel:purple_lamp',
        'pastel:blue_lamp',
        'pastel:brown_lamp',
        'pastel:green_lamp',
        'pastel:black_lamp',
        'pastel:red_lamp',
    ]
    const colored_spore_blossom = [
        'pastel:orange_spore_blossom',
        'pastel:magenta_spore_blossom',
        'pastel:light_blue_spore_blossom',
        'pastel:yellow_spore_blossom',
        'pastel:lime_spore_blossom',
        'pastel:pink_spore_blossom',
        'pastel:cyan_spore_blossom',
        'pastel:purple_spore_blossom',
        'pastel:blue_spore_blossom',
        'pastel:brown_spore_blossom',
        'pastel:green_spore_blossom',
        'pastel:red_spore_blossom',
        'pastel:black_spore_blossom',
    ]
    const colored_glowblock = [
        'pastel:orange_glowblock',
        'pastel:magenta_glowblock',
        'pastel:light_blue_glowblock',
        'pastel:yellow_glowblock',
        'pastel:lime_glowblock',
        'pastel:pink_glowblock',
        'pastel:cyan_glowblock',
        'pastel:purple_glowblock',
        'pastel:blue_glowblock',
        'pastel:brown_glowblock',
        'pastel:green_glowblock',
        'pastel:red_glowblock',
        'pastel:black_glowblock',
    ]
    const fusion_shrine = [
        'pastel:fusion_shrine_basalt',
        'pastel:fusion_shrine_calcite',
    ]
    const polished_slabs = [
        'pastel:polished_calcite_slab',
        'pastel:polished_basalt_slab',
    ]
    const chiseled_gemstone_block = [
        'pastel:topaz_chiseled_basalt',
        'pastel:amethyst_chiseled_basalt',
        'pastel:citrine_chiseled_basalt',
        'pastel:onyx_chiseled_basalt',
        'pastel:topaz_chiseled_calcite',
        'pastel:amethyst_chiseled_calcite',
        'pastel:citrine_chiseled_calcite',
        'pastel:onyx_chiseled_calcite',
    ]
    const item_bowl = [
        'pastel:item_bowl_calcite',
        'pastel:item_bowl_basalt',
    ]
    const azure_dike_trinkets = [
        'pastel:puff_circconst',
        'pastel:azure_dike_belt',
        'pastel:azure_dike_ring',
        'pastel:shieldgrasp_amulet',
    ]
    const onyx_chiseled_block = [
        'pastel:onyx_chiseled_basalt',
        'pastel:onyx_chiseled_calcite',
    ]
    const chiseled_base_blocks = [
        'pastel:chiseled_polished_basalt',
        'pastel:chiseled_polished_calcite',
    ]
    
    const pillar_base_blocks = [
        'pastel:polished_calcite_pillar',
        'pastel:polished_basalt_pillar',
    ]

    const polished_base_blocks = [
        'pastel:polished_basalt',
        'pastel:polished_calcite',
    ]

    const moonstone_chiseled_base_blocks = [
        'pastel:moonstone_chiseled_basalt',
        'pastel:moonstone_chiseled_calcite',
    ]
    
    const crest_base_blocks = [
        'pastel:polished_calcite_crest',
        'pastel:polished_basalt_crest',
    ]

    pedestal_basic.forEach(item => event.add('milf:pedestal_basic', item));
    basic_gemstone_shards.forEach(item => event.add('milf:basic_gemstone_shards', item));
    basic_gemstone_powders.forEach(item => event.add('milf:basic_gemstone_powders', item));
    polished_gemstone_block.forEach(item => event.add('milf:polished_gemstone_block', item));
    notched_polished_block.forEach(item => event.add('milf:notched_polished_block', item));
    gemstone_lamp.forEach(item => event.add('milf:gemstone_lamp', item));
    phantom_frame.forEach(item => event.add('milf:phantom_frame', item));
    colored_lamp.forEach(item => event.add('milf:colored_lamp', item));
    colored_spore_blossom.forEach(item => event.add('milf:colored_spore_blossom', item));
    colored_glowblock.forEach(item => event.add('milf:colored_glowblock', item));
    fusion_shrine.forEach(item => event.add('milf:fusion_shrine', item));
    polished_slabs.forEach(item => event.add('milf:polished_slabs', item));
    chiseled_gemstone_block.forEach(item => event.add('milf:chiseled_gemstone_block', item));
    item_bowl.forEach(item => event.add('milf:item_bowl', item));
    azure_dike_trinkets.forEach(item => event.add('milf:azure_dike_trinkets', item));
    onyx_chiseled_block.forEach(item => event.add('milf:onyx_chiseled_block', item));
    chiseled_base_blocks.forEach(item => event.add('milf:chiseled_base_blocks', item));
    pillar_base_blocks.forEach(item => event.add('milf:pillar_base_blocks', item));
    polished_base_blocks.forEach(item => event.add('milf:polished_base_blocks', item));
    moonstone_chiseled_base_blocks.forEach(item => event.add('milf:moonstone_chiseled_base_blocks', item));
    crest_base_blocks.forEach(item => event.add('milf:crest_base_blocks', item));
})

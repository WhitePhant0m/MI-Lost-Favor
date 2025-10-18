ServerEvents.tags('block', event => {

    event.add('ars_nouveau:golem/budding', "pastel:budding_topaz")
    event.add('ars_nouveau:golem/cluster', "pastel:topaz_cluster")
})
ServerEvents.tags('item', event => {
    event.add('ars_nouveau:golem/shard', "pastel:topaz_shard")

    event.add('ars_nouveau:horn_food', [
        'arsdelight:mendosteen_hornbeer', 
        'arsdelight:bastion_hornbeer', 
        'arsdelight:bombegrante_hornbeer', 
        'arsdelight:frostaya_hornbeer', 
        'arsdelight:source_berry_hornbeer'
    ])
})




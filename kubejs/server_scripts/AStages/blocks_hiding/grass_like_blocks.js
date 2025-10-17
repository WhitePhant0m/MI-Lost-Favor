// const $Integer = Java.loadClass('java.lang.Integer')

// const ages = [
//     { id: '_age_0', value: $Integer.valueOf('0', 10) },
//     { id: '_age_1', value: $Integer.valueOf('1', 10) },
//     { id: '_age_2', value: $Integer.valueOf('2', 10) },
//     { id: '_age_3', value: $Integer.valueOf('3', 10) },
//     { id: '_age_4', value: $Integer.valueOf('4', 10) },
//     { id: '_age_5', value: $Integer.valueOf('5', 10) },
// ]

// const grass_like_blocks = [
//     { id: "sourceberry_bush", origin: "ars_nouveau:sourceberry_bush", replace: "rocks:rock", max_age: 3 },
//     // { id: "clover", origin: "pastel:clover", replace: "minecraft:short_grass" },
//     // { id: "lavender_plant", origin: "paganbless:lavender_plant", replace: "minecraft:short_grass", max_age: 5 },
//     // { id: "hags_taper_plant", origin: "paganbless:hags_taper_plant", replace: "minecraft:short_grass", max_age: 5 },
//     // { id: "mugwort_plant", origin: "paganbless:mugwort_plant", replace: "minecraft:short_grass", max_age: 5 },
//     // { id: "mandrake_root_plant", origin: "paganbless:mandrake_root_plant", replace: "minecraft:short_grass", max_age: 5 },
//     // { id: "rue_plant", origin: "paganbless:rue_plant", replace: "minecraft:short_grass", max_age: 5 },
//     // { id: "wild_coldsnap", origin: "toxony:wild_coldsnap", replace: "minecraft:short_grass", max_age: 3 },
//     // { id: "wild_ocelot_mint", origin: "toxony:wild_ocelot_mint", replace: "minecraft:short_grass", max_age: 3 },
//     // { id: "wild_nightshade", origin: "toxony:wild_nightshade", replace: "minecraft:short_grass", max_age: 3 },
//     // { id: "wild_water_hemlock", origin: "toxony:wild_water_hemlock", replace: "minecraft:short_grass", max_age: 3 },
//     // { id: "wild_bloodroot", origin: "toxony:wild_bloodroot", replace: "minecraft:crimson_roots", max_age: 3 },
//     // { id: "belladonna_plant", origin: "paganbless:belladonna_plant", replace: "minecraft:short_grass", max_age: 5 },
// ]

// // grass_like_blocks.forEach(block => {
// //     const blockAges = block.max_age !== undefined
// //         ? ages.slice(0, block.max_age + 1)
// //         : ages

// //     blockAges.forEach(age => {
// //         if (block.max_age !== undefined) {
// //             const ageProp = BlockProperties["AGE_" + block.max_age]
// //             AStages.addRestrictionForOre(
// //                 block.id + age.id,
// //                 'paganbless_plants',
// //                 Block.getBlock(block.origin)
// //                     .defaultBlockState()
// //                     .setValue(ageProp, age.value),
// //                 Block.getBlock(block.replace).defaultBlockState()
// //             )
// //         } else {
// //             AStages.addRestrictionForOre(
// //                 block.id + age.id,
// //                 'paganbless_plants',
// //                 block.origin,
// //                 block.replace
// //             )
// //         }
// //     })
// // })

// grass_like_blocks.forEach(block => {
//     AStages.addRestrictionForOre(
//     block.id,
//     block.id,
//     Block.getBlock(block.origin).defaultBlockState(),
//     block.replace).setStageAllBlockStates(true)
// });


const item_interact_block = [
    { id: "lootr_chest", item: "lootr:lootr_chest", stage: "early_items" },
    { id: "lootr_decorated_pot", item: "lootr:decorated_pot", stage: "early_items" },
    { id: "lootr_suspicious_gravel", item: "lootr:suspicious_gravel", stage: "early_items" },
    { id: "lootr_suspicious_sand", item: "lootr:suspicious_sand", stage: "early_items" },
    { id: "lootr_barrel", item: "lootr:lootr_barrel", stage: "early_items" },
    { id: "lootr_shulker", item: "lootr:lootr_shulker", stage: "early_items" },
    { id: "lootr_trapped_chest", item: "lootr:lootr_trapped_chest", stage: "early_items" },
    { id: "blast_furnace", item: "minecraft:blast_furnace", stage: "blast_furnace" },
    { id: "crate", item: "immersiveengineering:crate", stage: "early_items" },
    { id: "spawner", item: "minecraft:spawner", stage: "early_items" },
    { id: "coffer", item: "hexerei:coffer", stage: "early_items" },
    { id: "mahogany_chest", item: "hexerei:mahogany_chest", stage: "early_items" },
    { id: "willow_chest", item: "hexerei:willow_chest", stage: "early_items" },
    { id: "witch_hazel_chest", item: "hexerei:witch_hazel_chest", stage: "early_items" },
    { id: "iron_nugget", item: "minecraft:iron_nugget", stage: "post_iron" },
    { id: "iron_block", item: "minecraft:iron_block", stage: "post_iron" },
    { id: "gold_nugget", item: "minecraft:gold_nugget", stage: "post_iron" },
    { id: "gold_block", item: "minecraft:gold_block", stage: "post_iron" },
]

const entity_interact_block = [
    { id: "gatekeeper", entity: "eternal_starlight:the_gatekeeper", langKey: "entity.eternal_starlight.the_gatekeeper", stage: "the_gatekeeper" },
    { id: "villager", entity: "minecraft:villager", langKey: "entity.minecraft.villager", stage: "early_items" },
    { id: "wandering_trader", entity: "minecraft:wandering_trader", langKey: "entity.minecraft.wandering_trader", stage: "early_items" },
    { id: "armor_stand", entity: "minecraft:armor_stand", langKey: "entity.minecraft.armor_stand", customeText: "milf.text.entity.interact.part2", stage: "early_items" },
    { id: "lootr_minecart", entity: "lootr:lootr_minecart", langKey: "entity.lootr.lootr_minecart", customeText: "milf.text.entity.interact.part2", stage: "early_items" },
    { id: "lootr_item_frame", entity: "lootr:item_frame", langKey: "entity.lootr.item_frame", customeText: "milf.text.entity.interact.part2", stage: "early_items" },
]


item_interact_block.forEach(element => {
    let itemName = Item.of(element.item).hoverName

    AStages.addRestrictionForItem(`astages/${element.id}`, element.stage, element.item)
        .setPickUpDelay(60)
        .setCanAttack(false)
        .setCanBeStoredInInventory(false)
        .setCanBeEquipped(false)
        .setCanPickedUp(false)
        .setCanBePlaced(false)
        .setCanItemBeLeftClicked(false)
        .setCanItemBeRightClicked(false)
        .setHideInJEI(true)
        .setCanInteractWithBlock(false)
        .setUsageMessage(() => Text.of(
            [
                [
                    Text.translate("milf.text.entity.interact.part2").gray(),
                    itemName
                ]
            ]
        ).darkGray())
});

entity_interact_block.forEach(element => {
    if (element.customeText) {
        AStages.addRestrictionForMob(`astages/${element.id}`, element.stage, element.entity)
            .setInteractionMessage(() => Text.of(
                [
                    Text.translate(element.customeText).gray(),
                    Text.translate(element.langKey).darkGray(),
                ]
            ))
            .setCanBeRightClicked(false)
    }
    else {
        AStages.addRestrictionForMob(`astages/${element.id}`, element.stage, element.entity)
            .setInteractionMessage(() => Text.of(
                [
                    Text.translate("milf.text.entity.interact.part0").gray(),
                    Text.translate(element.langKey).darkGray(),
                    Text.translate("milf.text.entity.interact.part1").gray()
                ]
            ))
            .setCanBeRightClicked(false)
    }
});


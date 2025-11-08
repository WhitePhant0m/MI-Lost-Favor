ClientEvents.lang('en_us', event => {
    event.add('mia.tooltip.strainer.how.to.use', 'There will be text on how to use the strainer.')
    event.add('milf.text.entity.interact.part0', 'At this moment, ')
    event.add('milf.text.entity.interact.part1', ' doesn\'t want to interact with you')
    event.add('milf.text.entity.interact.part2', 'Something magical prevents you from using ')
    event.add('milf.text.block.interact.part0', 'Strange magic prevents you from using this block')
    event.add('desc.immersiveengineering.info.mineral.nether_silt', 'Strange magic prevents you from using this block')

    event.add('milf.stage.tier_1_access_ore', 'Unlocked: quartz / debris / emerald / diamond / lapis / gold / antimony / bauxite / lead / monazite / nickel / salt ore')
    event.add('milf.stage.tier_2_access_ore', 'Unlocked: iridium / platinum / titanium / tungsten / uranium ore')
    event.add('milf.stage.saturation', 'You\'ve lost your saturation!')
    event.add('milf.stage.xaeromap', 'Unlocked: mini-map, radar, waypoints')
    event.add('milf.stage.minecraft_mobs', 'You started hearing strange noises at night')
    event.add('milf.stage.early_items', 'You can trade with villagers, loot chests, and interact with spawners')

    event.add('advancements.apotheosis.progression.ascent.criteria.nether_gauntlet', 'Kill Nether Gauntlet')

    event.add('milf.cannot.mine.block', 'You cannot mine this block for now')
    event.add('kubejs.press_button', 'Hold ')
    event.add('kubejs.for_details', 'for more information')
    event.add('kubejs.amber_visage.tooltip', 'Used as fuel in the transmogrification table to change the appearance of items without modifying their behavior at all')


    event.add('milf.placers.notification1', `Not enough space to place ${textAnimatorString("this", "bounce")} one`)
    event.add('milf.placers.notification2', `You have to choose a ${textAnimatorString("valid direction", "glitch")} first`)
    event.add('milf.placers.notification3', `Structure has to be ${textAnimatorString("EXACTLY", "shake")} the same`)

    event.add('milf.placers.gui1', `Use any type of ${textAnimatorStringForEach("HAMMER", "bounce")} to build structure!`)
    event.add('milf.placers.gui2', `Right click with an empty hand to preview`)
    event.add('milf.placers.gui3', ` + RMB with an empty hand to remove preview`)
    event.add('milf.empty_box.gui1', `You can still get your structure back!`)
    event.add('milf.empty_box.gui2_1', `Just `)
    event.add('milf.empty_box.gui2_2', ` + RMB with an empty hand to put it back`)
    event.add('milf.empty_box.gui3_1', `Attention, breaking this box will `)
    event.add('milf.empty_box.gui3_2', `${textAnimatorString("DESTROY", "glitch")}`)
    event.add('milf.empty_box.gui3_3', " it")
    
    event.add('milf.text.dim.cant_visit', `${textAnimatorString("Some kind of magic is stopping you", "glitch")}`)

    event.add('milf.flags.claimed', "Chunk claimed")
    event.add('milf.flags.unclaimed', "Chunk unclaimed")

    event.add('gateways.basic/deer', "Deer Gateway")

    //#region rituals
    event.add('ritual.occultism.craft_curio_bag.started', "Starting the ritual: Craft Trinkets Pouch.")
    event.add('ritual.occultism.craft_curio_bag.conditions', "Not all requirements for this ritual are met.")
    event.add('ritual.occultism.craft_curio_bag.finished', "Ritual completed successfully: Craft Trinkets Pouch.")
    event.add('ritual.occultism.craft_curio_bag.interrupted', "Interruption in the ritual: Craft Trinkets Pouch.")
    
    event.add('ritual.occultism.craft_vial_of_liquid_confidence.started', "Starting the ritual: Craft Vial Of Liquid Confidence.")
    event.add('ritual.occultism.craft_vial_of_liquid_confidence.conditions', "Not all requirements for this ritual are met.")
    event.add('ritual.occultism.craft_vial_of_liquid_confidence.finished', "Ritual completed successfully: Craft Vial Of Liquid Confidence.")
    event.add('ritual.occultism.craft_vial_of_liquid_confidence.interrupted', "Interruption in the ritual: Craft Vial Of Liquid Confidence.")
    //#endregion
 
})

function textAnimatorString(text, type){
    return `<${type}>${text}</${type}>`
}

function textAnimatorStringForEach(text, type){
	let newText = ""
	for(let char of text){
		newText += textAnimatorString(char, type)
	}
    return newText
}
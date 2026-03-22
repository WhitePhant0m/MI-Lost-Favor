ClientEvents.lang('en_us', event => {
    event.add('mia.tooltip.strainer.how.to.use', 'There will be text on how to use the strainer.')
    event.add('milf.text.entity.interact.part0', 'At this moment, ')
    event.add('milf.text.entity.interact.part1', ' doesn\'t want to interact with you')
    event.add('milf.text.entity.interact.part2', 'Something magical prevents you from using ')
    event.add('milf.text.block.interact.part0', 'Strange magic prevents you from using this block')
    event.add('milf.text.first_join', `Welcome to the ${textAnimatorString("MI:Lost Favor", "grad", {from:"#848dcb", to:"#45509d", f:0.5})}!`)
    event.add('desc.immersiveengineering.info.mineral.nether_silt', 'Strange magic prevents you from using this block')

    event.add('milf.stage.congratulations', `${textAnimatorString("Congratulations!!!", "wave", {a:0.25, w:0.25, f:0.5})}`)
    event.add('milf.stage.something_changed', `${textAnimatorString("You feel like something has changed...", "wiggle", {a:0.25, f:0.35})}`)
    event.add('milf.stage.bronze_age', `You have passed into the ${textAnimatorString("Bronze Age", "grad", {from:"#CD7F32", to:"#F6BA7D", f:0.5})}`)
    event.add('milf.stage.monsterplus_mobs', `You began to hear the ${textAnimatorString("cries of the dead", "grad", {from:"#F00B0B", to:"#7A0F0B", f:0.5})} at night`)
    event.add('milf.stage.tier_1_access_ore', `The mines have been blessed with ${textAnimatorString("new ores", "grad", {from:"#55A2FA", to:"#8DDBFF", f:0.5})}...`)
    event.add('milf.stage.tier_2_access_ore', 'Unlocked: iridium / platinum / titanium / tungsten / uranium ore')
    event.add('milf.stage.saturation', `You have lost your ${textAnimatorString("saturation", "grad", {from:"#E4C549", to:"#FDE49A", f:0.5})}...`)
    event.add('milf.stage.xaeromap', 'Unlocked: mini-map, radar, waypoints')
    event.add('milf.how_to_seed.tooltip', 'Can be found in a bird\'s nest')
    event.add('milf.how_to_get_blaze_core.tooltip', 'You have a 50% chance of obtaining if you kill with the any wrench: Sacred Pontiff, Lord Pumpking, The Black Charro, Umvuthi, Frostmaw, Ferrous Wroughtnaut, Amethyst Crab')
    event.add('milf.how_to_get_electronice_ender_core.tooltip', 'You have a 50% chance of obtaining if you kill with the wrench: Nether Gauntlet, Night Lich, Obsidilith, Void Blossom, Geburah, Chesed, Malkuth')
    event.add('milf.stage.minecraft_mobs', `You started hearing ${textAnimatorString("strange noises", "grad", {from:"#ED1A1A", to:"#B62651", f:0.5})} at night...`)
    event.add('milf.stage.early_items', `This world no longer ${textAnimatorString("rejects", "glitch")} you...`)

    event.add('advancements.apotheosis.progression.ascent.criteria.nether_gauntlet', 'Kill Nether Gauntlet')

    event.add('milf.cannot.mine.block', 'You cannot mine this block for now')
    event.add('milf.press_button', 'Hold ')
    event.add('milf.for_details', 'for more information')
    event.add('milf.amber_visage.tooltip', 'Used as fuel in the transmogrification table to change the appearance of items without modifying their behavior at all')
    event.add('milf.orb_of_the_forest.tooltip', 'To apply this orb to an axe, hold the orb in your main hand and any axe in your off hand and click RMB')
    event.add('milf.beltborne_lanterns.tooltip', 'Press CTRL + B while holding a lantern — it snaps onto your belt. Need it back in your hands? Press CTRL + B again')
    event.add('milf.money_pouch.tooltip', 'Can be opened with radial menu while in the curio slot')
    event.add('milf.curio_bag.tooltip', 'Can be opened with radial menu while in the hotbar or in a curio slot')


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

    event.add('milf.orbcraft.changes', `${textAnimatorString("Item altered!", "wave", {a:0.25, w:0.25, f:0.5})}`)
    event.add('milf.orbcraft.added', `Orb energy infuses the item with `)
    event.add('milf.orbcraft.removed', `${textAnimatorString(" REMOVED", "glitch")}`)
    event.add('milf.orbcraft.orb_removed', `Orb energy cleanses the item from `)
    event.add('milf.orbcraft.absorbed', ` ${textAnimatorString("absorbed", "shake")} the strength of all the other enchantments!`)
    event.add('milf.orbcraft.destroyed', `The orb's energy overwhelms the item, ${textAnimatorString("destroying", "glitch")} it utterly!`)
    event.add('milf.orbcraft.overenchantment', `You feel ${textAnimatorString("otherworldly", "glitch")} power stemming from the item!`)
    event.add('milf.orbcraft.maxed', ` already ${textAnimatorStringForEach("maxed out", "wave", {a:0.2})}`)

    event.add('milf.orbcraft.error.type', `${textAnimatorString("Inappropriate", "glitch")} item for this type of orb!`)
    event.add('milf.orbcraft.error.no_valid', `Item has no more ${textAnimatorString("valid", "glitch")} enchantments to alter!`)
    event.add('milf.orbcraft.error.enchantments', `This item has no more ${textAnimatorString("applicable", "glitch")} enchantments!`)
    event.add('milf.orbcraft.error.offhand', `The target item has to be in your ${textAnimatorString("offhand", "glitch")}!`)

    event.add('milf.orbcraft.tooltip.transmutation_orb', `Adds up to ${textAnimatorString("two", "grad", {from:"#55A2FA", to:"#8DDBFF", f:0.5})} enchantments to an item.`)
    event.add('milf.orbcraft.tooltip.regal_orb', `Adds up to ${textAnimatorString("four", "grad", {from:"#E4C549", to:"#FDE49A", f:0.5})} enchantments to an item that already has at least two.`)
    event.add('milf.orbcraft.tooltip.divine_orb', `Randomly alters all enchantments, either ${textAnimatorString("upgrading", "grad", {from:"#55E408", to:"#D3FFAA", f:0.5})} or ${textAnimatorString("downgrading", "grad", {from:"#E40808", to:"#FFAAAA", f:0.5})} each one. Does not affect ${textAnimatorString("overenchanted", "grad", {from:"#55A2FA", to:"#8DDBFF", f:0.5})} or ${textAnimatorString("curse-based", "glitch")} enchantments.`)
    event.add('milf.orbcraft.tooltip.orb_of_regret', `Removes all but one random enchantment. That enchantment is ${textAnimatorStringForEach("maximized", "wave", {a:0.2})}. Can only be used on an item with 4 or more enchantments.`)
    event.add('milf.orbcraft.tooltip.orb_of_chance', `Either ${textAnimatorString("destroys", "glitch")} an item or ${textAnimatorString("overenchants", "grad", {from:"#55A2FA", to:"#8DDBFF", f:0.5})} one of the level 3+ enchantments. Requires 10+ total levels of enchantments on an item. The chance of success is reduced for each enchantment beyond the 4th one.`)
    event.add('milf.orbcraft.tooltip.orb_of_annulment', `Removes one ${textAnimatorString("random", "shake")} enchantment from an item.`)
    event.add('milf.orbcraft.tooltip.orb_of_corruption', `Adds one ${textAnimatorString("overenchanted", "grad", {from:"#55A2FA", to:"#8DDBFF", f:0.5})} enchantment to an item, along with the ${textAnimatorString("Curse of Vanishing", "glitch")}. Can only be used on an item with 4 or more enchantments that doesn't already have the ${textAnimatorString("Curse of Vanishing", "glitch")}.`)
    event.add('milf.orbcraft.tooltip.orb_of_alchemy', `Absorbs up to 4 enchantments from an item, ${textAnimatorString("destroying", "glitch")} it in the process. Using the enchanted orb on another item ${textAnimatorString("replaces", "fade")} all of that item's enchantments with the absorbed ones.`)
    event.add('milf.orbcraft.tooltip.orb_of_the_forest', `Infuses the axe item with the ${textAnimatorString("Essence Of The Forest", "grad", {from:"#1DEB6C", to:"#6AFFC3", f:0.5})}, allowing it to chop the ${textAnimatorString("whole tree", "grad", {from:"#55E408", to:"#D3FFAA", f:0.5})} in one go in exchange for being only a ${textAnimatorString("tenth as effective", "grad", {from:"#E40808", to:"#FFAAAA", f:0.5})} as before. It can be applied only once, with no ability to revert downsides`)

    event.add('desc.immersiveengineering.info.mineral.ametrine_geode', "Ametrine Geode")
    event.add('desc.immersiveengineering.info.mineral.zinkenite', "Zinkenite")
    event.add('desc.immersiveengineering.info.mineral.stannite', "Stannite")
    event.add('desc.immersiveengineering.info.mineral.brindleyite', "Brindleyite")
    event.add('desc.immersiveengineering.info.mineral.hematite', "Hematite")

    
    event.add('milf.text.dim.cant_visit', `${textAnimatorString("Some kind of magic is stopping you", "glitch")}`)

    event.add('milf.flags.claimed', "Chunk claimed")
    event.add('milf.flags.unclaimed', "Chunk unclaimed")
    event.add('milf.flags.occupied', "Chunk already claimed by: ")

    event.add('gateways.basic/deer', "Deer Gateway")

    event.add('rei_categories.modern_industrialization.blast_furnace', "Steam Blast Furnace")

    //#region Food tweak
    event.add("milf.food.feel_bit_better", "You feel a bit better after eating something other than fruits and vegetables.")
    event.add("milf.food.poison_1", "You have eaten too many fruits and vegetables and are now poisoned!")
    event.add("milf.food.poison_2", "You feel sick after eating too many fruits and vegetables. Be careful!")
    event.add("milf.food.poison_3", "You feel a bit sick after eating too many fruits and vegetables. Try to eat something else.")
    event.add("milf.food.poison_4", "You have eaten way too many fruits and vegetables and are feeling very sick! Consider eating something else for a while.")
    event.add("milf.food.poison_5", "You have eaten an extreme amount of fruits and vegetables and are now critically poisoned! Please eat something else immediately to recover. If you continue to eat fruits or vegetables while poisoned, you may die from the poison!")
    //#region

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

function textAnimatorString(text, type, params){
    if (params){
        return `<${type} ${Object.entries(params).reduce((acc, [param, value]) => `${acc}${param}=${value} `, '').trim()}>${text}</${type}>`

    } else {
        return `<${type}>${text}</${type}>`
    }
}

function textAnimatorStringForEach(text, type, params){
	let newText = ""

	for(let char of text){
		newText += textAnimatorString(char, type, params)
	}

    return newText
}
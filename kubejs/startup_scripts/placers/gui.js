
let $RegisterGuiLayersEvent = Java.loadClass("net.neoforged.neoforge.client.event.RegisterGuiLayersEvent");
let $HitResult$Type = Java.loadClass("net.minecraft.world.phys.HitResult$Type");

NativeEvents.onEvent($RegisterGuiLayersEvent, event => {
	event.registerBelowAll(ID.kjs("placers_tooltips"), (gui, delta) => global.renderBlockTooltips(gui, delta))
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

const tooltipHeight = 44

/**@type {Object} */ const placerBlocks = global.AnotherDefinitelyUniqueNameForPlacerBlocksThisTime
/**@type {Object} */ const boxBlocks = global.AnotherDefinitelyUniqueNameForBoxes

/**
 * @param {$GuiGraphics_} guiGraphics
 * @param {$DeltaTracker_} deltaTracker
 */
global.renderBlockTooltips = (guiGraphics, deltaTracker) => {
	if (!Client || Client.hitResult.type != $HitResult$Type.BLOCK) return
	if (!Client.level.getBlock(/**@type {$BlockHitResult_} */(Client.hitResult).blockPos).blockState.block.hasTag("milf:placers") && !Client.level.getBlock(/**@type {$BlockHitResult_} */(Client.hitResult).blockPos).blockState.block.hasTag("milf:empty_box")) return
	let $TooltipRenderUtil = Java.loadClass("net.minecraft.client.gui.screens.inventory.tooltip.TooltipRenderUtil")
	let $ClientTooltipComponent = Java.loadClass("net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent")
	let $DefaultTooltipPositioner = Java.loadClass("net.minecraft.client.gui.screens.inventory.tooltip.DefaultTooltipPositioner").INSTANCE
	const block = Client.level.getBlock(/**@type {$BlockHitResult_} */(Client.hitResult).blockPos).blockState.block
	const clientTooltipComponents = block.hasTag("milf:placers") ? [
		$ClientTooltipComponent.create(block.name.visualOrderText),
		$ClientTooltipComponent.create(Component.info(Component.translatable(`milf.placers.gui1`)).visualOrderText),
		$ClientTooltipComponent.create(Component.info(Component.translatable(`milf.placers.gui2`)).visualOrderText),
		$ClientTooltipComponent.create(Component.info(Component.keybind("key.sneak").append(Component.translatable(`milf.placers.gui3`))).visualOrderText),
	] : [
		$ClientTooltipComponent.create(block.name.visualOrderText),
		$ClientTooltipComponent.create(Component.info(Component.translatable(`milf.empty_box.gui1`)).visualOrderText),
		$ClientTooltipComponent.create(Component.info(Component.translatable(`milf.empty_box.gui2_1`).append(Component.keybind("key.sneak").append(Component.translatable(`milf.empty_box.gui2_2`)))).visualOrderText),
		$ClientTooltipComponent.create(Component.info(Component.translatable(`milf.empty_box.gui3_1`).append(Component.red(Component.translatable(`milf.empty_box.gui3_2`))).append(Component.translatable("milf.empty_box.gui3_3"))).visualOrderText),
	]
	let maxWidth = 0
	clientTooltipComponents.forEach(c => {
		const w = c.getWidth(Client.font)
		if (w > maxWidth) maxWidth = w
	})
	maxWidth += tooltipHeight + 2 // add space for the icon

	/** @type {$Vector2ic_} */
	const positioning = $DefaultTooltipPositioner.positionTooltip(
		guiGraphics.guiWidth(), guiGraphics.guiHeight(), // (x, y) screenWidth & Height
		guiGraphics.guiWidth()/2, guiGraphics.guiHeight()/2 + 24, // (x, y) "mouse Position" (anchor to start positioning from)
		maxWidth, tooltipHeight // (x, y) Tooltip size
	)
	let [x, y] = [positioning.x(), positioning.y()]

	const pose = guiGraphics.pose()
	pose.pushPose()
	pose.translate(0, 0, -400)

	const maxInt = 2 ** 32
	$TooltipRenderUtil.renderTooltipBackground(guiGraphics, x, y, maxWidth, tooltipHeight, -400,
		// colors as ARGB **signed** integers
		// bg-top, bg-bottom, outline-top, outline-bottom
		0xaf202020 - maxInt, 0xaf202020 - maxInt, 0x6f8f8f8f, 0x5f575757)
	pose.popPose()
	pose.pushPose()
	const itemRenderScale = 2.5
	pose.scale(1*itemRenderScale, 1*itemRenderScale, 1)
	const itemModel = block.hasTag("milf:placers") ? Item.of(placerBlocks[block.id.toString()]) : Item.of(boxBlocks[block.id.toString()])
	guiGraphics.renderFakeItem(itemModel, (x + 1) / itemRenderScale, (y + 2) / itemRenderScale)
	x += tooltipHeight
	y += 1
	pose.popPose()
	pose.pushPose()
	clientTooltipComponents.forEach(c => {
		c.renderText(Client.font, x, y, pose.last().pose(), guiGraphics.bufferSource())
		y += c.height + 1
	})
	pose.popPose()
}
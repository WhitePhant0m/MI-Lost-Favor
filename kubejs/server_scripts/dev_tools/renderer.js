let $RenderType = Java.loadClass("net.minecraft.client.renderer.RenderType")
let $Stage = Java.loadClass("net.neoforged.neoforge.client.event.RenderLevelStageEvent$Stage")
NativeEvents.onEvent("net.neoforged.neoforge.client.event.RenderLevelStageEvent", event => {
    if (destructionPenMode == 0 && mode == 0) return
    if (event.getStage() == $Stage.AFTER_TRIPWIRE_BLOCKS) {
        let camera = Client.gameRenderer.getMainCamera().getPosition()
        let posestack = event.getPoseStack()
        posestack.pushPose()
        posestack.translate(-camera.x(), -camera.y(), -camera.z())
        if (destructionPenMode != 0) {
            let vertexConsumer1 = Client.renderBuffers().bufferSource().getBuffer($RenderType.lines())
            event.levelRenderer.renderLineBox(posestack, vertexConsumer1, destructionPenAabb, 0.2, 1, 0.5, 100)
        }
        if (mode != 0) {
            let vertexConsumer2 = Client.renderBuffers().bufferSource().getBuffer($RenderType.lines())
            event.levelRenderer.renderLineBox(posestack, vertexConsumer2, aabb, 1, 0.2, 0.2, 100)
        }
        posestack.popPose()
    }
})

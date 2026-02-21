BlockEvents.rightClicked("grimoireofgaia:deco_garden_gnome", event => {
    const player = event.entity;
    const server = player.server;
    const key = "gnomeCooldown";
    if (player.persistentData[key]) return;

    player.persistentData.putBoolean(key, true);
    server.scheduleInTicks(5 * 20, _ => player.persistentData.remove(key));

    const playerName = player.profile.name;
    player.server.runCommandSilent(`/playsound kubejs:wooo ambient ${playerName} ${player.x} ${player.y} ${player.z}`);
});

PlayerEvents.loggedOut(event => {
    if(event.player.persistentData.gnomeCooldown) event.player.persistentData.remove("gnomeCooldown")
})
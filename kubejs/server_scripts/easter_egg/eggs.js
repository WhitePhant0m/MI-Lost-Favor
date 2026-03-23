BlockEvents.rightClicked("grimoireofgaia:deco_garden_gnome", event => {
    const player = event.entity;
    const server = player.server;
    const key = "gnomeCooldown";
    if (player.persistentData[key]) return;

    player.persistentData.putBoolean(key, true);
    server.scheduleInTicks(5 * 20, _ => player.persistentData.remove(key));

    const playerName = player.profile.name;
    player.server.runCommandSilent(`/playsound milf:wooo ambient ${playerName} ${player.x} ${player.y} ${player.z}`);
});

BlockEvents.rightClicked(['milf:kisuny_plush', 'milf:saeta_plush'], event => {
    const player = event.entity;
    const server = player.server;
    const key = "plushCooldown";
    if (player.persistentData[key]) return;

    player.persistentData.putBoolean(key, true);
    server.scheduleInTicks(5 * 20, _ => player.persistentData.remove(key));

    const playerName = player.profile.name;
    player.server.runCommandSilent(`/playsound milf:plush ambient ${playerName} ${player.x} ${player.y} ${player.z}`);

    

});

const PIPE_ITEMS = [
    'immersiveengineering:stick_iron',
    'immersiveengineering:stick_netherite',
    'immersiveengineering:stick_aluminum',
    'immersiveengineering:stick_steel',
    'modern_industrialization:cadmium_rod',
    'modern_industrialization:aluminum_rod',
    'modern_industrialization:blazegold_rod',
    'modern_industrialization:bronze_rod',
    'modern_industrialization:celestigem_rod',
    'modern_industrialization:certus_quartz_rod',
    'modern_industrialization:copper_rod',
    'modern_industrialization:ferricore_rod',
    'modern_industrialization:eclipse_alloy_rod',
    'modern_industrialization:gold_rod',
    'modern_industrialization:he_mox_rod',
    'modern_industrialization:he_uranium_rod',
    'modern_industrialization:invar_rod',
    'modern_industrialization:iron_rod',
    'modern_industrialization:le_mox_rod',
    'modern_industrialization:le_uranium_rod',
    'modern_industrialization:lead_rod',
    'modern_industrialization:netherite_rod',
    'modern_industrialization:stainless_steel_rod',
    'modern_industrialization:stainless_steel_rod_magnetic',
    'modern_industrialization:steel_rod',
    'modern_industrialization:steel_rod_magnetic',
    'modern_industrialization:tin_rod',
    'modern_industrialization:titanium_rod',
    'modern_industrialization:uranium_rod'
];

ItemEvents.dropped(PIPE_ITEMS, event => {
    const player = event.entity;
    const server = player.server;
    const key = "pipeDropCooldown";

    if (player.persistentData[key]) return;

    player.persistentData.putBoolean(key, true);
    server.scheduleInTicks(5 * 20, _ => player.persistentData.remove(key));

    const playerName = player.profile.name;
    server.runCommandSilent(`/playsound milf:metal_pipe ambient ${playerName} ${player.x} ${player.y} ${player.z}`);
});

PlayerEvents.loggedOut(event => {
    if (event.player.persistentData.gnomeCooldown) event.player.persistentData.remove("gnomeCooldown");
    if (event.player.persistentData.plushCooldown) event.player.persistentData.remove("plushCooldown");
    if (event.player.persistentData.pipeDropCooldown) event.player.persistentData.remove("pipeDropCooldown");
});
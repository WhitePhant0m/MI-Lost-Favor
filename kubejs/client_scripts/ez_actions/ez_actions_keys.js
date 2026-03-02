let $EzActionAPI = Java.loadClass("org.z2six.ezactions.api.EzActions").get()
let $menuPath = Java.loadClass("org.z2six.ezactions.api.MenuPath")
let $ClickActionKey = Java.loadClass("org.z2six.ezactions.data.click.ClickActionKey")
let $IconSpec = Java.loadClass("org.z2six.ezactions.data.icon.IconSpec")

NetworkEvents.dataReceived('ez_action', (event) => {
    let args = event.data.args
    let player = Client.player

    addEzAction(player, args)

})

NetworkEvents.dataReceived('ez_bundle', (event) => {
    let args = event.data.args
    let player = Client.player

    addEzBundle(player, args)

})

function addEzAction(player, args) {

    args = args || {}
    let argsJS = I_HATE_COMPOUND_TAGS(args)

    let json = JSON.stringify({
        "type": "KEY",
        "name": argsJS.key_name,
        "toggle": false,
        "mode": "AUTO"
    })

    $EzActionAPI.addAction(argsJS.parentId || null, argsJS.action_name, null, $ClickActionKey.deserialize(json), $IconSpec.item(argsJS.icon), true);
}

function addEzBundle(player, args) {
    args = args || {}
    let argsJS = I_HATE_COMPOUND_TAGS(args)

    const EzActionMenuWriter = $EzActionAPI.menuWrite();
    let result = EzActionMenuWriter.upsertFromJson($menuPath.root(), JSON.stringify(argsJS));

}


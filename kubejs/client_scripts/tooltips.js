ItemEvents.modifyTooltips(event => {

    let simpleShiftText = (args) => {
        event.add(
            args.item,
            { shift: false },
            Text.translate("kubejs.press_button").color("#f5c25b")
                .append(Text.of("Shift ").bold().color("#ffb319"))
                .append(Text.translate("kubejs.for_details").color("#f5c25b"))
        )

        event.add(
            args.item,
            { shift: true },
            Text.translate(args.text).color(args.color)
        )
    };

    simpleShiftText({item: "kubejs:amber_visage", text: "kubejs.amber_visage.tooltip", color: "#5ca5e0"})

})
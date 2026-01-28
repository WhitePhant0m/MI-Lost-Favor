ItemEvents.modifyTooltips(event => {

    const remove_tooltips = [
        'hexerei:sage_seed'
    ];

    remove_tooltips.forEach(item => {
        event.modify(item, tooltip => {
            tooltip.removeLine(1)
        });
    });
});
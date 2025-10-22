ServerEvents.recipes(event => {

    const remove_by_id = [
        "hexerei:leather_from_drying_rack",
    ];

    remove_by_id.forEach(id => {
        event.remove({ id: id })
    });

})
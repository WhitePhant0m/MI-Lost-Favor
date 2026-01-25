const renameItems = global.langRenames;
// console.log("langlangRenames:", renameItems);

Object.entries(renameItems).forEach(([itemName, translations]) => {
    const langs = translations.langs || translations;
    const types = translations.types || [];


    const hasItemType = types.some(t =>
        (t.toLowerCase() === "item") 
    );
    const hasBlockType = types.some(t =>
        ( t.toLowerCase() === "block")
    );
    const hasEntityType = types.some(t =>
        ( t.toLowerCase() === "entity")
    );

    Object.entries(langs).forEach(([lang, renameText]) => {
        ClientEvents.lang(lang, event => {
            if (!types || types.length === 0) {
                event.renameItem(itemName, renameText);
                return;
            }

            if (hasItemType) event.renameItem(itemName, renameText);
            if (hasBlockType) event.renameBlock(itemName, renameText);
            if (hasEntityType) event.renameEntity(itemName, renameText);
        });
    });
});
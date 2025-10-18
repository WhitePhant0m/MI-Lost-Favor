const customStuff = global.langCustomStuff
console.log(customStuff);
Object.entries(customStuff).forEach(([langID, langStrings]) => {
    Object.entries(langStrings).forEach(([lang, string]) => {
        ClientEvents.lang(lang, event => {event.add(langID, string)})
    })
});
//priority: 100

ServerEvents.tags('item', event => {
    const allItems = Ingredient.of(`*`)
    const patternJavaClass = Java.loadClass("java.util.regex.Pattern")
    const matcherJavaClass = Java.loadClass("java.util.regex.Matcher")

    const keyWords = ["log", "plank", "fence_gate"].join("|")

    const pattern = patternJavaClass.compile(`^[^:]+:.*_(?<tagName>(${keyWords})s?)$`)
    allItems.stacks.toList().forEach((itemStack) => {
        let matcher = pattern.matcher(itemStack.id)
        if (matcher.matches()){
            //console.log(matcher.group())
            let matchingPart = matcher.group("tagName")
            let lastChar = matchingPart.substring(matchingPart.length() - 1)
            let isLastS = (lastChar == "s")
            if(isLastS){
                event.add(`minecraft:${matcher.group("tagName")}`, matcher.group())
            } else {
                event.add(`minecraft:${matcher.group("tagName")}s`, matcher.group())
            }
        }
        
    })

})
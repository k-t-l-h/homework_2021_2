'use strict';

const sort = (sentence) => {
    if (typeof sentence !== "string")
        return sentence;

    let collator = new Intl.Collator(["ru-RU", 'en-EN'], {sensitivity: "accent"});
    return sentence.toLowerCase().split(' ')
        .map(word => word.split('').sort(function (a, b) {
            return collator.compare(a, b);
        }).join(''))
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)).sort(function (a, b) {
                return collator.compare(a, b);
            }
        )
        .join(' ');
}

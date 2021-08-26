'use strict';


const collator = new Intl.Collator(['en-EN', "ru-RU"], {sensitivity: "accent"});
const compare = (a, b) => collator.compare(a, b);

/**
 * @function Функция сортировки букв в строке
 * @param {String} word - входное слово
 * @return {String} word - слово с отсортированными буквами
 */
const sortLetters = word => word.split('').sort(compare).join('');

/**
 * @function Функция капитализации первой буквы слова
 * @param {String} word - входное слово
 * @return {String} word - входное слово с заглавной первой буквой
 */
const capitalizeWord = word => word.charAt(0).toUpperCase().concat(word.slice(1).toLowerCase());

const sort = (sentence) => {
    if (typeof sentence !== 'string')
        return '';

    return sentence.split(' ')
        .map(sortLetters)
        .map(capitalizeWord)
        .sort(compare)
        .join(' ').trim();
}

// ==UserScript==
// @name         RuRunes
// @namespace    http://tampermonkey.net/
// @author       https://github.com/dobrosketchkun
// @version      1.0
// @description  RuRunes art-project user script
// @match        http://*/*
// @match        https://*/*
// @grant        none
// @license      The Uncertain Commons License https://gist.github.com/dobrosketchkun/d0c6aba085fb4a910926616a8b83c4c5
// ==/UserScript==

(function() {
    'use strict';


    var correspondences = {
    'А': 'ᚪ', 'а': 'ᚪ',
    'Б': 'ᛒ', 'б': 'ᛒ',
    'В': 'ᚹ', 'в': 'ᚹ',
    'Г': 'ᚷ', 'г': 'ᚷ',
    'Д': 'ᛞ', 'д': 'ᛞ',
    'Е': 'ᛖ', 'е': 'ᛖ',
    'Ё': 'ᚬ', 'ё': 'ᚬ',
    'Ж': 'ᚸ', 'ж': 'ᚸ',
    'З': 'ᚴ', 'з': 'ᚴ',
    'И': 'ᛁ', 'и': 'ᛁ',
    'Й': 'ᛡ', 'й': 'ᛡ',
    'К': 'ᛣ', 'к': 'ᛣ',
    'Л': 'ᛚ', 'л': 'ᛚ',
    'М': 'ᛗ', 'м': 'ᛗ',
    'Н': 'ᚾ', 'н': 'ᚾ',
    'О': 'ᛟ', 'о': 'ᛟ',
    'П': 'ᛈ', 'п': 'ᛈ',
    'Р': 'ᚱ', 'р': 'ᚱ',
    'С': 'ᛋ', 'с': 'ᛋ',
    'Т': 'ᛏ', 'т': 'ᛏ',
    'У': 'ᚢ', 'у': 'ᚢ',
    'Ф': 'ᚠ', 'ф': 'ᚠ',
    'Х': 'ᚻ', 'х': 'ᚻ',
    'Ц': 'ᛥ', 'ц': 'ᛥ',
    'Ч': 'ᛐ', 'ч': 'ᛐ',
    'Ш': 'ᛊ', 'ш': 'ᛊ',
    'Щ': 'ᚲ', 'щ': 'ᚲ',
    'Ъ': 'ᛦ', 'ъ': 'ᛦ',
    'Ы': 'ᛠ', 'ы': 'ᛠ',
    'Ь': 'ᚯ', 'ь': 'ᚯ',
    'Э': 'ᚫ', 'э': 'ᚫ',
    'Ю': 'ᚣ', 'ю': 'ᚣ',
    'Я': 'ᛃ', 'я': 'ᛃ'
}
    function replaceText() {
        var elements = document.querySelectorAll('*:not(script):not(style)');

        elements.forEach(function(element) {
            var node = element.firstChild;

            while (node) {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.nodeValue = node.nodeValue.replace(/./g, function(char) {
                        return correspondences[char] || char;
                    });
                }
                node = node.nextSibling;
            }
        });
    }

    replaceText();
})();

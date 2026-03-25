// ==UserScript==
// @name         links
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  ...
// @author       sujer-ux
// @match        https://www.kinopoisk.ru/film/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const button = document.createElement('button');
    button.innerHTML = '▶';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 9999;
        padding: 10px 15px;
        background-color: #000;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: background-color 0.3s;
        cursor: pointer;
    `;

    button.onclick = () => {
        const url = window.location.href;
        const match = url.match(/\/film\/(\d+)/);

        if (match && match[1]) {
            const filmId = match[1];
            const kinohubUrl = `https://tv.kinohub.vip/movie/${filmId}`;
            window.open(kinohubUrl, '_blank');
        } else {
            alert('Не удалось найти ID фильма');
        }
    };

    document.body.appendChild(button);
})();

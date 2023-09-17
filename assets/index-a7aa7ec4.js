(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();const n=document.querySelector(".js-popular-recipes");let c;l();async function a(){return c=await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json(),c}async function l(){await a(),c.map(r=>{const s=`<div class="precipes-marcup js-precipes-marcup js-open-dish" data-id="${r._id}">
        <img class='precipes-marcup-img'
            src='${r.preview}'
            alt='${r.title}'>
        <div class="precipes-marcup-title">
            <h3 class="precipes-marcup-title-text">${r.title}</h3>
            <p class="precipes-marcup-text">${r.description}</p>
        </div>
    </div>`;n.insertAdjacentHTML("beforeend",s)})}n.addEventListener("click",d);function d(r){const s=r.target.closest(".js-open-dish").dataset.id;return console.log(s),s}

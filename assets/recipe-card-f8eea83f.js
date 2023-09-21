(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a="/project-group-14/assets/icon-3c492b1f.svg";function u(s){return s.map(({_id:n,preview:c,title:e,description:t,rating:i})=>(l(i),`<div class="recipe-card-container js-open-dish" data-id="${n}" style="background-image: url('${c}')">
            <svg class="recipe-icon-heart" width="22" height="22">
              <use href="${a}#icon-heart"></use>
            </svg>
            <h2 class="recipe-card-title">${e}</h2>
            <p class="recipe-card-text">${t}</p>
            <div class="recipe-btn-container">
                <p class="recipe-card-rating">${Math.round(i*10)/10}</p>
                <ul class="recipe-card-item">${o.join("")}</ul>
                <button class="recipe-btn js-open-dish-button">See recipe</button>
            </div>
        </div>`)).join("")}let o=[];function l(s){o=[];for(let r=1;r<=5;r+=1){if(r<=Math.round(s)){o.push(`
      <li class="recipe-card-list">
          <svg class="recipe-icon-rating active-recipe-icon" width="16" height="16">
            <use href="${a}#icon-star"></use>
          </svg>
        </li>`);continue}o.push(`
        <li class="recipe-card-list">
          <svg class="recipe-icon-rating" width="16" height="16">
            <use href="${a}#icon-star"></use>
          </svg>
        </li>`)}}export{u as c,a as s};

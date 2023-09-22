(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const a="/project-group-14/assets/icon-3c492b1f.svg";function u(s){return s.map(({_id:n,preview:c,title:e,description:r,rating:i})=>(l(i),`<div class="recipe-card-container js-open-dish" data-id="${n}" style="background-image: url('${c}')">
            <svg class="recipe-icon-heart" width="22" height="22">
              <use href="${a}#icon-heart"></use>
            </svg>
            <h2 class="recipe-card-title">${e}</h2>
            <p class="recipe-card-text">${r}</p>
            <div class="recipe-btn-container">
                <p class="recipe-card-rating">${Math.round(i*10)/10}</p>
                <ul class="recipe-card-item">${o.join("")}</ul>
                <button class="recipe-btn js-open-dish-button">See recipe</button>
            </div>
        </div>`)).join("")}let o=[];function l(s){o=[];for(let t=1;t<=5;t+=1){if(t<=Math.round(s)){o.push(`
      <li class="recipe-card-list">
          <svg class="recipe-icon-rating active-recipe-icon" width="16" height="16">
            <use href="${a}#icon-star"></use>
          </svg>
        </li>`);continue}o.push(`
        <li class="recipe-card-list">
          <svg class="recipe-icon-rating" width="16" height="16">
            <use href="${a}#icon-star"></use>
          </svg>
        </li>`)}}export{u as c,a as i};

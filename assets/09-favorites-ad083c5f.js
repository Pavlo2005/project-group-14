(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();const v=document.querySelector(".js-popular-recipes");let g;L();async function j(){return g=await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json(),g}async function L(){await j(),g.map(e=>{const t=`<div class="precipes-marcup js-precipes-marcup js-open-dish" data-id="${e._id}">
        <img class='precipes-marcup-img'
            src='${e.preview}'
            alt='${e.title}'>
        <div class="precipes-marcup-title">
            <h3 class="precipes-marcup-title-text">${e.title}</h3>
            <p class="precipes-marcup-text">${e.description}</p>
        </div>
    </div>`;v.insertAdjacentHTML("beforeend",t)})}v.addEventListener("click",$);function $(e){const t=e.target.closest(".js-open-dish").dataset.id;return console.log(t),t}async function w(e){const s=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${e}`);if(!s.ok)throw new Error(s.statusText);return await s.json()}function k(e){const{_id:t,title:r="",thumb:s="",time:i="XX",tags:o=[],ingredients:n=[],rating:c=0,instructions:d=""}=e,p=o.map(a=>`<li class="recipe-modal-tag-item">#${a}</li>`).splice(0,3).join(""),b=n.map(({name:a,measure:S})=>`
  <tr class="table-row">
        <td class="table-ingredient">${a}</td>
        <td class="table-amount">${S}</td>
      </tr>`).join(""),u=[];for(let a=1;a<=5;a+=1){if(a<=Math.round(c)){u.push(`
      <li class="recipe-modal-rating-item">
          <svg class="recipe-modal-rating-icon active-icon-dp" width="18" height="18">
            <use href="./img/icon.svg#icon-star"></use>
          </svg>
        </li>`);continue}u.push(`
        <li class="recipe-modal-rating-item">
          <svg class="recipe-modal-rating-icon" width="18" height="18">
            <use href="./img/icon.svg#icon-star"></use>
          </svg>
        </li>`)}const y=(JSON.parse(localStorage.getItem("favorites"))??[]).find(a=>a===t)?"Remove from favorite":"Add to favorite";return`<div class="overlay js-overlay-dp" data-id="${t}">
  <div class="recipe-modal js-recipe-modal">
    <button class="recipe-modal-close-btn js-close-buttton-dp" type="button">
      <svg class="recipe-modal-close-icon">
        <use href="./img/icon.svg#icon-x"></use>
      </svg>
    </button>
    <h2 class="recipe-modal-title desktop">${r}</h2>
    <img src="${s}" alt="egg" class="recipe-modal-img" />
    <h2 class="recipe-modal-title mobile">${r}</h2>
    <div class="recipe-modal-rating">
      <ul class="recipe-modal-tag-list desktop">${p}</ul>
      <p class="recipe-modal-rating-number">${c}</p>
      <ul class="recipe-modal-rating-list">${u.join("")}</ul>
      <p class="recipe-modal-cooking-time">${i} min</p>
    </div>
    <table class="recipe-modal-table">${b}</table>
    <ul class="recipe-modal-tag-list mobile">
      <li class="recipe-modal-tag-item">#Breakfast</li>
      <li class="recipe-modal-tag-item">#Desert</li>
      <li class="recipe-modal-tag-item">#Sweet</li>
    </ul>
    <p class="recipe-modal-desc">${d}</p>
    <ul class="recipe-modal-batton-list">
    <li class="recipe-modal-batton-item">
    <button class="recipe-modal-button favorite js-favorite-button-dp">${y}</button>
    </li>
    <li class="recipe-modal-batton-item">
    <button class="recipe-modal-button rating js-open-rating-button" data-id="${t}">Give a rating</button>
    </li>
    </ul>    
  </div>
</div>`}function E(e){const t=JSON.parse(localStorage.getItem("favorites"))??[],r=t.indexOf(e);if(~r){t.splice(r,1),t.length?localStorage.setItem("favorites",JSON.stringify(t)):localStorage.removeItem("favorites");return}t.push(e),localStorage.setItem("favorites",JSON.stringify(t))}const m=document.querySelector(".js-dish-page-favorite"),f=document.querySelector(".js-dish-page-button");m&&m.addEventListener("click",e=>{e.target!==e.currentTarget&&h(e)});f&&f.addEventListener("click",e=>{e.target.classList.contains("js-open-dish-button")&&h(e)});function h(e){const t=e.target.closest(".js-open-dish");w(t.dataset.id).then(r=>{document.body.insertAdjacentHTML("beforeEnd",k(r));const s=document.querySelector(".js-overlay-dp"),i=document.querySelector(".js-close-buttton-dp");document.querySelector(".js-favorite-button-dp").addEventListener("click",n);function n(c){const d=JSON.parse(localStorage.getItem("favorites"))??[];c.target.textContent=d.find(p=>p===r._id)?"Add to favorite":"Remove from favorite",E(r._id)}i.addEventListener("click",()=>s.remove()),s.addEventListener("click",c=>{c.target.closest(".js-recipe-modal")||s.remove()}),document.addEventListener("keydown",({code:c})=>{c==="Escape"&&s.remove()})}).catch(r=>console.log(r))}function O(e){return e.map(({preview:r,title:s,description:i,rating:o})=>`<div class="recipe-card-container js-open-dish" style="background-image: url('${r}')" data-id="ідентифікатор рецепту">
              <svg class="recipe-icon-heart" width="22" height="22">
                <use href="/img/icon.svg#icon-heart"></use>
              </svg>
              <h2 class="recipe-card-title">${s}</h2>
              <p class="recipe-card-text">${i}</p>
              <div class="recipe-btn-container">
                  <p class="recipe-card-rating">${o}</p>
                  <svg class="recipe-icon-rating" width="18" height="18">
                    <use href="/img/icon.svg#icon-star"></use>
                  </svg>
                  <svg class="recipe-icon-rating" width="18" height="18">
                      <use href="/img/icon.svg#icon-star"></use>
                    </svg>
                    <svg class="recipe-icon-rating" width="18" height="18">
                      <use href="/img/icon.svg#icon-star"></use>
                    </svg>
                    <svg class="recipe-icon-rating" width="18" height="18">
                      <use href="/img/icon.svg#icon-star"></use>
                    </svg>
                    <svg class="recipe-icon-rating" width="18" height="18">
                      <use href="/img/icon.svg#icon-star"></use>
                    </svg>
                  <button class="recipe-btn js-open-dish-button">See recipe</button>
              </div>
          </div>`).join("")}async function N(e){const t=e.map(async s=>{const i=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${s}`);return i.ok?i.json():Promise.reject(i.statusText)});return(await Promise.allSettled(t)).filter(({status:s})=>s==="fulfilled").map(({value:s})=>s)}const x=JSON.parse(localStorage.getItem("favorites")),l={recipes:document.querySelector(".fav-recipes"),noFavs:document.querySelector(".fav-none"),hero:document.querySelector(".fav-hero-container"),categories:document.querySelector(".fav-categories")};q(x);async function q(e){if(!e||!e[0]){console.log("nothing here");return}l.noFavs.classList.add("visually-hidden"),l.hero.style.display="flex",l.categories.style.display="flex";try{const t=await N(e);l.recipes.insertAdjacentHTML("beforeend",O(t)),l.categories.insertAdjacentHTML("beforeend",F(t))}catch(t){console.log(t)}}function F(e){return e.map(({category:r})=>`<li class="fav-categories-item">
        <a href="#" class="fav-category cat-inactive">${r}</a>
      </li>`).filter((r,s,i)=>i.indexOf(r)===s).join("")}

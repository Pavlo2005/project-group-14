(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const f=document.querySelector(".js-popular-recipes");let u;S();async function L(){return u=await(await fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular")).json(),u}async function S(){await L(),u.map(e=>{const t=`<div class="precipes-marcup js-precipes-marcup js-open-dish" data-id="${e._id}">
        <img class='precipes-marcup-img'
            src='${e.preview}'
            alt='${e.title}'>
        <div class="precipes-marcup-title">
            <h3 class="precipes-marcup-title-text">${e.title}</h3>
            <p class="precipes-marcup-text">${e.description}</p>
        </div>
    </div>`;f.insertAdjacentHTML("beforeend",t)})}f.addEventListener("click",j);function j(e){const t=e.target.closest(".js-open-dish").dataset.id;return console.log(t),t}async function $(e){const a=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${e}`);if(!a.ok)throw new Error(a.statusText);return await a.json()}function k(e){const{_id:t,title:s="",thumb:a="",time:i="XX",tags:o=[],ingredients:n=[],rating:c=0,instructions:l=""}=e,d=o.map(r=>`<li class="recipe-modal-tag-item">#${r}</li>`).splice(0,3).join(""),h=n.map(({name:r,measure:y})=>`
  <tr class="table-row">
        <td class="table-ingredient">${r}</td>
        <td class="table-amount">${y}</td>
      </tr>`).join(""),p=[];for(let r=1;r<=5;r+=1){if(r<=Math.round(c)){p.push(`
      <li class="recipe-modal-rating-item">
          <svg class="recipe-modal-rating-icon active-icon-dp" width="18" height="18">
            <use href="./img/icon.svg#icon-star"></use>
          </svg>
        </li>`);continue}p.push(`
        <li class="recipe-modal-rating-item">
          <svg class="recipe-modal-rating-icon" width="18" height="18">
            <use href="./img/icon.svg#icon-star"></use>
          </svg>
        </li>`)}const b=(JSON.parse(localStorage.getItem("favorites"))??[]).find(r=>r===t)?"Remove from favorite":"Add to favorite";return`<div class="overlay js-overlay-dp" data-id="${t}">
  <div class="recipe-modal js-recipe-modal">
    <button class="recipe-modal-close-btn js-close-buttton-dp" type="button">
      <svg class="recipe-modal-close-icon">
        <use href="./img/icon.svg#icon-x"></use>
      </svg>
    </button>
    <h2 class="recipe-modal-title desktop">${s}</h2>
    <img src="${a}" alt="egg" class="recipe-modal-img" />
    <h2 class="recipe-modal-title mobile">${s}</h2>
    <div class="recipe-modal-rating">
      <ul class="recipe-modal-tag-list desktop">${d}</ul>
      <p class="recipe-modal-rating-number">${c}</p>
      <ul class="recipe-modal-rating-list">${p.join("")}</ul>
      <p class="recipe-modal-cooking-time">${i} min</p>
    </div>
    <table class="recipe-modal-table">${h}</table>
    <ul class="recipe-modal-tag-list mobile">
      <li class="recipe-modal-tag-item">#Breakfast</li>
      <li class="recipe-modal-tag-item">#Desert</li>
      <li class="recipe-modal-tag-item">#Sweet</li>
    </ul>
    <p class="recipe-modal-desc">${l}</p>
    <ul class="recipe-modal-batton-list">
    <li class="recipe-modal-batton-item">
    <button class="recipe-modal-button favorite js-favorite-button-dp">${b}</button>
    </li>
    <li class="recipe-modal-batton-item">
    <button class="recipe-modal-button rating js-open-rating-button" data-id="${t}">Give a rating</button>
    </li>
    </ul>    
  </div>
</div>`}function w(e){const t=JSON.parse(localStorage.getItem("favorites"))??[],s=t.indexOf(e);if(~s){t.splice(s,1),t.length?localStorage.setItem("favorites",JSON.stringify(t)):localStorage.removeItem("favorites");return}t.push(e),localStorage.setItem("favorites",JSON.stringify(t))}const m=document.querySelector(".js-dish-page-favorite"),g=document.querySelector(".js-dish-page-button");m&&m.addEventListener("click",e=>{e.target!==e.currentTarget&&v(e)});g&&g.addEventListener("click",e=>{e.target.classList.contains("js-open-dish-button")&&v(e)});function v(e){const t=e.target.closest(".js-open-dish");$(t.dataset.id).then(s=>{document.body.insertAdjacentHTML("beforeEnd",k(s));const a=document.querySelector(".js-overlay-dp"),i=document.querySelector(".js-close-buttton-dp");document.querySelector(".js-favorite-button-dp").addEventListener("click",n);function n(c){const l=JSON.parse(localStorage.getItem("favorites"))??[];c.target.textContent=l.find(d=>d===s._id)?"Add to favorite":"Remove from favorite",w(s._id)}i.addEventListener("click",()=>a.remove()),a.addEventListener("click",c=>{c.target.closest(".js-recipe-modal")||a.remove()}),document.addEventListener("keydown",({code:c})=>{c==="Escape"&&a.remove()})}).catch(s=>console.log(s))}

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const l="/project-group-14/assets/icon-3c492b1f.svg";function u(i){return i.map(({_id:o,preview:s,title:e,description:r,rating:a})=>(d(a),`<div class="recipe-card-container js-open-dish" data-id="${o}" style="background-image: url('${s}')">
            <svg class="recipe-icon-heart" width="22" height="22">
              <use href="${l}#icon-heart"></use>
            </svg>
            <h2 class="recipe-card-title">${e}</h2>
            <p class="recipe-card-text">${r}</p>
            <div class="recipe-btn-container">
                <p class="recipe-card-rating">${Math.round(a*10)/10}</p>
                <ul class="recipe-card-item">${n.join("")}</ul>
                <button class="recipe-btn js-open-dish-button">See recipe</button>
            </div>
        </div>`)).join("")}let n=[];function d(i){n=[];for(let t=1;t<=5;t+=1){if(t<=Math.round(i)){n.push(`
      <li class="recipe-card-list">
          <svg class="recipe-icon-rating active-recipe-icon" width="16" height="16">
            <use href="${l}#icon-star"></use>
          </svg>
        </li>`);continue}n.push(`
        <li class="recipe-card-list">
          <svg class="recipe-icon-rating" width="16" height="16">
            <use href="${l}#icon-star"></use>
          </svg>
        </li>`)}}async function f(i){const t=i.map(async s=>{const e=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${s}`);return e.ok?await e.json():await Promise.reject(e.statusText)});return(await Promise.allSettled(t)).filter(({status:s})=>s==="fulfilled").map(({value:s})=>s)}const p=JSON.parse(localStorage.getItem("favorites")),c={recipes:document.querySelector(".fav-recipes"),noFavs:document.querySelector(".fav-none"),hero:document.querySelector(".fav-hero-container"),categories:document.querySelector(".fav-categories"),favNoneImg:document.querySelector(".fav-none-icon"),homeNav:document.querySelector(".js-home-link"),favNav:document.querySelector(".js-fav-link")};c.favNoneImg.insertAdjacentHTML("beforeend",`<use href="${l}#icon-favorites"></use>`);c.homeNav.classList.replace("home-link","favlink");c.favNav.classList.replace("fav-link","home-link");h(p);async function h(i){if(!i||!i[0]){console.log("nothing here");return}c.noFavs.classList.add("visually-hidden"),c.hero.style.display="flex",c.categories.style.display="flex";try{const t=await f(i);c.recipes.insertAdjacentHTML("beforeend",u(t)),c.categories.insertAdjacentHTML("beforeend",g(t))}catch(t){console.log(t)}}function g(i){return i.map(({category:o})=>`<li class="fav-categories-item">
        <a href="#" class="fav-category cat-inactive">${o}</a>
      </li>`).filter((o,s,e)=>e.indexOf(o)===s).join("")}export{u as c,l as i};

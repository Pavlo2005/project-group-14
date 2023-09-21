(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const l="/project-group-14/assets/icon-3c492b1f.svg";function u(s){return s.map(({_id:o,preview:i,title:e,description:r,rating:a})=>(d(a),`<div class="recipe-card-container js-open-dish" data-id="${o}" style="background-image: url('${i}')">
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
        </div>`)).join("")}let n=[];function d(s){n=[];for(let t=1;t<=5;t+=1){if(t<=Math.round(s)){n.push(`
      <li class="recipe-card-list">
          <svg class="recipe-icon-rating active-recipe-icon" width="16" height="16">
            <use href="${l}#icon-star"></use>
          </svg>
        </li>`);continue}n.push(`
        <li class="recipe-card-list">
          <svg class="recipe-icon-rating" width="16" height="16">
            <use href="${l}#icon-star"></use>
          </svg>
        </li>`)}}async function f(s){const t=s.map(async i=>{const e=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${i}`);return e.ok?await e.json():await Promise.reject(e.statusText)});return(await Promise.allSettled(t)).filter(({status:i})=>i==="fulfilled").map(({value:i})=>i)}const p=JSON.parse(localStorage.getItem("favorites")),c={recipes:document.querySelector(".fav-recipes"),noFavs:document.querySelector(".fav-none"),hero:document.querySelector(".fav-hero-container"),categories:document.querySelector(".fav-categories"),favNoneImg:document.querySelector(".fav-none-icon"),homeNav:document.querySelector(".js-home-link"),favNav:document.querySelector(".js-fav-link")};c.favNoneImg.insertAdjacentHTML("beforeend",`<use href="${l}#icon-favorites"></use>`);c.homeNav.classList.replace("home-link","favlink");c.favNav.classList.replace("fav-link","home-link");h(p);async function h(s){if(!s||!s[0]){console.log("nothing here");return}c.noFavs.classList.add("visually-hidden"),c.hero.style.display="flex",c.categories.style.display="flex";try{const t=await f(s);c.recipes.insertAdjacentHTML("beforeend",u(t)),c.categories.insertAdjacentHTML("beforeend",g(t))}catch(t){console.log(t)}}function g(s){return s.map(({category:o})=>`<li class="fav-categories-item">
        <a href="#" class="fav-category cat-inactive">${o}</a>
      </li>`).filter((o,i,e)=>e.indexOf(o)===i).join("")}export{u as c};

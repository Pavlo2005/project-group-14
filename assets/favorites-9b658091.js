import{c}from"./08-dish-page-e3f34fc2.js";async function n(e){const t=e.map(async a=>{const r=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${a}`);return r.ok?r.json():Promise.reject(r.statusText)});return(await Promise.allSettled(t)).filter(({status:a})=>a==="fulfilled").map(({value:a})=>a)}const i=JSON.parse(localStorage.getItem("favorites")),o={recipes:document.querySelector(".fav-recipes"),noFavs:document.querySelector(".fav-none"),hero:document.querySelector(".fav-hero-container"),categories:document.querySelector(".fav-categories")};l(i);async function l(e){if(!e||!e[0]){console.log("nothing here");return}o.noFavs.classList.add("visually-hidden"),o.hero.style.display="flex",o.categories.style.display="flex";try{const t=await n(e);o.recipes.insertAdjacentHTML("beforeend",c(t)),o.categories.insertAdjacentHTML("beforeend",d(t))}catch(t){console.log(t)}}function d(e){return e.map(({category:s})=>`<li class="fav-categories-item">
        <a href="#" class="fav-category cat-inactive">${s}</a>
      </li>`).filter((s,a,r)=>r.indexOf(s)===a).join("")}

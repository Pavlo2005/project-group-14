import"./08-dish-page-fb341e5f.js";function l(t){return t.map(({_id:s,preview:i,title:r,description:o,rating:n})=>(p(n),`<div class="recipe-card-container js-open-dish" data-id="${s}" style="background-image: url('${i}')">
            <svg class="recipe-icon-heart" width="22" height="22">
              <use href="/img/icon.svg#icon-heart"></use>
            </svg>
            <h2 class="recipe-card-title">${r}</h2>
            <p class="recipe-card-text">${o}</p>
            <div class="recipe-btn-container">
                <p class="recipe-card-rating">${Math.round(n*10)/10}</p>
                <ul class="recipe-card-item">${c.join("")}</ul>
                <button class="recipe-btn js-open-dish-button">See recipe</button>
            </div>
        </div>`)).join("")}let c=[];function p(t){c=[];for(let e=1;e<=5;e+=1){if(e<=Math.round(t)){c.push(`
      <li class="recipe-card-list">
          <svg class="recipe-icon-rating active-recipe-icon" width="16" height="16">
            <use href="/img/icon.svg#icon-star"></use>
          </svg>
        </li>`);continue}c.push(`
        <li class="recipe-card-list">
          <svg class="recipe-icon-rating" width="16" height="16">
            <use href="/img/icon.svg#icon-star"></use>
          </svg>
        </li>`)}}async function u(t){const e=t.map(async i=>{const r=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${i}`);return r.ok?r.json():Promise.reject(r.statusText)});return(await Promise.allSettled(e)).filter(({status:i})=>i==="fulfilled").map(({value:i})=>i)}const d=JSON.parse(localStorage.getItem("favorites")),a={recipes:document.querySelector(".fav-recipes"),noFavs:document.querySelector(".fav-none"),hero:document.querySelector(".fav-hero-container"),categories:document.querySelector(".fav-categories")};g(d);async function g(t){if(!t||!t[0]){console.log("nothing here");return}a.noFavs.classList.add("visually-hidden"),a.hero.style.display="flex",a.categories.style.display="flex";try{const e=await u(t);a.recipes.insertAdjacentHTML("beforeend",l(e)),a.categories.insertAdjacentHTML("beforeend",h(e))}catch(e){console.log(e)}}function h(t){return t.map(({category:s})=>`<li class="fav-categories-item">
        <a href="#" class="fav-category cat-inactive">${s}</a>
      </li>`).filter((s,i,r)=>r.indexOf(s)===i).join("")}

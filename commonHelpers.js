import"./assets/su-cf04f608.js";import{a as f,N as L}from"./assets/vendor-77e6b4aa.js";const q="https://books-backend.p.goit.global",E="/books/category-list";async function _(){try{return(await f.get(`${q}${E}`)).data}catch(t){console.error(t)}}document.querySelector(".main-content-page");const I=document.querySelector(".categories-list");_().then(t=>{x(t)}).catch(t=>{L.Notify.failure("Error"),console.log(t)});function x(t){const e=t.map(({list_name:i})=>`
       <li class="category-item">${i}</li>
       `).join(""),s='<li class="category-item category-item-firstelm">All categories</li>';I.innerHTML=s+e,document.querySelector(".category-item-firstelm").classList.add("category-active")}const T="https://books-backend.p.goit.global",w="/books/category?category=",C=document.querySelector(".main-content-page");let c="";const m=document.querySelector(".categories-list");document.querySelector(".categories-list");m.addEventListener("click",M);function M(t){if(t.target.textContent===c)return;const e=document.querySelector(".category-active");e&&e.classList.remove("category-active"),t.currentTarget!==t.target&&(m.firstChild===t.target?(m.firstChild.classList.add("category-active"),c=m.firstChild):(c=t.target.textContent,t.target.classList.add("category-active"),B(c)))}async function B(t){try{const e=await f.get(`${T}${w}${t}`);return N(e.data),e.data}catch(e){console.error(e),L.Notify.failure("Error")}}function N(t){let e;function s(n){const d=n.length-n.lastIndexOf(" "),u=n.substring(n.length-d);let g=n.length-u.length;return e=`<h1 class="head-main-h">${n.slice(0,g)}
  <span class="head-main-h head-main-hdecor">
  ${u}
  </span>
   </h1>`}s(c);const a=t.map(({author:n,book_image:d,description:u,amazon_product_url:g,title:r,list_name:k,_id:p})=>`
       <li class="part-cards-list-itemcat" id="${p}">
             <img class="images-prevcat" src="${d}"
              alt="${r}" width ='180' loading="lazy" />
                <div class="info">
                   <p class="info-item-title"><b>${r}</b></p>
                   <p class="info-item-author"><b>${n}</b></p>
             </div>
       </li>
       `).join(""),i=`${e}
<ul class="main-content-listcat">
    ${a}
</ul>`;C.innerHTML=i}C.addEventListener("click",R);function R(t){const e=t.target.closest(".btn-best-seemore");if(e){let s=e.getAttribute("category");console.log(s),c=s;const a=m.children;for(let i of a)i.textContent.trim()===c?i.classList.add("category-active"):i.classList.remove("category-active");B(c)}}const z="/img/shopping/book_grey.png",O="/img/shopping/am_grey.png",o={catList:document.querySelector(".categoriesList"),catListItem:document.querySelector(".categoriesList"),bestSellersPartName:document.querySelector(".bestSellersPartName"),partCardsPage:document.querySelector(".partCardsList"),btnSeeMore:document.querySelector(".btnBestSellersSeeMore"),cardsBookSmall:document.querySelector(".photo-card"),popupMenuConttent:document.querySelector(".popup-menu-conttent"),btnAddtoShList:document.querySelector(".btn-addto-card"),pAddtoCardCongrat:document.querySelector(".addto-card-congrat"),btnRemoveShList:document.querySelector(".btn-remove-card"),bdropPopup:document.querySelector(".backdrop-popup-menu"),backdropBlock:document.querySelector(".wrapper"),btnCloseInfoBook:document.querySelector(".btn-close-infobook"),bookPage:document.querySelector(".box-popup-menu"),catPage:document.querySelector(".main-content-page")},h="user-shopping-list";let l=[];o.catPage.addEventListener("click",j);function j(t){const e=t.target.closest(".part-cards-list-itemcat"),s=t.target.closest(".part-cards-list-item");if(e){let a=e.id;S(a)}if(s){let a=s.id;S(a)}}async function S(t){return await fetch(`https://books-backend.p.goit.global/books/${t}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{J([e])}).catch(e=>console.log(e))}let b=[];function F(){let[{_id:t}]=b,e=!1;return(JSON.parse(localStorage.getItem(h))||[]).find(({_id:a})=>{if(a===t)return e=!0}),e}function J(t){b=t,t[0].buy_links.map(({name:a,url:i})=>`<div class="boxMarketPlace">
         <a href="${i}" class="infoMarketPlace" target="_blank"><b>${a}</b></a>
       </div>`).join("");const e=t.map(({author:a,book_image:i,description:n,buy_links:[{name:d,url:u}],buy_links:g,title:r,list_name:k,_id:p})=>`
      <div class="photo-card" id="${p}">
        <img class="images-photo" src="${i}" alt="${r}" loading="lazy" height="281" />
        <div class="info">
          <h2 class="info-title">${r}</h2>
          <p class="info-author">${a}</p>
          <p class="info-description">${n}</p>
          <div class="info-buy-links">
            <a href="${u}" class="info-by_links" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
              <img class="link-img" src="${O}" alt="Amazon link" aria-label="Buy this book on Amazon" />
            </a>
            <a href="${u}" class="info-by_links" target="_blank" rel="noopener noreferrer nofollow" aria-label="AppleBook link">
              <img class="link-img" src="${z}" alt="Apple Books link" aria-label="Buy this book on Apple Books" />
            </a>
          </div>
        </div>
      </div>`).join("");F()?(o.btnAddtoShList.classList.add("hidden"),o.btnRemoveShList.classList.remove("hidden")):o.btnAddtoShList.classList.remove("hidden"),o.popupMenuConttent.innerHTML=e,o.bookPage.classList.remove("is-hidden"),o.bdropPopup.classList.remove("is-hidden"),o.backdropBlock.classList.add("backdrop-block")}o.btnCloseInfoBook.addEventListener("click",H);function H(){o.backdropBlock.classList.remove("backdrop-block"),o.bookPage.classList.add("is-hidden"),o.bdropPopup.classList.add("is-hidden"),o.pAddtoCardCongrat.classList.add("hidden"),o.btnRemoveShList.classList.add("hidden"),o.btnAddtoShList.classList.remove("hidden")}o.btnAddtoShList.addEventListener("click",U);o.btnRemoveShList.addEventListener("click",D);function U(){o.btnAddtoShList.classList.add("hidden"),o.pAddtoCardCongrat.classList.remove("hidden"),o.btnRemoveShList.classList.remove("hidden");let[{_id:t}]=b,e=!1;l.find(({_id:s})=>{if(s===t)return e=!0}),!e&&(l.push(...b),localStorage.setItem(h,JSON.stringify(l)),l=JSON.parse(localStorage.getItem(h)))}function D(){o.btnAddtoShList.classList.remove("hidden"),o.pAddtoCardCongrat.classList.add("hidden"),o.btnRemoveShList.classList.add("hidden"),l=JSON.parse(localStorage.getItem(h))||[];let[{_id:t}]=b;const e=l.findIndex(({_id:s})=>s===t);if(e!==-1)l.splice(e,1),localStorage.setItem(h,JSON.stringify(l)),o.btnAddtoShList.classList.remove("hidden"),o.btnRemoveShList.classList.add("hidden");else return}o.bdropPopup.addEventListener("click",G);function G(t){t.target===o.bdropPopup&&$()}document.addEventListener("keydown",K);function K(t){t.key==="Escape"&&$()}function $(){o.backdropBlock.classList.remove("backdrop-block"),o.bookPage.classList.add("is-hidden"),o.bdropPopup.classList.add("is-hidden"),o.pAddtoCardCongrat.classList.add("hidden"),o.btnRemoveShList.classList.add("hidden"),o.btnAddtoShList.classList.remove("hidden")}const W="https://books-backend.p.goit.global",Y="/books/top-books",Q=document.querySelector(".categories-list"),V=document.querySelector(".main-content-page");document.querySelector(".category-item");const X=18;async function A(){try{return(await f.get(`${W}${Y}`)).data}catch(t){console.error(t),L.Notify.failure("Error")}}A().then(t=>{P(t)}).catch(t=>console.log(t));function P(t){const e=`<h1 class="head-main-h">Best Sellers
  <span class="head-main-h head-main-hdecor">
  Books
  </span>
   </h1>`;let s="",a="";for(let n=0;n<X;n++){let d=t[n].list_name;const g=t[n].books.map(({_id:r,author:k,book_image:p,title:y})=>`
      <li class="part-cards-list-item" id="${r}" >
         <img class="images-prev" src="${p}" alt="${y}" width ='180'>
         <p class="info-item-title">${y}</p>
         <p class="info-item-author">${k}</p>
      </li>
       `).join("");s=`<div class="best-sellers-group">
      <div class="bestellers-part">
              <p class="bestsellers-part-name">${d}</p>
              <ul class="part-cards-list">
                  ${g}
              </ul>
          </div></div>
          <button class="btn-best-seemore" category = "${d}">See More</button>
      `,a+=s}const i=`<div class="all-part-to-box">${a}</div>`;V.innerHTML=e+i}let v="";Q.addEventListener("click",Z);function Z(t){v=t.target.textContent,v==="All categories"&&A().then(e=>{P(e)}).catch(e=>console.log(e))}
//# sourceMappingURL=commonHelpers.js.map

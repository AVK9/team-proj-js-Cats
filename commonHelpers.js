import"./assets/su-f7f7d4dc.js";import{a as k,N as S}from"./assets/vendor-77e6b4aa.js";const q="https://books-backend.p.goit.global",E="/books/category-list";async function R(){try{return(await k.get(`${q}${E}`)).data}catch(t){console.error(t)}}document.querySelector(".main-content-page");const M=document.querySelector(".categories-list");R().then(t=>{T(t)}).catch(t=>{S.Notify.failure("Error"),console.log(t)});function T(t){const e=t.map(({list_name:c})=>`
       <li class="category-item">${c}</li>
       `).join(""),s='<li class="category-item category-item-firstelm">All categories</li>';M.innerHTML=s+e,document.querySelector(".category-item-firstelm").classList.add("category-active")}const P="https://books-backend.p.goit.global",x="/books/category?category=",v=document.querySelector(".main-content-page");let n="";const A=document.querySelector(".categories-list");document.querySelector(".categories-list");A.addEventListener("click",G);function G(t){if(t.target.textContent===n)return;const e=document.querySelector(".category-active");e&&e.classList.remove("category-active"),t.currentTarget!==t.target&&(A.firstChild===t.target?(A.firstChild.classList.add("category-active"),n=A.firstChild):(n=t.target.textContent,t.target.classList.add("category-active"),C(n)))}async function C(t){try{const e=await k.get(`${P}${x}${t}`);return Q(e.data),e.data}catch(e){console.error(e),S.Notify.failure("Error")}}function Q(t){let e;function s(i){const d=i.length-i.lastIndexOf(" "),g=i.substring(i.length-d);let m=i.length-g.length;return e=`<h1 class="head-main-h">${i.slice(0,m)}
  <span class="head-main-h head-main-hdecor">
  ${g}
  </span>
   </h1>`}s(n);const a=t.map(({author:i,book_image:d,description:g,amazon_product_url:m,title:r,list_name:h,_id:p})=>`
       <li class="part-cards-list-itemcat" id="${p}">

             <div class="images-card-box">
             <img class="images-prevcat" src="${d}"
              alt="${r}" width ='180' loading="lazy" />
              <p class="hover-text-card">quick view</p>
              </div>
                <div class="info-block-card">
                   <p class="infos-item-title">${r}</p>
                   <p class="infos-item-author">${i}</p>
             </div>
       </li>
       `).join(""),c=`${e}
<ul class="main-content-listcat">
    ${a}
</ul>`;v.innerHTML=c}v.addEventListener("click",z);function z(t){const e=t.target.closest(".btn-best-seemore");if(e){let s=e.getAttribute("category");console.log(s),n=s;const a=A.children;for(let c of a)c.textContent.trim()===n?c.classList.add("category-active"):c.classList.remove("category-active");C(n)}}const N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALISURBVHgB7ZfPqxJRFMeP42/xF0qbJ2qGWaHQpmjTJlpVuxaBLvwTBMG/RHAt6MZoG7VrZwS16W1SRH2iGBKIv/G3nTsP5c4dvY69sdX7wsU7d86c+7nnnLlzBbjVtTS8m4VCITSbzZ4LgnAHm2Gz2WhAoTQazQbbYrVatfG57/F4/NdB232D+Xz+ATp4j93HoJ5qWq32ZTQavYJjENls9qFer/+G9A5QXwsEeRKLxS7pQYG1QoDPZwIQ3WN6PrBplUDkcrm36/X6LhrBGVsI0/2KnldHX6DBC/g/eoPt014I1D1CywrfDHC73YD5FFcznU6h1+uRN0Bi53A4wGQyiePz+RxGo5H4u0cX9AUbCSML4fV6wePxgE4n5R0Oh1Aul0Ugo9EIoVBIhKC1XC6h2WxCu90G2i9CWiWLpC+wHgQ6fy6XC/x+vwyAyGaziRMTu3A4LAMQV4jPBQIBMYpMXQgHIVgZDAbebbDb7WA2m8FisXDt2EWw0dbxbirRMQAlvrkQ/wJ1CICpicMQWBMSA7UgWF/cdOwzOMU5z0ZxJM6VjmO+uG/HTZ0rtblxJJRGS3FNsIWpltiaYMUtTLpPtuDxeCz26d2RtiGLmEwmsFgswGq1kmPBXjtuYV7bSokHgwGUSiXo9/s7R2QH9Pl8EAwGd3bVahUajYYIuxXZUSORiAyClQQCDxxr8sXcqtPpQKvVkjkgE9Vqtd2KKpUK1Ot1mXOygGKxKIkIEYnYQQh0OqQnxEMu8ERW73Q6xa8kr5ZIeph5ZgchMBK/6UgcEwHudru7/gnPScIm/aQKwsczH+22sF/oedkYatLpdAl/Q3A+XSUSiQA9IHs7sL1D2h977qmhARbla3ZQVgBI+RMPM/cRpAbq6hLT/SyZTMr+iXG3x0wm8wgr+yl2L7Ci9af8DSQbDh6MySn3Dx52v6ZSqRLc6oj+Ana3EmYHZDNIAAAAAElFTkSuQmCC",X="data:image/png;base64,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",o={catList:document.querySelector(".categoriesList"),catListItem:document.querySelector(".categoriesList"),bestSellersPartName:document.querySelector(".bestSellersPartName"),partCardsPage:document.querySelector(".partCardsList"),btnSeeMore:document.querySelector(".btnBestSellersSeeMore"),cardsBookSmall:document.querySelector(".photo-card"),popupMenuConttent:document.querySelector(".popup-menu-conttent"),btnAddtoShList:document.querySelector(".btn-addto-card"),pAddtoCardCongrat:document.querySelector(".addto-card-congrat"),btnRemoveShList:document.querySelector(".btn-remove-card"),bdropPopup:document.querySelector(".backdrop-popup-menu"),backdropBlock:document.querySelector(".wrapper"),btnCloseInfoBook:document.querySelector(".btn-close-infobook"),bookPage:document.querySelector(".box-popup-menu"),catPage:document.querySelector(".main-content-page")},u="user-shopping-list";let l=JSON.parse(localStorage.getItem(u))||[];o.catPage.addEventListener("click",H);function H(t){const e=t.target.closest(".part-cards-list-itemcat"),s=t.target.closest(".part-cards-list-item");if(e){let a=e.id;L(a)}if(s){let a=s.id;L(a)}}async function L(t){return await fetch(`https://books-backend.p.goit.global/books/${t}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{D([e])}).catch(e=>console.log(e))}let b=[];function Y(){let[{_id:t}]=b,e=!1;return(JSON.parse(localStorage.getItem(u))||[]).find(({_id:a})=>{if(a===t)return e=!0}),e}function D(t){b=t,t[0].buy_links.map(({name:a,url:c})=>`<div class="boxMarketPlace">
         <a href="${c}" class="infoMarketPlace" target="_blank"><b>${a}</b></a>
       </div>`).join("");const e=t.map(({author:a,book_image:c,description:i,buy_links:[{name:d,url:g}],buy_links:m,title:r,list_name:h,_id:p})=>`
      <div class="photo-card" id="${p}">
        <img class="images-photo" src="${c}" alt="${r}" loading="lazy" height="281" />
        <div class="info">
          <h2 class="info-title">${r}</h2>
          <p class="info-author">${a}</p>
          <p class="info-description">${i}</p>
          <div class="info-buy-links">
            <a href="${g}" class="info-by_links" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
              <img class="link-img" src="${X}" alt="Amazon link" aria-label="Buy this book on Amazon" />
            </a>
            <a href="${g}" class="info-by_links" target="_blank" rel="noopener noreferrer nofollow" aria-label="AppleBook link">
              <img class="link-img" src="${N}" alt="Apple Books link" aria-label="Buy this book on Apple Books" />
            </a>
          </div>
        </div>
      </div>`).join("");Y()?(o.btnAddtoShList.classList.add("hidden"),o.btnRemoveShList.classList.remove("hidden")):o.btnAddtoShList.classList.remove("hidden"),o.popupMenuConttent.innerHTML=e,o.bookPage.classList.remove("is-hidden"),o.bdropPopup.classList.remove("is-hidden"),o.backdropBlock.classList.add("backdrop-block")}o.btnCloseInfoBook.addEventListener("click",O);function O(){o.backdropBlock.classList.remove("backdrop-block"),o.bookPage.classList.add("is-hidden"),o.bdropPopup.classList.add("is-hidden"),o.pAddtoCardCongrat.classList.add("hidden"),o.btnRemoveShList.classList.add("hidden"),o.btnAddtoShList.classList.remove("hidden")}o.btnAddtoShList.addEventListener("click",Z);o.btnRemoveShList.addEventListener("click",K);function Z(){o.btnAddtoShList.classList.add("hidden"),o.pAddtoCardCongrat.classList.remove("hidden"),o.btnRemoveShList.classList.remove("hidden");let[{_id:t}]=b,e=!1;l.find(({_id:s})=>{if(s===t)return e=!0}),!e&&(l.push(...b),localStorage.setItem(u,JSON.stringify(l)),l=JSON.parse(localStorage.getItem(u)))}function K(){o.btnAddtoShList.classList.remove("hidden"),o.pAddtoCardCongrat.classList.add("hidden"),o.btnRemoveShList.classList.add("hidden"),l=JSON.parse(localStorage.getItem(u))||[];let[{_id:t}]=b;const e=l.findIndex(({_id:s})=>s===t);if(e!==-1)l.splice(e,1),localStorage.setItem(u,JSON.stringify(l)),o.btnAddtoShList.classList.remove("hidden"),o.btnRemoveShList.classList.add("hidden");else return}o.bdropPopup.addEventListener("click",W);function W(t){t.target===o.bdropPopup&&B()}document.addEventListener("keydown",U);function U(t){t.key==="Escape"&&B()}function B(){o.backdropBlock.classList.remove("backdrop-block"),o.bookPage.classList.add("is-hidden"),o.bdropPopup.classList.add("is-hidden"),o.pAddtoCardCongrat.classList.add("hidden"),o.btnRemoveShList.classList.add("hidden"),o.btnAddtoShList.classList.remove("hidden")}const F="https://books-backend.p.goit.global",V="/books/top-books",j=document.querySelector(".categories-list"),J=document.querySelector(".main-content-page");document.querySelector(".category-item");const $=18;async function w(){try{return(await k.get(`${F}${V}`)).data}catch(t){console.error(t),S.Notify.failure("Error")}}w().then(t=>{I(t)}).catch(t=>console.log(t));function I(t){const e=`<h1 class="head-main-h">Best Sellers
  <span class="head-main-h head-main-hdecor">
  Books
  </span>
   </h1>`;let s="",a="";for(let i=0;i<$;i++){let d=t[i].list_name;const m=t[i].books.map(({_id:r,author:h,book_image:p,title:f})=>`
      <li class="part-cards-list-item" id="${r}" >
         <div class="images-card-box">
         <img class="images-prev" src="${p}" alt="${f}" width ='180'>
          <p class="hover-text-card">quick view</p>
          </div>

              <div class="info-block-card">
                   <p class="infos-item-title">${f}</p>
                   <p class="infos-item-author">${h}</p>
             </div>
      </li>
       `).join("");s=`<div class="best-sellers-group">
      <div class="bestellers-part">
              <p class="bestsellers-part-name">${d}</p>
              <ul class="part-cards-list">
                  ${m}
              </ul>
          </div></div>
          <button class="btn-best-seemore" category = "${d}">See More</button>
      `,a+=s}const c=`<div class="all-part-to-box">${a}</div>`;J.innerHTML=e+c}let y="";j.addEventListener("click",_);function _(t){y=t.target.textContent,y==="All categories"&&w().then(e=>{I(e)}).catch(e=>console.log(e))}
//# sourceMappingURL=commonHelpers.js.map

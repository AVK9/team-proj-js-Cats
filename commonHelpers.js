import"./assets/su-0967ba47.js";import{a as b,N as f}from"./assets/vendor-77e6b4aa.js";const U="https://books-backend.p.goit.global",q="/books/category-list";async function R(){try{return(await b.get(`${U}${q}`)).data}catch(t){console.error(t)}}document.querySelector(".main-content-page");const Y=document.querySelector(".categories-list");R().then(t=>{P(t)}).catch(t=>{f.Notify.failure("Error"),console.log(t)});function P(t){const e=t.map(({list_name:c})=>`
       <li class="category-item">${c}</li>
       `).join(""),a='<li class="category-item category-item-firstelm">All categories</li>';Y.innerHTML=a+e,document.querySelector(".category-item-firstelm").classList.add("category-active")}const w="https://books-backend.p.goit.global",N="/books/category?category=",y=document.querySelector(".main-content-page");let r="";const m=document.querySelector(".categories-list");document.querySelector(".categories-list");m.addEventListener("click",j);function j(t){if(t.target.textContent===r)return;const e=document.querySelector(".category-active");e&&e.classList.remove("category-active"),t.currentTarget!==t.target&&(m.firstChild===t.target?(m.firstChild.classList.add("category-active"),r=m.firstChild):(r=t.target.textContent,t.target.classList.add("category-active"),v(r)))}async function v(t){try{const e=await b.get(`${w}${N}${t}`);return x(e.data),e.data}catch(e){console.error(e),f.Notify.failure("Error")}}function x(t){let e;function a(i){const d=i.length-i.lastIndexOf(" "),A=i.substring(i.length-d);let g=i.length-A.length;return e=`<h1 class="head-main-h">${i.slice(0,g)}
  <span class="head-main-h head-main-hdecor">
  ${A}
  </span>
   </h1>`}a(r);const s=t.map(({author:i,book_image:d,description:A,amazon_product_url:g,title:n,list_name:k,_id:p})=>`
       <li class="part-cards-list-itemcat" id="${p}">

             <div class="images-card-box">
             <img class="images-prevcat" src="${d}"
              alt="${n}" width ='180' loading="lazy" />
              <p class="hover-text-card">quick view</p>
              </div>
                <div class="info-block-card">
                   <p class="infos-item-title">${n}</p>
                   <p class="infos-item-author">${i}</p>
             </div>
       </li>
       `).join(""),c=`${e}
<ul class="main-content-listcat">
    ${s}
</ul>`;y.innerHTML=c}y.addEventListener("click",V);function V(t){const e=t.target.closest(".btn-best-seemore");if(e){let a=e.getAttribute("category");console.log(a),r=a;const s=m.children;for(let c of s)c.textContent.trim()===r?c.classList.add("category-active"):c.classList.remove("category-active");v(r)}}const T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN/SURBVHgB7VdJjExBGP7+6uluYmgkthmS0YdhLpYgHIZEuFhCiHBxJXFzEOHiKBFbuFhCxBEniUQcjEhExBJMIhwsI5a2RmaEWbpf/f5+vVW9rvf6dTJu8yeVrqr31V9f/VtVA2NSEor6yOfTnV6y0E2gaQpIaY7Gm6IIrDXyDP6c0N4j2oWXaIYEX8Q8RvKKdBdi9OQtjeTX0B70oREJPof5rJIPQJQpz8DNNWw+EpcnxlLaNdJrIlrqllDqpqzL+GvdPBvMR+KSovYaM+YT1XZQJqJwNrUVmjqkodg48BvW2DHmkLH8dnrn0uvMfS0SxLSaWYDlhsBvWINjjJBxqa82mPta7hCWWXKZuWUikN0Iamkt2gvc3wd8vC2slY1rXwWamAUSKfDfHPDtMfAnB4eH2kJJKKY0cwC/7ABo0V4gPcnQIfL1CfStncDAe6B1NtTaC8DsVTZmuB/88Ai495Sc0FRMrda+5kB7MjZ8SR2bQcsPWQSqMmMJaO0lwYmSTdctAlVJZ0ArD4Oy26yYUcwq1BLggHknzEGUUNsKcKYLmNoVicO4GaVYqIi2XW6T8IqaDUDANU6ZsqAxhv14q0VbIOzswKxEb0V0jGpALY0QJb26Vhg4cDpbg2+mJi3BMYoWw3ZBlCWgFWplluNv0CyJaEuYNGOW5dgkjHGgvtS7o2yE0uI4loiJqViCAoTgsAQb2UEajfXHwFRLtt8v8ohKUU7YlS2OqWORgBUTHBmYdXXC6A9JCf7xxvcntS9yY7w8+KdgBvtB0+cB4yeXiVJdgQolIbcoWyW+mCCfnkPfOAjOPRVFhdLkuMlQy3dDrdlftZbuOQF+cAY89AuVoKb2xVBbTjeXHfImLNe1Eki/kDvh0WU5YcFYKN//9kPfOSrdhG8Jfesw9L2TZUgtu/jDM3inusUiGcttHBUTYonf1Y2KMvDD/Iqg6J5jQEc3+NlVub4TcIuk4+Bva70E83AoCU9TLgHrzHWxSdXT+DSA13f90l3JJK7D1PQYFehdgKbBiNUNjni2uZ5u/s1b/4SDS09lXlb0uA5WYU4j+2a+kgTpxP+TvtTRL3MRZgn/DtV6OzQX/EAa7ebxgBTD9UFWzuTlAzM78sMoPiKzCBNXwEQK97KiHenjuVcuVeHL9s7q8pRaxqzbpJImm/0bKPEyIhn8nRN837X5mATlH/NXv+oaRoVuAAAAAElFTkSuQmCC",D="data:image/png;base64,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",o={catList:document.querySelector(".categoriesList"),catListItem:document.querySelector(".categoriesList"),bestSellersPartName:document.querySelector(".bestSellersPartName"),partCardsPage:document.querySelector(".partCardsList"),btnSeeMore:document.querySelector(".btnBestSellersSeeMore"),cardsBookSmall:document.querySelector(".photo-card"),popupMenuConttent:document.querySelector(".popup-menu-conttent"),btnAddtoShList:document.querySelector(".btn-addto-card"),pAddtoCardCongrat:document.querySelector(".addto-card-congrat"),btnRemoveShList:document.querySelector(".btn-remove-card"),bdropPopup:document.querySelector(".backdrop-popup-menu"),backdropBlock:document.querySelector(".wrapper"),btnCloseInfoBook:document.querySelector(".btn-close-infobook"),bookPage:document.querySelector(".box-popup-menu"),catPage:document.querySelector(".main-content-page")},u="user-shopping-list";let l=JSON.parse(localStorage.getItem(u))||[];o.catPage.addEventListener("click",M);function M(t){const e=t.target.closest(".part-cards-list-itemcat"),a=t.target.closest(".part-cards-list-item");if(e){let s=e.id;S(s)}if(a){let s=a.id;S(s)}}async function S(t){return await fetch(`https://books-backend.p.goit.global/books/${t}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{K([e])}).catch(e=>console.log(e))}let h=[];function J(){let[{_id:t}]=h,e=!1;return(JSON.parse(localStorage.getItem(u))||[]).find(({_id:s})=>{if(s===t)return e=!0}),e}function K(t){h=t,t[0].buy_links.map(({name:s,url:c})=>`<div class="boxMarketPlace">
         <a href="${c}" class="infoMarketPlace" target="_blank"><b>${s}</b></a>
       </div>`).join("");const e=t.map(({author:s,book_image:c,description:i,buy_links:[{name:d,url:A}],buy_links:g,title:n,list_name:k,_id:p})=>`
      <div class="photo-card" id="${p}">
        <img class="images-photo" src="${c}" alt="${n}" loading="lazy" height="281" />
        <div class="info">
          <h2 class="info-title">${n}</h2>
          <p class="info-author">${s}</p>
          <p class="info-description">${i}</p>
          <div class="info-buy-links">
            <a href="${g[0].url}" class="info-by-links" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
              <img class="link-img-amazon" src="${D}" alt="Amazon link" aria-label="Buy this book on Amazon" />
            </a>
            <a href="${g[1].url}" class="info-by-links" target="_blank" rel="noopener noreferrer nofollow" aria-label="AppleBook link">
              <img class="link-img-bookapp" src="${T}" alt="Apple Books link" aria-label="Buy this book on Apple Books" />
            </a>
          </div>
        </div>
      </div>`).join("");J()?(o.btnAddtoShList.classList.add("hidden"),o.btnRemoveShList.classList.remove("hidden")):o.btnAddtoShList.classList.remove("hidden"),o.popupMenuConttent.innerHTML=e,o.bookPage.classList.remove("is-hidden"),o.bdropPopup.classList.remove("is-hidden"),o.backdropBlock.classList.add("backdrop-block")}o.btnCloseInfoBook.addEventListener("click",O);function O(){o.backdropBlock.classList.remove("backdrop-block"),o.bookPage.classList.add("is-hidden"),o.bdropPopup.classList.add("is-hidden"),o.pAddtoCardCongrat.classList.add("hidden"),o.btnRemoveShList.classList.add("hidden"),o.btnAddtoShList.classList.remove("hidden")}o.btnAddtoShList.addEventListener("click",Q);o.btnRemoveShList.addEventListener("click",W);function Q(){o.btnAddtoShList.classList.add("hidden"),o.pAddtoCardCongrat.classList.remove("hidden"),o.btnRemoveShList.classList.remove("hidden");let[{_id:t}]=h,e=!1;l.find(({_id:a})=>{if(a===t)return e=!0}),!e&&(l.push(...h),localStorage.setItem(u,JSON.stringify(l)),l=JSON.parse(localStorage.getItem(u)))}function W(){o.btnAddtoShList.classList.remove("hidden"),o.pAddtoCardCongrat.classList.add("hidden"),o.btnRemoveShList.classList.add("hidden"),l=JSON.parse(localStorage.getItem(u))||[];let[{_id:t}]=h;const e=l.findIndex(({_id:a})=>a===t);if(e!==-1)l.splice(e,1),localStorage.setItem(u,JSON.stringify(l)),o.btnAddtoShList.classList.remove("hidden"),o.btnRemoveShList.classList.add("hidden");else return}o.bdropPopup.addEventListener("click",X);function X(t){t.target===o.bdropPopup&&C()}document.addEventListener("keydown",G);function G(t){t.key==="Escape"&&C()}function C(){o.backdropBlock.classList.remove("backdrop-block"),o.bookPage.classList.add("is-hidden"),o.bdropPopup.classList.add("is-hidden"),o.pAddtoCardCongrat.classList.add("hidden"),o.btnRemoveShList.classList.add("hidden"),o.btnAddtoShList.classList.remove("hidden")}const F="https://books-backend.p.goit.global",z="/books/top-books",Z=document.querySelector(".categories-list"),H=document.querySelector(".main-content-page");document.querySelector(".category-item");const $=18;async function E(){try{return(await b.get(`${F}${z}`)).data}catch(t){console.error(t),f.Notify.failure("Error")}}E().then(t=>{I(t)}).catch(t=>console.log(t));function I(t){const e=`<h1 class="head-main-h">Best Sellers
  <span class="head-main-h head-main-hdecor">
  Books
  </span>
   </h1>`;let a="",s="";for(let i=0;i<$;i++){let d=t[i].list_name;const g=t[i].books.map(({_id:n,author:k,book_image:p,title:L})=>`
      <li class="part-cards-list-item" id="${n}" >
         <div class="images-card-box">
         <img class="images-prev" src="${p}" alt="${L}" width ='180'>
          <p class="hover-text-card">quick view</p>
          </div>

              <div class="info-block-card">
                   <p class="infos-item-title">${L}</p>
                   <p class="infos-item-author">${k}</p>
             </div>
      </li>
       `).join("");a=`<div class="best-sellers-group">
      <div class="bestellers-part">
              <p class="bestsellers-part-name">${d}</p>
              <ul class="part-cards-list">
                  ${g}
              </ul>
          </div></div>
          <button class="btn-best-seemore" category = "${d}">See More</button>
      `,s+=a}const c=`<div class="all-part-to-box">${s}</div>`;H.innerHTML=e+c}let B="";Z.addEventListener("click",_);function _(t){B=t.target.textContent,B==="All categories"&&E().then(e=>{I(e)}).catch(e=>console.log(e))}
//# sourceMappingURL=commonHelpers.js.map

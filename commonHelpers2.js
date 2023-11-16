import"./assets/su-31e9c5e8.js";const S=document.querySelector(".shopping-list-empty"),v=document.querySelector(".js-shop-list"),P="user-shopping-list",a=JSON.parse(localStorage.getItem(P));console.log("shopArr",a);console.log(a.length);if(a.length===0)S.classList.remove("hidden");else{let m=function(t,l=1,s=4){const i=(l-1)*s,p=i+s;return t.slice(i,p).map(({_id:q,list_name:E,amazon_product_url:x,author:M,book_image:$,book_uri:A,contributor:j,description:B,publisher:C,title:N})=>`<li data-id="${q}" class="shopping-list-card js-trash">
              <div class="shopping-list-card-flex"><img class="list-card-img" src="${$}" alt="${M}">
                <div>
                  <div class="shop-trash-flex">
                    <div>
                      <h3 class="list-card-title">${N}</h3>
                      <p class="list-card-subtitle">${E}</p>
                    </div>
                    <div class="shop-trash-bg js-test">
                      <svg class="shop-trash">
                        <use href="./img/global/icons.svg#trash"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="shop-text-flex">
                    <p class="list-card-text">${B}</p>
                    <div class="list-card-flex">
                      <p class="list-card-contributor">${j}</p>
                      <div class="list-card-icon-flex">
                        <a class="list-card-amazon-url" href="${x}"></a>
                        <a class="list-card-book-url" href="${A}"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>`).join("")},u=function(t,l,s){const i=m(t,l,s);v.innerHTML=i,t.length<=s?f.classList.add("hidden-pagination"):f.classList.remove("hidden-pagination"),Math.ceil(t.length/s)<=2?(d.classList.add("hidden-pagination"),c.classList.add("hidden-pagination")):(d.classList.remove("hidden-pagination"),c.classList.remove("hidden-pagination"))},y=function(t){const l=Math.ceil(t.length/n);b.innerHTML="";for(let s=1;s<=l;s+=1){const i=document.createElement("button");i.classList.add("bth-num"),i.textContent=s,b.appendChild(i),s===e&&i.classList.add("bth-active"),i.addEventListener("click",()=>{e=s,u(t,e,n),g(),h(),e===1?(o.disabled=!0,d.disabled=!0):(o.disabled=!1,d.disabled=!1),e===l?(r.disabled=!0,c.disabled=!0):(r.disabled=!1,c.disabled=!1)})}g(),h()},h=function(){document.querySelectorAll(".bth-num").forEach((l,s)=>{s+1===e?(l.classList.add("bth-active"),l.disabled=!0):(l.classList.remove("bth-active"),l.disabled=!1)})},g=function(){const t=document.querySelectorAll(".bth-num"),l=Math.ceil(a.length/n);t.forEach((s,i)=>{e===1?i+1<=3?s.classList.remove("hidden-pagination"):s.classList.add("hidden-pagination"):e===l?i+1>l-3?s.classList.remove("hidden-pagination"):s.classList.add("hidden-pagination"):i+1===e||i+2===e||i===e?s.classList.remove("hidden-pagination"):s.classList.add("hidden-pagination")})},k=function(t){if(t.target.classList.value==="shop-trash-bg js-test"||t.target.classList.value==="shop-trash"){const s=t.target.closest(".js-trash").dataset.id;if(confirm("Remove book?")){const p=a.findIndex(({_id:L})=>L===s);a.splice(p,1),localStorage.setItem(P,JSON.stringify(a)),v.innerHTML=m(a),a.length===0&&(S.classList.remove("hidden"),f.classList.add("hidden"))}}};const f=document.querySelector(".pagination");f.classList.add("hidden-pagination");const o=document.querySelector(".prev");o.disabled=!0;const r=document.querySelector(".next"),d=document.querySelector(".double-prev");d.disabled=!0;const c=document.querySelector(".double-next"),b=document.querySelector(".buttons-numbers"),n=4;let e=1;u(a,e,n),y(a),o.addEventListener("click",()=>{e>1&&(e-=1,u(a,e,n),g(),h()),e===1?(o.disabled=!0,d.disabled=!0):(r.disabled=!1,c.disabled=!1)}),r.addEventListener("click",()=>{const t=Math.ceil(a.length/n);e<t&&(e+=1,u(a,e,n),g(),h()),e===t?(r.disabled=!0,c.disabled=!0):(o.disabled=!1,d.disabled=!1)}),d.addEventListener("click",()=>{e=1,u(a,e,n),g(),h(),o.disabled=!0,r.disabled=!1,d.disabled=!0,c.disabled=!1}),c.addEventListener("click",()=>{e=Math.ceil(a.length/n),u(a,e,n),g(),h(),r.disabled=!0,c.disabled=!0,o.disabled=!1,d.disabled=!1}),v.addEventListener("click",k)}
//# sourceMappingURL=commonHelpers2.js.map

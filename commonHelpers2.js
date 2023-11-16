import"./assets/su-06d1a982.js";const B="/team-proj-js-Cats/assets/icons-1eca375a.svg#trash",L=document.querySelector(".shopping-list-empty"),v=document.querySelector(".js-shop-list"),S="user-shopping-list",a=JSON.parse(localStorage.getItem(S));console.log("shopArr",a);console.log(a.length);a.length===0&&L.classList.remove("hidden");const p=document.querySelector(".pagination");p.classList.add("hidden-pagination");const o=document.querySelector(".prev");o.disabled=!0;const r=document.querySelector(".next"),d=document.querySelector(".double-prev");d.disabled=!0;const c=document.querySelector(".double-next"),m=document.querySelector(".buttons-numbers"),n=4;let e=1;function P(t,l=1,s=4){const i=(l-1)*s,f=i+s;return t.slice(i,f).map(({_id:y,list_name:k,amazon_product_url:q,author:E,book_image:$,book_uri:x,contributor:M,description:j,publisher:N,title:A})=>`<li data-id="${y}" class="shopping-list-card js-trash">
            <div class="shopping-list-card-flex"><img class="list-card-img" src="${$}" alt="${E}">
              <div>
                <div class="shop-trash-flex">
                  <div>
                    <h3 class="list-card-title">${A}</h3>
                    <p class="list-card-subtitle">${k}</p>
                  </div>
                  <div class="shop-trash-bg js-test">
                    <svg class="shop-trash">
                      <use href="${B}"></use>
                    </svg>
                  </div>
                 </div>
                <div class="shop-text-flex">
                 <p class="list-card-text">${j}</p>
                  <div class="list-card-flex">
                    <p class="list-card-contributor">${M}</p>
                    <div class="list-card-icon-flex">
                      <a class="list-card-amazon-url" href="${q}"></a>
                      <a class="list-card-book-url" href="${x}"></a>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </li>`).join("")}function g(t,l,s){const i=P(t,l,s);v.innerHTML=i,t.length===0?p.classList.add("hidden-pagination"):p.classList.remove("hidden-pagination"),t.length<=s?p.classList.add("hidden-pagination"):p.classList.remove("hidden-pagination"),Math.ceil(t.length/s)<=2?(d.classList.add("hidden-pagination"),c.classList.add("hidden-pagination")):(d.classList.remove("hidden-pagination"),c.classList.remove("hidden-pagination"))}function C(t){const l=Math.ceil(t.length/n);m.innerHTML="";for(let s=1;s<=l;s+=1){const i=document.createElement("button");i.classList.add("bth-num"),i.textContent=s,m.appendChild(i),s===e&&i.classList.add("bth-active"),i.addEventListener("click",()=>{e=s,g(t,e,n),h(),u(),e===1?(o.disabled=!0,d.disabled=!0):(o.disabled=!1,d.disabled=!1),e===l?(r.disabled=!0,c.disabled=!0):(r.disabled=!1,c.disabled=!1)})}h(),u()}function u(){document.querySelectorAll(".bth-num").forEach((l,s)=>{s+1===e?(l.classList.add("bth-active"),l.disabled=!0):(l.classList.remove("bth-active"),l.disabled=!1)})}function h(){const t=document.querySelectorAll(".bth-num"),l=Math.ceil(a.length/n);t.forEach((s,i)=>{e===1?i+1<=3?s.classList.remove("hidden-pagination"):s.classList.add("hidden-pagination"):e===l?i+1>l-3?s.classList.remove("hidden-pagination"):s.classList.add("hidden-pagination"):i+1===e||i+2===e||i===e?s.classList.remove("hidden-pagination"):s.classList.add("hidden-pagination")})}g(a,e,n);C(a);o.addEventListener("click",()=>{e>1&&(e-=1,g(a,e,n),h(),u()),e===1&&(o.disabled=!0,d.disabled=!0),r.disabled=!1,c.disabled=!1});r.addEventListener("click",()=>{const t=Math.ceil(a.length/n);e<t&&(e+=1,g(a,e,n),h(),u()),e===t&&(r.disabled=!0,c.disabled=!0),o.disabled=!1,d.disabled=!1});d.addEventListener("click",()=>{e=1,g(a,e,n),h(),u(),o.disabled=!0,r.disabled=!1,d.disabled=!0,c.disabled=!1});c.addEventListener("click",()=>{e=Math.ceil(a.length/n),g(a,e,n),h(),u(),r.disabled=!0,c.disabled=!0,o.disabled=!1,d.disabled=!1});v.addEventListener("click",I);function I(t){if(t.target.classList.value==="shop-trash-bg js-test"||t.target.classList.value==="shop-trash"){const s=t.target.closest(".js-trash").dataset.id;if(confirm("Remove book?")){const f=a.findIndex(({_id:b})=>b===s);a.splice(f,1),localStorage.setItem(S,JSON.stringify(a)),v.innerHTML=P(a),a.length===0&&L.classList.remove("hidden")}}}
//# sourceMappingURL=commonHelpers2.js.map

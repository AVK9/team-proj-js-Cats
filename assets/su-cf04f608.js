(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}})();const l=document.getElementById("themeSwitch"),u=document.querySelector(".header"),m=document.querySelector(".a-shoppinglist"),g=document.querySelector(".shopping-bag"),p=document.querySelector(".header-logo-2"),h=document.querySelector(".burger-menu-icon"),y=document.querySelector(".mobile-close-icon");function L(){const e=localStorage.getItem("darkMode")==="true";document.body.classList.toggle("dark-mode",e),u.classList.toggle("header-dark-mode",e),m.classList.toggle("dark-mode-header-link",e),g.classList.toggle("shopping-bag-dark",e),p.classList.toggle("logo-dark-mode",e),h.classList.toggle("burger-menu-icon-dark",e),y.classList.toggle("mobile-close-icon-dark",e),l.checked=e}document.addEventListener("DOMContentLoaded",L);l.addEventListener("change",()=>{const e=l.checked;localStorage.setItem("darkMode",e),document.body.classList.toggle("dark-mode",e),u.classList.toggle("header-dark-mode",e),m.classList.toggle("dark-mode-header-link",e),g.classList.toggle("shopping-bag-dark",e),p.classList.toggle("logo-dark-mode",e),h.classList.toggle("burger-menu-icon-dark",e),y.classList.toggle("mobile-close-icon-dark",e)});const r=document.querySelector(".open-menu-btn"),f=document.querySelector(".menu-data-modile"),d=document.querySelector(".close-menu-btn");r.onclick=function(){f.style.display="block",r.style.display="none",d.style.display="block",document.body.style.overflow="hidden"};d.onclick=function(){f.style.display="none",r.style.display="block",d.style.display="none",document.body.style.overflow="auto"};function k(){(window.innerWidth||document.documentElement.clientWidth)>=768?document.querySelector(".open-menu-btn").style.display="none":document.querySelector(".open-menu-btn").style.display="block"}window.onload=k;window.onresize=k;function b(){const e=document.querySelector(".a-home"),n=document.querySelector(".home-mobile"),s=window.location.pathname;s.endsWith("/team-proj-js-Cats/")||s.endsWith("/team-proj-js-Cats/index.html")?(e.classList.add("a-home-active"),n.classList.add("a-home-active")):(e.classList.remove("a-home-active"),n.classList.remove("a-home-active"))}b();function w(){const e=document.querySelector(".a-shoppinglist"),n=document.querySelector(".shopping-mobile");window.location.href.indexOf("shoppinglist.html")>-1?(e.classList.add("a-shopping-active"),n.classList.add("a-shopping-active")):(e.classList.remove("a-shopping-active"),n.classList.remove("a-shopping-active"))}w();const i=document.querySelector(".back-to-top");i.hidden=!0;window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?i.hidden=!1:i.hidden=!0}),i.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});new Swiper(".swiper",{slidesPerView:6,spaceBetween:0,loop:!0,direction:"vertical",navigation:{nextEl:".swiper-button-prev"}});
//# sourceMappingURL=su-cf04f608.js.map

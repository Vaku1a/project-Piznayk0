import{a as s}from"./vendor-313c7975.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c="/category-list",l="/top-books",u="/category/?category=";s.defaults.baseURL="https://books-backend.p.goit.global/books";async function d(){return(await s.get(`${c}`)).data}async function p(){return(await s.get(`${l}`)).data}async function g(o){return(await s.get(`${u}${o}`)).data}export{g as a,d as b,p as g};
//# sourceMappingURL=api-ff1110d2.js.map

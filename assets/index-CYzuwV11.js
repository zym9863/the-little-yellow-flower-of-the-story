var g=Object.defineProperty;var f=(r,e,i)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i;var o=(r,e,i)=>f(r,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const c=[{id:0,title:"The Beginning",content:"Once upon a time, in a small garden, there was a tiny seed waiting to sprout. The soil was warm, and the rain had just fallen, creating the perfect conditions for new life.",flowerStage:0},{id:1,title:"First Sprout",content:"After days of patience, a small green sprout emerged from the soil. It was delicate but determined, reaching towards the sunlight with all its might.",flowerStage:1},{id:2,title:"Growing Stronger",content:"The sprout grew taller each day, developing a slender stem and tiny leaves. It faced wind and rain, but remained resilient, growing stronger with each challenge.",flowerStage:2},{id:3,title:"The Bud Appears",content:"After weeks of growth, a small bud formed at the top of the stem. It was tightly closed, holding a beautiful secret inside, waiting for the right moment to reveal itself.",flowerStage:3},{id:4,title:"Blooming",content:"When the time was right, the bud slowly began to open. Delicate yellow petals unfurled, revealing a bright and cheerful flower that seemed to smile at the sun.",flowerStage:4},{id:5,title:"Full Bloom",content:"The little yellow flower stood tall and proud, fully bloomed in all its glory. Bees and butterflies visited, drawn to its vibrant color and sweet nectar. The garden was more beautiful because of this one small flower that had overcome so much to bloom.",flowerStage:5}];class m{constructor(){o(this,"currentPartIndex",0)}getCurrentPart(){return c[this.currentPartIndex]}nextPart(){return this.hasNextPart()?(this.currentPartIndex++,this.getCurrentPart()):null}previousPart(){return this.hasPreviousPart()?(this.currentPartIndex--,this.getCurrentPart()):null}hasNextPart(){return this.currentPartIndex<c.length-1}hasPreviousPart(){return this.currentPartIndex>0}reset(){this.currentPartIndex=0}}class w{constructor(e){o(this,"stage",0);o(this,"element",null);o(this,"container",null);this.container=document.getElementById(e),this.initialize()}initialize(){this.container&&(this.element=document.createElement("div"),this.element.className="flower",this.container.appendChild(this.element),this.updateFlower())}setStage(e){e<0||e>5||(this.stage=e,this.updateFlower())}updateFlower(){this.element&&(this.element.className="flower",this.element.classList.add(`stage-${this.stage}`),this.element.classList.add("animate"),setTimeout(()=>{this.element&&this.element.classList.remove("animate")},1e3))}getStage(){return this.stage}}document.querySelector("#app").innerHTML=`
  <div class="container">
    <h1>The Little Yellow Flower of the Story</h1>

    <div class="story-container">
      <div class="flower-container" id="flower-container"></div>

      <div class="story-content">
        <h2 id="story-title"></h2>
        <p id="story-text"></p>
      </div>

      <div class="navigation">
        <button id="prev-btn" class="nav-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          Previous
        </button>
        <button id="next-btn" class="nav-btn">
          Next
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
`;const s=new m,p=new w("flower-container"),v=document.getElementById("story-title"),y=document.getElementById("story-text"),u=document.getElementById("prev-btn"),h=document.getElementById("next-btn");function a(){const r=s.getCurrentPart();v.textContent=r.title,y.textContent=r.content,p.setStage(r.flowerStage),u.disabled=!s.hasPreviousPart(),h.disabled=!s.hasNextPart()}u.addEventListener("click",()=>{s.previousPart(),a()});h.addEventListener("click",()=>{s.nextPart(),a()});a();

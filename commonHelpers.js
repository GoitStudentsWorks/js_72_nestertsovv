import{A as P,S,N as x,K as E,a as k,i as R}from"./assets/vendor-ae6388e2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const v of r.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&s(v)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const z="/js_72_nestertsovv/assets/arrow-down-1cca7cfd.svg",J=document.querySelector(".description"),K=document.querySelector(".languages-swiper"),W=[{header:"ABOUT ME",descriptions:["I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.","Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software."]},{header:"ROLE",descriptions:["Frontend development","HeadlessCMS,Wordpress","Blender(enjoy)"]},{header:"EDUCATION",descriptions:["2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York","2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York","2020 - 2022 / Advanced Blender Animation Techniques, Udemy"]}],G=["HTML/CSS","JavaScript","React","Node. js","React Native","Vue .js","Angular","Soft skills"];Y();Z();async function Y(){let e="";for(const t of W){let o="";await fetch(z).then(s=>s.text()).then(s=>{o=s}),e+=`<li class="description-li">
                    <div class="description-item">
                        <h3 class="section-name">${t.header}</h3>
                            <button class="description-button">
                            ${o}
                            </button>
                            </div>
                            <div class="description-content">
                                <ul>`;for(const s of t.descriptions)e+=`<li>${s}</li>`;e+=`</ul>
                </div>
            </li>`}J.innerHTML+=e,new P(".description",{elementClass:"description-li",triggerClass:"description-item",panelClass:"description-content",activeClass:"svg-flip"}).open(0)}function Z(){let e="";G.forEach(t=>{e+=`<li class="swiper-slide bg-color">${t}</li>`}),K.querySelector("ul").innerHTML+=e}new S(".languages-swiper",{modules:[x,E],slidesPerView:6,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},navigation:{nextEl:".languages-next-btn"},breakpoints:{320:{slidesPerView:2},462:{slidesPerView:3},592:{slidesPerView:4},722:{slidesPerView:5},768:{slidesPerView:3},1440:{slidesPerView:6}}});k.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function Q(e){return(await k.post("/requests",e)).data}async function X(){return await k.get("/reviews")}const T=document.querySelectorAll(".marquee-element"),ee=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting)for(const s of T)s.classList.add("covers-show");else for(const s of T)s.classList.remove("covers-show")})},{rootMargin:"-50px"});ee.observe(document.getElementById("covers"));new P(".faq-accordion-container",{showMultiple:!0});const j=document.querySelector(".js-desk-menu"),te=j.querySelector(".js-menu-btn"),L=j.querySelector(".js-menu-list"),se=document.querySelector(".js-burger-btn"),oe=document.querySelector(".js-mob-menu"),ne=document.querySelector(".js-cross");j.addEventListener("click",re);oe.addEventListener("click",ce);se.addEventListener("click",ie);ne.addEventListener("click",ae);function re(e){if(e.target===te){L.classList.toggle("is-open-menu"),e.stopPropagation(),document.addEventListener("click",D);return}e.target.classList.contains("menu-link")&&L.classList.remove("is-open-menu")}function D(e){e.target.nodeName!=="A"&&(L.classList.remove("is-open-menu"),document.removeEventListener("click",D))}function ie(){document.body.classList.add("is-open")}function ae(){document.body.classList.remove("is-open")}function ce(e){e.target.nodeName==="A"&&document.body.classList.remove("is-open")}const le="olive",de={olive:"#9db425",orange:"#fe902b",rosy:"#e64f79",terracotta:"#9a4360",lilac:"#786bcb",turquoise:"#005d7c"},me={olive:"#acc720",orange:"#ff8514",rosy:"#f35480",terracotta:"#9a4360",lilac:"#9679f8",turquoise:"#147da1"},_=document.querySelector(".color-selector-btn"),i=document.querySelector(".color-circles"),ue=".bg-color",ve=".text-color";let l=localStorage.getItem("colorTheme")||le;document.addEventListener("DOMContentLoaded",()=>{y(l)});_.addEventListener("click",fe);function fe(e){_.classList.add("hidden"),i.classList.remove("hidden"),document.addEventListener("mousedown",$),i.querySelector(`button[data-color=${l}]`).classList.add("active"),i.addEventListener("click",A),i.addEventListener("mousemove",N),i.addEventListener("mouseout",V)}function $(e){e.target.classList.contains("color-circle")||(i.classList.add("hidden"),_.classList.remove("hidden"),document.removeEventListener("mousedown",$),i.removeEventListener("click",A),i.removeEventListener("mousemove",N),i.removeEventListener("mouseout",V))}function A(e){e.target.nodeName==="BUTTON"&&(l=e.target.dataset.color,i.querySelector(".active").classList.remove("active"),e.target.classList.add("active"),ge(l),y(l))}function y(e){const t=document.querySelectorAll(ue),o=document.querySelectorAll(ve);t.forEach(s=>{s.style.setProperty("--main-color",de[e])}),o.forEach(s=>{s.style.setProperty("--main-color-text",me[e])})}function ge(e){localStorage.setItem("colorTheme",e)}function N(e){const t=e.target.dataset.color;l!==t&&y(t)}function V(e){y(l)}const pe="/js_72_nestertsovv/assets/img1@1x-0f8a4e12.avif",we="/js_72_nestertsovv/assets/img1@2x-8e606818.avif",ye="/js_72_nestertsovv/assets/img2@1x-bfc2a704.avif",be="/js_72_nestertsovv/assets/img2@2x-42d28cb6.avif",he="/js_72_nestertsovv/assets/img3@1x-ad75eb64.avif",Le="/js_72_nestertsovv/assets/img3@2x-a20e7a8b.avif",Se="/js_72_nestertsovv/assets/img1-mob@1x-cbc44f2d.avif",xe="/js_72_nestertsovv/assets/img1-mob@2x-f20a14e9.avif",Ee="/js_72_nestertsovv/assets/img2-mob@1x-a2630414.avif",ke="/js_72_nestertsovv/assets/img2-mob@2x-3cb8d9b8.avif",je="/js_72_nestertsovv/assets/img3-mob@1x-ef60d70f.avif",_e="/js_72_nestertsovv/assets/img3-mob@2x-e7e43d82.avif",b=[pe,ye,he,Se,Ee,je],I=[we,be,Le,xe,ke,_e],qe=document.querySelector(".js-swiper"),O=[{description:"Window registration, white"},{description:"Pet love , dog"},{description:"Window registration, black"}];O.forEach((e,t)=>{const o=b.length/2+t;e.previewMob1x=`${b[o]}`,e.previewMob2x=`${I[o]}`,e.previewDesc1x=`${b[t]}`,e.previewDesc2x=`${I[t]}`});const Me=Te(O);qe.innerHTML=Me;function Ce(e){return` <li class="swiper-slide">
          <div class="box-content js-content">
            <div class="box-text">
              <div class="box-it-text">
                <p class="it-text">#react</p>
                <p class="it-text">#js</p>
                <p class="it-text">#node js</p>
                <p class="it-text">#git</p>
              </div>
              <h3 class="caption-project">
                Programming Across Borders: Ideas, Technologies, Innovations
              </h3>
              <a
                href="https://github.com/nestertsovv/dream-team-project-js"
                class="main-btn btn-mail"
                target="_blank"
              >
                <div class="btn-bg bg-color btn-projects"></div>
                <span>See project</span>
              </a>
            </div>
            <div class="box-img">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="
                    ${e.previewDesc1x} 1x,
                    ${e.previewDesc2x} 2x
                  "
                  type="image/avif"
                />
                <source
                  media="(max-width: 767px)"
                  srcset="
                    ${e.previewMob1x} 1x,
                    ${e.previewMob2x} 2x
                  "
                  type="image/avif"
                />
                <img
                  src="${e.previewDesc2x}"
                  alt="${e.description}"
                  class="img-projects"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </li>`}function Te(e){return e.map(Ce).join("")}new S(".mySwiper",{navigation:{nextEl:".js-arrow-r",prevEl:".js-arrow-l"},simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},modules:[x,E]});const Ie="/js_72_nestertsovv/assets/error-d5cf2823.svg",Pe=document.querySelector(".js-swiper-rev");document.addEventListener("DOMContentLoaded",$e);function De(e){return e.map(t=>`
      <li class="swiper-slide reviews-item">
        <div class="reviews-list-container">
          <img class ="reviews-image" src="${t.avatar_url}" 
          alt="picture" loading="lazy"/>
        </div>
        <div class= "text-container-img">
          <h2 class="title-rev">${t.author}</h2>
          <p class = "text-rev">
            ${t.review}
          </p> 
        </div>
      </li>`).join("")}async function $e(){try{const e=await X();e.data.forEach(t=>{t.review.length>=180&&(t.review=t.review.slice(0,180)+"...")}),Pe.insertAdjacentHTML("beforeend",De(e.data))}catch{R.error({title:"Error",titleColor:"#fff",messageColor:"#fff",iconUrl:Ie,message:"Not found!",backgroundColor:"red",position:"topRight"})}}new S(".revSwiper",{navigation:{nextEl:".js-r",prevEl:".js-l"},simulateTouch:!0,slidesPerView:4,freeMode:!0,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0},modules:[x,E],breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}});const Ae="/js_72_nestertsovv/assets/close-e4839c2d.svg";async function Ne(e,t){let o="";return await fetch(Ae).then(s=>s.text()).then(s=>{o=s}),`<div class="modal-message">
    <button type="button" class="close-modal-btn js-modal-btn">
      ${o}
    </button>
    <h4 class="modal-title">${e}</h4>
    <p class="modal-descr">
      ${t}
    </p>
  </div>`}function Ve(e){m.classList.remove("is-open"),document.body.style.overflow=""}function Oe(e){e.target===e.currentTarget&&(m.classList.remove("is-open"),document.body.style.overflow="")}function B(e){e.key==="Escape"&&(m.classList.remove("is-open"),document.removeEventListener("keydown",B),document.body.style.overflow="")}let a=null,d=null;const H=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;let c={email:"",comment:""};function Be(e){f.addEventListener("focus",Re),g.addEventListener("focus",ze);const t=new FormData(p);c.email=t.get("email").trim(),c.comment=t.get("comment").trim(),f.addEventListener("blur",He),g.addEventListener("blur",Fe);const o=JSON.stringify(c);localStorage.setItem(C,o),c.email&&c.comment?w.disabled=!1:w.disabled=!0}function He(e){a=c.email;const t=e.target.closest(".small-text").querySelector(".validation");let o;f.addEventListener("click",F),a.length>45&&(o=a.slice(0,45)+"...",e.target.value=o),H.test(a)?q(t):M(t),a.length===0&&u(t)}function Fe(e){d=c.comment;const t=e.target.closest(".small-text").querySelector(".validation");let o;g.addEventListener("click",U),d.length>35&&(o=d.slice(0,35)+"...",e.target.value=o),d.length<1?M(t):q(t),d.length===0&&u(t)}function q(e){e.innerHTML="Success!",e.classList.add("success"),e.closest(".small-text").querySelector(".works-input").classList.add("success"),e.closest(".small-text").querySelector(".works-input").classList.remove("error")}function M(e){const t=e.dataset.input;e.innerHTML=`Invalid ${t}, try again!`,e.classList.add("error"),e.closest(".small-text").querySelector(".works-input").classList.add("error"),e.closest(".small-text").querySelector(".works-input").classList.remove("success")}function u(e){e.innerHTML="",e.classList.remove("error"),e.classList.remove("success"),e.closest(".small-text").querySelector(".works-input").classList.remove("success"),e.closest(".small-text").querySelector(".works-input").classList.remove("error")}function Ue(e){return` <div class="error-wrapper">
    <h4 class="error-title">Error!</h4>
    <p class="error-message">&#160;&#160;&#160;${e.response.data.message}</p>
  </div>`}function F(e){document.activeElement===e.target&&(e.target.value=a,H.test(a)?q(e.target):M(e.target))}function U(e){document.activeElement===e.target&&(e.target.value=d)}function Re(e){const t=e.target.closest(".small-text").querySelector(".validation");u(t)}function ze(e){const t=e.target.closest(".small-text").querySelector(".validation");u(t)}function Je(){const e=localStorage.getItem(C);if(!e)return;const t=JSON.parse(e);p.elements.email.value=t.email,p.elements.comment.value=t.comment,t.email&&t.comment&&(w.disabled=!1)}const m=document.querySelector("#modal"),f=document.querySelector(".email-input"),g=document.querySelector(".comment-input"),w=document.querySelector(".js-works-btn"),C="feedback-form-works",p=document.querySelector(".js-works-form"),Ke=document.querySelector(".js-small-email"),We=document.querySelector(".js-small-comment"),h=document.querySelector("#modal-error");p.addEventListener("submit",Ge);p.addEventListener("input",Be);document.addEventListener("DOMContentLoaded",Je);async function Ge(e){e.preventDefault();const t=new FormData(e.target),o={email:t.get("email"),comment:t.get("comment")};try{const s=await Q(o),n=s.title,r=s.message,v=await Ne(n,r);m.innerHTML=v,m.classList.add("is-open"),document.querySelector(".js-modal-btn").addEventListener("click",Ve),m.addEventListener("click",Oe),document.addEventListener("keydown",B),document.body.style.overflow="hidden",u(Ke),u(We),f.value="",g.value="",w.disabled=!0,localStorage.removeItem(C),e.target.reset()}catch(s){h.classList.add("is-open"),h.innerHTML=Ue(s),setTimeout(async()=>{h.classList.remove("is-open")},5e3)}finally{f.removeEventListener("click",F),g.removeEventListener("click",U)}}
//# sourceMappingURL=commonHelpers.js.map

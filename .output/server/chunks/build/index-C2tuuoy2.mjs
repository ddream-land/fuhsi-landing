import { defineComponent, ref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-img-CvZkA5jW.mjs';
import { u as useHead } from './index-6rodBP2N.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import '@vue/shared';
import 'pinia-plugin-persistedstate';
import 'nprogress';

const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "relative md:gap-x-40 bg-contain bg-no-repeat bg-center overflow-hidden",
    style: { "background-image": "url('/img/home/bnr-bgw.png')" }
  }, _attrs))} data-v-da144bbc><div class="flex flex-col items-center justify-center md:h-[604px] z-10" data-v-da144bbc><div class="text-center" data-v-da144bbc><div class="md:flex items-center" data-v-da144bbc><div class="md:text-6xl text-4xl tracking-tighter my-4 ml-12 mr-16" data-v-da144bbc>idea to game</div><div class="md:text-6xl text-4xl font-bold mt-2" data-v-da144bbc>Made possible</div></div><div class="text-[#ccc] mt-8" data-v-da144bbc>Create your own customized game</div><button class="bnr-btn cursor-pointer mt-12 mb-4 bg-cover bg-no-repeat bg-center text-black hover:text-slate-700 text-xl font-bold w-[349px] h-[82px]" style="${ssrRenderStyle({ "background-image": "url('/img/home/btn-ngw.png')" })}" data-v-da144bbc>Start Building</button></div><div class="w-[80%] 2xl:w-[1000px] text-center mx-auto md:mt-12 mt-6 md:text-3xl text-xl !leading-normal" style="${ssrRenderStyle({ "background-image": "linear-gradient(to right, #18A9CC , #60EFE5)", "-webkit-background-clip": "text", "background-clip": "text", "color": "transparent" })}" data-v-da144bbc>To build a community-owned film-level UGC interactive storytelling game platform to fulfill every fantasies </div></div><div class="flex flex-col justify-center z-10" data-v-da144bbc></div><div class="lines" data-v-da144bbc><!--[-->`);
  ssrRenderList(8, (i) => {
    _push(`<div data-v-da144bbc></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/banner.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-da144bbc"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "m-auto md:w-[650px] w-[90%] pt-16 pb-20 bg-[#191919] md:px-24 box-content mt-8" }, _attrs))}><div class="text-3xl font-bold text-center pb-4">About DDream</div><div class="text-base"><div class="mt-8">Founded in 2022, DDream is a pioneering technology company merging cutting-edge AI with innovative gaming experiences. Our team comprises industry veterans from leading companies such as NetEase, Tencent, miHoYo, and Papergames, bringing a wealth of expertise to our ambitious projects.</div><div class="mt-8">In 2023, DDream secured Series A funding from notable investors including UpHonest Capital, GrandVC, Agora Venture etc., validating our vision and accelerating our growth.</div><div class="mt-8">Our focus is twofold: developing incredibly life-like AI NPCs and creating games centered around these advanced AI entities. Our flagship product, galgame.ai, exemplifies this vision by allowing users to effortlessly create personalized visual novel games with just a few clicks, all dynamically controlled by our sophisticated AI.</div><div class="mt-8">At DDream, we&#39;re committed to revolutionizing gaming through AI, offering unprecedented levels of immersion and interactivity. Our goal is to blur the lines between virtual and reality, providing players with uniquely engaging and adaptive gaming experiences.</div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/desc.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "m-auto 2xl:w-[70%] md:w-[80%] w-[90%] py-12 overflow-hidden" }, _attrs))} data-v-7b44842d><div class="md:text-4xl text-2xl font-bold mb-8" data-v-7b44842d>${ssrInterpolate(_ctx.$t("home.howItWorks"))}</div><div class="bg-[#161616] md:p-20 p-4 grid md:grid-cols-3 grid-cols-1 md:gap-x-12 md:gap-y-24" data-v-7b44842d><div class="md:w-[23vw] w-full" data-v-7b44842d>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/one.png",
    class: "w-8/12 h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(`</div><div class="flex flex-col justify-center sm:col-span-2 pr-6 right-scroll-animation" data-v-7b44842d><div class="wtit" data-v-7b44842d>Idea</div><div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8" data-v-7b44842d>Bring forth any creative idea that flashes through your mind. Whether a brief description or a set of keywords, they are the keys to unlock this magical journey. No technical background is needed\u2014just your imagination.</div></div><div class="flex flex-col justify-center sm:col-span-2 md:pl-12 left-scroll-animation" data-v-7b44842d><div class="wtit" data-v-7b44842d>AI Design</div><div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8" data-v-7b44842d>AI will suggest design elements such as the game&#39;s visual style, interface layout, and narrative interactions based on your creativity. AI will generate multiple design proposals for you to choose from or provide further feedback on, ensuring the final design meets your expectations precisely.</div></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/two.png",
    class: "md:w-[23vw] w-full h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/three.png",
    class: "md:w-[23vw] w-full h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(`<div class="flex flex-col justify-center sm:col-span-2 pr-6 right-scroll-animation" data-v-7b44842d><div class="wtit" data-v-7b44842d>AI Dev</div><div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8" data-v-7b44842d>Once the design is confirmed, the AI development phase will commence. In this stage, artificial intelligence will take on the heavy lifting of coding, transforming the design concepts into actual game code.</div></div><div class="flex flex-col justify-center sm:col-span-2 md:pl-12 left-scroll-animation" data-v-7b44842d><div class="wtit" data-v-7b44842d>AI Iteration</div><div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8" data-v-7b44842d>After the first playable version of the game is completed, AI can use self-learning or your feedback to improve and optimize the game. Whether adjusting difficulty balance, enhancing user experience, or adding new content, AI can respond quickly, continuously elevating the quality of the game.</div></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/four.png",
    class: "md:w-[23vw] w-full h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/five.png",
    class: "md:w-[23vw] w-full h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(`<div class="flex flex-col justify-center sm:col-span-2 pr-6 right-scroll-animation" data-v-7b44842d><div class="wtit" data-v-7b44842d>AI Testing</div><div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8" data-v-7b44842d>During the AI testing phase, artificial intelligence will conduct comprehensive testing of the game. AI can simulate different gaming scenarios, locate and fix issues and bugs, ensuring game stability and fluidity.</div></div><div class="flex flex-col justify-center sm:col-span-2 md:pl-12 left-scroll-animation" data-v-7b44842d><div class="wtit" data-v-7b44842d>Game Delivery</div><div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8" data-v-7b44842d>Games that pass testing will be directly run on cloud platforms for players to experience or share. Moreover, AI can also provide subsequent updates and maintenance services as needed, ensuring a continuously optimized gaming experience.</div></div><div class="md:w-[23vw] w-full" data-v-7b44842d>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/six.png",
    class: "md:ml-4 w-7/12 h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/howItWorks.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-7b44842d"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "m-auto md:w-[70%] w-[90%] md:pt-36" }, _attrs))} data-v-d4657b76><div class="md:text-4xl text-2xl font-bold mb-4" data-v-d4657b76>Flagship Product</div><div class="mt-8 eco-item bottom-scroll-animation" data-v-d4657b76><div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2" data-v-d4657b76>`);
  _push(ssrRenderComponent(_component_NuxtImg, { src: "/img/home/galgameai.png" }, null, _parent));
  _push(`</div><div class="text-2xl text-[#111111] font-bold md:ml-48 px-6 py-7 tit" data-v-d4657b76>Fully AI-driven UGC Galgame Platform</div><div class="con py-8 md:pr-12 md:ml-[89px] md:pl-32" data-v-d4657b76><div class="text-2xl" data-v-d4657b76>galgame.ai</div><div class="text-[#cccccc] text-base mt-4" data-v-d4657b76>galgame.ai is an application that harnesses AI to power galgame entirely. Users can craft their own unique galgame using just a few keywords/tags. This allows players to create any fanfiction or original visual novels, all completely driven by AI, including the story, quests, and mechanics.</div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ecosystem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d4657b76"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "m-auto md:w-[70%] w-[90%] md:pt-24 pt-20 overflow-hidden" }, _attrs))} data-v-1811a92a><div class="md:text-4xl text-2xl font-bold mb-16" data-v-1811a92a>Use Case</div><div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 2xl:gap-x-20" data-v-1811a92a><div class="rounded-md cover mb-8 left-scroll-animation" data-v-1811a92a>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/usecase/use_1.png",
    class: "w-full rounded-md",
    style: { "aspect-ratio": "5 / 3" }
  }, null, _parent));
  _push(`</div><div class="rounded-md cover mb-8 right-scroll-animation" data-v-1811a92a>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/usecase/use_2.png",
    class: "w-full rounded-md",
    style: { "aspect-ratio": "5 / 3" }
  }, null, _parent));
  _push(`</div></div><div class="px-2 pt-8 pb-16 text-center text-[#e1e1e1]" data-v-1811a92a>Our <b class="text-white text-lg" data-v-1811a92a>Game Creation Multi-Agent System (GCMAS)</b> transforms user-input tags into comprehensive <b class="text-white text-lg" data-v-1811a92a>game designs and settings</b>. This AI-driven system generates all necessary resources to produce a fully automated visual novel game.Powered by Google Cloud Platform&#39;s <b class="text-white text-lg" data-v-1811a92a>Gemini large language model</b>, our GCMAS streamlines the entire game creation process.</div><div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 2xl:gap-x-20" data-v-1811a92a><div class="rounded-md cover mb-8 left-scroll-animation" data-v-1811a92a>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/usecase/use_3.png",
    class: "w-full rounded-md",
    style: { "aspect-ratio": "5 / 3" }
  }, null, _parent));
  _push(`</div><div class="rounded-md cover mb-8 right-scroll-animation" data-v-1811a92a>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/usecase/use_4.png",
    class: "w-full rounded-md",
    style: { "aspect-ratio": "5 / 3" }
  }, null, _parent));
  _push(`</div></div><div class="px-2 pt-8 pb-16 text-center text-[#e1e1e1]" data-v-1811a92a>Once users complete their game design or settings, our <b class="text-white text-lg" data-v-1811a92a>Game Creation Resource Generator (GCRG)</b> initiates a task to produce all necessary game assets. These include <b class="text-white text-lg" data-v-1811a92a>background music, scene images, NPC portraits with varied emotions and outfits, and character CGs,</b> all essential for rendering a fully AI-driven visual novel game.We plan to deploy the GCRG on Google Cloud Platform&#39;s <b class="text-white text-lg" data-v-1811a92a>GPU instances</b>. Specifically, we&#39;re considering G2 VMs equipped with 2 L4 GPUs, 6 vCPUs, and 48GB RAM, unless a more suitable configuration is identified.</div><div class="grid grid-cols-1 md:grid-cols-3 md:gap-x-28 2xl:gap-x-44 px-8 2xl:px-20" data-v-1811a92a><div class="rounded-md cover mb-4 left-scroll-animation" data-v-1811a92a>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/usecase/use_5.png",
    class: "w-full rounded-md",
    style: { "aspect-ratio": "0.46 / 1" }
  }, null, _parent));
  _push(`</div><div class="rounded-md cover mb-4" data-v-1811a92a>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/usecase/use_6.png",
    class: "w-full rounded-md",
    style: { "aspect-ratio": "0.46 / 1" }
  }, null, _parent));
  _push(`</div><div class="rounded-md cover mb-4 right-scroll-animation" data-v-1811a92a>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/usecase/use_7.png",
    class: "w-full rounded-md",
    style: { "aspect-ratio": "0.46 / 1" }
  }, null, _parent));
  _push(`</div></div><div class="px-2 pt-12 pb-16 text-center text-[#e1e1e1]" data-v-1811a92a>During gameplay, players interact with NPCs as the plot unfolds, making choices that influence the story&#39;s progression. Our <b class="text-white text-lg" data-v-1811a92a>Game Driver (GD)</b> dynamically manages multiple aspects of the game, including: <b class="text-white text-lg" data-v-1811a92a>advancing the plot based on player interactions, maintaining and evolving player-NPC relationships, controlling the status of dynamic quests, leading the story towards one of unlimited possible endings.</b><br data-v-1811a92a> The GD is powered by Google Cloud Platform&#39;s <b class="text-white text-lg" data-v-1811a92a>Gemini large language model</b>, enabling a sophisticated and responsive gaming experience.</div><div class="grid grid-cols-1 md:grid-cols-3 md:gap-x-28 2xl:gap-x-44 px-8 2xl:px-20" data-v-1811a92a><div class="mb-4 left-scroll-animation" data-v-1811a92a><div class="rounded-md cover" data-v-1811a92a>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/usecase/use_8.png",
    class: "w-full rounded-md",
    style: { "aspect-ratio": "0.46 / 1" }
  }, null, _parent));
  _push(`</div><div class="text-xl font-bold mt-6" data-v-1811a92a>CGs by level-up</div></div><div class="mb-4" data-v-1811a92a><div class="rounded-md cover" data-v-1811a92a>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/usecase/use_9.png",
    class: "w-full rounded-md",
    style: { "aspect-ratio": "0.46 / 1" }
  }, null, _parent));
  _push(`</div><div class="text-xl font-bold mt-6" data-v-1811a92a>CGs by Gacha</div></div><div class="mb-4 right-scroll-animation" data-v-1811a92a><div class="rounded-md cover" data-v-1811a92a>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/usecase/use_10.png",
    class: "w-full rounded-md",
    style: { "aspect-ratio": "0.46 / 1" }
  }, null, _parent));
  _push(`</div><div class="text-xl font-bold mt-6" data-v-1811a92a>Costume Change</div><div class="text-xl font-bold" data-v-1811a92a>by AI</div></div></div><div class="px-2 pt-12 pb-16 text-center text-[#e1e1e1]" data-v-1811a92a>During gameplay, players interact with NPCs as the plot unfolds, making choices that influence the story&#39;s progression. Our <b class="text-white text-lg" data-v-1811a92a>Game Driver (GD)</b> dynamically manages multiple aspects of the game, including: <b class="text-white text-lg" data-v-1811a92a>advancing the plot based on player interactions, maintaining and evolving player-NPC relationships, controlling the status of dynamic quests, leading the story towards one of unlimited possible endings.</b> The GD is powered by Google Cloud Platform&#39;s <b class="text-white text-lg" data-v-1811a92a>Gemini large language model</b>, enabling a sophisticated and responsive gaming experience.</div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/useCase.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1811a92a"]]);
const _sfc_main$2 = {
  __name: "founderAndAdvisors",
  __ssrInlineRender: true,
  setup(__props) {
    const list = [
      { img: "/img/home/backers/adrianwang.png", name: "Adrian Wang", desc: "ceo" },
      { img: "/img/home/backers/tonywang.webp", name: "Tony Wang", desc: "Co-founder of Agora" },
      { img: "/img/home/backers/fanzhang.jpg", name: "Fan Zhang", desc: "Co-founder of Sequoia China" },
      { img: "/img/home/backers/rubylu.png", name: "Ruby Lu", desc: "Founder of Atypical Ventures" },
      { img: "/img/home/backers/yuzhushi.jpg", name: "Yuzhu Shi", desc: "Founder of Giant Network" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "m-auto md:w-[70%] w-[90%] pt-16 pb-8" }, _attrs))}><div class="md:text-4xl text-2xl font-bold mb-4">Founder and Advisors</div><div class="grid md:grid-cols-5 grid-cols-2 2xl:gap-24 md:gap-8 gap-4 md:mt-16 mt-8"><!--[-->`);
      ssrRenderList(list, (itm) => {
        _push(`<div class="text-center pb-4">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: itm.img,
          class: "object-cover w-full rounded-sm bottom-scroll-animation",
          style: { "aspect-ratio": "1 / 1" }
        }, null, _parent));
        _push(`<div class="mt-4">${ssrInterpolate(itm.name)}</div><div class="mt-4 text-xs">${ssrInterpolate(itm.desc)}</div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/founderAndAdvisors.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "backers",
  __ssrInlineRender: true,
  setup(__props) {
    const list = [
      { img: "/img/home/backers/uphonest_capital_logo.jpg", name: "UpHonest Capital" },
      { img: "/img/home/backers/grandventures.jpg", name: "Grand Ventures" },
      { img: "/img/home/backers/agoraventures.jpg", name: "Agora Ventures" },
      { img: "/img/home/backers/giantnetwork.jpg", name: "Giant Network" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "m-auto md:w-[70%] w-[90%] pt-16 pb-32" }, _attrs))}><div class="md:text-4xl text-2xl font-bold mb-4">Backers</div><div class="grid md:grid-cols-4 grid-cols-2 2xl:gap-48 md:gap-16 gap-4 mt-12"><!--[-->`);
      ssrRenderList(list, (itm) => {
        _push(`<div class="text-center pb-4">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: itm.img,
          class: "object-cover w-full rounded-sm bottom-scroll-animation",
          style: { "aspect-ratio": "1 / 1" }
        }, null, _parent));
        _push(`<div class="mt-4">${ssrInterpolate(itm.name)}</div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/backers.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: (productCategory) => {
        const baseTitle = "DDream";
        return `${baseTitle}${productCategory ? " - " + productCategory : ""}`;
      }
    });
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeBanner = __nuxt_component_0;
      const _component_HomeDesc = __nuxt_component_1;
      const _component_HomeHowItWorks = __nuxt_component_2;
      const _component_HomeEcosystem = __nuxt_component_3;
      const _component_HomeUseCase = __nuxt_component_4;
      const _component_HomeFounderAndAdvisors = _sfc_main$2;
      const _component_HomeBackers = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HomeBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeDesc, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeHowItWorks, { id: "howItWorks" }, null, _parent));
      _push(ssrRenderComponent(_component_HomeEcosystem, { id: "ecosystem" }, null, _parent));
      _push(ssrRenderComponent(_component_HomeUseCase, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeFounderAndAdvisors, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeBackers, null, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C2tuuoy2.mjs.map

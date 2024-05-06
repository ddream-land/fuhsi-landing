import { _ as __nuxt_component_0$1 } from './nuxt-img-CZpnFtB-.mjs';
import { defineComponent, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "relative grid md:grid-cols-2 grid-cols-1 md:gap-x-40 bg-contain bg-no-repeat bg-center overflow-hidden",
    style: { "background-image": "url('/img/home/bnr-bgw.png')" }
  }, _attrs))} data-v-2b47567f><div class="flex flex-col md:items-end items-center justify-center md:h-[694px] z-10" data-v-2b47567f><div data-v-2b47567f><div class="md:text-6xl text-4xl font-bold" data-v-2b47567f>${ssrInterpolate(_ctx.$t("home.trust"))}</div><div class="md:text-6xl text-4xl tracking-tighter my-4" data-v-2b47567f>idea to game</div><div class="md:text-6xl text-4xl font-bold mt-2" data-v-2b47567f>Made possible</div><div class="text-[#ccc] mt-8" data-v-2b47567f>Create your own customized game</div><button class="bnr-btn cursor-pointer mt-12 mb-4 bg-cover bg-no-repeat bg-center text-black hover:text-slate-700 text-xl font-bold w-[349px] h-[82px]" style="${ssrRenderStyle({ "background-image": "url('/img/home/btn-ngw.png')" })}" data-v-2b47567f>Start Building</button></div></div><div class="flex flex-col justify-center z-10" data-v-2b47567f>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/bnr-coinnew.png",
    class: "w-[341px] h-auto coin1 md:ml-12"
  }, null, _parent));
  _push(`</div><div class="lines" data-v-2b47567f><!--[-->`);
  ssrRenderList(8, (i) => {
    _push(`<div data-v-2b47567f></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/banner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-2b47567f"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "m-auto 2xl:w-[70%] md:w-[80%] w-[90%] py-12 pt-24 overflow-hidden" }, _attrs))} data-v-7b5fc820><div class="md:text-4xl text-2xl font-bold mb-8" data-v-7b5fc820>${ssrInterpolate(_ctx.$t("home.howItWorks"))}</div><div class="bg-[#161616] md:p-20 p-4 grid md:grid-cols-3 grid-cols-1 md:gap-x-12 md:gap-y-24" data-v-7b5fc820><div class="md:w-[23vw] w-full" data-v-7b5fc820>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/one.png",
    class: "w-8/12 h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(`</div><div class="flex flex-col justify-center sm:col-span-2 pr-6 right-scroll-animation" data-v-7b5fc820><div class="wtit" data-v-7b5fc820>Idea</div><div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8" data-v-7b5fc820>Bring forth any creative idea that flashes through your mind. Whether a brief description or a set of keywords, they are the keys to unlock this magical journey. No technical background is needed\u2014just your imagination.</div></div><div class="flex flex-col justify-center sm:col-span-2 md:pl-12 left-scroll-animation" data-v-7b5fc820><div class="wtit" data-v-7b5fc820>AI Design</div><div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8" data-v-7b5fc820>AI will suggest design elements such as the game&#39;s visual style, interface layout, and narrative interactions based on your creativity. AI will generate multiple design proposals for you to choose from or provide further feedback on, ensuring the final design meets your expectations precisely.</div></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/two.png",
    class: "md:w-[23vw] w-full h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/three.png",
    class: "md:w-[23vw] w-full h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(`<div class="flex flex-col justify-center sm:col-span-2 pr-6 right-scroll-animation" data-v-7b5fc820><div class="wtit" data-v-7b5fc820>AI Dev</div><div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8" data-v-7b5fc820>Once the design is confirmed, the AI development phase will commence. In this stage, artificial intelligence will take on the heavy lifting of coding, transforming the design concepts into actual game code.</div></div><div class="flex flex-col justify-center sm:col-span-2 md:pl-12 left-scroll-animation" data-v-7b5fc820><div class="wtit" data-v-7b5fc820>AI Iteration</div><div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8" data-v-7b5fc820>After the first playable version of the game is completed, AI can use self-learning or your feedback to improve and optimize the game. Whether adjusting difficulty balance, enhancing user experience, or adding new content, AI can respond quickly, continuously elevating the quality of the game.</div></div>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/four.png",
    class: "md:w-[23vw] w-full h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/five.png",
    class: "md:w-[23vw] w-full h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(`<div class="flex flex-col justify-center sm:col-span-2 pr-6 right-scroll-animation" data-v-7b5fc820><div class="wtit" data-v-7b5fc820>AI Testing</div><div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8" data-v-7b5fc820>During the AI testing phase, artificial intelligence will conduct comprehensive testing of the game. AI can simulate different gaming scenarios, locate and fix issues and bugs, ensuring game stability and fluidity.</div></div><div class="flex flex-col justify-center sm:col-span-2 md:pl-12 left-scroll-animation" data-v-7b5fc820><div class="wtit" data-v-7b5fc820>Game Delivery</div><div class="text-[#cccccc] text-base mt-6 md:mb-4 mb-8" data-v-7b5fc820>Games that pass testing will be directly run on cloud platforms for players to experience or share. Moreover, AI can also provide subsequent updates and maintenance services as needed, ensuring a continuously optimized gaming experience.</div></div><div class="md:w-[23vw] w-full" data-v-7b5fc820>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/home/six.png",
    class: "md:ml-4 w-7/12 h-auto bottom-scroll-animation"
  }, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/howItWorks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7b5fc820"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "m-auto md:w-[70%] w-[90%] md:pt-36 pt-20 md:pb-40 pb-14" }, _attrs))} data-v-b1da2707><div class="md:text-4xl text-2xl font-bold mb-4" data-v-b1da2707>Available tools</div><div class="mt-8 eco-item bottom-scroll-animation" data-v-b1da2707><div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2" data-v-b1da2707>`);
  _push(ssrRenderComponent(_component_NuxtImg, { src: "/img/home/eco-ico11.png" }, null, _parent));
  _push(`</div><div class="text-2xl text-[#111111] font-bold md:ml-48 px-6 py-7 tit" data-v-b1da2707>AI Creates Character Images</div><div class="con py-8 md:pr-12 md:ml-[89px] md:pl-32" data-v-b1da2707><div class="text-2xl" data-v-b1da2707>Avatar Studio</div><div class="text-[#cccccc] text-base mt-4" data-v-b1da2707>Utilizing advanced AI Art technology, anyone can create high-quality, personalized characters without the need for complex drawing skills. This meets the needs of game design, digital art creation, or simply curiosity and the desire to create.</div></div></div><div class="mt-8 eco-item bottom-scroll-animation r" data-v-b1da2707><div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2" data-v-b1da2707>`);
  _push(ssrRenderComponent(_component_NuxtImg, { src: "/img/home/eco-ico22.png" }, null, _parent));
  _push(`</div><div class="text-2xl text-[#111111] font-bold md:mr-48 px-6 py-7 tit md:text-right" data-v-b1da2707>AI Creates Personalized Human Voices</div><div class="con py-8 md:pl-12 md:mr-[75px] md:pr-32" data-v-b1da2707><div class="flex items-center" data-v-b1da2707><div class="text-2xl flex-1" data-v-b1da2707>Voice Studio</div></div><div class="text-[#cccccc] text-base mt-4" data-v-b1da2707>Sound has the ability to connect hearts and evoke emotions. Therefore, we are dedicated to providing an intuitive, user-friendly platform that enables everyone to effortlessly create, edit, and share customized AI voices. From realistic human voices to fantastical sound effects, your creativity will know no bounds.</div></div></div><div class="mt-12 eco-item bottom-scroll-animation" data-v-b1da2707><div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2" data-v-b1da2707>`);
  _push(ssrRenderComponent(_component_NuxtImg, { src: "/img/home/eco-ico33.png" }, null, _parent));
  _push(`</div><div class="text-2xl text-[#111111] font-bold md:ml-48 px-6 py-7 tit" data-v-b1da2707>AI Generates Game Storylines</div><div class="con py-8 md:pr-12 md:ml-[89px] md:pl-32" data-v-b1da2707><div class="text-2xl" data-v-b1da2707>Plot Studio</div><div class="text-[#cccccc] text-base mt-4" data-v-b1da2707>An intuitive, easy-to-use tool that, with just simple commands or prompts, enables AI to provide unique story concepts, plot developments, and character designs. Unleash your creative potential. Bring more fascinating stories and gaming experiences to the world!</div></div></div><div class="mt-16 md:text-4xl text-2xl font-bold mb-4" data-v-b1da2707>Engine</div><div class="mt-8 eco-item bottom-scroll-animation" data-v-b1da2707><div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2" data-v-b1da2707>`);
  _push(ssrRenderComponent(_component_NuxtImg, { src: "/img/home/eco-ico44.png" }, null, _parent));
  _push(`</div><div class="text-2xl text-[#111111] font-bold md:ml-48 px-6 py-7 tit" data-v-b1da2707>AI-Native Interactive Narrative Game Engine</div><div class="con py-8 md:pr-12 md:ml-[89px] md:pl-32" data-v-b1da2707><div class="text-2xl" data-v-b1da2707>FuHsi Saga Engine</div><div class="text-[#cccccc] text-base mt-4" data-v-b1da2707>By deeply integrating AI technology, the FuHsi Saga Engine offers a user-friendly, intuitive platform that, leveraging the power of artificial intelligence, enables anyone to easily create and experience their unique games, and share this joy with the world. With the assistance of AI, games can dynamically adjust storylines and outcomes in real time based on player decisions and preferences, delivering an exclusive and unparalleled gaming experience to each player.</div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ecosystem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b1da2707"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: (productCategory) => {
        const baseTitle = "fuhsi.ai";
        return `${baseTitle}${productCategory ? " - " + productCategory : ""}`;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeBanner = __nuxt_component_0;
      const _component_HomeHowItWorks = __nuxt_component_1;
      const _component_HomeEcosystem = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HomeBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeHowItWorks, { id: "howItWorks" }, null, _parent));
      _push(ssrRenderComponent(_component_HomeEcosystem, { id: "ecosystem" }, null, _parent));
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
//# sourceMappingURL=index-C_sS0IUD.mjs.map

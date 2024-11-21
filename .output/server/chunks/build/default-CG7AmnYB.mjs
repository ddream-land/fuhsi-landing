import { _ as __nuxt_component_0 } from './nuxt-link-D_xBsjer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-img-CvZkA5jW.mjs';
import { _ as _export_sfc, k as useRoute, g as useI18n } from './server.mjs';
import { ref, watch, unref, useSSRContext, computed, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { e as ElBacktop } from './el-backtop-CBhgbaak.mjs';
import './index-6rodBP2N.mjs';
import '@unhead/shared';
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
import 'vue-router';
import '@vueuse/core';
import '@vue/shared';
import 'pinia-plugin-persistedstate';
import 'nprogress';
import 'lodash-unified';

const _sfc_main$2 = {
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales, setLocale, t } = useI18n();
    computed(() => {
      return locales.value.filter((i) => i.code !== locale.value);
    });
    const navigation = [
      // { name: 'home.howItWorks', id: 'howItWorks' },
      // { name: 'home.investors', id: 'ourInvestors'},
      // { name: 'home.ecosystem', id: 'ecosystem'},
      // { name: 'home.docs', href: '/'},
      { name: "home.axeTestnetLive", href: "/avatar", ico: true }
    ];
    const route = useRoute();
    const isOpen = ref(false);
    const path = computed(() => route.fullPath);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#111111] md:h-24 h-20 flex justify-between items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center px-1 2xl:ml-64 xl:ml-48 lg:ml-32 md:ml-16 ml-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/logo.png",
              alt: "Logo",
              class: "h-[50px]"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center px-1 2xl:ml-64 xl:ml-48 lg:ml-32 md:ml-16 ml-4" }, [
                createVNode(_component_NuxtImg, {
                  src: "/img/logo.png",
                  alt: "Logo",
                  class: "h-[50px]"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center"><nav class="hidden lg:flex md:mr-16 mr-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ["hover:text-gray-300 md:text-lg text-base flex items-center 2xl:px-6 xl:px-4 md:px-2"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` galgame.ai `);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "w-[92px] inline-block ml-4",
              src: "/img/beta.png"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" galgame.ai "),
              createVNode(_component_NuxtImg, {
                class: "w-[92px] inline-block ml-4",
                src: "/img/beta.png"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><button class="lg:hidden mr-4"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg></button>`);
      if (unref(isOpen)) {
        _push(`<div class="absolute top-full left-0 w-full bg-[#111111] z-10 lg:hidden"><!--[-->`);
        ssrRenderList(navigation, (item) => {
          _push(`<!--[-->`);
          if (!!item.id) {
            _push(`<div class="text-base flex justify-center items-center py-2 border-b">${ssrInterpolate(_ctx.$t(item.name))}</div>`);
          } else {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: item.href,
              class: ["text-base flex justify-center items-center py-2 border-b", { "active": unref(path) === item.href }],
              "aria-current": unref(path) === item.href ? "page" : void 0
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t(item.name))} `);
                  if (item.ico) {
                    _push2(ssrRenderComponent(_component_NuxtImg, {
                      class: "w-11 inline-block ml-2",
                      src: "/img/beta.png"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t(item.name)) + " ", 1),
                    item.ico ? (openBlock(), createBlock(_component_NuxtImg, {
                      key: 0,
                      class: "w-11 inline-block ml-2",
                      src: "/img/beta.png"
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-[#666666] bg-black pt-14" }, _attrs))}><div class="px-6 md:w-[70%] w-[90%] mx-auto"><div class="grid md:grid-cols-3 grid-cols-1"><div class="md:pb-6 pb-4 flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/logo.png",
        class: "h-[50px]"
      }, null, _parent));
      _push(`</div><div></div></div><div class="border-t border-gray-800 py-8 text-sm"> \xA9 Copyleft 2024, No rights reserved </div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const scrollTop = ref(0);
    const route = useRoute();
    watch(() => route.path, (val) => {
    }, { immediate: true, deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainHeader = _sfc_main$2;
      const _component_MainFooter = _sfc_main$1;
      const _component_el_backtop = ElBacktop;
      _push(`<!--[--><div class="gd-container" data-v-80b94c9b><header class="${ssrRenderClass([{ "skicy": unref(scrollTop) > 500 }, "fixed w-full z-10"])}" data-v-80b94c9b>`);
      _push(ssrRenderComponent(_component_MainHeader, null, null, _parent));
      _push(`</header><main class="pt-28 mmm" style="${ssrRenderStyle({ "z-index": "1" })}" data-v-80b94c9b>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer data-v-80b94c9b>`);
      _push(ssrRenderComponent(_component_MainFooter, null, null, _parent));
      _push(`</footer></div>`);
      _push(ssrRenderComponent(_component_el_backtop, {
        right: 30,
        bottom: 40
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-80b94c9b"]]);

export { _default as default };
//# sourceMappingURL=default-CG7AmnYB.mjs.map

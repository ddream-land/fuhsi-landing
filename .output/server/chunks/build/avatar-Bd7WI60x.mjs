import __nuxt_component_3$1 from './Icon-CQA6L33Q.mjs';
import { _ as __nuxt_component_0 } from './nuxt-img-_1y8giuP.mjs';
import { b as buildProps, d as definePropType, u as useDeprecated, a as useLocale, c as addUnit, E as ElFocusTrap, e as ElIcon, w as withInstall, i as iconPropType, f as useGlobalConfig, h as hasClass, g as getStyle, j as addClass, _ as _export_sfc$1, k as ElBacktop, r as removeClass } from './el-backtop-4RXX1VYb.mjs';
import { defineComponent, createVNode, renderSlot, h, useSlots, computed, ref, openBlock, createBlock, Teleport, Transition, unref, withCtx, withDirectives, createElementVNode, mergeProps, withModifiers, normalizeClass, createElementBlock, toDisplayString, createCommentVNode, vShow, getCurrentInstance, watch, nextTick, useSSRContext, isRef, onScopeDispose } from 'vue';
import { u as useNamespace, e as close_default, _ as _export_sfc, b as useZIndex, c as useId, t as throwError, i as isBoolean, d as defaultNamespace, f as useI18n } from './server.mjs';
import { NOOP } from '@vue/shared';
import { isClient, useTimeoutFn } from '@vueuse/core';
import { isUndefined } from 'lodash-unified';
import { computed as computed$1 } from '@vue/reactivity';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import './index-DqYSKXOn.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './index-CJvq7goD.mjs';
import '@unhead/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'nprogress';

let scrollBarWidth;
const getScrollBarWidth = (namespace) => {
  var _a;
  if (!isClient)
    return 0;
  if (scrollBarWidth !== void 0)
    return scrollBarWidth;
  const outer = (void 0).createElement("div");
  outer.className = `${namespace}-scrollbar__wrap`;
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  (void 0).body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = (void 0).createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  (_a = outer.parentNode) == null ? void 0 : _a.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
};
const UPDATE_MODEL_EVENT = "update:modelValue";
var PatchFlags = /* @__PURE__ */ ((PatchFlags2) => {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
  return PatchFlags2;
})(PatchFlags || {});
const useLockscreen = (trigger, options = {}) => {
  if (!isRef(trigger)) {
    throwError("[useLockscreen]", "You need to pass a ref param to this function");
  }
  const ns = options.ns || useNamespace("popup");
  const hiddenCls = computed$1(() => ns.bm("parent", "hidden"));
  if (!isClient || hasClass((void 0).body, hiddenCls.value)) {
    return;
  }
  let scrollBarWidth2 = 0;
  let withoutHiddenClass = false;
  let bodyWidth = "0";
  const cleanup = () => {
    setTimeout(() => {
      removeClass(void 0, hiddenCls.value);
      if (withoutHiddenClass && void 0) {
        (void 0).body.style.width = bodyWidth;
      }
    }, 200);
  };
  watch(trigger, (val) => {
    if (!val) {
      cleanup();
      return;
    }
    withoutHiddenClass = !hasClass((void 0).body, hiddenCls.value);
    if (withoutHiddenClass) {
      bodyWidth = (void 0).body.style.width;
    }
    scrollBarWidth2 = getScrollBarWidth(ns.namespace.value);
    const bodyHasOverflow = (void 0).documentElement.clientHeight < (void 0).body.scrollHeight;
    const bodyOverflowY = getStyle((void 0).body, "overflowY");
    if (scrollBarWidth2 > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
      (void 0).body.style.width = `calc(100% - ${scrollBarWidth2}px)`;
    }
    addClass((void 0).body, hiddenCls.value);
  });
  onScopeDispose(() => cleanup());
};
const useSameTarget = (handleClick) => {
  if (!handleClick) {
    return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
  }
  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e) => {
    if (mousedownTarget && mouseupTarget) {
      handleClick(e);
    }
    mousedownTarget = mouseupTarget = false;
  };
  const onMousedown = (e) => {
    mousedownTarget = e.target === e.currentTarget;
  };
  const onMouseup = (e) => {
    mouseupTarget = e.target === e.currentTarget;
  };
  return { onClick, onMousedown, onMouseup };
};
const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: {
    type: Boolean,
    default: false
  },
  overlayClass: {
    type: definePropType([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: definePropType([String, Number])
  }
});
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const BLOCK = "overlay";
var Overlay = defineComponent({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const ns = useNamespace(BLOCK);
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
    return () => {
      return props.mask ? createVNode("div", {
        class: [ns.b(), props.overlayClass],
        style: {
          zIndex: props.zIndex
        },
        onClick,
        onMousedown,
        onMouseup
      }, [renderSlot(slots, "default")], PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS, ["onClick", "onMouseup", "onMousedown"]) : h("div", {
        class: props.overlayClass,
        style: {
          zIndex: props.zIndex,
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }, [renderSlot(slots, "default")]);
    };
  }
});
const ElOverlay = Overlay;
const dialogContentProps = buildProps({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: iconPropType
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
});
const dialogProps = buildProps({
  ...dialogContentProps,
  appendToBody: Boolean,
  appendTo: {
    type: definePropType(String),
    default: "body"
  },
  beforeClose: {
    type: definePropType(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: {
    type: Boolean,
    default: false
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
const useDialog = (props, targetRef) => {
  var _a;
  const instance = getCurrentInstance();
  const emit = instance.emit;
  const { nextZIndex } = useZIndex();
  let lastPosition = "";
  const titleId = useId();
  const bodyId = useId();
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex = ref((_a = props.zIndex) != null ? _a : nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const namespace = useGlobalConfig("namespace", defaultNamespace);
  const style = computed(() => {
    const style2 = {};
    const varPrefix = `--${namespace.value}-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style2[`${varPrefix}-width`] = addUnit(props.width);
      }
    }
    return style2;
  });
  const overlayDialogStyle = computed(() => {
    if (props.alignCenter) {
      return { display: "flex" };
    }
    return {};
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel)
        return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    if (!isClient)
      return;
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  function onOpenAutoFocus() {
    emit("openAutoFocus");
  }
  function onCloseAutoFocus() {
    emit("closeAutoFocus");
  }
  function onFocusoutPrevented(event) {
    var _a2;
    if (((_a2 = event.detail) == null ? void 0 : _a2.focusReason) === "pointer") {
      event.preventDefault();
    }
  }
  if (props.lockScroll) {
    useLockscreen(visible);
  }
  function onCloseRequested() {
    if (props.closeOnPressEscape) {
      handleClose();
    }
  }
  watch(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      zIndex.value = isUndefined(props.zIndex) ? nextZIndex() : zIndex.value++;
      nextTick(() => {
        emit("open");
        if (targetRef.value) {
          targetRef.value.scrollTop = 0;
        }
      });
    } else {
      if (visible.value) {
        close();
      }
    }
  });
  watch(() => props.fullscreen, (val) => {
    if (!targetRef.value)
      return;
    if (val) {
      lastPosition = targetRef.value.style.transform;
      targetRef.value.style.transform = "";
    } else {
      targetRef.value.style.transform = lastPosition;
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    onFocusoutPrevented,
    titleId,
    bodyId,
    closed,
    style,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex
  };
};
const drawerProps = buildProps({
  ...dialogProps,
  direction: {
    type: String,
    default: "rtl",
    values: ["ltr", "rtl", "ttb", "btt"]
  },
  size: {
    type: [String, Number],
    default: "30%"
  },
  withHeader: {
    type: Boolean,
    default: true
  },
  modalFade: {
    type: Boolean,
    default: true
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const drawerEmits = dialogEmits;
const _hoisted_1 = ["aria-label", "aria-labelledby", "aria-describedby"];
const _hoisted_2 = ["id", "aria-level"];
const _hoisted_3 = ["aria-label"];
const _hoisted_4 = ["id"];
const __default__ = defineComponent({
  name: "ElDrawer",
  inheritAttrs: false
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: drawerProps,
  emits: drawerEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated({
      scope: "el-drawer",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/drawer.html#slots"
    }, computed(() => !!slots.title));
    const drawerRef = ref();
    const focusStartRef = ref();
    const ns = useNamespace("drawer");
    const { t } = useLocale();
    const {
      afterEnter,
      afterLeave,
      beforeLeave,
      visible,
      rendered,
      titleId,
      bodyId,
      zIndex,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onFocusoutPrevented,
      onCloseRequested,
      handleClose
    } = useDialog(props, drawerRef);
    const isHorizontal = computed(() => props.direction === "rtl" || props.direction === "ltr");
    const drawerSize = computed(() => addUnit(props.size));
    expose({
      handleClose,
      afterEnter,
      afterLeave
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: !_ctx.appendToBody
      }, [
        createVNode(Transition, {
          name: unref(ns).b("fade"),
          onAfterEnter: unref(afterEnter),
          onAfterLeave: unref(afterLeave),
          onBeforeLeave: unref(beforeLeave),
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createVNode(unref(ElOverlay), {
              mask: _ctx.modal,
              "overlay-class": _ctx.modalClass,
              "z-index": unref(zIndex),
              onClick: unref(onModalClick)
            }, {
              default: withCtx(() => [
                createVNode(unref(ElFocusTrap), {
                  loop: "",
                  trapped: unref(visible),
                  "focus-trap-el": drawerRef.value,
                  "focus-start-el": focusStartRef.value,
                  onFocusAfterTrapped: unref(onOpenAutoFocus),
                  onFocusAfterReleased: unref(onCloseAutoFocus),
                  onFocusoutPrevented: unref(onFocusoutPrevented),
                  onReleaseRequested: unref(onCloseRequested)
                }, {
                  default: withCtx(() => [
                    createElementVNode("div", mergeProps({
                      ref_key: "drawerRef",
                      ref: drawerRef,
                      "aria-modal": "true",
                      "aria-label": _ctx.title || void 0,
                      "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                      "aria-describedby": unref(bodyId)
                    }, _ctx.$attrs, {
                      class: [unref(ns).b(), _ctx.direction, unref(visible) && "open"],
                      style: unref(isHorizontal) ? "width: " + unref(drawerSize) : "height: " + unref(drawerSize),
                      role: "dialog",
                      onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                      }, ["stop"]))
                    }), [
                      createElementVNode("span", {
                        ref_key: "focusStartRef",
                        ref: focusStartRef,
                        class: normalizeClass(unref(ns).e("sr-focus")),
                        tabindex: "-1"
                      }, null, 2),
                      _ctx.withHeader ? (openBlock(), createElementBlock("header", {
                        key: 0,
                        class: normalizeClass(unref(ns).e("header"))
                      }, [
                        !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                          key: 0,
                          close: unref(handleClose),
                          titleId: unref(titleId),
                          titleClass: unref(ns).e("title")
                        }, () => [
                          !_ctx.$slots.title ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            id: unref(titleId),
                            role: "heading",
                            "aria-level": _ctx.headerAriaLevel,
                            class: normalizeClass(unref(ns).e("title"))
                          }, toDisplayString(_ctx.title), 11, _hoisted_2)) : createCommentVNode("v-if", true)
                        ]) : renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
                          createCommentVNode(" DEPRECATED SLOT ")
                        ]),
                        _ctx.showClose ? (openBlock(), createElementBlock("button", {
                          key: 2,
                          "aria-label": unref(t)("el.drawer.close"),
                          class: normalizeClass(unref(ns).e("close-btn")),
                          type: "button",
                          onClick: _cache[0] || (_cache[0] = (...args) => unref(handleClose) && unref(handleClose)(...args))
                        }, [
                          createVNode(unref(ElIcon), {
                            class: normalizeClass(unref(ns).e("close"))
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(close_default))
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ], 10, _hoisted_3)) : createCommentVNode("v-if", true)
                      ], 2)) : createCommentVNode("v-if", true),
                      unref(rendered) ? (openBlock(), createElementBlock("div", {
                        key: 1,
                        id: unref(bodyId),
                        class: normalizeClass(unref(ns).e("body"))
                      }, [
                        renderSlot(_ctx.$slots, "default")
                      ], 10, _hoisted_4)) : createCommentVNode("v-if", true),
                      _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
                        key: 2,
                        class: normalizeClass(unref(ns).e("footer"))
                      }, [
                        renderSlot(_ctx.$slots, "footer")
                      ], 2)) : createCommentVNode("v-if", true)
                    ], 16, _hoisted_1)
                  ]),
                  _: 3
                }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [
              [vShow, unref(visible)]
            ])
          ]),
          _: 3
        }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ], 8, ["disabled"]);
    };
  }
});
var Drawer = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "drawer.vue"]]);
const ElDrawer = withInstall(Drawer);
const _sfc_main$1 = {
  __name: "settingDrawer",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const { setLocale } = useI18n();
    const drawerVisible = ref(false);
    const handleClose = (done) => {
      done();
    };
    const showDrawer = () => {
      drawerVisible.value = true;
    };
    __expose({
      showDrawer
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_drawer = ElDrawer;
      const _component_NuxtImg = __nuxt_component_0;
      _push(ssrRenderComponent(_component_el_drawer, mergeProps({
        modelValue: unref(drawerVisible),
        "onUpdate:modelValue": ($event) => isRef(drawerVisible) ? drawerVisible.value = $event : null,
        direction: "ltr",
        "before-close": handleClose,
        "destroy-on-close": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center" data-v-f0409e38${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/logo-ico-black.png",
              alt: "Logo",
              class: "h-[28px]"
            }, null, _parent2, _scopeId));
            _push2(`<div class="font-bold md:text-2xl text-lg pl-4" data-v-f0409e38${_scopeId}>FUHSI</div></div><div class="asd-i18n flex py-2 md:py-4" data-v-f0409e38${_scopeId}><div class="flex-1 text-center cursor-pointer hover:font-bold" data-v-f0409e38${_scopeId}>En</div><div class="bg-[#000000] w-[1px]" data-v-f0409e38${_scopeId}></div><div class="flex-1 text-center cursor-pointer hover:font-bold" data-v-f0409e38${_scopeId}>\u4E2D</div></div><div class="p-4 text-base" data-v-f0409e38${_scopeId}>${ssrInterpolate(_ctx.$t("avatar.moreCreativeTools"))}</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center" }, [
                createVNode(_component_NuxtImg, {
                  src: "/img/logo-ico-black.png",
                  alt: "Logo",
                  class: "h-[28px]"
                }),
                createVNode("div", { class: "font-bold md:text-2xl text-lg pl-4" }, "FUHSI")
              ]),
              createVNode("div", { class: "asd-i18n flex py-2 md:py-4" }, [
                createVNode("div", {
                  class: "flex-1 text-center cursor-pointer hover:font-bold",
                  onClick: ($event) => unref(setLocale)("en-US")
                }, "En", 8, ["onClick"]),
                createVNode("div", { class: "bg-[#000000] w-[1px]" }),
                createVNode("div", {
                  class: "flex-1 text-center cursor-pointer hover:font-bold",
                  onClick: ($event) => unref(setLocale)("zh-CN")
                }, "\u4E2D", 8, ["onClick"])
              ]),
              createVNode("div", { class: "p-4 text-base" }, toDisplayString(_ctx.$t("avatar.moreCreativeTools")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/avatar/settingDrawer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f0409e38"]]);
const _sfc_main = {
  __name: "avatar",
  __ssrInlineRender: true,
  setup(__props) {
    const asdRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_3$1;
      const _component_NuxtImg = __nuxt_component_0;
      const _component_el_backtop = ElBacktop;
      const _component_AvatarSettingDrawer = __nuxt_component_3;
      _push(`<!--[--><div class="gd-container flex flex-col lg:flex-row" data-v-7b9a2cec><div class="avatar-left w-full lg:w-[308px] p-2" data-v-7b9a2cec><div class="flex" data-v-7b9a2cec>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "line-md:menu",
        class: "md:text-2xl text-lg cursor-pointer",
        onClick: ($event) => unref(asdRef).showDrawer()
      }, null, _parent));
      _push(`<div class="flex-1" data-v-7b9a2cec><div class="flex items-center justify-center pt-1" data-v-7b9a2cec>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/logo-ico-black.png",
        alt: "Logo",
        class: "h-[21px]"
      }, null, _parent));
      _push(`<div class="font-bold md:text-xl text-base pl-4" data-v-7b9a2cec>FUHSI</div></div><div class="text-center md:text-xl text-lg tracking-widest font-bold" data-v-7b9a2cec>Avatar Studio</div></div></div></div><main class="flex-1" style="${ssrRenderStyle({ "z-index": "1" })}" data-v-7b9a2cec>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><div class="w-full lg:w-[221px]" data-v-7b9a2cec>right</div></div>`);
      _push(ssrRenderComponent(_component_el_backtop, {
        right: 30,
        bottom: 40
      }, null, _parent));
      _push(ssrRenderComponent(_component_AvatarSettingDrawer, {
        ref_key: "asdRef",
        ref: asdRef
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const avatar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7b9a2cec"]]);

export { avatar as default };
//# sourceMappingURL=avatar-Bd7WI60x.mjs.map

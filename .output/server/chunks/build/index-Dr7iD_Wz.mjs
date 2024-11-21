import { a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { u as useHead } from './index-CJvq7goD.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    useHead({
      titleTemplate: (productCategory) => {
        const baseTitle = "galgame.ai";
        return `${baseTitle}${productCategory ? " - " + productCategory : ""}`;
      }
    });
    ref([
      { src: "https://s3-alpha-sig.figma.com/img/a64a/7e6b/3404b88c02da7c4dc61128bc7f13a8b4?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yc6e8i1CGvutbgQ3gLh35zLmSjOc6sLCYIiWe9V1N2TowiXFpkrNYxWt4~VCfP7yd9jLE9l1dcprd8rO5T~GM~tSziSqCi4kdHyf-q-Lqno98nU7geMRz-0Q2jdkl81GTLMJ7uAIhgALCPbtIFZqfSYW4b7YRc~t3enZYe29d8Et18fKYNPv4mWodk9DvGjYURtxD~9HWUpIP-aYvX8LveSNc7sDOetOw482oQWoPAMIzMabcXY1IVes8FPTXoUWMVF6Y~-EmruK-vnLXsy2EFuyYSjH0KJQZ4wdEg4JpGwqqFcXQetTU~fvOqGobA-qDxbgmPKoeYZzN6XoYFpOug__" },
      { src: "https://s3-alpha-sig.figma.com/img/ae7d/59d3/722770e56711f293f190f82e1ab9319b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McLtEaPplYZ-O8k7NRiEM-VqlPZqakMDVZR6Zzauk5s6asczazxREOjX~34NTPaD04OmkeP-w2B6vfAp6mG0Ym9DjV97xaOTh8r32bqnqmv8S8hi93i2XsgzBfH6bztqUPQ0tCu9vRwF1nx4uFSYbLkDdTm8pzogiUOF435TVXHKjVO3H7i3Q5uyt5N7YQY89TI2piklWyjuCYsX--Sh3VYFkG~i2RIJjfvlaqGZctMt1jDJ2i~JjZup2gf~if-rX6FjpJFSjBQocagPD4t6XJmbd41FfnKOPrC8sg98g-Wa3ZqJfVyQ5Ee54IgopucvAJqMEZ4HSUNWrqkg88yy0A__" },
      { src: "https://s3-alpha-sig.figma.com/img/35d7/baca/2777c2a4da3b97debb4e46c4fbd158a4?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EecNJn2J8vTvl276Ox6gIsoySqPl0pbZzELcNZDkrnBLlSTKslmz40dKMjM6JOezyXi~V4WRQa42A1amnkBB9zXc6brOYicMZdJWS1d813cDqkB3khl0LDhC4FhvMHaTuFZt4XJHC70myhC~wN-8n20mQqgw4D8gMgV7ttZhnYb6v4U4kuCl7guPfAy-FkvyyA7CmVYQkYksTvPt4k0NOCumohV55aQqbqzFoTQnnrml6VjVx9V7CgOhl3VVXRKuHjmHGmuZ0EPuoKumyxa-WzcC1ZUuDkyJaOKCZoB9YSYTBkMaVo4kM3YgDKERJSGBXVMmY0jpDBbz5Fye4FeUdg__" },
      { src: "https://s3-alpha-sig.figma.com/img/53f6/103d/c6813f2470485e28ca28e3761d3c7cb2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=beK8XlDTP9311lVxDSfdnNUDrGLWfhqYfMe5C~tTrDmebf~KATfNJ376bfNdc-CuepWPBUcGpOFTWiXtiQ5zymyZH4X3LT2uZNOL~I5zyq1znW0toEOwbpxcs9jsXQJMR8LzdRt64YpzpmUHAcFiIk5hsB47rJ03WfH3U~ONTryey~ZNbPd3mgZoWBGUfubs1Qmdl6K3Tp2B7YdaZVucN-Is4SMPOM8lNwv8xTYWKq7geeTGvLrElY2Knf6NhZsg5Z7TAp4MLBR5Fb~xegw0FpIheuxNwJIXSOKJ6X1jTMG8FSeT-P-rM1m~zDhDWckqpuCxjZnAyVGblFnV8zt7fA__" },
      { src: "https://s3-alpha-sig.figma.com/img/bbe6/ac03/423ca82d027cdbd1bd65ed36a415681f?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hIkFl0Cey-OAXlsP9thgRzTRnljZ7Hvo7p0CLW8UHV85Coc6eYuob9635Gtevx70K4MAdKsX0B4Shc7nrVKO0J6sQtnrAs~FxgTa8aFoZni5LGp9~rJN6Fx2Ek50TaRII1zt4aAs5TBmE6UzgzmWb8sIveX9uppJkV5WW3niy5mMmm~ID8BYW4Kdo4Www20yW8JMHKpXYGpzXL13axrIETQMUnEXjRgG4ER-pdWCkLLRJ88G2aOOpbPPfk5i2FWhRfxp3M-Ad8jy-TU7ulzeIprNad6NeW06xkzThbY2YyZCWgUHClcIX4xdrDZYUZcX9zeJwABuKtb3987C5sQ7EA__" },
      { src: "https://s3-alpha-sig.figma.com/img/833a/efa6/be95b4050938455b682b50398881506b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i3ydyEtuk9pofRxO8xRS3rtGEZ7~AGtvgkXc~qBoHvawAzBKvgnx3xfaqvkuq8LnHKyH0sRV6bWr9QWp7l~XCYfhTvkgOAfL99TfBf~Iw~nRLq5pGR0-7Og47gMPYs3Y2B8TMShN9kbevmC~VfE8ujQQtMYjL0cZ3cHS-U2m9ZX4XDpWjGN6WQUgjKPA3aTGGz3OT3JkE5AVEKms5SdeobyvR8W7mYurw~Y69kaV979bjV~QuJpFrWY-cywNkXkuUzVz1GpMb7hFXh2PZiPGonbfqRP05QkNJvxCm0b-rPkD3ISuj5WBi-asBUGyg2D4n3T2SWrD-HkVK5lQxaKlXw__" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "waterfall-container" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/avatar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dr7iD_Wz.mjs.map
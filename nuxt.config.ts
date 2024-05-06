export default defineNuxtConfig({
    // ssr: false,
    nitro: {
        // plugins: ['~/server/database.ts'],
        // 代理配置
        devProxy: {
            "/proxy/weixin": {
                target: "https://mp.weixin.qq.com/",
                changeOrigin: true,
            },
        },
    },
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1.0",
            meta: [
                { name: "description", content: "fuhsi.ai" },
                {
                    name: "keywords",
                    content: "fuhsi.ai",
                },
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
            ],
            noscript: [{ children: "JavaScript is required" }]
        }
    },
    css: [
        "@/assets/main.scss"
    ],
    plugins: [
        "@/plugins/directives",
    ],
    modules: [
        "@element-plus/nuxt",
        "@nuxt/image",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/i18n'
    ],
    tiptap: {
        prefix: "Tiptap", //prefix for Tiptap imports, composables not included
    },
    elementPlus: {
        icon: "ElIcon",
    },
    vite: {
        // 打包后清除console和debugger，注意：server下文件的不会删除
        esbuild: {
          // drop: ["console", "debugger"],
        },
    },
    postcss: {
        plugins: {
          "postcss-preset-env": {
                stage: 1,
                // 自动补全CSS前缀
                autoprefixer: {
                    overrideBrowserslist: [
                        "> 0%", // 表示支持市面上多少比例的浏览器
                        // "Android > 4.1",
                        // "iOS > 7.1",
                        // "Chrome > 31",
                        // "ff > 31",
                        // "ie >= 10",
                        //'last 2 versions', // 所有主流浏览器最近2个版本
                    ],
                    grid: true,
                },
            }
        },
    },
    render: {
        csp: {
            policies: {
                'script-src': ["'self'", "'unsafe-eval'"],
            },
        },
    },
    i18n: {
        lazy: true,
        // 使用组件级别的翻译
        vueI18nLoader: true,
        // 设置翻译文件目录, 从项目根目录开始查找，通常来说是 locales
        langDir: 'locales/',
        // 设置翻译策略, 不同策略对应不同行为，如果我们希望在路由上添加翻译类型作为前缀，例如：/zh/home，可以使用 prefix_except_default
        strategy: 'no_prefix',
        // 默认语言
        defaultLocale: 'en-US',
        detectBrowserLanguage: false,
        // 支持的翻译语言
        locales: [
            { code: "en-US", iso: 'en-US', name: "English(US)", file: "en-US.ts" },
            { code: "zh-CN", iso: 'zh-Hans', name: "简体中文", file: "zh-CN.ts", }
        ],
        // 启用浏览器语言检测，以便在访问者第一次访问您的站点时自动将其重定向到首选语言环境。
        // nuxt-i18n 会在 cookie 中添加一个用于存储当前语言环境的变量，当我们修改语言时，nuxt-i18n 会更新它
        // detectBrowserLanguage: {
        //     // 启动 cookie
        //     useCookie: true,
        //     // 用于存储当前语言环境的变量名
        //     cookieKey: 'currentLang',
        //     // (建议用于改进SEO) -仅检测站点根路径(/)上的浏览器区域设置。只有当使用策略而不是“no_prefix”时才有效。
        //     redirectOn: 'root',
        // }
    },
    build: {
        loaders: {
            fontUrl: {
                limit: 10000,
                types: ['ttf', 'woff', 'woff2'],
            }
        },
    }
});

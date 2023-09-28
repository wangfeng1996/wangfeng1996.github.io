import {sidebar} from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
// children: [
//   "Applist.md",
//   "ChatGPT.md",
//   "design.md",
//   "AppNotes.md",
//   "Chrome.md",
//   {
//     text: "直播手册",
//     icon: "load",
//     prefix: "livestreaming/",
//     link: "",
//     collapsible: true,
//     children: "structure",
//   },
//   {
//     text: "java新特性",
//     icon: "load",
//     prefix: "new-features/",
//     link: "",
//     collapsible: true,
//     children: "structure",
//   },
// ],
//at.alicdn.com/t/c/font_4268651_rvevxmvpxb.js
export default sidebar([
    // "/DailyRoutine",
    // "/Fitness",
    // 读书笔记架构更换到 docsify，不能使用相对链接
    // {text: "读书笔记", icon: "read", link: "https://newzone.top/reading/"},
    // 指定显示页面
    "home",
    {
        text: " java",
        icon: "java",
        prefix: "/java/",
        link: "",
        collapsible: true,
        children: [
            {
                text: "java新特性",
                icon: "star",
                prefix: "new-features/",
                link: "",
                collapsible: true,
                children: "structure",
            },
        ],
    },
    {
        text: "开发工具",
        icon: "tool",
        prefix: "/develop/",
        link: "",
        collapsible: true,
        children: [
            {
                text: "idea",
                icon: "intellijidea",
                prefix: "idea/",
                link: "",
                collapsible: true,
                children: "structure",
            },
            {
                text: "Homebrew",
                icon: "pijiu",
                prefix: "homebrew/",
                link: "",
                collapsible: true,
                children: "structure",
            },
            {
                text: "iterm2",
                icon: "zhongduan",
                prefix: "iterm2/",
                link: "",
                collapsible: true,
                children: "structure",
            },
            {
                text: "网络",
                icon: "neiwang",
                prefix: "network/",
                link: "",
                collapsible: true,
                children: ["ngrok.md"],
            },
        ],
    },
    {
        text: "🏗️ 网站部署",
        icon: "",
        prefix: "/deploy/",
        link: "",
        collapsible: true,
        children: "structure",
    },
    {
        text: "代码学习",
        icon: "code",
        prefix: "/code/",
        link: "",
        collapsible: true,
        children: [
            {
                text: "算法",
                icon: "sf",
                collapsible: true,
                children: ["algorithm.md"],
            }
        ],
    },
    {
        text: "操作系统",
        icon: "caozuoxitong",
        prefix: "/services/",
        link: "",
        collapsible: true,
        children: "structure",
    }

    // {
    //     text: "🪟 系统问题",
    //     icon: "",
    //     prefix: "/windows/",
    //     link: "",
    //     collapsible: true,
    //     children: "structure",
    // },
    // {
    //     text: "🛖 生活记录",
    //     icon: "",
    //     prefix: "/family/",
    //     link: "",
    //     collapsible: true,
    //     children: "structure",
    // },
]);

import { navbar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "首页", icon: "home", link: "/README" },
  {
    text: "代码",
    icon: "code",
    prefix: "/",
    children: [
      // // "code/Markdown",
      // // "code/AutoHotkey",
      // // "code/Electron",
      // {
      //   text: "页面开发",
      //   icon: "vue",
      //   prefix: "",
      //   children: [],
      // },
    ],
  },
  {
    text: "应用",
    icon: "app",
    prefix: "/",
    children: [
      // "apps/Applist",
      // {
      //   text: "直播手册",
      //   icon: "quote",
      //   link: "apps/livestreaming/1_obs_basic",
      // },
      // {
      //   text: "服务/系统",
      //   icon: "any",
      //   prefix: "",
      //   children: ["services/NAS", "windows/faq"],
      // },
    ],
  },
  {
    text: "生活",
    icon: "emmet",
    prefix: "/family/",
    children: [],
  },
  {
    text: "工具",
    icon: "tool",
    children: [
      // {
      //   text: "ChatGPT SC",
      //   icon: "creative",
      //   link: "https://www.aishort.top/",
      // },
      // { text: "IMGPrompt", icon: "pic", link: "https://prompt.newzone.top/" },
      // { text: "文字处理", icon: "others", link: "https://tools.newzone.top/" },
      // {
      //   text: "工具收藏",
      //   icon: "categoryselected",
      //   link: "https://nav.newzone.top/",
      // },
    ],
  },
  {
    text: "网站相关",
    icon: "info",
    children: [
    ],
  },
]);

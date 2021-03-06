module.exports = {
  base: '/TS_zxc/', /* 基础虚拟路径 */
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: 'TypeScript 快速上手', // 标题
  description: '尚硅谷前端研究院', // 标题下的描述
  themeConfig: { // 主题配置
    logo: '/logo.png',
    nav: [
      { text: '官网', link: 'http://www.atguigu.com' },
      { text: '谷粒学院', link: 'http://www.gulixueyuan.com/' },
      { 
        text: '学习路线', 
        items: [
          { text: '前端', link: 'http://www.atguigu.com/web/' },
          { text: 'Java', link: 'http://www.atguigu.com/kecheng.shtml' },
          { text: '大数据', link: 'http://www.atguigu.com/bigdata/' }
        ] 
      },
    ],
    sidebar: [ // 左侧导航
      {
        title: '初识 TypeScript', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          'chapter1/01_初识TS',
          'chapter1/02_安装TS',
          'chapter1/03_HelloWorld',
          'chapter1/04_webpack打包',
        ]
      },
      {
        title: 'TypeScript 常用语法',
        collapsable: false,
        children: [
          'chapter2/1_type',
          'chapter2/2_interface',
          'chapter2/3_class',
          'chapter2/4_function',
          'chapter2/5_generic',
          'chapter2/6_other',
        ]
      },
      {
        title: '快速搭建在线文档网站',
        collapsable: false,
        children: [
          'chapter3/',
        ]
      },
    ]
  },

  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./favicon.ico` }]
  ]
}
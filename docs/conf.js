docute.init({
    debug: true,
    //url: docute.isDev ? location.origin : 'http://localhost:8080',
    //routerMode: 'history',
    announcement: {
        type: 'warning', // warning | danger | success | primary
        html: 'This doc is out-dated!'
    },
    plugins: [
        docuteEmojify(),
    ],
    nav: [
        {title: '主页', path: '/'},
        {title: '开源项目', path: '/code/index'},
        {title: '关于我', path: '/about/index'}
    ],
    icons: [
        {
            icon: 'github',
            label: '关注我的Github',
            link: 'https://github.com/helpcode'
        },
        {
            label: '微博',
            svgId: 'i-weibo',
            link: 'http://weibo.com/u/5625391606'
        }
    ]
});
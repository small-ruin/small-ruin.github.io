module.exports = {
    title: '小废墟',
    description: '小废墟的房规',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'hilshire的房规', link: '/hilshire/'}
        ],
        sidebar: [
            {
                title: '合榭的房规',
                path: '/hilshire/',
                children: [
                    {
                        title: '规则变化',
                        path: '/hilshire/house-rule/',
                        children: [
                            {
                                title: '法术',
                                path: '/hilshire/house-rule/spell'
                            },
                            {
                                title: '职业',
                                path: '/hilshire/house-rule/class'
                            },
                            {
                                title: '阵营',
                                path: '/hilshire/house-rule/alignment'
                            },
                        ]
                    },

                    {
                        title: 'PF补充规则',
                        path: '/hilshire/pf/',
                        children: [
                            {
                                title: '职业',
                                path: '/hilshire/pf/class/',
                                children: [
                                    {
                                        title: '炼金术士',
                                        path: '/hilshire/pf/class/Alchemist/',
                                        children: [
                                            {
                                                title: '科研发明',
                                                path: '/hilshire/pf/class/Alchemist/Discovery'
                                            },
                                            {
                                                title: '合成公式',
                                                path: '/hilshire/pf/class/Alchemist/Spell'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
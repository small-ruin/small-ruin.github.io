module.exports = {
    title: '小废墟',
    description: '小废墟的房规',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'hilshire的房规', link: '/hilshire/'},
            { text: '3r人物卡生成工具', link: 'https://small-ruin.github.io/cg/'}
        ],
        sidebar: [
            {
                title: '合榭的房规',
                collapsable: false,
                path: '/hilshire/',
                children: [
                    {
                        title: '规则变化',
                        path: '/hilshire/house-rule/',
                        collapsable: false,
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
                        collapsable: false,
                        children: [
                            {
                                title: '职业',
                                path: '/hilshire/pf/class/',
                                collapsable: false,
                                children: [
                                    {
                                        title: '炼金术士',
                                        collapsable: false,
                                        path: '/hilshire/pf/class/Alchemist/',
                                        children: [
                                            {
                                                title: '炼金专长',
                                                path: '/hilshire/pf/class/Alchemist/AlchemistFeats'
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                title: '炼金物品',
                                collapsable: false,
                                path: '/hilshire/pf/AlchemicalItems/',
                                children: [
                                    {
                                        title: '炼金炸弹',
                                        path: '/hilshire/pf/AlchemicalItems/AlchemicalBombs'
                                    },
                                    {
                                        title: '炼金灵药',
                                        path: '/hilshire/pf/AlchemicalItems/AlchemicalElixirs'
                                    },
                                    {
                                        title: '炼金毒素',
                                        path: '/hilshire/pf/AlchemicalItems/AlchemicalPoisons'
                                    },
                                    {
                                        title: '炼金工具',
                                        path: '/hilshire/pf/AlchemicalItems/AlchemicalTools'
                                    },
                                ]
                            }
                        ]
                    },

                    {
                        title: '私设：无冕者之书',
                        path: '/hilshire/theBookOfUncrown/',
                        collapsable: false,
                    }
                ]
            }
        ]
    }
}
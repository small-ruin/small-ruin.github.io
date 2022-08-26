module.exports = {
    title: '小废墟',
    description: '小废墟的房规',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'hilshire的房规', link: '/hilshire/'},
            { text: '3r人物卡生成工具', link: 'https://small-ruin.github.io/cg/'},
            { text: '3r法术速查', link: 'https://small-ruin.github.io/spells/'}
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
                                path: '/hilshire/house-rule/class',
                                collapsable: true,
                                children: [
                                    { 
                                        title: '野蛮人',
                                        path: '/hilshire/house-rule/class/Barbarian'
                                    },
                                    { 
                                        title: '吟游诗人',
                                        path: '/hilshire/house-rule/class/Bard'
                                    },
                                    { 
                                        title: '牧师',
                                        path: '/hilshire/house-rule/class/Cleric'
                                    },
                                    { 
                                        title: '战士',
                                        path: '/hilshire/house-rule/class/Fighter'
                                    },
                                    { 
                                        title: '武僧',
                                        path: '/hilshire/house-rule/class/Monk'
                                    },
                                    { 
                                        title: '圣骑士',
                                        path: '/hilshire/house-rule/class/Paladin'
                                    },
                                    {
                                        title: '巡林客',
                                        path: '/hilshire/house-rule/class/Ranger'
                                    },
                                    {
                                        title: '游荡者',
                                        path: '/hilshire/house-rule/class/Rogue'
                                    },
                                    {
                                        title: '术士',
                                        path: '/hilshire/house-rule/class/Sorcerer'

                                    },

                                ]
                            },
                            {
                                title: '专长',
                                path: '/hilshire/house-rule/fates/',
                                collapsable: true,
                                children: [
                                    {
                                        title: 'CRB',
                                        path: '/hilshire/house-rule/fates/CRB'
                                    },
                                    {
                                        title: 'APG',
                                        path: '/hilshire/house-rule/fates/APG'
                                    },
                                    {
                                        title: 'UM',
                                        path: '/hilshire/house-rule/fates/UM' 
                                    }
                                ]
                            },
                            {
                                title: '阵营',
                                path: '/hilshire/house-rule/alignment'
                            },
                        ]
                    },
                    {
                        title: 'PF2补充规则',
                        path: '/hilshire/pf/',
                        collapsable: false,
                        children: [
                            {
                                title: '职业',
                                path: '/hilshire/pf/class/',
                                collapsable: true,
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
                                collapsable: true,
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
                            },
                            {
                                title: '扩展',
                                collapsable: true,
                                path: '/hilshire/pf/supplement/',
                                children: [
                                    {
                                        title: 'APG',
                                        path: '/hilshire/pf/supplement/APG'
                                    }
                                ]
                            },
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
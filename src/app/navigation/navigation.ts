export const navigation = [
    {
        'id'   : 'home',
        'title': 'Home',
        'type' : 'item',
        'icon' : 'home',
        'url'  : '/home',
    },    
    {
        'id'      : 'projects',
        'title'   : 'Projects',
        'type'     : 'collapse',
        'icon'     : 'code',
        'children': [    
            {
                'id'   : 'githum',
                'title': 'Github',
                'type' : 'item',                
                'url'  : '/github',
                'badge': {
                    'title': 112,
                    'bg'   : '#525e8a',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'conversant',
                'title': 'Conversant',
                'type' : 'item',                
                'url'  : '/project/conversant'
            },
            {
                'id'   : 'daytrader',
                'title': 'DayTrader.ai',
                'type' : 'item',                
                'url'  : '/project/daystrader'
            },
            {
                'id'   : 'playquest',
                'title': 'PlayQuest',
                'type' : 'item',                
                'url'  : '/project/playquest'
            },
            {
                'id'   : 'flexfwd',
                'title': 'FlexFWD',
                'type' : 'item',                
                'url'  : '/project/flexfwd'
            },
            {
                'id'   : 'frost',
                'title': 'Frost',
                'type' : 'item',                
                'url'  : '/project/frost'
            },
            {
                'id'   : 'aftercad',
                'title': 'AfterCAD',
                'type' : 'item',                
                'url'  : '/project/aftercad'
            },
            {
                'id'   : 'cg',
                'title': 'Computer Graphics',
                'type' : 'item',                
                'url'  : '/project/cg'
            },
        ]
    },
    {
        'id'      : 'ml',
        'title'   : 'Machine Learning',
        'type'     : 'collapse',
        'icon'     : 'functions',
        'children': [
            {
                'id'   : 'stock_mlp',
                'title': 'Stock MLP',
                'type' : 'item',                
                'url'  : '/project/stock_mlp'
            },
        ]
    },
    {
        'id'      : 'lab',
        'title'   : 'Lab',
        'type'     : 'collapse',
        'icon'     : 'build',
        'children': [
            {
                'id'   : 'coding',
                'title': 'Coding Questions',
                'type' : 'item',                
                'url'  : '/questions'
            },
        ]
    },
    {
        'id'      : 'games',
        'title'   : 'Games',
        'type'     : 'collapse',
        'icon'     : 'games',
        'children': [
            {
                'id'   : 'game1',
                'title': 'Introduction',
                'type' : 'item',                
                'url'  : '/projects'
            },
        ]
    },    
    {
        'id'      : 'design',
        'title'   : 'Design',
        'type'     : 'collapse',
        'icon'     : 'image',
        'children': [
            {
                'id'   : 'design1',
                'title': 'Introduction',
                'type' : 'item',                
                'url'  : '/projects'
            },
        ]
    }
];

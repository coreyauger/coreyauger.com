export const navigation = [
    {
        'id'   : 'home',
        'title': 'Home',
        'type' : 'item',
        'icon' : 'home',
        'url'  : '/home',
    },    
    {
        'id'   : 'sample',
        'title': 'Sample',
        'translate': 'NAV.SAMPLE.TITLE',
        'type' : 'item',
        'icon' : 'email',
        'url'  : '/sample',      
    },
    {
        'id'      : 'projects',
        'title'   : 'Projects',
        'type'    : 'group',
        'children': [
            {
                'id'   : 'intro',
                'title': 'Introduction',
                'type' : 'item',                
                'url'  : '/projects'
            },
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
            }
        ]
    }
];

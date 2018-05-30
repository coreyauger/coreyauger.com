export const navigation = [
    {
        'id'   : 'home',
        'title': 'Home',
        'type' : 'item',
        'icon' : 'home',
        'url'  : '/home',
    },    
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'translate': 'NAV.APPLICATIONS',
        'type'    : 'group',
        'children': [
            {
                'id'   : 'sample',
                'title': 'Sample',
                'translate': 'NAV.SAMPLE.TITLE',
                'type' : 'item',
                'icon' : 'email',
                'url'  : '/sample',
                'badge': {
                    'title': 25,
                    'translate': 'NAV.SAMPLE.BADGE',
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            }
        ]
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
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            }
        ]
    }
];

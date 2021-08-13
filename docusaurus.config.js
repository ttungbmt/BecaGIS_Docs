const lightCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Docs',
    tagline: 'Dinosaurs are cool',
    url: 'https://ttungbmt.com.github.io',
    baseUrl: '/BecaGIS_Docs/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'ttungbmt', // Usually your GitHub org/user name.
    projectName: 'BecaGIS_Docs', // Usually your repo name.
    themeConfig: {
        algolia: {
            apiKey: 'b9b0e83a62b6773ef2bc8a39a4054759',
            indexName: 'becagis_docs',
            contextualSearch: true,
        },
        navbar: {
            hideOnScroll: true,
            title: 'Docs',
            logo: {
                alt: 'Docs Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    position: 'left',
                    label: 'Projects',
                    items: [
                        {label: "BecaGIS GeoPortal", to: "docs/projects/geoportal"},
                        {label: "BecaGIS Maps", to: "docs/projects/maps"},
                        {label: "BecaGIS API", to: "docs/projects/api"},
                        {label: "Guest Server", to: "docs/projects/server"},
                    ]
                },

                {
                    position: 'left',
                    label: 'GIS',
                    to: 'docs/gis',
                    items: [
                        {label: 'Geonode', to: 'docs/gis/geonode'},
                        {label: 'Geoserver', to: 'docs/gis/geoserver'},
                        {label: 'ArcGIS', to: 'docs/gis/arcgis'},
                        {label: 'QGIS', to: 'docs/gis/qgis'},
                    ]
                },
                {
                    position: 'left',
                    label: 'Frontend',
                    items: [
                        {label: 'Design', to: 'docs/frontend/design'},
                        {label: 'React', to: 'docs/frontend/reactjs'},
                        {label: 'Vue', to: 'docs/frontend/vuejs'},
                        {label: 'Alpine', to: 'docs/frontend/alpinejs'},
                    ]
                },
                {
                    position: 'left',
                    label: 'Backend',
                    items: [
                        {label: 'Laravel', to: 'docs/backend/laravel'},
                        {label: 'Django', to: 'docs/backend/django'},
                    ]
                },
                {
                    position: 'left',
                    label: 'Database',
                    items: [
                        {label: "PostgreSQL", to: "docs/database/postgresql"},
                        {label: "MySQL", to: "docs/database/mysql"},
                    ]
                },
                {
                    position: 'left',
                    label: 'OS',
                    items: [
                        {label: "Ubuntu", to: "docs/os/ubuntu"},
                        {label: "Windows", to: "docs/os/windows"},
                    ]
                },
                {
                    position: 'left',
                    label: 'Development',
                    items: [
                        {label: "Docker", to: "docs/dev/docker"},
                        {label: "GitLab", to: "docs/dev/gitlab"},
                        {label: "GitHub", to: "docs/dev/github"},
                    ]
                },
                {
                    position: 'left',
                    label: 'Other',
                    items: [
                        {label: 'Elasticsearch', to: 'docs/other/elasticsearch'},
                    ]
                },
                {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            // theme: lightCodeTheme,
            // darkTheme: darkCodeTheme,
            // theme: require('./src/js/monokaiTheme.js'),
            additionalLanguages: ['powershell', 'php', 'nginx', 'ini'],
        },
        hideableSidebar: true,
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                debug: true,
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/ttungbmt/BecaGIS_Docs/tree/master/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/ttungbmt/BecaGIS_Docs/tree/master/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],

    plugins: ['@docusaurus/plugin-ideal-image'],
};

// @ts-check
import {
    defineConfig
} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'chocolily',
            social: {
                twitter: 'https://x.com/Choco_Lily__',
                github: 'https://github.com/choco-lily/chocolily.dev',
            },
            sidebar: [{
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {
                            label: 'Example Guide',
                            slug: 'guides/example'
                        },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: {
                        directory: 'reference'
                    },
                },
            ],
            head: [{
                tag: 'script',
                attrs: {
                    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2420658305303725',
                    crossorigin: 'anonymous',
                    async: true,
                },
            }, ],
            customCss: ['./src/styles/custom.css'],
        }),
    ],
});
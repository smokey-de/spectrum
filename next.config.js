/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')

const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            loader: '@svgr/webpack',
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            options: {
                prettier: true,
                svgo: false,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'preset-default',
                            params: {
                                overrides: { removeViewBox: false },
                            },
                        },
                    ],
                },
                titleProp: false,
            },
        });

        return config;

    }
}

module.exports = nextTranslate(nextConfig)

// webpack(config) {
//     config.module.rules.push({
//         loader: '@svgr/webpack',
//         test: /\.svg$/i,
//         issuer: /\.[jt]sx?$/,
//         options: {
//             prettier: false,
//             svgo: true,
//             svgoConfig: {
//                 plugins: [
//                     {
//                         name: 'preset-default',
//                         params: {
//                             overrides: { removeViewBox: true },
//                         },
//                     },
//                 ],
//             },
//             titleProp: true,
//         },
//     });
//
//     return config;
//
// }

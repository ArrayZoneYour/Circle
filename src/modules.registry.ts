import * as React from 'react'
const context = require.context("./pages", true,  /\.tsx$/);
console.log(context)
console.log(context.keys())
const lazyModule = React.lazy(() => import('./pages/Home'))
console.log(lazyModule)
const module = context('./Home/index.tsx')['default']
console.log(module)
export const modules =
    Object.assign({},
        ...context.keys()
            .map(x => ({
                [x.replace(/\/index\.tsx/, '').replace(/^\./, '')]:
                React.lazy(() => import('./pages' + x.slice(1, -4)))
                    // context(x).hasOwnProperty('default') ? context(x)['default'] : context
            }))
    );

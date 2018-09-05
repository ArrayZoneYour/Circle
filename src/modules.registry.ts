const context = require.context("./pages", true,  /\.tsx$/);
export const modules =
    Object.assign({},
        ...context.keys()
            .map(x => ({
                [x.replace(/\/index\.tsx/, '').replace(/^\./, '')]:
                    context(x).hasOwnProperty('default') ? context(x)['default'] : context
            }))
    );

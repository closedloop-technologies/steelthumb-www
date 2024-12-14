
import type { Config } from "@react-router/dev/config";

// export default {
//     ssr: false,
// } satisfies Config;

export default {
    // all static route paths
    // (no dynamic segments like "/post/:slug")
    prerender: true,

    // any url
    //   prerender: ["/", "/blog", "/blog/popular-post"],

} satisfies Config;
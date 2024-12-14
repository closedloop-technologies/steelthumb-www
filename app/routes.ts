import { type RouteConfig } from "@react-router/dev/routes";
import { remixRoutesOptionAdapter } from "@react-router/remix-routes-option-adapter";

export default remixRoutesOptionAdapter((defineRoutes) => {
    return defineRoutes((route) => {
        route("/", "home/route.tsx", { index: true });
        //        route("about", "about/route.tsx");
        //        route("", "concerts/layout.tsx", () => {
        //            route("trending", "concerts/trending.tsx");
        //            route(":city", "concerts/city.tsx");
        //        });
    });
}) satisfies RouteConfig;

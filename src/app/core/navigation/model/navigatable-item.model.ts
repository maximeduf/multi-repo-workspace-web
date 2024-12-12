import { Route } from "@angular/router";

/**
 * Represents a route that can be navigated to within the application.
 * The missing path property from NavigationItem is defined in the Route interface.
 */
export interface RouteWithNavigation extends Route {
  data?: {
    navigation?: {
      fromComponent: string;
      label: string;
    };
  };
}

/**
 * Represents a collection of routes that can be navigated to within the application.
 *
 * @example
 * ```
 * export const routes: Routes = [
 * {
 *   path: "",
 *   component: HomeComponent,
 *   data: {
 *     navigation: {
 *       fromComponent: "NavComponent",
 *       label: "Home"
 *     }
 *   }
 * }] as RoutesWithNavigation;
 * ```
 * @see RouteWithNavigation
 */
export type RoutesWithNavigation = RouteWithNavigation[];

/**
 * Represents an item that can be routed to within the application.
 */
export type NavigationItem = {
  fromComponent: string;
  label: string;
  path: string;
};

/**
 * Represents a collection of items that can be routed to within the application.
 */
export type NavigationItems = NavigationItem[];

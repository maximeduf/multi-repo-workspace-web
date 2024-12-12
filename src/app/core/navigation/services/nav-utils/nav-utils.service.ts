import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  NavigationItem,
  NavigationItems,
  RoutesWithNavigation,
  RouteWithNavigation
} from "../../model/navigatable-item.model";

/**
 * Service for navigation utilities.
 * @method getNavItemsByComponent. Gets navigation items for the given component.
 */
@Injectable({
  providedIn: "root"
})
export class NavUtilsService {
  constructor(private _routerService: Router) {}

  /**
   * Gets navigation items for the given component.
   * @param component to get navigation items for.
   * @returns NavigationItems for the given component.
   */
  getNavItemsFor(component: string): NavigationItems {
    return this.filterRoutesFor(component).map(this.routeToNavigationItem);
  }

  /**
   * Filters routes for the given component
   * @param component  The component to filter routes for.
   * @returns The RoutesWithNavigation that match the given component.
   */
  private filterRoutesFor(component: string): RoutesWithNavigation {
    return (this._routerService.config as RouteWithNavigation[]).filter(
      (route) => {
        return route.data?.navigation?.fromComponent === component;
      }
    );
  }

  /**
   * Converts a RouteWithNavigation to a NavigationItem.
   * @param route The RouteWithNavigation to convert.
   * @returns The NavigationItem that represents the given RouteWithNavigation.
   */
  private routeToNavigationItem(route: RouteWithNavigation): NavigationItem {
    return {
      fromComponent: route.data?.navigation?.fromComponent ?? "Unknown",
      label: route.data?.navigation?.label ?? "Unknown",
      path: route.path ?? "Unknown"
    };
  }
}

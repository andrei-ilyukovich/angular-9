# Overview

`sdo-action-bar` - is an area for contextual page actions that controls the current loaded page (e.g. filters, save btn).
Styles:
The action bar is 4.6rem high and will expand the width of the page having a 1rem margin at the beginning and end.
1.4rem padding on left and right.

**Note:**  
by applying selectors `"right"`, `"left"` you can align action items to the left or to the right of the action bar area.
Also you may apply `.sdo-action-button` css class to action items to make them stretch and add border-left.

# API

## Directives

-   ### ActionBarComponent

Action bar component.

# Examples

-   Action Bar with material link buttons and button toggle group:

```html
<sdo-action-bar>
    <button
        class="sdo-action-button"
        mat-icon-button
        link-button
        (click)="onActionBtnClick($event)"
        left
    >
        <mat-icon svgIcon="shallow-hole-test"></mat-icon>
        Link
    </button>
    <button
        class="sdo-action-button"
        mat-icon-button
        link-button
        (click)="onActionBtnClick($event)"
        left
    >
        <mat-icon svgIcon="search"></mat-icon>
        Search
    </button>
    <mat-button-toggle-group value="2" (change)="onBtnGroupChange($event)" right>
        <span class="label">Sort by</span>
        <mat-button-toggle value="1">Date Added</mat-button-toggle>
        <mat-button-toggle value="2">Active</mat-button-toggle>
    </mat-button-toggle-group>
</sdo-action-bar>
```

-   Action Bar with <a> links and material button toggle group:

```html
<sdo-action-bar>
    <a
        class="sdo-link sdo-action-button"
        href="javascript:void(0)"
        (click)="onActionBtnClick($event)"
        left
    >
        <mat-icon svgIcon="shallow-hole-test"></mat-icon>Link
    </a>
    <a
        class="sdo-link sdo-action-button"
        href="javascript:void(0)"
        (click)="onActionBtnClick($event)"
        left
    >
        <mat-icon svgIcon="search"></mat-icon>Search
    </a>
    <mat-button-toggle-group value="2" (change)="onBtnGroupChange($event)" right>
        <span class="label">Sort by</span>
        <mat-button-toggle value="1">Date Added</mat-button-toggle>
        <mat-button-toggle value="2">Active</mat-button-toggle>
    </mat-button-toggle-group>
</sdo-action-bar>
```

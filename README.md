# List UI

The Predix Experience List UI module creates blocky, keyline-delimited list items. This module is a fork of the [inuitcss list-ui module](https://github.com/inuitcss/objects.list-ui).

## Demo

You can review list bare styles and recommended markup here: https://github.build.ge.com/pages/PXd/px-list-ui-design

## Sass Docs

You can review Sass Documentation here: https://github.build.ge.com/pages/PXd/px-list-ui-design/sassdoc

## Dependencies

Px's List UI module depends on two other PXd modules:

* [px-colors-design](https://github.build.ge.com/PXd/px-colors-design)
* [px-defaults-design](https://github.build.ge.com/PXd/px-defaults-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.build.ge.com/PXd/px-list-ui-design.git

Once installed, `@import` into your project's Sass file in its Objects layer:

    @import "../px-list-ui-design/objects.list-ui";

See [px-getting-started](https://github.build.ge.com/PXd/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('objects.list-ui') { ... }

## Usage

These flags are available and, if needed, should be set to `true` prior to importing the module:

    $inuit-enable-list-ui--tiny
    $inuit-enable-list-ui--small
    $inuit-enable-list-ui--large
    $inuit-enable-list-ui--huge

The following variables are available for use in the module:

    $inuit-list-ui-border-width
    $inuit-list-ui-border-style
    $inuit-list-ui-border-color

Basic usage of the List UI module uses the required classes:

    <ul class="list-ui">
        <li class="list-ui__item">
            Foo
        </li>
        <li class="list-ui__item">
            Bar
        </li>
        <li class="list-ui__item">
            Baz
        </li>
    </li>

The only valid children of the `.list-ui` node are `.list-ui__item`s.

## Options

These classes are available if the variable flags listed above are set to `true`:

* `list-ui--tiny`: Tiny list-uis.
* `list-ui--small`: Small list-uis.
* `list-ui--large`: Large list-uis.
* `list-ui--huge`: Huge list-uis.

The above classes adjust the padding on all sides of each `list-ui__item`.

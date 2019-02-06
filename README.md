# Quicksort [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=You%20can%20sort%20arrays%20with%20Quicksort%20in%20JavaScript%20with%20this%20Node%20module.&url=https://github.com/CharlesStover/quicksort-js&via=CharlesStover&hashtags=algorithm,algorithms,javascript,programming,typescript,webdev,webdeveloper,webdevelopment)

An implementation of Quicksort in JavaScript.

A walkthrough of the logic behind Quicksort and development of this package can be found on the Medium article [Implementing Quicksort in JavaScript](https://medium.com/@Charles_Stover/implementing-quicksort-in-javascript-8044a8e2bf39).

[![version](https://img.shields.io/npm/v/@charlesstover/quicksort.svg)](https://www.npmjs.com/package/@charlesstover/quicksort)
[![minified size](https://img.shields.io/bundlephobia/min/@charlesstover/quicksort.svg)](https://www.npmjs.com/package/@charlesstover/quicksort)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@charlesstover/quicksort.svg)](https://www.npmjs.com/package/@charlesstover/quicksort)
[![downloads](https://img.shields.io/npm/dt/@charlesstover/quicksort.svg)](https://www.npmjs.com/package/@charlesstover/quicksort)
[![build](https://travis-ci.com/CharlesStover/quicksort-js.svg)](https://travis-ci.com/CharlesStover/quicksort-js/)

## Install

* `npm install @charlesstover/quicksort --save` or
* `yarn add @charlesstover/quicksort`

## Examples

```JavaScript
import quickSort from '@charlesstover/quicksort';
import { expect } from 'chai';

describe('Quicksort', () => {
  it('should sort an array', () => {
    const unsorted = [ 5, 4, 1, 3, 2 ];
    const sorted = quickSort(unsorted);
    expect(sorted).to.deep.equal([ 1, 2, 3, 4, 5 ]);
  });
});
```

<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrmhmean

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute a moving [harmonic mean][harmonic-mean] incrementally.

<section class="intro">

The [harmonic mean][harmonic-mean] of positive real numbers `x_0, x_1, ..., x_{n-1}` is defined as

<!-- <equation class="equation" label="eq:harmonic_mean" align="center" raw="\begin{align}H &= \frac{n}{\frac{1}{x_0} + \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}}} \\ &= \frac{n}{\sum_{i=0}^{n-1} \frac{1}{x_i}} \\ &= \biggl( \frac{\sum_{i=0}^{n-1} \frac{1}{x_i}}{n} \biggr)^{-1}\end{align}" alt="Equation for the harmonic mean."> -->

<div class="equation" align="center" data-raw-text="\begin{align}H &amp;= \frac{n}{\frac{1}{x_0} + \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}}} \\ &amp;= \frac{n}{\sum_{i=0}^{n-1} \frac{1}{x_i}} \\ &amp;= \biggl( \frac{\sum_{i=0}^{n-1} \frac{1}{x_i}}{n} \biggr)^{-1}\end{align}" data-equation="eq:harmonic_mean">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/0a561712608b99b59d9243f7d478a2e2a019a130/lib/node_modules/@stdlib/stats/incr/mhmean/docs/img/equation_harmonic_mean.svg" alt="Equation for the harmonic mean.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-mhmean
```

</section>

<section class="usage">

## Usage

```javascript
var incrmhmean = require( '@stdlib/stats-incr-mhmean' );
```

#### incrmhmean( window )

Returns an accumulator `function` which incrementally computes a moving [harmonic mean][harmonic-mean]. The `window` parameter defines the number of values over which to compute the moving [harmonic mean][harmonic-mean].

```javascript
var accumulator = incrmhmean( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [harmonic mean][harmonic-mean]. If not provided an input value `x`, the accumulator function returns the current [harmonic-mean][harmonic-mean].

```javascript
var accumulator = incrmhmean( 3 );

var v = accumulator();
// returns null

// Fill the window...
v = accumulator( 2.0 ); // [2.0]
// returns 2.0

v = accumulator( 1.0 ); // [2.0, 1.0]
// returns ~1.33

v = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns ~1.64

// Window begins sliding...
v = accumulator( 7.0 ); // [1.0, 3.0, 7.0]
// returns ~2.03

v = accumulator( 5.0 ); // [3.0, 7.0, 5.0]
// returns ~4.44

v = accumulator();
// returns ~4.44
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var incrmhmean = require( '@stdlib/stats-incr-mhmean' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmhmean( 5 );

// For each simulated datum, update the moving harmonic mean...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mhmean.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mhmean

[test-image]: https://github.com/stdlib-js/stats-incr-mhmean/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-incr-mhmean/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mhmean/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mhmean?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mhmean.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mhmean/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mhmean/main/LICENSE

[harmonic-mean]: https://en.wikipedia.org/wiki/Harmonic_mean

</section>

<!-- /.links -->

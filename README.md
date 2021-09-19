# linn

<a href="https://www.npmjs.com/package/linn"><img src="https://img.shields.io/npm/v/linn" /></a>

**linn** is a little tool that reorders CSS properties to conform to [9elements](https://9elements.com)' guide [How to organize CSS](https://9elements.com/css-rule-order).

**disclaimer: this is meant to be used on well-structured, un-minified CSS files. i am not responsible for unexpected behavior or loss of data.**

### install
```
npm i -g linn
```

### usage
```css
/* style.css */
a {
  color:#0076d1;
  text-decoration:none
}

p {
  font-size:1rem;
  float:left;
  margin-bottom:0.5rem
}
```
```
$ linn style.css
linn (https://github.com/sporeball/linn)
  o reordered 2 rules:
    - a
    - p
$ cat style.css
a {
  text-decoration:none;
  color:#0076d1
}

p {
  float:left;
  margin-bottom:0.5rem;
  font-size:1rem
}
```

### FAQ

#### why did you make this?
i like 9elements' guide, but it's hard to keep everything in order by hand. this can do that for me.

#### how is the order decided?
properties are ordered as suggested in the guide, with related properties grouped together. in the case of properties like `background`, the shorthand property appears first, followed by the more specific properties in the order they appear in the shorthand. properties that do not specifically appear in the order will be placed after the ones which do.

if you want to look at the order, see [lib/order.js](https://github.com/sporeball/linn/blob/master/lib/order.js).

#### i disagree with where something is in the order. can you change it?
no. like [standard/standard](https://github.com/standard/standard), linn is really supposed to help you avoid [bikeshedding](https://docs.freebsd.org/en/books/faq/#bikeshed-painting). unless i've forgotten a property or a new one is added to the CSS spec, the order is unlikely to change.

### donate
you can support the development of this project and others via Patreon:

[![Support me on Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dsporeball%26type%3Dpledges%26suffix%3D%252Fmonth&style=for-the-badge)](https://patreon.com/sporeball)

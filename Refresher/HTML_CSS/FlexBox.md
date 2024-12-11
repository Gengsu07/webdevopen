After this lesson, you will be able to:

- Fully understand how **Flexbox** works.
- Implement flexbox in your projects
- Learn the different properties you can apply to **flexbox containers** and **flexbox items**

---

## Flexbox Introduction

The CSS3 [Flexible Box](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes), or **flexbox**, is a layout mode intended to accommodate different screen sizes and different display devices. For many applications, the flexible box model is easier than the block model since it does not use floats, nor do the flex container's margins collapse with the margins of its contents.

The main idea behind the **flex layout** is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A **flex container** expands items to fill available free space, or shrinks them to prevent overflow.

Most importantly, the **flexbox layout** is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).

Fireship has a good video on explaining CSS Flexbox

<iframe width="560" height="315" src="https://www.youtube.com/embed/K74l26pE4YA" frameborder="0" allowfullscreen></iframe>

## Flexbox Terminology

Since **flexbox** is a whole module and not a single property, it involves a lot of things including its whole set of properties. Some of them are meant to be set on the container (parent element, known as **"flex container"**) whereas the others are meant to be set on the children (said **"flex items"**).

If a regular layout is based on both block and inline flow directions, the flex layout is based on **"flex-flow directions"**. Please have a look at this figure from the specification, explaining the main idea behind the flex layout.

![alt text](image-3.png)

Basically, items will be laid out following either the **main axis** (from main-start to main-end) or the **cross axis** (from cross-start to cross-end).

- **main axis** - The main axis of a flex container is the primary axis along which flex items are laid out. Beware, it is not necessarily horizontal; it depends on the flex-direction property (see below).
- **main-start | main-end** - The flex items are placed within the container starting from main-start and going to main-end.
- **main size** - A flex item's width or height, whichever is in the main dimension, is the item's main size. The flex item's main size property is either the ‘width’ or ‘height’ property, whichever is in the main dimension.
- **cross axis** - The axis perpendicular to the main axis is called the cross axis. Its direction depends on the main axis direction.
- **cross-start** | cross-end - Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.
- **cross size** - The width or height of a flex item, whichever is in the cross dimension, is the item's cross size. The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension.

## Flex Container

The flex container is the parent element in which flex items are contained. A flex container is defined using the flex or inline-flex values of the display property. It enables a flex context for all its direct children.

```css
/* one or the other */
.container {
  display: flex | inline-flex;
}
```

### flex-direction

![alt text](image-4.png)

This establishes the **main-axis**, thus defining the direction flex items are placed in the flex container. **Flexbox** is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.

- **row** (default): left to right in ltr; right to left in rtl
- **row-reverse**: right to left in ltr; left to right in rtl
- **column**: same as row but top to bottom
- **column-reverse**: same as row-reverse but bottom to top

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

### flex-wrap

By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

- **nowrap** (default): all flex items will be on one line
- **wrap**: flex items will wrap onto multiple lines, from top to bottom.
- **wrap-reverse**: flex items will wrap onto multiple lines from bottom to top.

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

On this **CodePen** we can check an example for each of the values that flex-wrap property could have.

<iframe height="300" style="width: 100%;" scrolling="no" title="Flex Wrap Example" src="https://codepen.io/openbootcamp/embed/LYXgemw?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/openbootcamp/pen/LYXgemw">
  Flex Wrap Example</a> by Open Bootcamp (<a href="https://codepen.io/openbootcamp">@openbootcamp</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### flex-flow

This is a shorthand flex-direction and flex-wrap properties, which together define the flex container's main and cross axes. The default is **row nowrap**.

```css
.container {
  flex-flow: &lt;‘flex-direction’&gt; &lt;‘flex-wrap’&gt;;
}

/* example: */
.container {
  flex-flow: row wrap-reverse;
}
```

### justify-content

This defines the alignment along the **main axis**. It helps distribute extra free space left over when either all the **flex items** on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around
    | space-evenly;
}
```

- **flex-start** (default): items are packed toward the start line
- **flex-end**: items are packed toward to end line
- **center**: items are centered along the line
- **space-between**: items are evenly distributed in the line; the first item is on the start line, last item on the end line
- **space-around**: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren't equal since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
- **space-evenly**: items are distributed so that the spacing between any two items (and the space to the edges) is equal.

### align-items

This defines the default behavior for how **flex items** are laid out along the **cross axis** on the current line. Think of it as the justify-content version for the **cross-axis** (perpendicular to the main-axis).

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- **stretch** (default): stretch to fill the container (still respect min-width/max-width)
- **flex-start**: cross-start margin edge of the items is placed on the cross-start line
- **flex-end**: cross-end margin edge of the items is placed on the cross-end line
- **center**: items are centered in the cross-axis
- **baseline**: items are aligned such as their baselines align

### align-content

This aligns a **flex container's lines** within when there is extra space in the **cross-axis**, similar to how justify-content aligns individual items within the main-axis.

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch;
}
```

- **stretch** (default): lines stretch to take up the remaining space
- **flex-start**: lines packed to the start of the container
- **flex-end**: lines packed to the end of the container
- **center**: lines packed to the center of the container
- **space-between**: lines evenly distributed; the first line is at the start of the container while the last one is at the end
- **space-around**: lines evenly distributed with equal space around each line

---

## Flex items

Same way there are properties for the **flex-container**, we have some for **flex items**. :::info Text that is directly contained inside a **flex container** is automatically wrapped in an **anonymous flex item**. However, an anonymous flex item that contains only white space is not rendered, as if it were designated display: none. :::

### order

The order property allows for reordering the **flex items** within a container. Simply put, with the order property you can move a flex-item from one position to another. Just like you would do with “sortable” lists.

By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.

```css
.item {
  order: [integer]; /* default is 0 */
}
```

### flex-grow and flex-shrink

The beauty of **flex items** is being “flexible”. The flex-grow and flex-shrink properties allow us to play around this ‘flexibility’ even more.

This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least). The same way, flex-shrink property controls how much a **flex-item** should "shrink" if there is no extra space.

```css
.item {
  flex-grow: [number]; /* default 0 */
  flex-shrink: [number]; /* default 0 */
}
```

> Info: Negative numbers are invalid.

### flex-basis

This defines the default size of an element before the remaining space is distributed. It can be a **length** (e.g. 20%, 5rem, etc.) or a **keyword**.

We can use the following keywords:

- **auto**. Means "look at my width or height property".
- **content**. Means size it based on the item's content (this keyword isn't well supported yet, so it's hard to test and harder to know what its brethren max-content, min-content, and fit-content do).

```css
.item {
  flex-basis: [length] | auto; /* default auto */
}
```

If set to 0, the extra space around content isn't factored in. If set to auto, the extra space is distributed based on its flex-grow value.

### flex

This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. The default is **0 1 auto**.

```css
.item {
  flex: none | [ &lt; "flex-grow" &gt; &lt; "flex-shrink" &gt;? || &lt;
    "flex-basis" &gt;];
}
```

> Info: It is recommended that you use this shorthand property rather than set the individual properties. The short hand sets the other values intelligently.

### align-self

This allows the default alignment (or the one specified by align-items) to be overridden for individual **flex items**.

The available values are the same as align-items.

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

---

## Play around with flexbox

Check the following **CodePen** and play a bit with different properties of **flex containers** and **flex items**. It will help you a lot to better understand all the properties 😉

<iframe height="700" style="width: 100%;" scrolling="no" title="Flexbox playground" src="https://codepen.io/openbootcamp/embed/ExOdoRr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/openbootcamp/pen/ExOdoRr">
  Flexbox playground</a> by Open Bootcamp (<a href="https://codepen.io/openbootcamp">@openbootcamp</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Example

Let´s play with our new awesome skill. Imagine we have a typical right-aligned navigation on the top of our website, but we want to be centered on medium-sized screens, and resize it to a single-column on small devices.

<iframe height="700" style="width: 100%;" scrolling="no" title="Demo Flexbox 2" src="https://codepen.io/openbootcamp/embed/dyQgJjy?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/openbootcamp/pen/dyQgJjy">
  Demo Flexbox 2</a> by Open Bootcamp (<a href="https://codepen.io/openbootcamp">@openbootcamp</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Help the Froggy

[Flexbox Froggy](http://flexboxfroggy.com/) is a game where you must help Froggy and friends by writing CSS code!

Go ahead! Help Froggy across the 24 levels of the game! 💪

---

## Summary

Flexbox is a super powerful tool for designing the layouts of our web pages. Now you are able to align and distribute space among **flex items** in a **flex container**.

Using flexbox ensures us that elements behave predictably when the page layout must accommodate different screen sizes and different display devices.

## Resources

- [Flexbox CheatSheet](http://www.sketchingwithcss.com/samplechapter/cheatsheet.html)
- [FlexyBoxes](http://the-echoplex.net/flexyboxes/)
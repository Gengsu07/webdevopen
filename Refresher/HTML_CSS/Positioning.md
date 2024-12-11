## **Learning Goals**

After this unit you will be able to...

- Position elements in the screen.
- Explain what float elements are and how to use them
- Clear floats and understand why it's important.

---

## **Positioning**

CSS gives us the ability to position and organize elements and content in multiple ways. The understanding of how we can position boxes in our layout is a key in making the content more digestible.

In this chapter we’re going to take a look at a few different tools to position our elements nicely.  
The position CSS property allows you to organize elements on the screen. Position can be:

- static
- relative
- fixed
- absolute

When setting the position, we can use the following properties:

- top
- right
- bottom
- left

---

Let's take a look at the possibilities.

### **position: static**

The initial or default value of an element is static. It means that the element is **not positioned** in any special way. It is displayed where it normally would be in the document.

- Elements with position: static, are described as **not positioned**.
- Elements with any other form of the position property are described as **positioned**.

### **position: relative**

A relative positioned element behaves the same as static unless you add some extra properties. You can adjust the position by setting the top, left, right, and bottom properties. It will move the element relative to where it would normally occur in the document. The other content will not be adjusted to fit into any gap left by the element.

To understand better the position: relative property, take a look to the following example:

<iframe height="500" style="width: 100%;" scrolling="no" title="Relative" src="https://codepen.io/openbootcamp/embed/abGOrbw?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/openbootcamp/pen/abGOrbw">
  Relative</a> by Open Bootcamp (<a href="https://codepen.io/openbootcamp">@openbootcamp</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### **position: fixed**

A fixed element is positioned relative to the screen of our device (computer, mobile, etc.). The element will always be in the same place, even if the page is scrolled. As with relative, the top, left, right and bottom properties are used.

Here you can see an example with the results of the position: fixed property:

<p class="codepen" data-height="500" data-default-tab="html,result" data-slug-hash="wvjabBb" data-pen-title="CSS-Fixed" data-user="openbootcamp" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/openbootcamp/pen/wvjabBb">
  CSS-Fixed</a> by Open Bootcamp (<a href="https://codepen.io/openbootcamp">@openbootcamp</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### **position: absolute**

This is the most difficult position value to understand. Position absolute works as fixed but instead of being positioned relative to the viewport, it's positioned to the nearest positioned element in the DOM. This is, the nearest element with a position different than static set on the CSS.

If there's no ancestor positioned element in the document, it will use the document body and it still moves along with page scrolling.

Check out the following example to see something curious about this positioning:

<p class="codepen" data-height="500" data-default-tab="html,result" data-slug-hash="MWGwdae" data-pen-title="CSS-Absolute" data-user="openbootcamp" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/openbootcamp/pen/MWGwdae">
  CSS-Absolute</a> by Open Bootcamp (<a href="https://codepen.io/openbootcamp">@openbootcamp</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## **Floats**

Normally, the HTML elements follow a normal flow, placing one element under the other. The float property specifies that an element should be taken from the normal flow and placed along the **left** or **right** side of its container (its parent). The text and inline elements will wrap around it.

Float can take the following values:

- left. It indicates that the element must float on the left side of its containing block.
- right. It indicates that the element must float on the right side of its containing block.
- none. It indicates that the element must not float.
- inherit. It will assume the float value of the parent container of the element.

Note that floated elements remain a part of the flow of the web page, it's just that their position within the flow is altered. This is distinctly different than page elements that use absolute positioning.

### **What are floats used for?**

You can use floats for several things. You can wrap text around images or HTML elements by using it, as you can see here:

<p class="codepen" data-height="500" data-default-tab="html,result" data-slug-hash="abGOrdy" data-pen-title="CSS-Floats" data-user="openbootcamp" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/openbootcamp/pen/abGOrdy">
  CSS-Floats</a> by Open Bootcamp (<a href="https://codepen.io/openbootcamp">@openbootcamp</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
But this is not the only application of the float property. You can use floats to create entire web layouts. For example, here you can see an small example with a normal web layout composed with floated elements:
<p class="codepen" data-height="500" data-default-tab="html,result" data-slug-hash="qBYdGZx" data-pen-title="CSS-Floats-2" data-user="openbootcamp" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/openbootcamp/pen/qBYdGZx">
  CSS-Floats-2</a> by Open Bootcamp (<a href="https://codepen.io/openbootcamp">@openbootcamp</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### **Clearing the floats**

When we work with floats, sooner or later we will need to use the property clear. An element with the clear property on it will not move up adjacent to the float like the float desires, but will move itself down past the float. It will be easier to understand this with an example:  
Try to remove the clear property from the .footer class an see what happens with the other elements. The sidebar is floated to the right and is shorter than the main content area. The footer then is required to jump up into the available space as is required by the float. The footer can be cleared to ensure it stays beneath both floated columns.

The clear property has four valid values:

- left. It clears the float from the left side.
- right. It clears the float from the right side.
- both. It clears floats coming from both directions.
- none. It's the default value. It's typically unnecessary unless you are removing an inherited clear value from cascade.

---

📝 **Time to practice**

### **The Newspaper Layout**

Imagine you are working in a newspaper and the design team sends you the prototype of the new website. Your first task is to create the Homepage from this image:In the previous prototype you can easily identify these areas:

- header
- main nav
- main article
- several secondary articles

Use backgrounds and random content ([Lorem Ipsum](http://www.lipsum.com/) is a website where you can generate random content to put in your designs) to code this Homepage. Remember to use positioning to align your layout properly.

> 💡 To create the main nav elements, you could use a list. 💡 Remember to use HTML5 semantic elements.

---

## **Summary**

You learned how we can position block elements all over the page. We have learned how to use the top, right, bottom, and left specifications in conjunction with properties such as margin, padding, and border to help you position and space elements.

Also, you learned what floated elements are and which problems can result from using them as well as how clearing the float elements in our HTML can help solve these problems.

## **Extra Resources**

- [MDN position property](https://developer.mozilla.org/en-US/docs/Web/CSS/position) - See all the detailed information about the property on its documentation.
- [All about floats](https://css-tricks.com/all-about-floats/) - Very interesting article in [css-tricks](https://www.css-tricks.com/) with all the information about floats.
- [The how and why of clearing floats](https://css-tricks.com/the-how-and-why-of-clearing-floats/) - Another interesting article about how and why we have to clear floats on our websites.
- [CSS Positioning 101](http://alistapart.com/article/css-positioning-101)
- [Detailed Positioning](http://learn.shayhowe.com/advanced-html-css/detailed-css-positioning/)

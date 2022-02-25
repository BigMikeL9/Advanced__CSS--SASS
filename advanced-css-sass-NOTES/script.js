// ⭐ Advanced CSS Course ⭐ 

// Always add a class for elements in HTML, inorder to select them using that class in CSS, instead of using the element's tag itself (in CSS). CSS Architecture. 

// ******************************************************
// *** Basic RESET using the Universal Selector ***
(Resets all the elements' default browser margins and padding)
 
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; // --> This changes the box model, so that the borders and the paddings of an element, are no longer added to the total width/height that we specify for an element. So without this, any borders and paddings are added to the width/height of an element which is not helpful.
 }


// ******************************************************
// *** Setting overall font properties for the entire webpage ***


// We add font properties in the 'body' element selector because properties related to font, are ussually INHERITED. (css inheritance explained in next section)
body {
  font-family: "Lato", sans-serif// so these font properties will get inherited by ALL the child elements of the 'body' element.
  font-weight: 400;
  font-size: 16px; // will use other units in the future (dont use px)
  line-height: 1.7;
  color: #fff;
}

🟢 Summary --> So eveything related to the font, we always specify it in the 'body' selector and not the '*' Universal Selector. More efficient this way.


// ******************************************************
// *** Clipping parts of elements using "clip-path" ***                          properties --->   ['clip-path' , 'background-image']
          // and setting multiple 'background-image' 

.header {
  height: 95vh; // This means that height of this element will always be 95 percent of the viewport's height.
  
  // ⭐ 💨 To specify GRADIENTS, we always use the 'background-image' property. In this case, ✨ the gradient color will be on top of the image because we specified it first. 👇
          // 'to right bottom' in the 'linear-gradient', means that the color will go to the bottom right corner, so starting from the top-left and transitioning down to the bottom-right
  background-image: linear-gradient(to right bottom, #7ed56f, #28b485), url("../img/hero.jpg");
      // ⭐ We use background image for gradients and images, background color for solid or rgba colors. ⭐

  background-size: cover; // what 'cover' does is that whatever the width of the viewport or the element, it will always try to fit the element inside the container.
                            // ⭐ can also specify 'background-size: 100%' in percentage, which '100%' means that it will occupy 100% of its parent's width.
 
  background-position: top; // this ensures that whatever the size of the viewport is, the background image always stay the same at top of the container. So whenever we resize the browser, the bottom of the image will get cropped in order to fit the container, but the top will stay the same. 
                            // 💨 we could also set 'background-position' to 'center', which will crop out both that top and the bottom of the image as we change the size of the viewport. Center of the image will stay the same. (ie: background-position: center;)
  
   clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%); // clips a part of the 'header' element --> use the Clippy tool. 
}

// 🟡 SideNote --> '../' means going up one folder (ie: going to the previous/parent folder)


// ******************************************************
// Difference between --> 'background-image: linear-gradient(...)' & 'background-image: radial-gradient(...)'

    1. 'background-image: linear-gradient(...)' --> starts from one side of the element to the other specified side of the element. 
            example: background-image: linear-gradient(to bottom right, #28b485, #ebf9ff);


    2. 'background-image: radial-gradient(...)' --> starts from the *MIDDLE* of the element and goes from there to all directions.   
            example: background-image: radial-gradient(#28b485, #ebf9ff);

// ******************************************************
// Giving TEXT a Gradient-color using 'background-image' --> 
       
Steps: 1. Set the background of the entire 'h2'/heading element to a gradient --> 'background-image: linear-gradient(to right, #55c57a, #28b485)'
       2. If the background takes up the entire row, change 'display: inline-block'
       3. Use the '-webkit-background-clip: text;' --> the background then gets clipped exactly where the text is. (so the gradient will only be visible where the text is)
       4. Then we set the 'color: transparent' --> so that we can through the text, ie: see the 'background-image'

// Example -->

.heading-secondary {
  font-size: 3.5rem;
  text-transform: uppercase;
  
          // 👇👇👇👇
  background-image: linear-gradient(to bottom right, var(--color-primary), var(--color-primary-dark));
  -webkit-background-clip: text; 
  color: transparent;
}

// ******************************************************
// *** Adding a background Color to an image using the 'background' property ⭐⭐⭐⭐⭐⭐⭐

background: #6d2420 url(img/icon-resources.png) no-repeat 50%;

// **********************  Other ways of using 'background-image' [[['''solid color gradients''' using 'deg' & percentages]]] --> 

      1. We can specify an ANGLE for the direction of the linear-gradient, using 'deg' instead of 'to bottom right' (ie: background-image: linear-gradient(105deg, rgba(126, 213, 111, 0.8), #28b485); )
      
      2. We can also specify PERCENTAGES after each color in the gradient. Which will specify from what percentage of the container inwhich that color will be shown. Example -->  
form__container {
  background-image: linear-gradient(105deg, 
                                    rgba(255, 255, 255, 0.7) 0%, // this color will start from 0% of the container
                                    rgba(255, 255, 255, 0.7) 50%, // this color will start from 50% of the container
                                    transparent 50%);  // this color will start from 50% until the end of the container ('transparent' is a valid CSS color)
}


// ******************************************************
// Adding an image in HTML

// When adding an Image in HTML, ALWAYS put it in a <div></div>, because an image is actually an 'inline-element' --> and so it is better practice to first have a small container where the image is inside, and then position that container to where we want the image and the container to be.

<div class="logo__container">
   <img src="/img/logo-white.png" alt="Logo" class="logo" />  // 'alt="..."' attribute is to describe the image for SEO (Search Engine Optimization), but also for the case if the image fails to load then this text appears instead of the image. 
</div>

// use container to position image 👇
.logo__container {
  position: absolute;
  top: 4rem;
  left: 4rem;
}

// use image selector to resize image. Also just as preference use 'height' property to resize image and 'width' will scale automatically 👇
.logo {
  height: 3.5rem;
}

// ******************************************************
//⭐⭐⭐ 'h1' heading is the single most important heading on the page, which is important for google or any other search engine, to figure out what our web page is all about.
    // So its important that we put the title of our web page in there.
// Remember --> that 'h1' elements has a high 'font-weight' by default.

      // 🐫 After that we use 'h2' for secondary headings, ie: headings for different sections

               // 🦆 Then we use 'h3' for Tertiary headings, ie: the Third level of headings --> below the secondary headings
  
                          // 🐶 Then for the content we use a 'p' tag




// ******************************************************

// Remember, a '<span></span>' is simply used to style something differently.
      // A '<span></span>' element also has a 'display' set to 'inline' by default.


// ******************************************************
// The easiest way to CENTER anything in CSS, with 'position: absolute;' 'tranform', 'top', and 'left' properties.

.heading__container {
  position: absolute;
  top: 50%; // ⭐ this is relation to the PARENT element.
  left: 50%; // ⭐ this is also in relation to the PARENT element. Which means that the container will move away 50 percent of the width of it parent element, from the right side.
  transform: translate(-50%, -50%);// 🌠 this is in relation to the element itself (ie: the '.heading__container' element). So we are shifting the element itself to the left by 50% of its width and to the top by 50% of its height.
}


// ******************************************************
// TEXT-ALIGN: CENTER
/* Easiest way to centering elements is by using the "Text-align: center" property. This property has to be set in the PARENT CONTAINER. This works as long as we have "inline-block" elements or "block" elements. NOT GOING TO WORK IF WIDTH OF THE ELEMENT IS LESS THAN 100% */
/*"Text-align: center" property inside a container will center everything in it, that doesn't have a width set, AKA "width: 100" */
/* "text-align" is placed in CONTAINERS */
.text-align-container {
  text-align: center;
  height: 0;
}

// ******************************************************
// Centering with MARGIN
  // A trick to center a block-element, INSIDE of another block-element. 👇👇👇
/* If an element has a width set to it, width: 10%, AKA not full width, then we can center it using "margin: auto" which will center it on all sides. 
  "margin: 0 auto" => will center it only horizontally
  "margin: auto 0" => will center it only vertically */
/* "margin: auto" is placed in the element we want to center, NOT THE CONTAINER */
.width-changed {
  width: 10%;
  margin: auto;
}

// Why does this work?
/ Besause setting 'margin: 0 auto' means that when the browser is rendering the page, it automatically figures out the margin that we want on the left and on the right side. And since thay are BOTH set to auto, that means that both left and right margins will be the same. Thus thr element will be centered.


// ******************************************************
// 'float' property
/* float: left; */ ----> [We ONLY use "float:" when we want to wrap text around an image] <----
                     ** DONT use float for positioning. ONLY use it to wrap text around an image **

                       

// ****************** 'shape-outside' property & 'float' property
      // Lets us wrap Text around a circle shaped element/img.

/ The 'shape-outside' property defines a shape—which may be non-rectangular, around which adjacent inline content should wrap.

  // Things to keep in mind when using the 'shape-outside' property -->
        1. The element we are using this property on, must be floated ( 'float: left')
        2. The element must also have defined dimnesion ('height: 10rem' & 'width: 10rem')
        3. The property's value is the same as the 'clip-path' property. Can get from Clippy-generator.

// Example --> 

     <div class="testimonial">
        <figure class="testimonial__image-container">
          <img
            src="img/nat-8.jpg"
            alt="Mary's Testimonial"
            class="testimonial__image testimonial__image--1"
          />
        </figure>

        <div class="testimonial__text-container">
          <h3 class="heading__tertiary u-margin-bottom-small">I had the best week of my life with my family</h3>
          <p class="testimonial__text--content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            eligendi nulla quam explicabo.
          </p>
        </div>
      </div>

testimonial__image {
    &-container {
      height: 15rem;
      width: 15rem;
      float: left;
      clip-path: circle(50% at 50% 50%);
      shape-outside: circle(50% at 50% 50%);

      // the best way to move around an element that is floated is to not mess with 'margin'/'padding' properties --> instead use 'transform' property.
      transform: translateX(-3rem);

      position: relative;
      z-index: 1;
    }
  
  // Remember that flexible images for Responsive design, ALWAYS WITHOUT EXCEPTION need a height or width specified (ussually in percentage)
    height: 100%;
}


// ******************************************************
// 'z-index' ⭐⭐⭐⭐⭐

The 'z-index' ONLY works if we hava a specified position (ie: 'position: relative' or 'position: absolute')

.sidebar__link {
  position: relative;
  z-index: 10;
}


// ******************************************************
// 'opacity: 0', 'visibility: hidden' and 'display: none' ---> difference explained


+--------------------+----------------+-----------------+
| Property           | occupies space | consumes clicks |
+--------------------+----------------+-----------------+
| opacity: 0         |        ✓       |        ✓        |
+--------------------+----------------+-----------------+
| visibility: hidden |        ✓       |        ✗        |
+--------------------+----------------+-----------------+
| display: none      |        ✗       |        ✗        |
+--------------------+----------------+-----------------+

  
1. With 'opacity: 0' the content is still on the page. You can still click on the content that could be confusing for the user if they accidentally click the content. 
2. 'visibility: hidden' does that same thing as 'opacity: 0'. But the user cannot accidently click the hidden content. 
          

                           [The 'visibility' property cannot be animated which is why we add 'opacity: 0' inorder to add animations.] 

3. The 'display: none' both hides and removes an element from the document layout so that it takes no space.

// Example --> 
// ':placeholder-shown' means when the placeholder text is shown (ie: before we type anything in the input field.
  // when the placeholder text of the 'form__input' element is shown --> select and animate the 'label' element (its first preceding sibling)
.form__input:placeholder-shown + form__label {
    opacity: 0;
    visibility: hidden;
   // we cannot animate 'visibility' property, so we add 'opacity' in order to animate the element.
    transform: translateY(-4rem);
  }


// ******************************************************
// STYLING a 'button' html element --->  ALSO using 'currentColor' property value AND creating an INFINITE animation using '@keyframes'

.button-inline {
  display: inline-block;
  border: none; // buttons by default always come with border.
  background: transparent; // removes the default background
  font-size: inherit;
  letter-spacing: 0.1rem;
  cursor: pointer;
  color: var(--color-primary);
  border-bottom: 1px solid currentColor; // // ⭐ 'currentColor' will make the border color the same as the text color from the 'color' property in this element.
  padding: 2px 0; // creates some space between the text and the border-bottom
  transition: all 0.2s;

  &:hover {
    color: var(--color-grey-dark-1);
  }

  &:focus {
    outline: none; // removes the default blue border
    animation: pulseAnim 1s infinite; // 🟢 Remember we CANNOT create INFINITE animations with 'transition' property
  }
}

@keyframes pulseAnim {
  0% {
    transform: scale(1);
    box-shadow: none;
  }

  50% {
    transform: scale(1.05);
    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);
  }

  100% {
    transform: scale(1);
    box-shadow: none;
  }
}



// ******************************************************
// Animations in CSS ✨ --> "@keyframes" and "animation" properties 
            // [the SECOND type of animations in CSS]

// There are generally two types of animations in CSS. The first one, which is also the easier one, is the "transition" property. The second one is "@keyframes" and "animation" properties, which are more advanced because these properties allow us to put more options and so they are a bit more complex.

// using ''@keyframes' and 'animations'👇👇

// 🔴🟠 IMPORTANT --> For the browser's performance, it best to only ever animate these two properties, the 'opacity' property and the 'transform' property.
        // Thats what the browsers are optimzed for, for these two properties.
        // But with 'transform' property, we can do so much.


// ---- This animation will make an element move in from the left 
@keyframes moveInLeft {  // <-- animation name
  // then here we can specify what we want to happen, at each moment of time in the animation. So here we start at 0% (which is the starting point of the animation)
  0% {
    opacity: 0; // so at the start of the animation the element will be invisible.
    transform: translateX(-100px); // this will make the element more to the left, at the beggining of the animation (ie: 0%). [so positive value, means it goes to the right. And negative value means it goes to the left.]
  }
  
  // then finish is at 100%, which is when the animation finishes.
  100% {
    opacity: 1; // then at the end of the animation, the element will be completely visible.
    transform: translateX(0); // this will move the element back to its original position, at the end of the animation (ie: 100%);
  }
}

// After creating the '@keyframes', we then APPLY the animation to an element 👇
    
    // So for an animation to work, there are only two properties that we need to specify --> 
    1. the 'animation-name' which is the name of the animation we just created using '@keyframes'.
    2. Then the 'animation-duration' which is the time that the animation should that to complete.
    // there are also other properties that we can specify for animation 👇👇
    3. 'animation-delay' which will delay the animation from starting until the speciified time has passed.
    4. 'animation-iteration-count' which specifies the number of times an animation should run. (ie: 'animation-iteration-count: infinite;' this means that the animation will keep repeating forever)
    5. 'animation-timing-function' (IMPORTANT) which is a function that will define how the animation will preceed, so how fast or how slow the parameters that we specified in the '@keyframes' will happen over time. This can have many values. (example: 'animation-timing-function: ease-in' or 'animation-timing-function: ease-out'). 
        These can make all the diffeence to how the animation feels to the user.
    6. Lastly, the 'animation' property is a shorthand property for setting all the animation properties. (ie: 'animation: {animation-name} {animation-duration} {animation-timing-function} {animation-delay} {animation-iteration-count} {animation-direction} {animation-fill-mode} {animation-play-state};' in this order)
        // These are more animations properties, but these are the most essential ones 👆👆👆👆👆

// Example: 
.header__primary-main {
  display: block;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 3.5rem;
  
  // animation-name: moveInLeft;
  // animation-duration: 2s;
  animtion: moveInLeft 2s ease-in;
}

// We can also use the @keyframes' multiple times anywhere we want, using the animation' property in multiple places. And for instance like when we hover over an element --> 

.logo:hover {
  animation: moveInLeft 3s ease-in-out;
}


          // 👇👇 FIXING SHAKE IN ANIMATIONS 👇👇
// 🌄🌅 INTERESTING STUFF --> Sometimes a shake randomly happens during an animation, and no one really knows why it happens. But there is a solution for this, which is to use the 'backface-visibility' of the parent container of elements, to 'hidden'. 
      // the 'backface-visibility' property determines if the back part of an element when we tranform it, is visible or hidden for the user.

.title-container {
  backface-visibility: hidden;
}

// ********** 🟠🔵🟡 Creating an infinite animation with '@keyframes' 👇👇👇👇
button-inline:focus {
    animation: pulseAnim 1s infinite;
  } 


@keyframes pulseAnim {
  0% {
    transform: scale(1);
    box-shadow: none;
  }

  50% {
    transform: scale(1.05);
    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);
  }

  100% {
    transform: scale(1);
    box-shadow: none;
  }
}

// ******************************************************
// Animations in CSS ✨ --> "transition" property 
         // [the FIRST type of animations in CSS] 

// So First we just use the 'transition' property,
        // and then we specify specify which properties we want to animate. And if we are not sure what exactly we want to animate, we can simply say 'all' which means that all the properties are enabled to be animated.
        // then we can also specify the time that we want for the animation to be finished.

// 🛑🛑 Side note --> WE CANNOT CREATE INFINITE animations with 'transition' property, have to use the '@keyframes' property.

// ⭐⭐⭐ The transition property HAVE TO BE ON THE INITIAL STATE of an element. Thats just how it works. 
        // So in the INITIAL STATE we say that there can be a transition an all the properties. And then on the different states, ie: ':hover' we state how it should look like. 👇👇👇

.btn:link,
.btn:visited {
  display: inline-block;
  text-transfrom: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  
  transition: all 0.2s;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn:active {
  transform: translateY(-1px);
}

⭐⭐⭐⭐⭐⭐⭐
// VERY IMPORTANT TECHNIQUE WITH TRANSITION 👇👇👇 
     'transition: <property> <duration> <timing-function> <delay>;'

There is a feature in the 'transition' property where we can set different settings for different properties, which enables us to have staged animations where for example first the transform animation happens then width animtion which has a delay of the same time that it takes to finish the transform animation. Like so 👇👇👇
      // We can ofcourse also set different 'duration', 'timing-function', 'delay' etc values for each.

 nav__item::before {
    content: "";
    transform: scaleY(0);
    transition: transform 0.2s, // this will happen first
                width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, // width animation have a delay of '0.2s' (same time it takes to finish the transform animation) thus it fires right after the transform animation is done-zo.
                background-color 0.1s;
  }

 nav__item:hover::before {
    transform: scaleY(1);
    width: 100%;
  }

nav__item:active::before {
    background-color: var(---color-white);
  }


// ******************************************************
// What are Psuedo-Classes and Psuedo-Elements?

// ************
// Psuedo-Classes
// 🟠🟠🟠🟠 Pseudo-Classes represents special state of a selector. Like when a user hover an element, or when a check-box is clicked, or if we want to select the last child, etc.
      // So we use Psuedo-Classes to style elements under certain conditions.

// 👇👇 Always create a BUTTON like this 👇👇
// When we want to create a button in HTML, use an anchor tag instead to create a link and then style it to look like a button. (ie: "<a href="#" class="btn btn__white">BUTTON</a>")

// after that in css, since we used an anchor tag, then we can use the --> 
    1. ':link' pseudo-class on it which represents the state inwhich the link has not yet been visited, 
    2. and also use the ':visited' psuedo-class which reporesents the state when the user has already clicked on the link once before and sees the button again --> 

// SideNote: Display property of anchor tags is set to inline by deafult.

// We want the link to look the same in both states
.btn:link,
.btn:visited {
   display: inline-block; // this will make the box-model work on the element, as if it was just a normal block element. So we should always do this if we want to add                                      padding, height, or width elements. 
  text-transform: uppercase;
  text-decoration: none;
  // padding: 1.5rem 4rem;
  // border-radius: 10rem;
  // letter-spacing: 1px;
  // position: relative;
  transition: all 0.2s; // ⭐⭐⭐ The transition property HAVE TO BE ON THE INITIAL STATE of an element. Thats just how it works. So now the tranform on all the                                                 states/pseudo-classes will be animated in relation to the initial state, ie: the ':hover' as well as the ':active' psuedo-classes will be                                     animated in relation to their initial state. ⭐⭐⭐
}

.btn:hover{
  transform: translateY(-3px); // will move the button up when we hover over it.
  box-shadow: 0 10px 20px rgba( 0, 0, 0, 0.2); // check bookmark for preset shadows
}

.btn:active { // when we click an element, then its in the active state which we can use the ':active' pseudo-class to do something to the element then. 
                          // ie: 'onclick' in JavaScript.
  transform: translateY (-1px); // moves the button up when we click it, in relation to the intial position of the button.
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}


// 💨 centering the button 👇👇
text-align: center; // since the anchor tag is an inline-block element, its treated as if it were text and so we can set the 'text-align' property in its parent container to center.



// 🟠🟡🟢 ***** VERY usefull Psuedo-Class --> ':not()'
 / The :not() CSS pseudo-class selects all children of the element its used on, EXCEPT the element specified in its parameter. Example 👇👇👇

.paragraph {
  &:not(:last-child) { // ⭐⭐⭐⭐ Selects all BUT the last child element of the 'paragraph' selector. Have to add a space when using it with '&' in Sass 
    padding-bottom: 2rem;
  }
}

// 🔵🟢🟠 ***** difference between ':last-child' and ':last-of-type' Psuedo-Classes --> 

':last-child' --> applies to ALL of the children of the current element
':last-of-type' --> applies only to the same TYPE of elements


// ************************************
// Psuedo-Elements
// 🟢🟢🟢🟢 Psuedo-elements allows us to style certain parts of elements. 
       // For example, the '::after' psuedo-element can be used to add a virtual element right after the element that we are selecting, and we can then style that element.

// Things to keep in mind when using Psuedo-elements --> 
    1. Psuedo-elements are written using double colons (::) instead of one colon (:). This is how we distinguish pseudo-classes (:) from pseudo-elements (::). 
          Although most browsers support both support both syntaxes for the original pseudo-elements
    
    2. Inorder for a Psuedo-element to actually appear on the page, we need to specify a "content" property for it, and it doesnt matter what the content' value is, it can be even be an empty string '""'. But we have to specify it, otherwise it wont't appear. THIS IS ALWAYS NECCESSARY.
    
    3. We also HAVE to specify the 'display' property. We ussually then set its value to be the same display property's value of the element we are using the Pseudo-element on. ie --> 

.btn {
  display: inline-block;
}

.btn::after {
  content: '';
  display: inline-block; // same value as that of the '.btn' itself 👆
}

    4. Then we can set the dimensions for the '::after' psuedo-element, inrelation to the original element that we are using the '::after' psuedo-element on. Like so: 

.btn::after {
  content: '';
  display: inline-block;
  // 👇 this means that the '::after' psuedo-element's dimensions will be the same as that of the original '.btn' element. We can change this to whatever we like.
  height: 100%;
  width: 100%;
  transition: all 0.3s; // ⭐⭐ remember to put the transition property in the INITIAL state, so that it would be applied on all the other states (':hover', ':active') for this element.
}

    5. Lastly, this is how we can target the different states of a psuedo-element, using psuedo-classes 👇
    
    // so this is an '::after' psuedo-element, ONLY when we have the original button on the hover state.
.btn:hover::after {
  // transform: scale(2); // scales the ENTIRE psuedo-element to double the size as we hover over the original button element.
  
  // Targeting the 'x' and 'y' in the 'transform: scale(...)' property --> 
  transform: scaleX(1.4) scaleY(1.6);
  
  opacity: 0; // and makes it fade out.
}



// ******************************************************

[Check out Notes slides for how CSS works behind the scenes]


// ******************************************************
// 🛑🛑 Important Example with Cascade --> Importance, Specificity (Important to keep in mind because this might cause bugs)

[look at slide folder notes, image called 'Important thing to keep in mind with Cascading - Specificity']


// ******************************************************
// What unit to use in CSS? 

After watching the behind the scene units lecture --> https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8274436#questions

// Absolute unit in CSS is pixel (px) and Relative units in CSS is (rem, em, vh, vw), percentage is not technically a unit but we can say that it is a Relative unit as well.

// ⭐ ALWAYS use the Relative unit 'rem' for everything in CSS. ⭐
        // because we want an easy way to change all the measurements on our page when creating media-queries for responsivness, by simply changing the root font-size in the HTML selector, since remember that rem is relative to the document's root font-size (font-size specified in the HTML selector).
            // For-instance, for a mobile-device we can simply change the root font-size in the HTML selector to a smaller value, and all the padding, margin, font-sizes, etc will change accordinlgy. SAVE ALOT OF TIME, instead of writing hundreds of lines of code in media queries. ie: 
 
**** 'font-size: 62.5%' explanation 👇👇 ****
Remember that the initial root font-size is 16px (if nothing is specified for it in the html selector), which makes '1rem = 16px' because rem is relative to the root font-size. 
    So by changing the root font-size to 62.5%, ie: 10px (62.5% * 16px = 10px), then '1rem = 10px'. We simply make the root font-size 10px inorder to make our life easier by having all the 'rem' dimensions divisible by '10px'.
    The reason to why we make the 'font-size: 62.5%' in percentage and not just 'font-size: 10px' even tho they are both equal the same, is because it is very bad practice/accessibility to set the root font-size to pixels. 
    Because by setting the root font-size to a value in pixels, we actually REMOVE the ability for users that want to manually change their browser's font-size in the settings or by zooming-in and out the page. The font-size will be 10px no matter what the user has their default font-size set to.
        ⭐ Which is why we set the root-size to a percentage 'font-size: 62.5%', which will translate to a percentage of the default font-size given by the browser, the default font-size will be the initial value of the root font-size (16px), if the user hasnt change anything. But if the user change their default font-size setting or zooms-in and out the page, then the root font-size will automatically change as well, because we set it to a percentage value, relative to the default root font-size. ⭐
********** 👆👆👆 VERY IMPORTANT TECHNIQUE 👆👆👆 *************

// 👇👇👇 (always do this in CSS) 👇👇👇

// aestricks (*) selector, applies the properties declared in its declaration-block, to EACH AND EVERY ELEMENT ON THE PAGE. 👇👇
*, // this only selects the REAL elements of the page, and not any psuedo-elements. which is why we add these 👇👇 (prevents any strange behavior)
*::after,
*::begin {
  margin: 0,
  padding: 0,
  box-sizing: inherit, // this will force inheritance on the box-sizing property for all the child elements of the 'html' element, since the 'html' selector has a box-sizing property assigned to it.
    // The 'box-sizing' property by itself is not inherited, but by setting the 'box-sizing' on each and every element on the page using the '*' selector, to 'inherit', it will sutomatically inherit whatever we value we put in the parent element selector (html) to its children (ie: all the page elements).
}

html {
  // root font-size is set in the html selector 👇
  font-size: 62.5%,  // <-- look up 👆👆 for explanation
  box-sizing: border-box, // 
}


// ******* Clean code same as 👆👆👆 but without comments (ALWAYS INCLUDE IN EVERY CSS FILE) *******

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}


// ******************************************************
// CSS Architecture, Components and BEM. [🛑 VERY IMPORTANT 🛑]

After watching the behind the scene units lecture --> https: https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8274444#questions

[LOOK AT SLIDES PICTURES.]



// ******************************************************
   // ******************************************************
// 💃 Starting with Sass 💃

// ******************************************************
// Installing Sass 

1. Install Node.js from --> https://nodejs.org/en/
2. Check if node installed successfully or if I have it --> (command-line) "node -v"
3. Then go to project folder that we want to install Sass in using command-line. Or simply use the built-in VS Terminal inside of the project folder to install Sass there.
4. Create a 'package.json' file ---> 'npm init' in Terminal. 
5. Install Sass Compiler --> 'npm i node-sass --save-dev'

6. 🐫 Side Note: '--save-dev' updates the 'package.json' file to list the Sass package as one of our developer dependencies. We should now see the Sass version listed under 'devDependencies' in 'package.json' file.
7. 🐫 Side note: installing jQuery using npm --> 'npm i jquery --save'
              uninstalling jQuery --> 'npm uninstall jquery --save' (same way for ALL npm packages)

8. ⭐⭐ When sharing or uploading the project to git, DO NOT INCLUDE THE 'node_modules' folder by creating a '.gitignore' file and writing this inside it 'node_modules/'
9. VERY IMPORTANT ---> Then when we clone the project somwhere else, we USE 'npm install' which will install all the packages specified in the 'package.json' file. 🔴🍁🐫✨

// Compiling Sass
10. We use the npm Sass package we installed, by writing an npm script in the 'package.json' file. -->
"scripts": {
    "{any name we want for script which will be used to call the command}": "{name of the package} {location of sass file} {location of compiled css file}" <-- [our command]
  },
    
    Like so [COPY THIS] --> [WATCHES FOR CHANGES IN OUR SASS FILES and compiles it to the 'style.css' file] [ "watch:sass" is called a TASK] 
"scripts": {
    "watch:sass": "sass sass/main.scss css/style.css -w"
  },
    
    // The '-w' will enable Sass to keep watching whatever is changed in our Sass code and compile it automatically
11. Then in Terminal write this --> 'npm run {name of our script}'
👉 'npm run compile:sass' [in a seperate Terminal]
12. Then initialise live-server --> 'live-server'  [in a seperate Terminal]
      

💃💃💃💃 Thats it. Now the empty CSS file is overwritten by the compiled Sass file 💃💃💃💃


// --------------------------------------------------------------------------------------
// 🍁 Setting up a simple BUILD PROCESS with NPM Scripts circle 🍀

https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8274568#overview

See picture in notes Folder.

//  Build process is a sequence of tasks that we perform automatically after we finish developing a product or a certain feature of a product. The result of the build process is one or more final files which are then ready for production/ ready to depolyed to a Web-server.

Step 1: Compile Sass to CSS.
Step 2: Concatenating (combining) third party styles (ie: CSS files). [So our porject will only have one CSS file which is alot better for performance because now we will have only one https request for our CSS files]
Step 3: Adding vendor prefixes to CSS.
Step 4: Minify and compress CSS.
Step 5: Putting it all together.

// ------------------------------------------
// 🔵 🎉 👇 CREATING the BUILD PROCESS with NPM Script 👇 ✨ 🔴

https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8274568?start=810#questions

// in the 'package.json' file

1. Compile Sass to CSS. Compiles our 'main.scss' file to another file called 'style.comp.css' ['comp' stands for compiled]               [🌟 USED AT THE END OF OUR PROJECT WHEN WE RUN THE BUILD PROCESS]
"scripts": {
    "compile:sass": "sass sass/main.scss css/style.comp.css"
  },
    
2. Concatenating task
        - Install an npm package called 'concat' --> 'npm install concat --save-dev'

"scripts": {
    "concat:css": "concat -o css/style.concat.css {enter the location of third party CSS files that we want to concat HERE} css/style.comp.css"
  },
    
3. Automatically add Prefixes to CSS
      - Install an npm package called 'autoprefixer' --> 'npm install autoprefixer --save-dev'
      - Install an npm package called 'postcss-cli' --> 'npm install postcss-cli --save-dev'

"scripts": {
    "prefix:css": "postcss --use autoprefixer {'-b' stands for browsers} {'last 10 versions' means which browser versions we want to target} {enter location of file we want to add prefixes to } -o {location of output file with css prefixes added}"
  },

"scripts": {
    "prefix:css": "postcss --use autoprefixer -b 'last 10 versions' style.concat.css -o css/style.prefix.css"
  },
    

4. Compress CSS

"scripts": {
    "compress:css": "sass css/style.prefix.css css/style.css --style compressed"
  },
    
5. A task that runs the "compile:sass", "concat:css", "prefix:css", and "compress:css" at the same time. [build CSS which will be ready for production]
       - Install an npm package called 'npm-run-all' --> 'npm install npm-run-all --save-dev'

"scripts": {
    "build:css": "npm-run-all {names of the tasks}"
  },
    
"scripts": {
    "build:css": "npm-run-all compile:sass concat:css prefix:css compress:css",
  },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SUMMARY -->  ALWAYS DO THIS WHEN STARTUNG A NEW PROJECT

1. Install Node.js from --> https://nodejs.org/en/
2. Check if node installed successfully or if I have it --> (command-line) "node -v"
3. Then go to project folder that we want to install npm packages in using command-line. Or simply use the built-in VS Terminal inside of the project folder to install packages there.
4. Create a 'package.json' file ---> 'npm init' in Terminal. 
5. Installing all packages we need --> npm i --save-dev node-sass concat autoprefixer postcss-cli npm-run-all

      or simply copy this to the 'package.json' file under 'devDependencies' and 'dependencies' 👇👇👇👇👇
                                          
                                                 "devDependencies": {
                                                    "autoprefixer": "^10.4.2",
                                                    "concat": "^1.0.3",
                                                    "npm-run-all": "^4.1.5",
                                                    "postcss-cli": "^9.1.0",
                                                    "sass": "^1.43.2"
                                                  },
                                                  "dependencies": {
                                                    "live-server": "^1.2.1"
                                                  }
    THEN RUN 'npm i' in VSC terminal to install the latest versions of the npm packages. 

6. Then copy this to the 'package.json' file under 'scripts' 👇👇👇👇👇
    
              "scripts": {
                  "watch:sass": "sass sass/main.scss css/style.css -w",
                  "devserver": "live-server",
                  "start": "npm-run-all --parallel devserver watch:sass",
                  "compile:sass": "sass sass/main.scss css/style.comp.css",
                  "concat:css": "concat -o css/style.concat.css css/icon-font.css css/style.comp.css",
                  "prefix:css": "postcss --use autoprefixer -b 'last 10 versions' css/style.concat.css -o css/style.prefix.css",
                  "compress:css": "sass css/style.prefix.css css/style.min.css --style compressed",
                  "build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"
                },
    
---------------
7. ⭐⭐ Starting the DEVELOPMENT WORKFLOW (to start WATCHING our Sass file (compiling sass to css) and running live-server to see changes live in browser)

              In VSC Terminal --> 'npm run start'

8. ⭐⭐ Starting the BUILD PROCESS when ready to deploy our website to LIVE SERVER at the END.

          In VSC Terminal -->  'npm run build:css' 
🔴🔴🔴IMPORTANT --> Then change the link to the stylesheet in HTML to --> <link rel="stylesheet" href="css/style.min.css" /> 🔴🔴🔴
---------------  
    
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// *****************************************************************************************************************************
  // *****************************************************************************************************************************
// Sass Variables and Nesting 

// HTML
<nav> 
  <ul class="nav">
    <li><a href="#">About Us</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Contact Us</a></li>
  </ul>

  <div class="btn">
    <a class="btn__main" href="#">Learn More</a>
    <a class="btn__hot" href="#">Learn More</a>
  </div>
</nav>

// SCSS
// 📝 Side Note: We can write comments in Sass using double slash '//' instead of '/* */' in normal CSS.

// 🟡🟡🟡 Creating VARIABLES in Sass using SCSS syntax
    // Colors are a typical usecase for Sass variables. [Remember, a Variable is simply a container that stores data, then we can reuse it anywhere.]
// 👇👇👇 This is how we create a variable in Sass (always starting with the '$' sign, this is how Sass identifies variables) 👇👇👇
    // color Variables
$color-primary: #f9ed69; 
$color-secondary: #f08a5d;
$color-tertiary: #b83b5e;
$color-text-dark: #333;
$color-text-light: #eee;

    // dimensions Variables
$width-button: 150px;

nav {
  margin: 30px;
  background-color: $color-primary; // this is how we use variable in Sass
  
  // see explanation below to why we added the this 'clearfix' since we use floats to position element in the 'nav' element (this is the same as belwo in explanation. BUT using Sass nesting)
  &::after { // 🛑 same as '.clearfix::after {}' in regular CSS         // ('&' WILL BE REPLACED WITH 'nav')
    content: "";
    display: table;
    clear: both;
  }
}

.nav {
  list-style: none;
  float: left;
  
  // 🟠🟠🟠 NESTING in Sass
    // selecting nested HTML element 
      // 🟢 WITH Sass -----   // 🛑 same as '.nav li {}' in regular CSS
  li { // selects ALL 'li' elements nested inside the element that the '.nav' class is attached to (ie: '<ul>')
    display: inline-block;
    margin-left: 30px;
    
    // the '&' operator writes the selector path up until this point. So in this case, '&' operator is the same as '.nav li' in normal CSS (ie: '.nav li:first-child')
    &:first-child { // ----- 🛑 same as '.nav li:first-child {}' in regular CSS
    margin-left: 0;
  }
    
    // styling the '<a>' tags
    a:link, // ----- 🛑 this is the same as '.nav li a:link {...}' in regular CSS
    a:visited { 
      text-decoration: none;
      text-transform: uppercase;
      color: $color-text-dark; // using Sass variable
    }
  }
  
  // selecting a specific nested element (lets say we want to select only the first '<li>' element in the '<ul>')
      // 🟢 WITH Sass 
  li:first-child {
    margin-left: 0;
  }
  // 👆 an even better way, using '&' which is inside the nest 'li' itself 👆 (there is no limit to how far we can nest with Sass)
}

.btn {
  float: right;
}

.btn-main:link,
.btn-main:visited,
.btn-hot:link,
.btn-hot:visited {
  display: inline-block;
  padding: 10px; // padding wont we added to top and bottom if display is not set to 'inline-block', because otherwise default 'display' for anchor tags is 'inline', and thus we cant mess with height (look at slides)
  text-decoration: none;
  border-radius: 100px; // just any juge number in order to give them that rounded corners.
  text-align: center;
  text-transform: uppercase;
  width: $width-button; // using Sass variable
  color: $color-text-light; // using Sass variable
}

.btn-main {
  &:link { // ----- 🛑 same as '.btn-main:link {}' in regular CSS
    background-color: $color-secondary;
  }
  
  &:hover { // ----- 🛑 same as '.btn-main:hover {}' in regular CSS
    // 👇👇👇👇👇👇 Sass comes with built-in color functions which can make our lives a bit easier 👇👇👇👇👇 (using the 'darken()' built-in Sass color function)
     background-color: darken($color-secondary, 15%); // makes the '$color-secondary' color 15% darker.
  }
}

.btn-hot {
  &:link { // ----- 🛑 same as '.btn-hot:link {}' in regular CSS
    background-color: $color-tertiary;
  }
  
  &:hover { // ----- 🛑 same as '.btn-hot:hover {}' in regular CSS
    // 👇👇👇👇👇👇 Sass comes with built-in color functions which can make our lives a bit easier 👇👇👇👇👇 (using the 'lighten()' built-in Sass color function)
     background-color: lighten($color-tertiary, 25%); // makes the '$color-secondary' color 25% ligher.
  }
}


// 📝 Side Note: I ussualy use 'Display: flex' for nav bars and NEVER 'floats' but since in this example Jonas uses 'float' then I use 'float in the example as well. 
      // AND SO, we need to use a 'clear fix' since all elements inside the nav are now floating and thus the 'nav' element collapses and its height is now 0 and thus we cant set a background color since nav element's height' is 0. So to fix that we use a 'clear-fix' method, like so ----> 

    // We ussually create a class called 'clearfix' and then add it to the collapsed element, ie: the 'nav' element. (WITHOUT SASS)
.clearfix::after {
  content="";
  clear: both;
  display: table;
}




// ******************************************************
// Sass 🟠 Mixins, 🔵 Functions, and 🟡 Extends


    // same example as above 👆
// HTML
<nav> 
  <ul class="nav">
    <li><a href="#">About Us</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Contact Us</a></li>
  </ul>

  <div class="btn">
    <a class="btn__main" href="#">Learn More</a>
    <a class="btn__hot" href="#">Learn More</a>
  </div>
</nav>

// SCSS

   // SCSS Variables
$color-primary: #f9ed69; 
$color-secondary: #f08a5d;
$color-tertiary: #b83b5e;
$color-text-dark: #333;
$color-text-light: #eee;

$width-button: 150px;

    
// 🟠 Sass Mixin ******
    // A Mixin is like a huge variable but with MULTIPLE lines of code (includeing a selector) stored inside it. Prevents us from having to write the same lines code in multiple places in our file, by simply storing these lines of code and then using that variable.
// this is how we create a '@mixin' 👇👇👇
/ CLEAR FIX when using 'FLOATS' on elements and their parent's height collapses.
@mixin clearfix { // so this 'mixin's name is clearfix (which we can use anywhere we want in our project using '@include'. See below for how to use 'mixins' 👇)
  &::after {
    content= "";
    clear: both;
    display: table;
  }
}

    // We can pass in ARGUMENTS in Mixins (have to include the '$' symbol in the argument). like so -->
@mixin style-link-text($color) {
  text-decoration: none;
  text-transform: uppercase;
  color: $color; 
}

// 🔵 Writing our own Sass Functions ***** [🔴NOT VERY USEFULL🔴]
@function divide($a, $b) {
  @return $a / $b;
}


// 🟡 Sass '@extend' ******
  // '@extend 'is a feature of Sass that allows classes to share a set of properties with one another. 
          // So basically we can write a placeholder using '%' and put a bunch of code in there, and then have other selectors '@extend' that placeholder. 

// See example below with buttons 👇👇👇 

// --------------------------------------------------------------------------------
// So which one to use 🟠 '@mixin' or 🟡 '@extend'
// '@mixin' and '@extend' are fundamently different in the way they work behind the scenes (see video explanation. Not very important tho)
           ⭐ [DONT USE '@extend'. Just use '@mixin' for avoiding duplicate code] ⭐
           
//  just remember that our Sass code gets compiled to regular CSS in order for the browser to be able to read it, so in the end all the Sass features we use (variable, nesting, '@mixin', '@extend', and '@function') doesn't matter, its just for our convenience when writing the code.
// --------------------------------------------------------------------------------

nav {
  margin: 30px;
  background-color: $color-primary; 
  
  @include clearfix; // 🟠 This is how we use a mixin using '@include'
}

.nav {
  list-style: none;
  float: left;
  
  li {
    display: inline-block;
    margin-left: divide(60, 2) * 1px; // 🔵 using the Sass function we created to calculte the margin. '* 1px' is an easy fix to let CSS know what unit to use for 'margin-left'. [NOT VERY USEFULL]
    
    &:first-child {
    margin-left: 0;
  }
    
  a:link, 
  a:visited { 
    @include style-link-text($color-text-dark); // 🟠 --->  using a mixin (using an argument to pass in the color variable)
    }
  }
}

.btn {
  float: right;
}

// 🟡 creating a placeholder --> [DONT USE '@extend']
%btn-placeholder {
  display: inline-block;
  padding: 10px;
  border-radius: 100px; 
  text-align: center;
  width: $width-button; 
  @include style-link-text($color-text-light); // 🟠 ---->  using a mixin (using an argument to pass in the color variable)
}
  
.btn-main {
  &:link { 
    @extend %btn-placeholder; // 🟡 extending the code from the placeholder we created 
    background-color: $color-secondary;
  }
  
  &:hover { 
     background-color: darken($color-secondary, 15%); 
  }
}

.btn-hot {
  &:link { 
    @extend %btn-placeholder; // 🟡 extending the code from the placeholder we created 
    background-color: $color-tertiary;
  }
  
  &:hover { 
     background-color: lighten($color-tertiary, 25%); 
  }
}



// ******************************************************
// The 7-1 Architechture pattern with Sass
    [This Architecture is really design to handle LARGE multipage websites or Applications, its overkill for small landing pages or small apps so dont worry about it too   much. USE WHATEVER YOU LIKE.]

// So the project will have 7 different folders for partial Sass files, and 1 main Sass file which will be used to import all the other Sass files into it and then compile the CSS stylesheet from that main Sass file.

 [All of these folders and the 'main.scss' file will be inside a 'sass' folder]
    // Partial files begin with an underscore '_', which indicates that they are partial and will be imported by the 'main.scss' file
〰 Folder 1 --> 'base' ----> File 1 --- which will have a sass PARTIAL file called '_base.scss' that will contain the real Low-Level basics such as the resets '*', 'html',                                           and 'body' element selectors with their styling.
                             File 2 --- '_animations.scss', will contain all the animations
                             File 3 --- '_typography.scss',
                             File 4 --- '_utilities.scss',

        // 'abstract' folder will contain code that not going to output any CSS, ie: Variable, Mixins, etc.
〰 Folder 2 --> 'abstracts' ----> File 1 --- '_variables.scss'
                                  File 2 --- '_mixins.scss'
                                  File 3 --- '_functions.scss',
                                    
   // 'components' folder will contain one file for each component. Remember that components are our REUSABLE building blocks that make up website or Apps (completely independent).
〰 Folder 3 --> 'components' ----> File 1 --- ''

   // 'layout' folder will contain code for each piece of the global layout of the entire project. So it will contain a Global Header file, a Global Footer, etc.
〰 Folder 4 --> 'layout' ----> File 1 --- ''
                                  
// 'layout' folder will contain specific/unique styles for specific pages.
〰 Folder 5 --> 'pages' ----> File 1 --- '_home.scss'

// 'themes' folder for when we are creating a web app with like different themes, a dark and light modes for instance.
〰 Folder 6 --> 'themes' ----> File 1 --- ''

// 'vendors' folder where we put Third-Party CSS, like the CSS file for Bootstrap, an Animation framework, or an Icon system.
〰 Folder 7 --> 'vendors' ----> File 1 --- ''


    // After that, Importing all partial files that we created to the 'main.scss' file (where the partial SCSS files will be compiled to the main CSS stylesheet) 👇
      @import "base/base";         // dont have to include the underscore '_' or the '.scss' when writing the file path. (can include them tho)
      @import "base/animations"
      @import "base/typography"
      @import "base/utilities"

      @import "abstracts/variables"
      @import "abstracts/mixins"
      @import "abstracts/functions"

      @import "pages/home"

  // ⭐⭐⭐ So the 'main.scss' file will have no code except for the "@import" declarations ⭐⭐⭐



// ******************************************************
// Basic principles of Responsive Design and Layout types

  Video URL --> https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8274482#questions/6330752

[Checkout slide pictures for explanation]



// ******************************************************
// Flexbox

// ******************************************************
// Philosophy behind FlexBox

[Check out slides for explanation of what is Flexbox and also a CHEAT SHEET]


👇👇👇 [VERY USEFULL TECHNOQUE] 👇👇👇
// ⭐⭐⭐ VERY IMPORTANT point regarding 'flex-direction' ⭐⭐⭐
// When we change the 'flex-direction: column' to column, then the main-axis of that element becomes along the y-axis instead and NOT along the x-axis as with the defalut 'flex-diection: row' , THUS 'justify-content' now works along the y-axis and 'align-items' / 'align-self' along the x-axis (the opposite of their defaults).

    // So we change the 'flex-direction' from 'row' to 'column' so that we can use 'justify-content' in a different direction (from along the x-axis to along the y-axis)
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between; // works along the y-axis since 'flex-direction' is set to 'column'
}


// ******** using 'margin-left: auto' / 'margin-right: auto' with Flexbox 👇👇👇
// 🟠🔵🟡 Another neat trick that we can do in flex-box when we want to create a space between 4 elements, with each 2 elements grouped up together on either side --> is to use 'margin-left: auto' / 'margin-right: auto', instead of wrapping each 2 elements in their own 'div' containers and the setting 'justify-content: space-between'
            [🛑 not that important tho, definetly prefer wrapping groups of elements in their own 'div' container, and then setting 'justify-content: space-between']

watch last part of video for better explanation --> https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8274604#questions


// ******************************************************
// CSS Custom Properties [CSS Variables]  

⭐ [Use CSS VARIABLES instead of SASS VARABLES] ⭐

// With CSS Variables we no longer have to rely on Sass to create variables, which is way better because --> 
1. With CSS Variables, we dont even need a preprocessor like Sass.
2. CSS Variables can be manipulated in JavaScript, where as Sass Variable cant.
3. CSS Variables can be edited in DevTools, where as Sass Variable cant.
4. Its also easier to use CSS Variables in the calc function.
5. Lastly CSS variables Cascade and they are inherited.

// Defining CSS Variables (have to be defined inside a scope or declaration, ie: inside curly braces '{}')
        // We can put CSS Variable in any normal selector that we want, but then these CSS Variable would only be available in that selector's element and its children. WHICH IS NOT WHAT WE WANT.
    // So we put CSS Variables in the ':root' psuedo-class (which is the same thing as the 'html' selector, BUT with a HIGHER SPECIFICITY. So its like the Global parent element so all CSS Variables declared inside its declaration, will be available to all it child elements.) 👇👇👇

:root {
  // this is how we declare custom properties by using "--" and then name of the property/variable --> 
      // the '--' lets us distinguish between OUR custom CSS properties and a normal built-in CSS properties.
  --color-primary: #eb2f64;
  --color-primary-light: #FF3366;
  --color-primary-dark: #BA265D;
}
}

// using CSS variables (using the "var()" function) --> 

body {
  background-image: linear-gradient(to right bottom, var(--color-primary-light, var(--color-primary-dark)));
}


// ******************************************************
// Font Icons --> for Icons [Dont use font-icons for icons, use SVG instead (next section 👇)]

https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8274592#overview

/ It is not good practice to use '.png' for icons, because 'png' doesn't scale nicely when we scale our webpage, but Icon-fonts which are vectors always stay sharp no matter how much we zoom-in. 
    // SVG is even better than Icon-fonts.

// Using Icon-fonts -->
    1. copy the 'fonts' folder which contains all the icons we want with different formats and also the 'styles.css' file to our projects, from the main folder we downloaded.
    2. Rename 'styles.css' file to 'icon-font.css'
    3. Include the icons in HTML by creating a link tag for it BEFORE our CSS link -->  <link rel="stylesheet" href="css/icon-font.css" />  // --> font-icon stylesheet
          <link rel="stylesheet" href="css/style.css" /> // --> my stylesheet
    4. using a font-icon --> we need to add one of the classes in the 'font-icon.css' stylesheet (which contains all the font-icon classes) to an HTML element in order to include it on our web page. Like so 👇
        // Doesnt matter what the HTML element is, but its a convention to attach the font-icon's class to a 'i' element, which stands for 'italic'.
    
// HTML    
      <div class="feature__item">
        <i class="feature__item--icon icon-basic-world"></i>
        <h3 class="heading__tertiary feature__item--title">
          Explore the World
        </h3>
        <p class="feature__item--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          laudantium.
        </p>
      </div>
    
// CSS
    feature--icon {
      // Icon-font is like text, so we can style it as if it were text
      font-size: 6rem;

      background-image: linear-gradient(
        to right,
        var(--color-primary-light),
        var(--color-primary-dark)
      );
      -webkit-background-clip: text;
      color: transparent;
    }


// ******************************************************
// SVG --> For Icons

// Why use SVG icons instead of Font-Icons? 
There are several problems with Font Icons -->
    1. Like the fact Font Icons is really just a hack to display icons, which are like images using a font.
    2. Also Font Icons fail more often than one would think, and in that case the browser just displays a black square or something like that.
    3. Another big reason to not use Font Icons is for accessibilty, where screen readers fails to read Font Icons for blind people.

        [So as a result, it is better to move away from Font Icons and replace them with SVG]

        
// What is an SVG (Scalable Vector Graphics)
It is bascially a way of writing Vector Graphics with CODE.

[USE 'icomoon.com' to convert Font Icons to SVG]

Watch video on to how use the SVG icons --> https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8274592#questions/3620872

After you choose the icons and download them, copy the svg folder and the 'symbols-defs.svg' file to the project, which will contain ALL of the icons we selected.
(Rename the 'symbols-defs.svg' file 'sprites.svg' in our project)
The 'demo.html' file in the main folder we downloaded will have the names of the icons that we can then use in HTML.

// After 👆. 
    /// 🟢 ******** This is how we ADD AN SVG ICON in HTML 👇👇👇
<svg class="search__icon">
   <use href="img/sprites.svg#{NAME OF THE SVG ICON FROM THE 'demo.html' file}"></use>
</svg>

// 📝 Side note: by using the 'sprites.svg' (which contains all of the svgs codes) to access each svg, the browser doesnt have to create multiple HTTPS requests for each svg inorder to render them, it just creates one HTTP request from the 'sprites.svg' file, which is better for performance.
// ⭐ USE '<svg></svg>' tag only for icons. ⭐

// if the SVG icon will be a button, then do this
<button class="search__button">
  <svg class="search__icon">
    <use href="img/sprites.svg#{NAME OF THE SVG ICON FROM THE 'demo.html' file}"></use>
  </svg>
</button>


// 🟠 ⭐⭐ Advantages of SVG 
    1. By using SVG we can now change the color of each of the Icons, using CSS. (using the 'fill' property)
    2. Also makes it so much easier to format and style, with Font Icons it is way harder to format them exactly like we want.


// Formatting/Styling SVG icons 👇👇👇
.search {  
  &__icon {
    // have to set its height AND width, if we want to change size
    height: 2rem;
    width: 2rem;
    fill: var(--color-grey-dark-3); // 'fill' changes the color of the svg icon
  }
}


    /// 🟢 ******** This is how we ADD AN SVG ICON in CSS 👇👇👇 --> using '-webkit-mask-image' [DONT LIKE THIS THO, ADD IN HTML INSTEAD 👆]

// A 'mask' basically defines an area where we can look through the element and see whats behind that element.
    / So what we do here is set the background color of the 'svg' icon element to a solid color (ie: pink), and then use the 'svg' icon as a 'mask' which lets us look through that mask and see the background color in the area where the icon is, while everything else is covered.

list__item::before {
      content: "";
      display: inline-block;
      height: 1.25rem;
      width: 1.25rem;
      margin-right: 1rem;

      background-color: var(--color-primary);
      -webkit-mask-image: url(../img/chevron-thin-right.svg);
      -webkit-mask-size: cover; // 'mask-size' is similar to 'background-size', so 'mask-size: cover' also lets the image cover the entire element. 
    }


// ******************************************************
// 🛑 Usefull Selectors 🛑  

// ****** 🟢 The '>' CSS selector --> [selects all Direct Children]

        <nav class="user">
          <div class="user__bookmarks-container">
          </div>

          <div class="user__notifications-container">
            
          </div>

          <div class="user__info">
          </div>
        </nav>


// selects all the DIRECT children of the '.user' class. ie: 'user__bookmarks-container', 'user__notifications-container', 'user__info'
  user__bookmarks-container > * {
    padding: 0 2rem;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
  }

// selects all the child elements of the 'about__content' section, BUT the last child ✨✨
about__content {
    & > :not(:last-child) {
      margin-bottom: 3rem;
    }
}   

// 📝 Side Note: this 'user__bookmarks-container * {...}' would select ALL the child including nested childs. Same as 'user__bookmarks-container div {..}' would select all the 'div' child elements.


// ****** 🟡 The '+' CSS selector --> [Selects first preceding sibling]

        <form action="#" class="search">
          <input
            type="text"
            class="search__input"
            placeholder="Search Hotels"
          />
          <button class="search__button">
            <svg class="search__button-icon">
              <use href="/img/sprites.svg#icon-magnifying-glass"></use>
            </svg>
          </button>
        </form>


// selects the sibling of the 'search__input' selector, when its focused (ie: 'search__button')
  search__input:focus + search__button {
    background-color: var(--color-grey-light-3);
  }


// ****** 🟢 The Attribute  CSS selector --> The CSS attribute selector matches elements based on the presence or value of a given attribute.

/ '^' symbol selects all elements in the 'row' element, with a class attribute that START with the word 'col-' [check MDN doc for different symbols.] 👇👇

.row {
  [class^="col-"] { 
     background-color: red;
  }
}




// ******************************************************
// 'transform: scaleY()' & 'transform-origin' -->

// 🟢 The 'transform: scaleY()' property scales the element from the middle to the sides, both in the up and down directions. It starts from the center because that where the 'transform-origin' default value is set 'center'.
      // Side note --> If we change the 'height' property for animation then the element would only get bigger from one side (down). 

// 🟠 The 'tranform-origin' default value is 'center', but we can change it to anything like 'left', 'top', 'bottom', or even numbers like '1rem'. It sets the origin for an element's transformations.

    // So when we hover over the nav item, then the '::before' psuedo element's height gets bigger.
.nav__item::before {
  transform: scaleY(0); // '0' means 0%
  transform-origin: bottom; // THIS will start the transform from the bottom of the nav item element, so instead of its height getting bigger from the CENTER, now height getting bigger from the BOTTOM-UP.
  transition: transform 1s;
}

.nav__item:hover::before {
  transform: scaleY(1); // '1' means 100%
}


// ******************************************************
// Responsive Images 📷

    // Use 'figure' html element when creating a gallery with images.
 'Meaning -->Use a <figure> element to mark up a photo in a document, and a <figcaption> element to define a caption for the photo'
    // By using the 'figure' html element for images, we can add a 'figcaption' html element to it which is basically a description for the image, below it by default.

       I M P O R T A N T -------------->  [🟢 Remember that in Responsive design we always want flexible images, and so we always HAVE to define the image's width or height in PERCENTAGES so that the image stays fluid.]

// ⭐⭐⭐ changing the 'display' of the image to 'block' (default is 'inline') to avoid having small gaps between and underneath the image, which happens when we leave the 'display' as 'inline'.
      // So an image should have a 'display' of 'block' or 'inline-block', if we want to avoid white space around it.

        <div class="gallery">
            <figure>
              <img
                src="img/hotel-1.jpg"
                alt="Hotel Photo 1"
                class="gallery__image"
              />
            </figure>

            <figure>
              <img
                src="img/hotel-2.jpg"
                alt="Hotel Photo 1"
                class="gallery__image"
              />
            </figure>

            <figure>
              <img
                src="img/hotel-3.jpg"
                alt="Hotel Photo 1"
                class="gallery__image"
              />
            </figure>
          </div>


.gallery {
  display: flex;

  &__image {
    width: 100%;
    display: block; // avoids having small gaps between and underneath the image (default is 'inline')
  }
}


// ******************************************************
// 🟢🟠🟡 Creating a User review Section 👇👇👇

// *********** 'figure' HTML element are perfect for user Reviews, not only for pictures or images. 
                        // They are great for text and description of their images.

    // Also use 'blockquote' inside the 'figure' element because it is great for user quote reviews.
// Alse use the 'figcaption' html element which is basically a description for the image, below it by default. 

        // Example 👇👇
              <figure class="review">
                <blockquote class="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  doloremque architecto dicta animi, totam, itaque officia ex.
                </blockquote>

                <figcaption class="review__user">
                  <img
                    src="img/user-6.jpg"
                    alt="User Review-1"
                    class="review__user-image"
                  />
                  <div class="review__user-container">
                    <span class="review__user-name">Franco Rodriguo</span>
                    <span class="review__user-date">Nov 24th, 2021</span>
                  </div>
                  <div class="review__user-rating">8.7</div>
                </figcaption>
              </figure>



// ******************************************************
// 'calc()' CSS function 

// lets us perform mathematical operations and even MIX units ⭐⭐⭐
        // In SASS we CANNOT mix units in mathematical operations.

    <div class="row>
        <div class="col-1">This is column 1 of 6</div>
        <div class="col-2">This is another column 1 of 3</div>
    </div>

.row {
  .col-1 {
    width: calc((100% - 6rem) / 2);
  }
}

// 📝  Side note --> If we want to use a SASS variable in the CSS 'calc()' function then we have to wrap the SASS variable like this --> 
  'width: calc((100% - #{$gutter-horizontal}) / 2)'
       🛑 👆 [NOT IMPORTANT AT ALL SINCE I DONT USE SASS variables, instead I USE CSS Custom Variables] 👆 🛑
       
       
       

// ******************************************************
// Utility classes in CSS [Very Important in terms of Reusability]

// Utility classes are very simple classes in CSS, which only has one simple goal and can be reused anywhere in the project.

// This class for instance will center the text that is inside of it --> 
<div class="u-center-text u-margin-bottom-8rem"> 
  <h2 class="heading-secondary">Exciting tours for adventerous people</h2>
</div>

.u-center-text {
  text-align: center;
}

// Another example of a utility class is 👇
        // creating a class that would add a margin-bottom to an an element, which lets us reuse that specific element without it having a marging that we dont want somewhere else on the page.

.u-margin-bottom-8rem {
  margin-bottom: 8rem;
}



// ******************************************************
// 'persepective' property & 'backface-visibility' property

// 🟢 The 'persepective' property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

// 🟢 The 'backface-visibility' property sets whether the back face of an element is visible when turned towards the user.


// In this example we create a card with two sides, that flips/rotates when we hover over it to show different content on it --> [CHECK TOUR WEBSITE FOR ALL THE CODE]

.card {
  perspective: 100rem; // In order to change the perspective of an element, we have to define the 'perspective' property in its PARENT element. Like so -->
        // The lower the value given to the 'perspective' property, the MORE DRAMATIC the 'perspective' animation is. (experiment with a high number (150rem) until we get the effect we want).
  
  &__side {
    // absolute positioning makes both card (front/back) on top of each other.
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem var(--color-black-transparent);

    transition: all 0.8s ease;
    backface-visibility: hidden; // The 'backface-visibility: hidden' property prevents us from seeing the back part of the card when its rotated
    
    ////////////////////////////////////////////////
    // Card -- FRONT SIDE
    &-front {
    }

    ////////////////////////////////////////////////
    // Card -- BACK SIDE
    &-back {
      transform: rotateY(180deg); // back-side initially flipped and since 'backface-visibility: hidden;' is set to hidden, its backside is hidden for the user.
    }
  }
}



// ******************************************************
// Creating a VIDEO BACKGROUND

// HTML

    // We need these two video formats (mp4/webm) inorder ta make sure they work on all browsers.
            // If none of the video formats in compatible with the browser, then the text below will showup instead of the video.
      <div class="background-video">
        <video class="background-video__content" autoplay muted loop>
          <source src="img/video.mp4" type="video/mp4" />
          <source src="img/video.webm" type="video/webm" />
          Your browser is not Supported!
        </video>
      </div>

// SASS
.background-video {
    position:absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.15;

    overflow: hidden;
    z-index:-1;

    &__content {
        height: 100%;
        width: 100%;
        object-fit: cover; // similar to 'background-size' but for HTML elements, like 'video' element.
    }
}


// ******************************************************
// Creating a FORM with INPUTS of types 'text', 'email' and 'radio' 

      // Something to keep in mind with 'form' elements, is that they dont INHERIT the FONT properties.

// Whenever we create a form it has to be in a '<form></form>' HTML element
   
        <form action="#" class="form">   // 'action="..."' attribue is basically the script/file where we want the form to go when we hit the submit button.
          /////////////// --> INPUT
          <div class="form__group">
            <input
              type="text"
              class="form__input"
              id="name"
              placeholder="Full name"
              required                   // with 'required' attribute the browser won't let us submit the form unless the Input field its on is filled out.
            />
            <label for="name">Full name</label>       
      /* 'for' attribute in the 'form' label --> links the 'label' element to the 'input' element, using the 'id="..."' specified in the 'Input' element.
           so when we click on the 'label' which is connected to the 'Input', the 'Input' field will be focused. */
          </div>
          
          /////////////// --> RADIO BUTTONS
          <div class="form__group">
            <div class="form__radio-group">
              <input
                type="radio"
                name="size"
                id="small"
                class="form__radio-input"
              />
              <label for="small" class="form__radio-label" name="size">           // "name" attribute is used to connect the radio button and the label.
                <span class="form__radio-button"></span>
                Small tour group</label>
            </div>

            <!-- We have to use a Button element in a form inorder to submit it, and NOT an anchor tag -->
            <button href="#" class="btn btn--green">Next Step &rarr;</button>
        </form>

// Check out natours project for cool input fields animations.


// ******************************************************
// Creating a Hamburger Nav Menu -- Without any JavaScript

[Checkout Natours website --> using 'Checkbox Hack']


// ******************************************************
// 'dispaly: table' / 'dispaly: table-cell' --> to vertically center two or more containers next to each other 
  
        [USE 'flex box' instead, not this]

// example

.popup {
  &__container {
    // display: flex;
    // justify-content: center;
    // align-items: center;

    display: table;
  }

  &__left {
    width: 35%;
    display: table-cell;
    }
  }

  &__right {
    display: table-cell;
    vertical-align: middle;  // 'vertical-align' is a property we can use on elements with display set to 'table-cell'.  
  }
}


// ******************************************************
// Creating Custom CSS Text Columns (Very usefull)

.popup-text {
      font-size: 1.4rem;
      line-height: 1.5;

      -moz-column-count: 2;
      -moz-column-gap: 4rem;
      -moz-column-rule: 1px solid var(--color-grey-light);
  
      column-count: 2; // number of text columns
      column-gap: 4rem; // space between columns (default value is '1em' [ie: 1em = 14px in this example])
      column-rule: 1px solid var(--color-grey-light); // border between text columns
    }


// ******************************************************
// Automatically hyphenate words using 'hyphen' property

// inorder for 'hyphens' property to work correctly, we have to define the document language in the HTML file (at the very top) --> '<html lang="en" </html>'

.popup-text {
      font-size: 1.4rem;
      line-height: 1.5;
      
      -moz-column-count: 2;
      -moz-column-gap: 4rem;
      -moz-column-rule: 1px solid var(--color-grey-light);
  
      column-count: 2; 
      column-gap: 4rem; 
      column-rule: 1px solid var(--color-grey-light); 
  
      hyphens: auto; // <-------
      // hyphen property needs alot of prefixes inorder to work on all browsers
      -moz-hyphens: auto; // mozzila browser
      -ms-hyphens: auto; // edge browser
      -webkit-hyphens: auto; // chrome and safari browsers
    }


// ******************************************************
// Prefix Tools
// Tools for adding prefixes to CSS properties (ie: '-moz-', '-ms-', '-webkit-' etc.)

      // In real life we should't add prefixes by ourselves like so --> 
.popup-text {
      -moz-column-count: 2;
      -moz-column-gap: 4rem;
      -moz-column-rule: 1px solid var(--color-grey-light);
  
      column-count: 2; 
      column-gap: 4rem; 
      column-rule: 1px solid var(--color-grey-light); 
    }

// Instead we should use prefixers tools to do that --> one good tool is called 'Auto prefixer'

      [LATER IN THE COURSE]



// ******************************************************
// HTML Anchors -- Navigation between different sectionson a page                   properties --> [':target']

The anchor HTML element is used to create hyperlinks between a source anchor and a destination/target anchor. 
          // The source is the text, image, or button that links to another resource (by adding the 'id' of the destination to the 'href' attribute --> 
                        <a href="#section-tours" class="btn btn--green u-margin-top-small" >Book Now</a>
          // and the destination/target is the resource that the source anchor links to --> 
                        <section class="section-tours" id="section-tours"> ... </section>

// Popup appear when we click a button WITHOUT JAVASCRIPT, using the ':target' CSS property  [Much easier with JavaScript tho]

The ':target' property is used to represent a unique element (the target element) with an id matching the URL's fragment. 
    1. It can be used to style the current ACTIVE target element. 
    2. URLs with a '#' followed by an anchor name/specified 'id' link to a certain element within a document. 
    3. The element being linked to is the target element.
    
  // HTML  
<div class="popup" id="popup">
  </div>

 // CSS 
.popup {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 8000;

  opacity: 0;
  visibility: hidden;
  transition: all 0.4s;

  // so this ':target' pseudo-class styling applies to the element which is the target, when the URL changes to having the specified target in it (ie: http://127.0.0.1:8080/#popup)
  &:target {
    opacity: 1;
    visibility: visible;
  }
  // These ':target' styles ONLY APPLY to the html element with 'id="popup", ONLY WHEN it is THE ACTIVE TARGET (ie: http://127.0.0.1:8080/#popup).
  // As soon as the ACTIVE TARGET changes, then the ":target" styles will no longer be applied.
}




// ******************************************************
// Takeaways from Natours Project [not everything tho]

1. It is always good to have image inside a div container as 'img' elements are inline elements. By wrapping it inside the div, we can adjust the width and position of image.

2. 'h1' heading is the single most important heading on the page, which is important for google or any other search engine, to figure out what our web page is all about.

3. centering element using absoulte positioning --> position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)

4. For broswer performance is the best to only ever animate two different properties. One is opacity and another is transform. That's what browser are optimized for. But with transform we can do a whole lot, everything we need to do for cool animation.

5. Whenever something weird happens when we are dealing with animations and transform --> the 'backface-visibilty: hidden' ussually fixes that. Like shaking of an element while animating, for instance. This is bug fix hack.

6. If we want to center the inline-block. 'text-align : center' is the way to go.

7. border-radius : 10rem 

8. transition property goes in initial state

9. HTML Entities used --> ['&rarr;' - right arrow] ['&nbsp;' - whitespace in HTML]   ['&ndash;' - long dash] ['&times;' - an X]


/* ******************************************************************************************************************************************************************** */
/* ******************************************************************** Advanced Responsive Design ******************************************************************** */


// ******************************************************
// Mobile-First VS. Desktop-First  &  BreakPoints

[Check Note pictures in 'Responsive Design' folder]

// Media Queries used in Natours Project
Desktop-First approach 👇

// --------------------------------
// --------------------------------
---> 👇👇  V E R Y   I M P O R T A N T  👇👇 <--   [best for ACCESSIBILITY]
🔴🔴 'em' and 'rem' units IN MEDIA-QUERIES are NOT affected by the root font-size that we specify in the 'html' selector 🔴🔴. Which means that '1em' or '1rem', in the MEDIA QUERY, are ALWAYS equal to the font-size coming from the browser 'font-size: 16px' even if we specify a root font-size in the html selector.
          // so --> '1em = 16px'
        
    // But if the user changes their browser font-size to 'font-size: 20px' then '1em' in the Media Queries will be equal to '20px'.

⭐⭐ SO Always use 'em' relative units for Media Queries ⭐⭐  
            // because if the user changes their default browser font size --> then the Media-Queries would not be affected by that change. ⭐ Which is why we use 'rem' units for Media-Queries. 

// The reason why we use 'em' and not 'rem' in Media Queries is because 'rem' fail to work as intended in some browsers. 
        // So after experiments done by people that understand alot about this, the conclusion was that 'em' is the best option fr Media Queries.
// --------------------------------
// --------------------------------



// MEDIA QUERY MANAGER
/* 
0 - 600px            --> Phone  [max-width: 37.5em]                   // "600px / {default root font size (16px)}"  --> 600px/16px = 37.5em
600px - 900px        --> Tablet Portrait  [max-width: 56.25em]
900px - 1200px       --> Tablet Landscape  [max-width: 75em]
[1200px - 1800px]    --> Where our NORMAL STYLES APPLY
1800px +++           --> Big Desktop  [min-width: 112.5em]

*/


// ******************************************************
// Using Sass Mixins to write Media Queries

// --------------------------------
// Again remember 👇

⭐⭐ Always use 'em' relative units for Media Queries ⭐⭐
            // // so --> '1em = 16px' [no matter if we specify a root font-size in HTML selector]

// --------------------------------

'@content' --> Directive that allows us to pass a block of code into a mixin
'@if' --> controls whether or not its block gets executed

// Example 👇

// 🛑 ONE WAY OF USING MIXINS TO WRITE MEDIA QUERIES ---> using '@content' 🛑

// CREATING the mixin in '_mixin.scss' file
@mixin responsive-phone {
  @media (max-width: 37.5em) {   // 600px
    @content;
  }
};
  
// using the mixin 
html {
  font-size: 62.5%;
  
  @include respnsive-phone {
    font-size: 50%;   // --> content that we pass into the mixin through the '@content' derivative.
  }
}
  
  
// 🛑🟢 A BETTER WAY OF USING MIXINS TO WRITE MEDIA QUERIES --> using Sass Arguments, '@if', and '@content' 🟢🛑
  
// ----------------------------------------------------
⭐⭐⭐⭐ // ORDER INWHICH TO PUT MEDIA QUERIES IS ----> always from LARGER to SMALLER. ⭐⭐⭐⭐

     // watch first part of video for explanation --> https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8274550?start=15#questions
// ----------------------------------------------------

⭐⭐

// MEDIA QUERY MANAGER
/* 
0 - 600px            --> Phone  [max-width: 37.5em]                   // "600px / {default root font size (16px)}"  --> 600px/16px = 37.5em
600px - 900px        --> Tablet Portrait  [max-width: 56.25em]
900px - 1200px       --> Tablet Landscape  [max-width: 75em]
[1200px - 1800px]    --> Where our NORMAL STYLES APPLY
1800px +++           --> Big Desktop  [min-width: 112.5em]

$breakpoint argument choices 👇
--> phone
--> tablet-portrait
--> tablet-landscape
--> big-desktop 

*/
  
// CREATING the mixin in '_mixin.scss' file
@mixin responsive($breakpoint) {
  @if $breakpoint == phone {
    @media (max-width: 37.5em) {             // 600px
      @content;
    }
  }
  
  @if $breakpoint == tablet-portrait {
    @media (max-width: 56.25em) {             // 900px
      @content;
    }
  }
  
  @if $breakpoint == tablet-landscape {
    @media (max-width: 75em) {                // 1200px
      @content;
    }
  }
  
  @if @breakpoint == big-desktop {
    @media (min-width: 112.5em) {              // 1800px
      @content;
    }
  }
}

// using the mixin 

// ----------------------------------------------------
⭐⭐⭐⭐ // ORDER INWHICH TO PUT MEDIA QUERIES IS ----> always from LARGER to SMALLER. ⭐⭐⭐⭐

    // watch first part of video for explanation --> https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8274550?start=15#questions
// ----------------------------------------------------

html {
  font-size: 62.5%; //1rem = 10px;  10px/16px = 62.5%
  
  @include responsive(tablet-landscape) {     // 1200px
    font-size: 56%;
  }
  
   @include responsive(tablet-portrait) {     // 900px
    font-size: 50%;
  }
  
  @include responsive(phone) {    // 600px
    font-size: 45%;
  }
  
  @include responsive(big-desktop) {          // 1800px
    font-size: 80%;
  }
}


// ******************************************************
// 🖼️ Responsive Images in HTML 🖼️ 

Link to video -->   https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8274556#questions/6979984

/ 3 use Cases of Responsive images 👇
    1. Resolution Switching --> Decrease image resolution on smaller screens
    2. Density Switching --> Different image resolutions for different screen resolutions/pixel-density screens.            /' Images DEPEND on the screen RESOLUTION
    3. Art Direction --> Different images for different viewport widths/screen sizes.                                 /' Images DEPEND on the screen WIDTH
---------------------------------------------------------------------------------
  // 🔵 Implementing "Density Switching" in HTML 🟣 [using the 'srcset' attribute ]   [[EASIEST USECASE FOR RESPONSIVE IMAGES]]
      
      // Serve a larger verision of tha same image for higher resolution screens, and a smaller version of the same image to lower density/low resolution screen. 

// 'srcset' defines the set of images we will allow the browser to choose between, and what size each image is. Allows the browser to choose the best image according to the screen that is used by the user.


<div class="footer__logo-container">
      <img
        srcset="/img/logo-green-1x.png 1x, /img/logo-green-2x.png 2x" // '1x' and '2x'  --> are ⭐DENSITY DESCRIPTORS⭐ where '1x' refers to low density/resolution screens, and '2x' refers to high density/resolution screens. The browser then chooses the best image for each of the user's resolution screen, using 'srcset' attribute.

        alt="Footer Logo"
        class="footer__logo"
      />
</div>


---------------------------------------------------------------------------------
  // 🟠 Implementing "Art Direction" in HTML 🟢 [using the '<picture>' HTML element]
    
        // Tells the browser to use one image on a certain screen width, and another image on another screen width. Images DEPEND on the screen width.
                                      // ie:  Forces the browser to use a certain image according to a certain media query.

// We have to specify a '<source>' element and an 'img' element, inside the '<picture>' element.

    // '<source>' element can also take in a 'srcset' attribute which will be used if the screen size complies with the value in the 'media' attribute. 👇👇👇 
                // If it doesnt comply, then the image in the 'img' element will be used. 
                              // we also used the 'srcset' attribute to make the browser decide which image to show depending on the screen resolution [Density Switching]

  <div class="footer__logo-container">
      <picture class="footer__logo">
        <source srcset="/img/logo-green-small-1x.png 1x, /img/logo-green-small-2x.png 2x" media="(max-width: 37.5em)" />
        <img srcset="/img/logo-green-1x.png 1x, /img/logo-green-2x.png 2x" alt="Footer Logo" />
        <src="/img/logo-green-2x.png"/>   // ALWAYS INCLUDE THE 'src' ATTRIBUTE IN CASE THE BROWSER DOESN'T SUPPORT THE 'srcset' attribute. WILL BE IGNORED IN CASE THE BORSWER UNDERSTANDS THE 'srcset' attribute.
      </picture>
  </div>


---------------------------------------------------------------------------------
  // 🟣 Implementing "Resolution Switching" in HTML 🟡 [use "Density Switching" instead]

           // "Resolution Switching" allows the browser to choose the best image for the current veiwport and pixel-density situation, as oppose to "Art Direction" which FORCES the browser to use a certain image according to a media query we specify.
          
          // In the 'srcset' attribute --> Instead of using DENSITY DESCRIPTORS ('1x' / '2x') we use ⭐WIDTHS DESCRIPTORS⭐ which informs the browser of the width of the images we're using without the browser having to download them inorder to access this information. (ie: 300w --> a descriptor that means that the image is '300px' wide)
          
          // The 'sizes' attribute --> informs the browser of the approximate width of the image at different viewport widths. 
          
          // 🔴 So together with the WIDTHS DESCRIPTOR and the 'SIZES' attribute the browser can figure out which is the perfect image to use for the viewport width and the current display resolution 🔴
          
 <div class="footer__logo-container">
      <img
        srcset="/img/logo-green-1x.png 300w, /img/logo-green-2x.png 1000w" // 300w --> means width of the image 
        sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px" // means at 'max-width: 900px' --> we want the image to be 20% of the viewport width. AND '300px' at the end is the default image that will be displayes which has a width of 300px.
        alt="Footer Logo"
        class="footer__logo"
        <src="/img/logo-green-2x.png"/>   // ALWAYS INCLUDE THE 'src' ATTRIBUTE IN CASE THE BROWSER DOESN'T SUPPORT THE 'srcset' attribute. WILL BE IGNORED IN CASE THE BORSWER UNDERSTANDS THE 'srcset' attribute.
      />
</div>
          
          
---------------------------------------------------------------------------------
       ---------------------------------------------------------------------------------
          // ⭐⭐⭐ SUMMARY 👇 --> 
                        1. Use art direction for images that are different. Perhaps they're cropped to make more sense on a smaller screen. 
                        2. And use resolution switching or density switching when you have the same images.  Density switching seems to be a subset of art direction or an alternative to resolution switching. I'm not sure if it matters or not to use density vs resolution. Perhaps if you don't want the browser to decide, density is better.
                        
                        
// *****************************************************************************************************************************
  // *****************************************************************************************************************************
// 🖼️ Responsive Images in CSS 🖼️ 
                        
// Making 'background-image' responsive 
                        
      // Responsive images in CSS are staight forwars because all we have to do is write media queries in order to load different images for different situations.'
                       // There's alot of media query types. One of them is for targeting RESOLUTION ('@media (min-resolution: 192dpi) {}')
                        
    .header {
      height: 95vh;
      background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.8),
        rgba($color-primary-dark, 0.8)),
      url(../img/hero-small.jpg);
      background-size: cover;
      background-position: top;
      position: relative;
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

     // 👇👇👇👇 So the larger image of 'hero' image is shown when the resolution is higher that '192dpi' and the screen width is higher than '600px'.
      @media (min-resolution: 192dpi) and (min-width: 37.5em) {
        background-image: linear-gradient(
            to right bottom,
            rgba($color-primary-light, 0.8),
            rgba($color-primary-dark, 0.8)),
            url(../img/hero.jpg);
      }
      
      // In low resolution screens (DPR: 1) --> display the high resolution image above '2000px' screen-width
      @media (min-width: 125em) {
        background-image: linear-gradient(
            to right bottom,
            rgba($color-primary-light, 0.8),
            rgba($color-primary-dark, 0.8)),
            url(../img/hero.jpg);
      }
    }


// *****************************************************************************************************************************
  // *****************************************************************************************************************************
// Browser Support. Graceful Degradation using '@support'

📝 NOTE: Always check caniuse.com before using modern CSS property in production

// Graceful Degradation is a concept where even if a browser doesn't support a property that we want to use on a site, then we can still apply it to the modern browsers and show a different/more simple style on older browsers.

 .header {
      height: 95vh;
      background-color: rgba($color-black, 0.8);
     
// 👇 Asks the browser if it supports a certain property (need to specify a value for the poroperty DOESNT MATTER WHAT THE VALUE IS). And if it does --> execute the code inside 👇
     @supports (-webkit-backdrop-filter: blur(10px) or (backdrop-filter: blur(10px)) {
         -webkit-backdrop-filter: blur(10px);
         backdrop-filter: blur(10px);
         background-color: rgba($color-black, 0.3);
      }
    }
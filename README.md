# UMSL Office of Residential Life & Housing
## 2016 Website Redesign Documentation and User Guide

-	When adding or editing a picture in a slideshow, add a space after the "learn more", "read more" or whatever text you've chosen for the link.
-	There are numerous pages with page-specific styling located inside the html view.  Please do not edit this unless you know what you are doing; editing it can break the page.  When in doubt, stick to non-html edit view.
-	Blockquotes are styled as a class.  To add a blockquote, simply add `<div class"blockquote"> **Your Quote** </div>` in html view to style it appropriately.  If you're not certain how to do this, ask someone with CSS experience before making any changes.  To edit a quote, you should be able to select it in the default editing view.
-	The CSS stylesheet is located in files -> CSS -> stylesheet.CSS.  Please make all site-wide changes to the stylesheet.  This stylesheet controls the Res-Life-specific look of the website (removes one of the top bars, makes color changes, adds support for various styles, etc).
-	If you wish to modify the stylesheet, I recommend you have a basic understanding of how CSS works.  It’s not difficult to learn, but it can get complex when you try to do more complicated things.
  -	For example, we could technically code a completely new website using CSS and HTML, and completely overwrite the default UMSL website, but it would be extremely challenging and prone to failure.
  -	An amazingly good resource for getting started in CSS is [W3Schools](http://www.w3schools.com/).  Other good resources for fixing problems and getting help are [StackOverflow](http://stackoverflow.com/questions/tagged/css) and [/r/CSSHelp](https://www.reddit.com/r/csshelp/).
  
If, for some reason, the site-wide styling must be removed, this can be accomplished fairly easily; most of the styling for the site is in the stylesheet, and removal or renaming of that should (mostly) revert the site back to the UMSL defaults.  Any remaining styling can be removed by navigating through the pages in Cascade, opening HTML view, and removing any code at the top.  Please be aware that some pages (such as Virtual Tours, About Us, and the site index) heavily rely on styling to function properly.  Removing the code is not recommended unless you know what you're doing.

If you have any questions about the above, please contact Ryan Brooks for help.

## To-do list  
- [x] Housing and Campus Maps (Button on About Us index)  
- [ ] Need job descriptions for student/professional staff  
- [ ] Need updated copy  
- [ ] Need Housing Initiative information (button on About Us index)  

## Code Snippets  
[Add custom CSS to a page](AddCSS.html)  
[Stylesheet snippet](LinkStylesheet.html)  
[Remove right sidebar](RightSidebarRemoval.css)  
[Change to two-column layout](EnableTwoColumns.css)  
[Redesign slideshow](SlideshowRedesign.css)  
[Banner quote](BannerQuote.css)  
[Resize iFrames](ResizeIframes.html)  
[Hide Page Title](HidePageTitle.css)
[Highlight text](Highlight.css)  
[Fix Table Padding](FixTablePadding.css)

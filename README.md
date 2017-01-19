# UMSL Office of Residential Life & Housing
## 2016 Website Redesign Documentation
*@Ryan Brooks*

-	When adding or editing a picture in a slideshow, add a space after the "learn more", "read more" or whatever text you've chosen for the link.
-	There are numerous pages with page-specific styling located inside the html view.  Do not touch this, under any circumstances, unless you know what you are doing.  When in doubt, stick to non-html edit view.
-	Blockquotes are styled as a class.  To add a blockquote, simply add `<div class"blockquote"> **Your Quote** </div>` in html view to style it appropriately.  If you're not certain how to do this, ask someone with CSS experience before making any changes.  To edit a quote, you should be able to select it in the default editing view.
-	The CSS stylesheet is located in files -> CSS -> stylesheet.CSS.  Please make all site-wide changes to the stylesheet.  This stylesheet controls the Res-Life-specific look of the website (removes one of the top bars, makes color changes, adds support for various styles, etc).
-	If you wish to modify the stylesheet, I recommend you have a basic understanding of how CSS works.  It’s not difficult, as programming languages go, but it can get complex when you try to do more complicated things.
  -	For example, we could technically code a completely new website using CSS and HTML, and completely overwrite the default UMSL website, but it would be extremely challenging and prone to failure.
  -	An amazingly good resource for getting started in CSS is W3Schools.  Other good resources for fixing problems and getting help are StackOverflow and /r/CSSHelp.

## To-do list
[x] Housing and Campus Maps (Button on About Us index)
[ ] Need job descriptions for student/professional staff
[ ] Need updated copy
[ ] Need Housing Initiative information (button on About Us index)

## Code Snippets
Add custom CSS to a page
Stylesheet snippet
Remove sidebar
Change to two-column layout
Redesign slideshow
Banner quote
Resize iFrames

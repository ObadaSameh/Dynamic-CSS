Dynamic-CSS
===========

Jquery plugin for creating dynamic css styles and animations

usage
=====

<br>
<br>

 
<b>simple query with .css function</b>
 


<pre>
  $('#container').children().filter('div').css(
    {   
        transform : 'translate(0%,0%)  scale(.5,.5)',
        transition : 'all .5s <b>.1</b>s linear' 
    });
    

</pre>

<br>
<br>

<b>
with dynamic-css you can define variables to be used inside the value by using <b>\<var></b> tag.
</b>
<pre>
  $('#container').children().filter('div').dcss(
    {   
          transform : 'translate(0%,0%)  scale(.5,.5)',
          transition : 'all .5s <b> &lt;delay&gt;</b>s linear' 
    },
    {
        <b>delay</b> : .1
    });
    </pre>
    
<b>

<br>

for more information about usage and examples:
</b>

http://dynamic-css-plugin.blogspot.com

http://www.codeproject.com/Articles/840394/Dynamic-CSS-Styles-and-Animations-Jquery-Plugin

JavaScript Relative Time Helpers
================================

LICENSE
-------

The MIT License

Copyright (c) 2009 James F. Herdman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

About
-----

Sometimes it's more important for your users to know roughly when something 
happened versus the precise date such as "5 days ago".

Traditionally this sort of transformation has been done on the server side. 
The problem with this is that it becomes difficult to cache a page when its 
content is changing constantly. By using JavaScript we can still have these 
descriptive relative time-stamps behave dynamically, but still be able to 
cache the page.

Usage
-----

This Git repository has branches for each supported JavaScript framework in 
addition to the supporting extensions to the Date object. To use the plugin 
for a particular framework, merely checkout the correspondingly named brach.

When using the plugin, you must first include the Date extensions.

Supported Frameworks
--------------------

* jQuery (1.2.6, 1.3.2)
* Mootools (1.2.1)

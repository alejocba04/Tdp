# TDP

TDP its a simple Jquery method to translate your website from one lenguage to other.

Its works whit any kind of html element like:
  - h1, h2, h3, ...., p, span, etc
  - input, textarea, select
  - button, a
  - img

> The idea of this project its make an easy way to translate an entire website, view, partialview, etc.

### Installation

Add references to the tdp.js file

```sh
<script src="./dist/tdp.js"></script>
```
Add to any html element the data **data-tdp=''** with the alternative value to replace it if the defaultCulture its not selected

```sh
    <label data-tdp="Hello world">Hola mundo</label>
    <input placeholder="Hola mundo" data-tdp="Hello world" /
    <img src="./assets/holamundo.png" data-tdp="./assets/helloworld.png" />
    <a href="holamundo.com" data-tdp="helloworkd.com"">Hola mundo</a>
```

Call the init method, pass the parameters defaultCulture, currentCulture, if the defaultCulture its not the same of currentCulture, the alternative value will be set in the elements

```sh
initTdp(defaultCulture, currentCulture);
```
For example my website its in spanish and the current lenguage its english, so:
*initTdp('es', 'en');* // this will translate all the page
*initTdp('es', 'es');* // this not

### Elements

The is the list of elements that can be affected with this library

| Element | Action |
| ------ | ------ |
| h1, h2, ..., p, label, span, option, li, ol  | data-tdp will replace the text inside |
| input, textarea  | data-tdp will replace the placeholder |
| img  | data-tdp will replace the text src url of the image |
| button  | data-tdp will replace the text inside |
| a  | data-tdp will replace the href of the link |

### ToDo

 - Works with a json dictionary

License
----

Alejandro Guzman

**Free Software, Hell Yeah!**

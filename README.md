# elements

HTML Elements

### Basic Setup

```bash
# Build and Watch Lit Elemets
npm install
npm start

# Build and Watch Stortbook
cd storybook
npm install
npm start

# Run Elements Example
npx lite-server
# Open: http://localhost:3000/example/index.html
```

### Update Packages

```bash
npx npm-check-updates
```


```javascript
(function() {
var sz = document.createElement('script'); sz.type = 'text/javascript'; sz.async = true;
sz.src = '//siteimproveanalytics.com/js/siteanalyze_6004849.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sz, s);
})();
```

> A library to get the current environment

## Install

```shell
npm install current-env --save
```

## Usage

### ES2015:

```javascript
import * as currentEnv from "current-env";
// ...
currentEnv.getEnv("domain");
```

### CommonJS:

```javascript
var currentEnv = require("current-env");
// ...
currentEnv.getEnv("domain");
```

### AMD:

```javascript
require(["currentEnv"], function(currentEnv) {
    // ...
    currentEnv.getEnv("domain");
});
```

### CDN:

```html
<!DOCTYPE html>
<html>
    <script src="https://unpkg.com/current-env"></script>
    <script>
        window.currentEnv.getEnv("domain");
    </script>
</html>
```

## LICENSE

[MIT](LICENSE)

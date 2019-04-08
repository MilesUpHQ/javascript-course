// ES6 has file based modules. Everything in one file becomes a module. Information inside module can be exposed outside using the export & import option

var o = { bar: "bar" };

export function bar() {
  return o.bar;
}

import { bar } from "foo.js";

bar();

import * as foo from "foo.js";

foo.bar();

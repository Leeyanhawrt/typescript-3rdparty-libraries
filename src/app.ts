import _ from "lodash";

// Tells typescript that the global variable WILL exist
declare let GLOBAL: string;

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);

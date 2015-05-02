 function foo (fn)
   {
   console.log(window);
   return fn.toString().replace(/log.([\w]+)./, "assert(!!$1, '$1 is undefined', $1)" )
   }
   
var foo = foo(foo);
var bar = Function(foo)()

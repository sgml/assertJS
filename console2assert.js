function foo (fn)
   {
   console.log(window);
   return fn.toString().replace(/log(.+)/, "assert(!!$1, 'false', $1)" )
   }

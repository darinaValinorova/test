function myConcat(string) {
   var result = "", i;
   for (i = 0; i < arguments.length - 1; i++) {
      result += arguments[i] + string;
   }
   return result;
}

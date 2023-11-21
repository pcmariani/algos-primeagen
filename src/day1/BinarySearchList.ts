const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

binary_fn(foo, 1);
binary_fn(foo, 2);
binary_fn(foo, 1337);
binary_fn(foo, 1335);
binary_fn(foo, 69420);

export default function binary_fn(haystack: number[], needle: number): boolean {
  console.log("-----------");
  console.log("lo", "hi", "mid");
  let lo = 0;
  let hi = haystack.length;

  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const val = haystack[mid];
    // console.log(lo, hi, mid);

    if (val == needle) {
      // console.log("val " + val + " == needle " + needle);
      // console.log("TRUE")
      return true;
    }
    else if (val > needle) {
      // console.log("val " + val + " > needle " + needle);
      hi = mid;
      // hi = mid - 1;
    }
    else if (val < needle) {
      // console.log("val " + val + " < needle " + needle);
      lo = mid + 1;
    }

  };

  // console.log("FALSE");
  return false;
}


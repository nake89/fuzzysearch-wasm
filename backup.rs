mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fuzzysearch(needle: &str, haystack: &str) -> bool {
    let hlen = haystack.len();
    let nlen = needle.len();

    if nlen > hlen { return false; }
    if nlen == hlen { return needle == haystack; }

    let mut j = 0;
    for nch in needle.chars() {
        while j < hlen {
            if haystack.chars().nth(j) == Some(nch) {
                j += 1;
                break;
            }
            j += 1;
        }
        if j == hlen { return false; }
    }
    true
}

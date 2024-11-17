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
        let mut found = false;
        while j < hlen {
            if haystack.chars().nth(j) == Some(nch) {
                found = true;
                j += 1; // Move to the next character in haystack
                break; // Break out of the inner loop
            }
            j += 1; // Increment j to check the next character in haystack
        }
        if !found { return false; } // If not found, return false
    }
    true
}

# Unexpected Null Behavior in JavaScript Addition

This repository demonstrates a subtle bug in JavaScript related to null checks and type coercion within an addition operation. The `foo` function aims to add two numbers, but it unexpectedly returns `null` if either input is `null`.  The solution explores different ways to handle null inputs more robustly.

## Bug Description
The original code handles `null` values correctly, preventing an error, but it might not align with expected behavior if null is considered 0 or there needs to be more nuanced error handling.
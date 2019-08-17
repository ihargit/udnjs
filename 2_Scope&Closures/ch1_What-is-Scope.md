# Quiz
Check your understanding so far. Make sure to play the part of Engine and have a "conversation" with the Scope:

```javascript
function foo(a) {
	var b = a;
	return a + b;
}

var c = foo( 2 );
```

1. Identify all the LHS look-ups (there are 3!).
    1. LHS for 'c = ..'
    1. LHS for 'a = ..'
    1. LHS for 'b = ..'

1. Identify all the RHS look-ups (there are 4!).
    1. RHS for value of 'foo(2..'
    1. RHS for value of '= a'
    1. RHS for value of 'a + ..'
    1. RHS for value of '.. + b'

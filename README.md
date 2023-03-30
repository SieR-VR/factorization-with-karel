# factorization-with-karel

## Variables

**Coordinate representation: (a, b)**

Inputs and Outputs
- (0, 0) -> The number to factorize
- (1~, 0) -> Prime factors of the number
- (0, 1~) -> Copies of (0, 0)

Flags and data for compute
- (1, 1) -> If (0, 0) can be divided with current factor

Constants
- (End, End) -> Must be zero, will be used for [#using-while-clause-as-a-if-clause]

## Using while clause as a if clause

At some reasons, I can't use if clause. But while is allowed, so I thought about "the condition must be false when the while clause end.".

To achive this, when the while clause end, karel must be on (End, End).

## Algorithm

- Put beepers count to factorize (This will be input)
- Divide with Pn
    - If number is not divided, progress to Divide with Pn+1
    - Else
        - If (0, 0) == 1, End program with cleanup
        - Else, go to Divide with Pn

## Divide with Pn

- Repeat
    - Go to dist (first blank at (1~, 0)), we will call this cell "(dist, 0)"
    - Place a beeper
    - Go to (0, 0)
    - Pick Pn beepers with checked pickBeeper
        - If check failed, do not pick beeper and go to (End, End)
        - Else, put beeper at (1, 1) and go to (End, End)
- If (1, 1) is true, clear (0, 0~) and move (dist, 0) to (0, 0)
- Else, clear (dist, 0) and make (0, 0) to before function call

## Code convention

All functions must keep rotation of karel.

## Limitation

- Prime count
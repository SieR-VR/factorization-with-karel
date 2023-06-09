/**
 * Using typescript for highlighting and auto-completion
 * Main function entry:
 * repeat(TO_FACTORIZE) {
 *    putBeeper();
 * }
 * 
 * Typescript does not have a repeat clause, so we leave it as a comment
 */
function main() {
    init();

    goCouldNotBeDivided();    
    while (noBeepersPresent()) {
        goHome();
        divideWith2();
        goCouldNotBeDivided();
    }
}

function init() {
    goStraight();
    putBeeper();
    goHome();
}

function divideWith2() {
    pickBeeper();
    pickBeeperChecked();

    goPickBeeperCheckedFlag();
    while (beepersPresent()) {
        pickBeeper();
        goHome();
        goCouldNotBeDivided();
        putBeeper();
        goEndEnd();
    }
    goHome();

    goNextPrimeFactor();
    putBeeper();

    goHome();

    while (beepersPresent()) {
        pickBeeper();
        pickBeeperChecked();
        goPickBeeperCheckedFlag();
        while (beepersPresent()) {
            pickBeeper();
            goHome();
            goCouldNotBeDivided();
            putBeeper();
            goEndEnd();
        }

        goHome();

        goCurrentPrimeFactor();
        putBeeper();
        goHome();
    }

    goCouldNotBeDivided();
    while (noBeepersPresent()) {
        goHome();

        clearLeftColumn();
        moveCurrentPrimeFactorToHome();

        goNextPrimeFactor();
        putBeeper();
        putBeeper();

        goEndZero();
    }

    goHome();
    goCouldNotBeDivided();

    while (beepersPresent()) {
        goHome();

        goCurrentPrimeFactor();
        clearBeepers();

        goEndEnd();
    }

    goHome();
}

/**
 * go to (0, 0) whereever you are facing east
 */
function goHome() {
    turnAround();
    goStraight();
    turnLeft();
    goStraight();
    turnLeft();
}

/**
 * go to (End, End) whereever you are facing east
 */
function goEndEnd() {
    goStraight();
    turnLeft();
    goStraight();
    turnRight();
}

/**
 * go to (End, 0) whereever you are facing east
 */
function goEndZero() {
    goStraight();
    turnRight();
    goStraight();
    turnLeft();
}

/**
 * go to next prime factor (n, 0) when karel on (0, 0) and facing east
 */
function goNextPrimeFactor() {
    move();
    while (beepersPresent()) {
        move();
    }
}

/**
 * go to current prime factor (n, 0) when karel on (n, 0) and facing east
 */
function goCurrentPrimeFactor() {
    goNextPrimeFactor();
    turnAround();
    move();
    turnAround();
}

/**
 * move current prime factor to (0, 0) when karel on (0, 0) and facing east
 */
function moveCurrentPrimeFactorToHome() {
    goCurrentPrimeFactor();

    while (beepersPresent()) {
        goHome();
        putBeeper();
        goCurrentPrimeFactor();
        pickBeeper();
    }

    goHome();
}

/**
 * copy (0, 0) to (0, 1~n) when karel on (0, 0) and facing east
 */
function copyToLeftColumn() {
    turnLeft();

    while (beepersPresent()) {
        pickBeeper();
        move();
        placeBeepers();
        turnAround();
        goStraight();
        turnAround();
    }

    goStraight();
    turnAround();

    while (beepersPresent()) {
        pickBeeper();
        goStraight();
        putBeeper();
        turnAround();
        goStraight();
        turnAround();
    }

    turnRight();
}

/**
 * clear (0, 0) to (0, n) when karel on (0, 0) and facing east
 */
function clearLeftColumn() {
    turnLeft();
    clearBeepers();
    while (frontIsClear()) {
        move();
        clearBeepers();
    }

    turnRight();
    goHome();
}

/**
 * place beepers on (x, 1~n) when karel on (x, 1) and facing north 
 */
function placeBeepers() {
    putBeeper();
    while (frontIsClear()) {
        move();
        putBeeper();
    }
}

/**
 * clear beepers on current cell
 */
function clearBeepers() {
    while (beepersPresent()) {
        pickBeeper();
    }
}

/**
 * turn around (180 degree)
 */
function turnAround() {
    turnLeft();
    turnLeft();
}

/**
 * go until front is not clear
 */
function goStraight() {
    while (frontIsClear()) {
        move();
    }
}

/**
 * go to (1, 1), alias of couldBeDivided
 * when karel on (0, 0) and facing east
 */
function goCouldBeDivided() {
    move();
    turnLeft();
    move();
    turnRight();
}

/**
 * go to (1, 2), alias of couldNotBeDivided
 * when karel on (0, 0) and facing east
 */
function goCouldNotBeDivided() {
    move();
    turnLeft();
    move();
    move();
    turnRight();
}

/**
 * go to (2, 1), alias of pickBeeperCheckedFlag
 * when karel on (0, 0) and facing east
 */
function goPickBeeperCheckedFlag() {
    move();
    move();
    turnLeft();
    move();
    turnRight();
}

/**
 * checked version of pickBeeper
 * when karel facing east
 * @returns {boolean} at (2, 1) true if failed, false if success
 */
function pickBeeperChecked() {
    goHome();
    goPickBeeperCheckedFlag();
    putBeeper();
    goHome();

    while (beepersPresent()) {
        pickBeeper();
        goPickBeeperCheckedFlag();
        pickBeeper();
        goEndEnd();
    }

    goHome();
}
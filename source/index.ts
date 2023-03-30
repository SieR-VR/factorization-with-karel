/**
 * Using typescript for highlighting and auto-completion
 * Main function entry:
 * repeat (TO_FACTORIZE) {
 *    putBeeper();
 * }
 * 
 * Typescript does not have a repeat clause, so we leave it as a comment
 */

function main() {
    divide2();
}

function copyThisCellToUpTwoCell() {
    while (beepersPresent()) {
        turnLeft();
        move();
        putBeeper();
        move();
        putBeeper();
        turnLeft();
        turnLeft();
        move();
        move();
        pickBeeper();
    }
}

function moveThisCellToDownCell() {
    while (beepersPresent()) {
        turnLeft();
        move();
        putBeeper();
        turnLeft();
        turnLeft();
        move();
        pickBeeper();
        turnLeft();
    }
}

function moveThisCellToStart() {
    while (beepersPresent()) {
        goBack();
        putBeeper();
        goUntilNoBeeper();
        goBackOnce();
        pickBeeper();
    }
}

function divide2() {
    goUntilNoBeeper();
    putBeeper();
    goBack();
    pickBeeper();

    while (beepersPresent()) {
        goUntilNoBeeper();
        goBackOnce();
        putBeeper();
        goBack();
        pickBeeper();
        
        checkIsOneBeeper();
        
        move();
        turnLeft();
        move();
        turnRight();
        
        while (beepersPresent()) {
            pickBeeper();
            goStart();
            turnLeft();
            clearLine();
            turnRight();
            goStart();

            goUntilNoBeeper();
            goBackOnce();
            moveThisCellToStart();
            putBeeper();
            putBeeper();

            goStart();
            move();
            turnLeft();
            move();
            move();
            putBeeper();
            turnRight();
            move();
        }
    }

    goStart();
}

function checkIsOneBeeper() {
    pickBeeper();
    while (beepersPresent()) {
        move();
        turnLeft();
        move();
        putBeeper();
        turnRight();
        move();
    }

    goStart();
}

function goUntilNoBeeper() {
    while (beepersPresent()) {
        move();
    }
}

function goBackOnce() {
    turnLeft();
    turnLeft();
    move();
    turnLeft();
    turnLeft();
}

function goBack() {
    turnLeft();
    turnLeft();
    while (frontIsClear()) {
        move();
    }
    turnLeft();
    turnLeft();
}

function goStart() {
    goBack();
    turnLeft();
    goBack();
    turnRight();
}

function clearLine() {
    putAllBeepers();

    while (frontIsClear()) {
        move();
        putAllBeepers();
    }
}

function putAllBeepers() {
    while (beepersPresent()) {
        putBeeper();
    }
}
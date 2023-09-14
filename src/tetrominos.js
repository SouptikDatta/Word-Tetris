export const TETROMINOS = {
    0: {shape : [[0]], color: '0,0,0'}, //clean cell when not showing tetromino
    
    WE: {
        shape: [
            ['W','E'],
        ],
        color: '80,227,230',
    },

    DESIGN: {
        shape: [
            ['D','E','S','I','G','N'],
        ],
        color: '36,95,223',
    },
    
    
    AND: {
        shape: [
            ['A','N','D'],
        ],
        color: '36,95,223',
    },

    DEVELOP: {
        shape: [
            ['D','E','V','L','O','P'],
        ],
        color: '223,173,36',
    },

    APPLICATIONS: {
        shape: [
            ['A','P','P','L','I','C','A','T','I','O','N','S'],
        ],
        color: '223,217,36',
    },

    THAT: {
        shape: [
            ['T','H','A','T'],
        ],
        color: '48,211,56',
    },

    RUN: {
        shape: [
            ['R','U','N'],
        ],
        color: '132,61,98',
    },

    THE: {
        shape: [
            ['T','H','E'],
        ],
        color: '227,78,78',
    },

    WORLD: {
        shape: [
            ['W','O','R','L','D'],
        ],
        color: '227,10,98',
    },

    SHOWCASE: {
        shape: [
            ['S','H','O','W','C','A','S','E'],
        ],
        color: '56,234,36',
    },

    FUTURE: {
        shape: [
            ['F','U','T','U','R','E'],
        ],
        color: '225,27,236',
    },

};

export const randomTetromino = () => {
    const tetrominos = 'WE DESIGN AND DEVELOP APPLICATIONS THAT RUN THE WORLD AND SHOWCASE THE FUTURE';

    // Step 1: Split the string into an array of words
    const wordsArray = tetrominos.split(' ');
    
    // Step 2: Generate a random index
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    
    // Step 3: Retrieve the word at the random index
    const randomWord = wordsArray[randomIndex];
    
    return TETROMINOS[randomWord];
};
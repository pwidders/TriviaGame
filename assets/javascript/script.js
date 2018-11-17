// Global variables

const myQuestions = [
    {   questionOne: "Who was the first Major League        player to pitch a ball over 100 mph?",
        
        answers: {
        a: "Roger Clemens",
        b: "Pedro Martinez",
        c: "Nolan Ryan",
        d: "Tom Seaver",
        },
    
        correctAnswer: "c"
    },
    {   questionTwo: "What player was nicknamed Mr.        November?",

        answers: {
        a: "David Ortiz",
        b: "Ricky Henderson",
        c: "Reggie Jackson",
        d: "Derek Jeter",
        },
        
        correctAnswer: "d"
    },
    {   questionThree: "Which pitcher had no right         hand?",
        
        answers: {
        a: "Jim Abbot",
        b: "Greg Maddux",
        c: "Dave Stewart",
        d: "Lefty Gomez",
        },
        
        correctAnswer: "a"
    },
    {   questionFour: "What player holds the record        for most hits in a season?",

        answers: {
        a: "Ichiro Suzuki",
        b: "Bo Jackson",
        c: "Eddie Murray",
        d: "Tony Gwynn",
        },

        correctAnswer: "a"
    },
    {   questionFive: "Who was the first baseball player to appear on a Wheaties cereal box?",
        
        answers: {
        a: "Lou Gehrig",
        b: "Babe Ruth",
        c: "Joe Dimaggio",
        d: "Willie Mays",
        },
    
        correctAnswer: "a"
    },
    {   questionSix: "Who is the only pitcher in major      league history to record both 200 wins and         150 saves?",

        answers: {
        a: "Dennis Eckersley",
        b: "John Smoltz",
        c: "Mariano Rivera",
        d: "Trevor Hoffman",
        },
        
        correctAnswer: "b"
    },
    {   questionSeven: "Which player holds the record for most 'runs batted in' (RBI's) in a single game?",
        
        answers: {
        a: "Alex Rodriguez",
        b: "Ken Griffey Jr",
        c: "Mark McGuire",
        d: "Jim Bottomley",
        },
        
        correctAnswer: "d"
    },
    {   questionEight: "How many baseballs are used        during a typical Major League Baseball game?",

        answers: {
        a: "20",
        b: "100",
        c: "75",
        d: "125",
        },

        correctAnswer: "b"
    },
    {   questionNine: "What MLB rookie hit seven home      runs in his first six games?",

        answers: {
        a: "Trevor Story",
        b: "Albert Pujols",
        c: "Ryan Braun",
        d: "Kirby Puckett",
        },

        correctAnswer: "a"
    },
    {   questionTen: "Who was the first player since       Babe Ruth to pitch 50 innings and hit 15 home      runs in a single season?",

        answers: {
        a: "Don Newcombe",
        b: "Doug Dascenzo",
        c: "Shohei Ohtani",
        d: "Micah Owings",
        },

        correctAnswer: "c"
    },
];

// Helper functions

function generateQuiz(){}

function showResults

// Requirements: 

    // Game is launched via start button
        // Start button with listener
        // launches function generateQuiz
    


    // One question per slide. Answers are timed and score is tracked until end of game.
        // Slides to contain: timer
        
        // Question

        // Answers

        // Submit button

    // Users are congratulated by a screen when getting the right answer. Wrong answers result in a screen that tells users they guessed incorrectly and shows correct answer.

        // Create event listener for submit button
    $('#submit').on('click', showResults);

        // Fire a function that checks the answer

        // If answer is true, advance to correct answer slide


    // Wrong answers result in a screen that tells users they guessed incorrectly and shows correct answer.

        // If answer is false 

        // Fire you lose slide

    // Game ends after _ rounds and total score is shown to user.

    // User is given the option to play again. Game resets when chosen.
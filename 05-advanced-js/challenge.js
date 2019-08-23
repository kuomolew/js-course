console.log('Test');

(function () {
    var totalScore = 0;
    var Question = function(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    };

    var questionOne = new Question('Is javascript the coolest language in the world?', ['Yes', 'No'], 1);
    var questionTwo = new Question('What is our teacher\'s name?', ['John', 'Mark', 'Jonas'], 2);
    var questionThree = new Question('What day is it today?', ['Monday', 'Wednesday', 'Friday'], 1);

    var questions = [questionOne, questionTwo, questionThree];

    Question.prototype.askQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answer.length; i++) {
            console.log(i + ': ' + this.answer[i]);
        }
    }

    Question.prototype.isCorrect = function(ans) {
        //console.log(ans);
        Number(ans) ? ans = Number(ans) : ans = -1;
        if (ans === this.correct) {
            totalScore ++;
            console.log('Congratulations! This answer was correct.');
        } else {
            console.log('Oops, this answer was incorrect.');
        }

    }

    var run = function () {
        var randomQuestion = Math.floor(Math.random() * questions.length);
        questions[randomQuestion].askQuestion();
        var answer = prompt('Please type the number of correct answer');
        
        if (answer != 'exit') {
            questions[randomQuestion].isCorrect(answer);
            console.log('Total score = ' + totalScore); 
            console.log('______________'); 
            run();
        }
           
        
            
    }

    run();
    
    

})();
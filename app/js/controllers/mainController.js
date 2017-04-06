angular.module('app')
    .controller('MainController', function($scope, $timeout, QuizzService, UserService, CurrentUser) {

      //initialisation du quizz
      var nbrQuestion = 0;
      var userId = CurrentUser.user()._id;
      $scope.good_answer = "";
      $scope.false_answer = "";
      $scope.question = "";
      $scope.answers = "";
      $scope.resultat = "";
      $scope.count = 0;
      $scope.hasAnswered = false;
      $scope.seconds = 15;
      $scope.hidden = true;
      $scope.theme = true;
      $scope.quizz = true;
      $scope.results = false;
      $scope.nbrGoodAnswers = 0;
      $scope.nbrFalseAnswers = 0;
      // $scope.good_job = true;
      // $scope.bad_job = true;
      // $scope.text_good = "";
      // $scope.text_bad = "";
      $scope.myscore = 0;
      $scope.rank = 0;
      var needStop = false;


      //initialisation du timer
      var countDown = function() {
          if(needStop) {
            needStop = false;
            return;
          } else {
            if ($scope.seconds > 0 && $scope.hasAnswered === false){
              $scope.seconds -= 1;
              $timeout(countDown, 1000);
            }
            if ($scope.seconds > 0 && $scope.hasAnswered === true) {
              $timeout.cancel();
            }
            if ($scope.seconds === 0 && $scope.hasAnswered === false) {
              $scope.checkAnswer();
            }
          }
      };

      //lancement de la première question
      $scope.runQuestion = function(category) {
          QuizzService.get(category).then(function(res) {
                $timeout(countDown, 1000);
                $scope.quizz = false;
                $scope.theme = false;
                $scope.hidden = true;
                $scope.results = false;
                $scope.good_job = true;
                $scope.bad_job = true;
                nbrQuestion =  nbrQuestion + 1;
                $scope.nbrQuestion = nbrQuestion;
                $scope.question = (res.data.results[0].question);
                $scope.answers = res.data.results[0].incorrect_answers;
                let index = Math.round(Math.random() * (res.data.results[0].incorrect_answers.length - 1));
                $scope.answers.splice(index, 0, res.data.results[0].correct_answer);
                $scope.good_answer = (res.data.results[0].correct_answer);
                $scope.false_answer = res.data.results[0].incorrect_answers;

//verification de la réponse et ajout/debit des points
                $scope.checkAnswer = function (answer) {
                  $scope.hidden = false;
                  $scope.hasAnswered = true;
                  if (answer == $scope.good_answer) {
                    $scope.good_job = false;
                    $scope.count += 4;
                    $scope.nbrGoodAnswers += 1;
                  } else {
                    $scope.count -= 2;
                    $scope.bad_job = false;
                    $scope.nbrFalseAnswers += 1;
                  }
                };
//boutton next seulement utilisable quand la réponse a été donnée
                $scope.nextQuestion = function(){
                  if ($scope.hasAnswered === true){
                    $scope.seconds = 15;
                    if ($scope.nbrQuestion == 10) {
                      nbrQuestion = 0;
                      $scope.quizz = true;
                      $scope.results = true;
                      $scope.hasAnswered = false;
                    } else {
                      $scope.runQuestion(category);
                      $scope.hasAnswered = false;
                    }
                  }
                };

                $scope.passQuestion = function() {
                  needStop = true;
                  $scope.hasAnswered = true;
                  $scope.count -= 1;
                  $scope.nextQuestion();
                };

          });
        };

        UserService.getScore(userId).then(function(res) {
              $scope.myScore = res.data.score;
          });

          var updateScore = function(point) {
            // TODO: Attention pensez à remplacer "58de229a3eda8b0bcaceaf0c" par user._id lorsque le quizz ne pourra se faire sous connexion
            UserService.updateScore(userId, point).then(function(res) {

            }, function(err) {

            });
        };
 });//end controller

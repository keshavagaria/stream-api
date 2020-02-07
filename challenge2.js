var team_Mike;
var team_John;
var team_Mary;

var Mgame1=99;
var Mgame2=99;
var Mgame3=99;

var Jgame1=99;
var Jgame2=99;
var Jgame3=99;

var MrGame1=99;
var MrGame2=99;
var MrGame3=99;

team_Mike=(Mgame1+Mgame2+Mgame3)/3;
team_John=(Jgame1+Jgame2+Jgame3)/3;
team_Mary=(MrGame1+MrGame2+MrGame3)/3;

console.log('The average of Team Mike is '+team_Mike);
console.log('The average of Team John is '+team_John);
console.log('The average of Team Mary is '+team_Mary);
console.log(team_John,team_Mary,team_Mike);

if(team_Mike>team_John&&team_Mike>team_Mary)
    {
        console.log('Team Mike is winner with an average score of '+team_Mike);
    }
else if(team_John>team_Mary)
    {
        console.log('Team John is winner with an average score of '+team_John);
    }
else if(team_John<team_Mary)
    {
        console.log('Team Mary is winner with an average score of '+team_Mary);
    }
else 
    {
        console.log('It\'s a tie');
    }


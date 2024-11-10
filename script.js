function choice(c){
    
    let ran = Math.floor(Math.random() * 3)+1;

    if(c == 1){
        player.innerHTML = "You choose Rock";
        if(ran == 1)
            result.innerHTML = "Result: Draw"
        else if(ran ==  2)
            result.innerHTML = "Result: Lose"
        else if(ran == 3)
            result.innerHTML = "Result: Win"
    }
    else if(c == 2){
        player.innerHTML = "You choose Paper";
        if(ran == 1)
            result.innerHTML = "Result: Win"
        else if(ran ==  2)
            result.innerHTML = "Result: Draw"
        else if(ran == 3)
            result.innerHTML = "Result: Lose"
    }
    else if(c == 3){
        player.innerHTML = "You choose Scissor";
        if(ran == 1)
            result.innerHTML = "Result: Lose"
        else if(ran ==  2)
            result.innerHTML = "Result: Win"
        else if(ran == 3)
            result.innerHTML = "Result: Draw"
    }

    if(ran == 1)
        bot.innerHTML = "Opponent choose Rock";
    else if(ran == 2)
        bot.innerHTML = "Opponent choose Paper";
    else if(ran == 3)
        bot.innerHTML = "Opponent choose Scissor";

    
}
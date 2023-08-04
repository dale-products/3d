let limit = Number(window.prompt("input limit"));
limit_loop(limit)
document.getElementById("rock_image").onclick = function(){
    document.getElementById("rock_input").checked = true;
}
document.getElementById("paper_image").onclick = function(){
    document.getElementById("paper_input").checked = true;
}
document.getElementById("scissors_image").onclick = function(){
    document.getElementById("scissors_input").checked = true;
}
let user_score = 0;
let computer_score = 0;
let array_of_draw_reaction = [
    "draw",
    "drag",
    "same",
    "stale mate",
    "same options we picked"
];
let array_of_win_reaction = [
    "won ya 🤣",
    "youre a looser",
    "you just cant win 🤣",
    "youre useless",
    "i win"
];
let array_of_loose_reaction = [
    "you won",
    "i lost",
    "how are u winning!",
    "winner u are",
    "u won 😒"
];
let array_of_final_loss_reaction = [
    "u win ill all catck u next time",
    "im a looser 😒",
    "fuck u",
    "i guess i later lost",
    "first time luck u win"
];
let array_of_final_win_reaction = [
    "i win looser",
    "ure a looser 🤣",
    "i am king",
    "ure useless",
    "u cant play"
];
document.getElementById("reset").onclick = function(){
    computer_score = 0;
    user_score = 0;
    limit = Number(window.prompt("what is your liimit"));
    limit_loop(limit)
    add_score_user(user_score);
    add_score_computer(computer_score);
    insert("Hello")
}


document.getElementById("submit").onclick = function(){
    let random_no = Math.ceil(Math.random() * 3);
    let random_no_reaction = Math.floor(Math.random() * 5);
    if(computer_score < limit && user_score < limit){
        switch(true){
            case (random_no == 1 && document.getElementById("rock_input").checked == true):
                insert(array_of_draw_reaction[random_no_reaction]);
                break;
            case (random_no == 1 && document.getElementById("paper_input").checked == true):
                user_score++;
                insert(array_of_loose_reaction[random_no_reaction]);
                add_score_user(user_score);
                break;
            case (random_no == 1 && document.getElementById("scissors_input").checked == true):
                computer_score++;
                insert(array_of_win_reaction[random_no_reaction]);
                add_score_computer(computer_score);
                break;
            case (random_no == 2 && document.getElementById("rock_input").checked == true):
                computer_score++;
                add_score_computer(computer_score);
                insert(array_of_win_reaction[random_no_reaction]);
                break;
            case (random_no == 2 && document.getElementById("paper_input").checked == true):
                insert(array_of_draw_reaction[random_no_reaction]);
                break;
            case (random_no == 2 && document.getElementById("scissors_input").checked == true):
                user_score++;
                insert(array_of_loose_reaction[random_no_reaction]);
                add_score_computer(computer_score);
                break;
            case (random_no == 3 && document.getElementById("paper_input").checked == true):
                computer_score++;
                add_score_computer(computer_score);
                insert(array_of_win_reaction[random_no_reaction]);
                break;
            case (random_no == 3 && document.getElementById("scissors_input").checked == true):
                insert(array_of_draw_reaction[random_no_reaction]);
                break;
            case (random_no == 3 && document.getElementById("rock_input").checked == true):
                user_score++;
                insert(array_of_loose_reaction[random_no_reaction]);
                add_score_user(user_score);
                break;
        }
    }
    else if(computer_score == limit){
        insert(array_of_final_win_reaction[random_no_reaction]);
        computer_score = 0;
        user_score = 0;
        add_score_user(user_score);
        add_score_computer(computer_score);
    }
    else if(user_score == limit){
        insert(array_of_final_loss_reaction[random_no_reaction]);
        computer_score = 0;
        user_score = 0;
        add_score_user(user_score);
        add_score_computer(computer_score);

    }

}
function insert(message){
    document.getElementById("message").innerHTML = message;
}
function add_score_user(score){
    document.getElementById("your_score").innerHTML = score
}
function add_score_computer(score){
    document.getElementById("computer_score").innerHTML = score
}
function reset(score){
    score = 0;
}
function limit_loop(limit){
    while(limit != Number(limit) || limit == ""){
        limit = Number(window.prompt("input limit"));
        
    }
}
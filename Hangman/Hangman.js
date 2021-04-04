var password = "Bez pracy nie ma kołaczy";
password = password.toUpperCase();

var password_lenth = password.length;
var miss_counter = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var win = new Audio("win.mp3");
var lost = new Audio("lost.mp3");

var password1 = "";

for (i=0; i<password_lenth; i++)
{
    if (password.charAt(i)==" "){
        password1 += " ";
    } else {
        password1 += "-";
    }
}

function show_password()
{
    document.getElementById("board").innerHTML = password1;
}

window.onload = start;

var letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";


function start()
{   

    var div_content = "";

    for (i=0; i<=34; i++)
    {   
        var element = "lit" + i;
        div_content += '<div class="letter" onclick="check('+i+')" id="'+element+'">'+ letters[i] +'</div>';
        if ((i+1) % 7 == 0){
            div_content += '<div style="clear:both;"></div>'
        }
    }

    document.getElementById("alphabet").innerHTML = div_content;


    show_password();
}

String.prototype.set_letter = function(place, charakter)
{
    if (place > this.password_lenth - 1){
        return this.toString(); 
    } else {
        return this.substr(0, place) + charakter + this.substr(place+1);
    }
}

function check(nr)
{   
    var hit = false;

    for (i=0; i<password_lenth; i++){
        if (password.charAt(i)==letters[nr]){
            password1 = password1.set_letter(i, letters[nr]);
            hit = true;
        }
    }

    if (hit==true){
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        show_password();
    } else {
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";

        document.getElementById(element).setAttribute("onclick",";");

        miss_counter += 1;
        var picture = "img/h" + miss_counter + ".jpg";
        document.getElementById("gallows").innerHTML = '<img src="'+picture+'" alt=""/>';
    }

    //wygrana
    if (password == password1){
        win.play();
        document.getElementById("alphabet").innerHTML = "Congratulations you won! Password: "+ password + " is correct." +
        '<br/><br/><span class="reset" onclick="location.reload()">Do you want to play again?</span>';
    }

    //przegrana
    if (miss_counter >= 9){
        lost.play();
        document.getElementById("alphabet").innerHTML = "You lost! Correct password was: "+ password +
        '<br/><br/><span class="reset" onclick="location.reload()">Do you want try again?</span>';
    }

}

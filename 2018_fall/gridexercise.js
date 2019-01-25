document.write("<p>")
document.write("1")
document.write("<p>")
for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.

        if (i < 5) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');


document.write("<p>")
document.write("2")
document.write("<p>")
for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.

        if (j < 5) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');



document.write("<p>")
document.write("3")
document.write("<p>")
for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.

        if (j==i) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');




document.write("<p>")
document.write("4")
document.write("<p>")

for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.

        if (j<i+1) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');

document.write('<br />');



document.write("<p>")
document.write("5")
document.write("<p>")
for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.

        if (i%2!=1) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');




document.write("<p>")
document.write("my own pattern1")
document.write("<p>")
for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.

        if (j%2!=0) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');



document.write("<p>")
document.write("my own pattern2")
document.write("<p>")

for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.

        if (i%2!=0) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');

document.write('<br />');







document.write("<p>")
document.write("my own pattern3")
document.write("<p>")

for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.

        if (i!=j) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');

document.write('<br />');




document.write("<p>")
document.write("my own pattern4")
document.write("<p>")

for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.

        if (i%3!=0) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else {
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');

document.write('<br />');




document.write("<p>")
document.write("Extra Credit")
document.write("<p>")


for (var i = 0; i < 10; i = i + 1) {
    for (var j = 0; j < 10; j = j + 1) {
        console.log("Row " + i + ", Column " + j);

        // The next line is the only JS you'll have to change.

        if (i%3!=0) {
            console.log("   pink");
            document.write("<div class='box pink'></div>");
        } else if (i%6!=0){
            console.log("   turquoise");
            document.write("<div class='box turquoise'></div>");
        }
        else if (j%10!=0){
            console.log("   black");
            document.write("<div class='box black'></div>");
        }
    }

    document.write('<br />');
}

document.write('<br />');

document.write('<br />');

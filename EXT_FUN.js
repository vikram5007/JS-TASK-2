var fri_names = ["vikram", "vasanth", "hari", "hemanth"];

function unshift() {  //INSERTION OF A VALUE AT FRONT 
    var name = document.getElementById('name').value;

    fri_names.unshift(name);
    alert(fri_names);


}


function push() { //INSERTION OF A VALUE AT BACK
    var name = document.getElementById('name').value;

    fri_names.push(name);
    alert(fri_names);


}

function shifter() { //DELETION OF A VALUE AT FRONT 


    fri_names.shift();
    alert(fri_names);


}

function popper() { //DELETION OF A VALUE AT BACK  


    fri_names.pop();
    alert(fri_names);


}

function forofarr() { //BASIC FOR LOOP 

    var i = 0;
    let size = fri_names.length;
    let out_put = "<ul>";
    for (i = 0; i < size; i++) {
        out_put += "<li>" + fri_names[i] + "</li>";

    }
    document.write(out_put);
}

function foreach() {          // FOR EACH  LOOP 
    var new_arr = "<ul>";
    fri_names.forEach(printer);
    new_arr += "</ul>";


    function printer(value) {
        new_arr += "<li>" + value + "</li>";

    }
   document.write(new_arr);

}

function forin() {   // FOR IN LOOP  

    let ot = "";
    for (let i in fri_names) {
        ot += fri_names[i]+",";
    }
    alert(ot);

}

function forof() {   // FOR OF LOOP  

    let out = "";
    for (let i in fri_names) {
        out += fri_names[i]+",";
    }
    alert(out);

}

function sorter(){
var sorted=fri_names.sort();
alert(sorted);

}


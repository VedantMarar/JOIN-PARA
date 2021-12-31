function submit(){
    var inputs =[];
for(var i=1; i<=6; i++){
var temp=document.getElementById("name_of_the_student_" + i).value;
inputs.push(temp);
document.getElementById("display_name_with_commas").innerHTML = inputs.join(" ")
}}

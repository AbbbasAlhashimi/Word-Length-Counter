var print = function(msg)
{
    // Pass the result to the [output_div] which is within the innerHTML
    document.getElementById("output_div").innerHTML = "The Word Consists of " + msg + " Characters.";
}

//Passing Entered text from the InnerHTML to the function as (msg) Parameter
document.getElementById("caclculate_btn").onclick = function(submit)
{
    //Printing out [word_string] entry box length of string
    print(document.getElementById("word_string").value.length);
}
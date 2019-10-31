$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    $("button").click(function(){
        var vowels =["a","e","i","o","u"];
        let words= $("input").val();
        let letters = words.split("")
    $(".output").text(words);

    if (vowels.includes(letters[0]){
        $(".output").append(words+ "ay");

    }









    });
});

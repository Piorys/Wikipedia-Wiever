$(document).ready(function() {
    $(document).keypress(function(e) {
        var userInput= $('#searchInput').val();
        $("#target").html("");
        if(e.which == 13) {
            wikiSearch(userInput);
        }
    });
    $("#searchBtn").click(function(){
        var userInput= $('#searchInput').val();
        $("#target").html("");
        wikiSearch(userInput);
    });
});
//Calling hits from wiki API
function wikiSearch(userInput) {
    if(userInput.length === 0) {
        $("#target").html('<div class="text-center" id="error"><h2>Please type something first</h2></div>');
    }else{
    $("#resultsHeader").html("<h2>Results of " + userInput + "...</h2>");
    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + userInput + "&callback=?" , function(data){
        for(i=0; i < data[1].length; i++) {
            var tittle = data[1][i];
            var description = data[2][i]
            var link = data[3][i]
            $("#target").append(
                '<a target="_blank" href=' + link + '>'+ '<div class="hit">' + "<h3>" + tittle + "</h3>" + "<p>" + description + "</p></div></a>"
            )
        }
            })
    };
}


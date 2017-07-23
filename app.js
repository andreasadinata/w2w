$(document).ready(function () {
    $('.js-result').hide();
    $('#js-back').hide();
    $('#highlights').show();
    $('#techreviews').hide();
    $('#games').hide();
    $('#foods').hide();
    $('#travels').hide();
    $('#dailyvlogs').hide();
    $('#FindMyOwn').hide();

    $('.categories').click(function () {
        $('#js-back').hide();
        $('#FindMyOwn').hide();
        $('.js-content').show();
        var value = $(this).text().replace(/\s+/g, '').toLowerCase();
        $('.ifhide').hide();
        if (value == "findmyown!!") {
            $('#FindMyOwn').show();
        } else {
            $("#" + value).show();
        }
        $('.js-result').hide();
    });

    $('.user').submit(function (event) {
        event.preventDefault();
        var item = $('#userinput').val();
        getVideoByBox(item);
        $('.js-result').show();
        $('.js-content').hide();
        $('#js-back').show();
        $('.js-introduction').css("font-size", "15px");
        $('.js-heading').css("font-size", "25px");

    })

    $('.js-vloggers').click(function () {
        var value = $(this).text(); //get text value from the click
        getVideoByBox(value);
        $('.js-result').show();
        $('.js-content').hide();
        $('#js-back').show();
        $('.js-introduction').css("font-size", "15px");
        $('.js-heading').css("font-size", "25px");
    });

    $('#js-back').click(function () {
        $('.js-result').hide();
        $('#js-back').hide();
        $('.js-content').show();
        $('.js-introduction').show();
        $('.js-heading').show();
    });

});

function getVideoByBox(vloggers) {
    $.getJSON("https://www.googleapis.com/youtube/v3/search", {
            part: "snippet",
            maxResults: 12,
            key: "AIzaSyARSOefqHz-1Pc3u3d3VJz3BSZE_R9-P_A",
            q: vloggers,
            type: "video"
        },
        function (callbackData) {

            rendering(callbackData.items)
        }
    );

}

function rendering(data) {
    var output = "";
    $.each(data, function (dataKey, dataValue) {
        output += '<li class="bullets">';
        output += '<div class="title">' + dataValue.snippet.title;
        output += '</div>';
        output += '<a href=https://www.youtube.com/watch?v=' + dataValue.id.videoId + ' target="_blank" > ';
        output += '<img class="images" src=' + dataValue.snippet.thumbnails.high.url + '>';
        output += '</a>';
        output += '</li>';
    });
    $('.js-result ul').html(output);
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

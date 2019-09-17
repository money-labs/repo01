
function readFiles()
{
    $.get('file.txt', function(data) {
        alert(data);
    }, "text");
}
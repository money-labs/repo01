
class FileIo
{

    // onRead = function(contents)
    static readFile(file, onRead)
    {
        var reader = new FileReader();
        reader.onload = function () {
            onRead(reader.result);
        };
        reader.readAsText(file);
    }

    static displayContents(contents, idHtmlContainer) {
        var element = document.getElementById(idHtmlContainer);
        element.textContent = contents;
    }


}
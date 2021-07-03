class CSVParser
{
    constructor()
    {

    }

    static csvToArray(file, listener)
    {
        if(!file)
        {
            listener.onFailure();
            return returnVal;
        }

        var reader = new FileReader();

        reader.onload = function(file)
        {
            var fileStrRaw = file.target.result;

            var lines = fileStrRaw.split('\n')

            var fileConverted = []

            for (var i1 = 0; i1 < lines.length; i1++)
            {
                fileConverted.push(lines[i1].split("\t"));
            }

            listener.onSuccess(fileConverted)
        }

        reader.readAsText(file)
    }
}
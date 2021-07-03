class CSVParser
{
    static csvToJson(file, onSuccessListener)
    {
        var returnVal = {"success" : true};
        if(!file)
        {
            returnVal.success = false;
            return returnVal;
        }

        var reader = new FileReader();

        reader.onload = function(file)
        {
            var contents = file.target.result;
            onSuccessListener(returnVal)
        }

        reader.readAsText(file)
    }
}
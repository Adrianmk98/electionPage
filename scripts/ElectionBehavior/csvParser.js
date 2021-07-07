
/**
 * Class parses a csv file into a 2d array
 */
class CSVParser
{
	/**
	  * csvToArray converts a file input into 2d array
	  * 
	  * @param {Object} file inputed file that will be read and converted
	  * @param {Listener} listener object that calls onSuccess and onFailure
	  */
	static csvToArray(file, listener)
	{
		//check if file is null
		if(!file)
		{
			listener.onFailure();
			return returnVal;
		}

		var reader = new FileReader();

		var separator = ","

		reader.onload = function(file)
		{
			var fileStrRaw = file.target.result;

			var lines = fileStrRaw.split('\n')

			if (lines[0].split(",").length < lines[0].split("\t").length)
			{
				separator = "\t"
			}

			for (var i1 = 0; i1 < lines.length; i1++)
			{
				lines[i1] = lines[i1].replace("\r","")
				lines[i1] = lines[i1].split(separator);
			}

			listener.onSuccess(lines)
		}

		reader.readAsText(file)
	}
}
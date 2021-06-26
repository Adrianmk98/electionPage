//inital settings
size = 2;
duration = 10;//seconds
suffix = "jpg"

//internal variables
current = 0;
next = 1;

$("#background #currentBackgroundImage").css("transition-duration",(duration*0.25)+"s")

function changeBackground(d)
{
	if(current + 1 > size)
	{
		current = 0
	}
	else
	{
		current++;
	}

	if(next + 1 > size)
	{
		next = 0
	}
	else
	{
		next++;
	}
	
	/*
	start -(4s)-> start animation -(1s)-> end animation -(1s)-> new back
	 ^_____________________________________________________________| 
	 start
	 	- current opacity 1 
	 start animation
	 	- applies transition class
	 	- begins to change opacity 0
 	 end animation
 	 	- gets rid of transition class
 	 	-
	*/
	
	//start
	setTimeout
	(
		function()
		{	
			//start animation
			$("#currentBackgroundImage").addClass("transition");
			$("#currentBackgroundImage").css("opacity",0);

			setTimeout
			(
				function()
				{
					//end animation
					$("#currentBackgroundImage").attr("src","backgrounds\\"+current+"."+suffix);
					setTimeout
					(
						function()
						{
							//new back
							$("#currentBackgroundImage").css("opacity",1);
							$("#currentBackgroundImage").removeClass("transition")
							
							
							setTimeout
							(
								function()
								{
									$("#nextBackgroundImage").attr("src","backgrounds\\"+next+"."+suffix)	
									changeBackground(duration)
								}
								,
								d * 1000 * 0.25
							)
							
						},
						d * 1000 * 0.1
					)
				},
				d * 1000 * 0.25
			)
		},
		d * 1000 * 0.75
	)
}

changeBackground(duration);
//==================================================================================================
// Script to parse csv file to an object(array) to be called into elements using PapaParse
// Jason Young and Alex Chang
// Relies on papa parse 5.1.0 
// CDN: https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js
//==================================================================================================
// insert div creations into the papaparse functions for it to show outside of the console
// the parsed values from the csv cannot be used outside of the scope of the complete function
// therefore the loop for iterating through the array must be written inside:
// var csvArr > complete: function(results){for(){}}
//==================================================================================================

// Parse csv file to array 
var csvArr = Papa.parse('test1.csv', {
// Config for papa parse	
    download: true,
    header: false,
	dynamicTyping: true,
// Complete: function	
    complete: function(results) {
	  useResults = results.data;
	  console.log("Finished:", results.data);
//initialize variables to be used
	  var arrayLength = useResults.length;
	  var temp;
	  var tempTextContainer;
	  var tempHeading;
	  var tempText;
	  var tempImg;
	  var tempImgContainer;
//loop through array values to be inserted into containers	  
	  for (i = 1; i < arrayLength; i++) {
//create elements to be used		  
		temp = document.createElement('div');
		tempTextContainer = document.createElement('div');
		tempHeading = document.createElement('h2');
		tempText = document.createElement('p');
		tempImgContainer = document.createElement('div');
		tempImg = document.createElement('img');
//assign class names to be used on containers and elements		
		tempTextContainer.className = 'container pull-right float-right col-4 col-lg-4 col-sm-12';
		tempImgContainer.className = 'pull-left float-left col-8 col-lg-8 col-sm-12'
		tempImg.className = 'journalImage img-fluid';
		temp.className = 'row';
//assign image source and place project text		
		tempImg.src = `images/${useResults[i][2]}`;
		tempHeading.innerHTML = useResults[i][0];
		tempText.innerHTML = useResults[i][1];
//append container element to body		
		document.getElementsByTagName('body')[0].appendChild(temp);
//append image container to container		
		temp.appendChild(tempImgContainer)
//append image to image container		
		tempImgContainer.appendChild(tempImg);
//append text container to container		
		temp.appendChild(tempTextContainer)
//append heading to text container		
		tempTextContainer.appendChild(tempHeading);
//append text to text container
		tempTextContainer.appendChild(tempText);
//done		
	  }
    }
  });




// To set the image src dynamically use:
// document.getElementById('image').src = 'image url'
// where image tag has id="image"






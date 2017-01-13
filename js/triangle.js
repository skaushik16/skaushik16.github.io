

// only numbers allowed
function checkTriangleType(){
  document.getElementById('lengthserror').style.display = 'none';
  
  var len1 = document.getElementById('length1').value ;
  var len2 = document.getElementById('length2').value ;
  var len3 = document.getElementById('length3').value ;
 // check if any field is empty
  if(len1 == ""  || len2 == "" || len3 == ""){
     // can indicate which field is missing by using JS or bootstrap
     document.getElementById('lengthserror').style.display = 'block';
     document.getElementById("lengthserror").innerHTML ="All lengths are required "
  
  }else{
	if(len1 == len2  && len1 == len3) { 
	   document.getElementById("typeTrg").innerHTML = "Its a equilateral triangle";
	}else if (len1 == len2  || len1 == len3 || len2 == len3){
	   document.getElementById("typeTrg").innerHTML = "Its a isosceles triangle";
	}else{
	   document.getElementById("typeTrg").innerHTML = "its a scalene triangle";
	}	  
  }
    
}

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    	var ctx = canvas.getContext('2d');

    	var height = 100 * (Math.sqrt(3)/2);
	ctx.beginPath();
	ctx.moveTo(175,0);
	ctx.lineTo(175,100);
	ctx.lineTo(15,100);
	ctx.fill();
	ctx.closePath();
  }
}

$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('fast');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},900);
		$('#b22').animate({top:240, left: vw-250},900);
		$('#b33').animate({top:240, left: vw-150},900);
		$('#b44').animate({top:240, left: vw-50},900);
		$('#b55').animate({top:240, left: vw+50},900);
		$('#b66').animate({top:240, left: vw+150},900);
		$('#b77').animate({top:240, left: vw+250},900);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('slow').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(1500).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(2500);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');

	// Big Firework effect on 'Brighten up the space' button click
	$('#turn_on').click(function () {
		// Disable the "Brighten up the space" button during animation
		$('#turn_on').prop('disabled', true);
		
		// Create firework container for this effect
		var container = $('<div class="firework-container"></div>');
		$('body').append(container);

		// Number of fireworks and particles
		var numFireworks = 5;
		var numSparkles = 15;

		// Create larger fireworks
		for (var i = 0; i < numFireworks; i++) {
			var firework = $('<div class="firework"></div>');
			firework.css({
				left: Math.random() * 100 + '%',
				top: Math.random() * 100 + '%',
				animationDelay: (Math.random() * 1) + 's'
			});

			// Randomize the firework color
			var colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'];
			firework.attr('data-color', colors[Math.floor(Math.random() * colors.length)]);
			container.append(firework);

			// Add sparkles to each firework
			for (var j = 0; j < numSparkles; j++) {
				var sparkle = $('<div class="sparkle"></div>');
				sparkle.css({
					left: Math.random() * 100 + '%',
					top: Math.random() * 100 + '%',
					animationDelay: (Math.random() * 2) + 's',
					animationDuration: (Math.random() * 3) + 1 + 's'
				});
				firework.append(sparkle);
			}
		}

		// Wait for fireworks to finish, then enable "Time to Sparkle" button
		setTimeout(function () {
			// Enable the "Time to Sparkle" button
			$('#bannar_coming').prop('disabled', false);
			
			// Remove the firework container after animation
			container.remove();
		}, 3000); // Firework animation duration (3 seconds)

		// Enable "Brighten up the space" button after fireworks
		setTimeout(function () {
			$('#turn_on').prop('disabled', false);
		}, 3000); // Re-enable after fireworks finish
	});
///////////////////////////////////music






$(document).ready(function () {
	// Music animation effect trigger
	$("#play").click(function () {
	  // Show the music notes and start the animation
	  $(".music-notes").fadeIn();
	});
  
	// Stop animation and hide music notes when the 'Time to Sparkle' button is clicked
	$("#bannar_coming").click(function () {
	  $(".music-notes").fadeOut();
	});
  });
  


  /////cake appearing

  // Ensure jQuery is loaded before this script

$(document).ready(function() {
    // When "Sinfully Good Cake" button is clicked, show the cake image
    $("#cake_fadein").click(function() {
        $("#cakeImage").fadeIn();  // Show the cake image with a fade effect
    });

    // When "Fuel the Flame" button is clicked, hide the cake image
    $("#light_candle").click(function() {
        $("#cakeImage").fadeOut();  // Hide the cake image with a fade effect
    });
});




//////flaming


$(document).ready(function() {
    // When "Fuel the Flame" button is clicked, show the cake2 image
    $("#light_candle").click(function() {
        // Show the cake2 image with a fade-in effect
        $("#cake2Image").fadeIn();
    });

    // Optionally, you can add an event to hide the image when another action is triggered, for example:
    // Hide the cake2 image when "Sinfully Good Cake" button is clicked
    $("#cake_fadein").click(function() {
        $("#cake2Image").fadeOut();  // Hide the cake image with a fade-out effect
    });
});


$(document).ready(function() {
	// Show the cake image when the "Fuel the Flame" button is clicked (on mobile view)
	$("#light_candle").click(function() {
		// Check if it's a mobile view (screen width <= 768px)
		if ($(window).width() <= 768) {
			$("#cake2Image").fadeIn();  // Show the cake image
		}
	});

	// Hide the cake image when the "Wishing you a day as wonderful as you are!" button is clicked (on mobile view)
	$("#wish_message").click(function() {
		// Check if it's a mobile view (screen width <= 768px)
		if ($(window).width() <= 768) {
			$("#cake2Image").fadeOut();  // Hide the cake image
		}
	});
});



$(document).ready(function() {
    // When the "Fuel the Flame" button is clicked, show the cake2 image
    $("#light_candle").click(function() {
        // Show the cake2 image with a fade-in effect
        $("#cake2Image").fadeIn();

        // Hide the cake2 image after 3 seconds (3000ms)
        setTimeout(function() {
            $("#cake2Image").fadeOut();
        }, 3000); // 3 seconds delay
    });

    // Optionally, you can add an event to hide the image when another action is triggered
    // For example, hide cake2Image when "Sinfully Good Cake" button is clicked
    $("#cake_fadein").click(function() {
        $("#cake2Image").fadeOut();  // Hide the cake image when this button is clicked
    });
});

$("#light_candle").click(function() {
    console.log("Fuel the Flame button clicked!");
    $("#cake2Image").fadeIn();
    setTimeout(function() {
        console.log("Hiding cake2Image after 3 seconds!");
        $("#cake2Image").fadeOut();
    }, 3000);
});

$(document).ready(function() {
    // Hide the cake images initially when the page loads
    $(".cake-image, .cake2-image").hide();

    // When the "Fuel the Flame" button is clicked
    $("#light_candle").click(function() {
        // Show the cake2 image with a fade-in effect on laptop and desktop
        if ($(window).width() >= 768 && $(window).width() <= 1366) {
            $(".cake2-image").fadeIn();
        }

        // Optionally, you can set a timeout to hide the image after 3 seconds
        setTimeout(function() {
            $(".cake2-image").fadeOut();
        }, 3000); // 3 seconds delay
    });

    // Optionally, you can add an event to hide the image when "Sinfully Good Cake" button is clicked
    $("#cake_fadein").click(function() {
        $(".cake2-image").fadeOut();  // Hide the cake2 image when this button is clicked
    });
});






//////balloons adjustment 



$(document).ready(function () {

	// Initially hide all the balloons on page load
	$('#b1, #b2, #b3, #b4, #b5, #b6, #b7').hide();
  
	// When the "Chase the Hearts" button is clicked, show the balloons one by one
	$("#bannar_coming").click(function () {
	  // Fade in each balloon one after the other with a slight delay
	  $('#b1').fadeIn(500); // Fade in Balloon 1 with 500ms duration
	  $('#b2').fadeIn(700); // Fade in Balloon 2 with 700ms duration
	  $('#b3').fadeIn(900); // Fade in Balloon 3 with 900ms duration
	  $('#b4').fadeIn(1100); // Fade in Balloon 4 with 1100ms duration
	  $('#b5').fadeIn(1300); // Fade in Balloon 5 with 1300ms duration
	  $('#b6').fadeIn(1500); // Fade in Balloon 6 with 1500ms duration
	  $('#b7').fadeIn(1700); // Fade in Balloon 7 with 1700ms duration
	});
  });
  
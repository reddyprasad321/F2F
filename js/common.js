$( document ).ready(function() {
	var store = window.localStorage.getItem('storename');
	
	
	var store = store.split(",")[0];
	
	
	var string = "<span class='storeName'>"+store+"</span>" ;
	

	$('#storename').html(store);
});


function check(){
			
	
			if(window.localStorage.getItem('user_id') != null && window.localStorage.getItem('user_id') != ''){
				
				
				
				var cart = jQuery.parseJSON(window.localStorage.getItem('cart'));
				
				if(cart.length > 0){
					
					document.getElementById("gotocheckout").click();
					
				}else{
					
					document.getElementById("categories").click();
					
				}
		
				
				
			}
		
			else{
				
				
				document.getElementById("login").click();
				
			}
		}
		
function logout(){
	
	// e.preventDefault();


	// if will call when clicked on logout. else will be called when clicked on login
	if(window.localStorage.getItem('user_id') != null && window.localStorage.getItem('user_id') != ''){		
		
		window.localStorage.setItem("user_id",'');
		window.localStorage.setItem("firstname",'');
		window.localStorage.setItem("Username",'');
		window.localStorage.setItem("DeliveryAddress",'');
		window.localStorage.setItem("DeliverLocation",'');
		window.localStorage.setItem("CityId",'');
		window.localStorage.setItem("user_email",'');
		window.localStorage.setItem("phonenumber",'');
		window.localStorage.setItem("address",'');
		window.localStorage.setItem('From','');
		
	/*$('#LoginLogoutid').attr("href",'index.html');
	$('#LoginLogoutid').click();
*/
		window.location.href="index.html";
	
	}
	else
		{
		
	//	alert(window.localStorage.getItem('user_id')+"loin here");
		/*$('#LoginLogoutid').attr("href",'login.html');
		$('#LoginLogoutid').click();*/
			window.location.href="login.html";

		
		}

	
	//alert(window.localStorage.getItem("user_id"));
	
}

function logincheck(){
	

	var cartTotal=window.localStorage.getItem("cartTotal"); 
	if(cartTotal<=0){
		
		window.localStorage.removeItem("cartTotal");
		window.localStorage.removeItem("cart");
		window.localStorage.removeItem("cartquantities");
		$(".ifProducts").css("display",'none');//Cart displays 
		$(".noProducts").css("display",'block');//No products in cart
	}else{
		window.localStorage.setItem('From','1');
		document.getElementById("checkout").click();
		check();
	}
	
	
	
}
function login(){
	
	
	
	if(window.localStorage.getItem('user_id') != null && window.localStorage.getItem('user_id') != ''){
	
		document.getElementById("myprofile").click();
	}

	else{
		
		document.getElementById("login").click();
		
	}
	
	
}




function makeplus(plus){
	var plsid=plus.getAttribute("data-pid");
	var quantityPlus=$("#product-quantity"+plsid).val();
	quantityPlus++;
	$("#product-quantity"+plsid).val(quantityPlus);
}
function makeminus(minus){
	var mid=minus.getAttribute("data-pid");
	var quantityMinus=$("#product-quantity"+mid).val();
	quantityMinus--;
	if(quantityMinus<0){
	$("#product-quantity"+mid).val('0');
	}else{
	$("#product-quantity"+mid).val(quantityMinus);	
	}
}
function loggedin(){
	
	if(window.localStorage.getItem('user_id') != null && window.localStorage.getItem('user_id') != ''){
		
		//$(".onlyLoggedin").css('display','block');
		$(".onlyLoggedin a").html("Logout");
	}else{
		$(".onlyLoggedin a").html("Login");
		//$(".onlyLoggedin").css('display','none');	
		
	}
	
}
window.load=loggedin();
function makeminusCart(minus){
	var mCartid=minus.getAttribute("data-pid");
	var quantityCartMinus=$("#product-updated-quantity"+mCartid).val();
	var cartQunatity=$("#product-updated-quantity"+mCartid).val();
	var subQuantity=$("#quantity-to-cart"+mCartid).val();
	quantityCartMinus--;
	cartQunatity--;
if(cartQunatity>=0){
	//Update of array will goes here //
	var array=window.localStorage.getItem("cartquantities");
		var ParsedArray=jQuery.parseJSON(array);
	for (i=0;i<ParsedArray.length;i++) {	  
	  if (ParsedArray[i].pid == mCartid) {
	 	  ParsedArray[i].pQuantity = cartQunatity;
	 	  ParsedArray[i].psubQuantity= subQuantity;
	      break; //Stop this loop, we found it!
	 
	     }
	  
	  
		  
		
	     }  
	 window.localStorage.setItem("cartquantities",JSON.stringify(ParsedArray));
}
	 

	//Update of array will goes here //
	if(quantityCartMinus<=0){
		
		$("#product-updated-quantity"+mCartid).val(0);
	}else{
		$("#product-updated-quantity"+mCartid).val(quantityCartMinus);
	}
	
	if(cartQunatity<=0){
		cartQunatity=0;
		
	}else{
		cartQunatity=cartQunatity;
	}
if(subQuantity==250){
   		
	   	
		cartQunatity =parseInt(cartQunatity)+0.25;
   	
   	}else if(subQuantity==500){
   		
   		
   		cartQunatity =parseInt(cartQunatity)+0.50;
   		
   	}
   	else if(subQuantity==750){
   		
   		
   		cartQunatity =parseInt(cartQunatity)+0.75;
   		
   	}

	
	if(quantityCartMinus===0 && cartQunatity==0){
		
		$("#eachProductTotal"+mCartid).html(0);
		var EachProductPrice=$("#product-updated-quantity"+mCartid).data("price");
		var updatedPrice=parseInt(EachProductPrice)*parseFloat(cartQunatity);
        var presentCartval=$('#cartTotalPrice').text();			
        var UpdatedTotal=parseFloat(presentCartval)-EachProductPrice;
if(UpdatedTotal>=0){
	 window.localStorage.setItem("cartTotal",UpdatedTotal); //Saving cart total price to the local storage
}
       
var cartTotal=window.localStorage.getItem("cartTotal"); //Getting cart total price from the local storage	
$('#cartTotalPrice').html(cartTotal);
		
	}else if(cartQunatity<=0){
		
		$("#eachProductTotal"+mCartid).html(0);
	}
		
	else{
	
		var EachProductPrice=$("#product-updated-quantity"+mCartid).data("price");
var updatedPrice=parseInt(EachProductPrice)*cartQunatity;
var PriceInCart=$("#shoppingCartProductPrice"+mCartid).data("cartprice");
var ItemPrice=parseFloat($("#eachProductTotal"+mCartid).text());
$("#eachProductTotal"+mCartid).html('');
$("#eachProductTotal"+mCartid).html(updatedPrice);
if(updatedPrice==ItemPrice){
	var presentCartval=$('#cartTotalPrice').text();
	$('#cartTotalPrice').html(presentCartval);
}else{




var presentCartval=$('#cartTotalPrice').text();

	if(presentCartval<=0){
	
$('#cartTotalPrice').html(0);	
		
	}
	else{

	if(parseFloat(presentCartval)!=updatedPrice && parseFloat(presentCartval)>updatedPrice){
		
		var UpdatedTotal=parseFloat(presentCartval)-EachProductPrice;
		
	}else{
		
		var UpdatedTotal=parseFloat(presentCartval);
	}


window.localStorage.setItem("cartTotal",UpdatedTotal); //Saving cart total price to the local storage
	var cartTotal=window.localStorage.getItem("cartTotal"); //Getting cart total price from the local storage

$('#cartTotalPrice').html(cartTotal);
		
}	
}
	
}
}

function makeplusCart(plus){

	
	var plsCartid=plus.getAttribute("data-pid");
	var quantityCartPlus=$("#product-updated-quantity"+plsCartid).val();
	var cartQunatity=$("#product-updated-quantity"+plsCartid).val();
	var subQuantity=$("#quantity-to-cart"+plsCartid).val();
	quantityCartPlus++;
	cartQunatity++;
	var CartMainQuantity=cartQunatity;
	var array=window.localStorage.getItem("cartquantities");
	var ParsedArray=jQuery.parseJSON(array);
	for (i=0;i<ParsedArray.length;i++) {
		  
	     if (ParsedArray[i].pid == plsCartid) {
	    	 ParsedArray[i].pQuantity = CartMainQuantity;
	    	 ParsedArray[i].psubQuantity= subQuantity;
	         break; //Stop this loop, we found it!
	    
	   }
	    
	} 
	window.localStorage.setItem("cartquantities",JSON.stringify(ParsedArray));  
	
	
	$("#product-updated-quantity"+plsCartid).val(quantityCartPlus);
	
	if(subQuantity==250){
   		
	   	
		cartQunatity =parseInt(cartQunatity)+0.25;
   	
   	}else if(subQuantity==500){
   		
   		
   		cartQunatity =parseInt(cartQunatity)+0.50;
   		
   	}
   	else if(subQuantity==750){
   		
   		
   		cartQunatity =parseInt(cartQunatity)+0.75;
   		
   	}
	var EachProductPrice=$("#product-updated-quantity"+plsCartid).data("price");
	var updatedPrice=parseInt(EachProductPrice)*cartQunatity;
	
	var PriceInCart=$("#shoppingCartProductPrice"+plsCartid).data("cartprice");
	
	$("#eachProductTotal"+plsCartid).html(updatedPrice);
	
	
	var presentCartval=$('#cartTotalPrice').text();
	
	var UpdatedTotal=parseFloat(presentCartval)+EachProductPrice;
	window.localStorage.setItem("cartTotal",UpdatedTotal); //Saving cart total price to the local storage
   	var cartTotal=window.localStorage.getItem("cartTotal"); //Getting cart total price from the local storage
	$('#cartTotalPrice').html(cartTotal);	
		
	
	
	


	
}
quantityInCart=0;
function changemycart(subquant){
	var subquantId=subquant.getAttribute("data-pid");
	var ProductPrice=subquant.getAttribute("data-price");
	var subQuantity=parseFloat(subquant.value);
	var quantityInCart=$("#product-updated-quantity"+subquantId).val();
	var mainQuantity=quantityInCart;
	
	var array=window.localStorage.getItem("cartquantities");
	
	var Parsedarray=jQuery.parseJSON(array);

	
		   for (i=0;i<Parsedarray.length;i++) {
			  
		     if (Parsedarray[i].pid == subquantId) {
		    	 Parsedarray[i].pQuantity =mainQuantity;
		    	 Parsedarray[i].psubQuantity=subQuantity;
		         break; //Stop this loop, we found it!
		    
		   }
		    
		} 
		 
		   window.localStorage.setItem("cartquantities",JSON.stringify(Parsedarray));  
	if(subQuantity==250){
   		
   	
   		quantityInCart =parseInt(quantityInCart)+0.25;
   	
   	}else if(subQuantity==500){
   		
   		
   		quantityInCart =parseInt(quantityInCart)+0.50;
   		
   	}
   	else if(subQuantity==750){
   		
   		
   		quantityInCart =parseInt(quantityInCart)+0.75;
   		
   	}
	
	var UpdatedPrice=ProductPrice*parseFloat(quantityInCart);
	
	var presentItemValue=$("#eachProductTotal"+subquantId).text();
	var PresentCartPrice=$("#eachProductTotal"+subquantId).html(UpdatedPrice);
	



	var presentCartval=$('#cartTotalPrice').text();
	
	var CartTotalMinus=parseFloat(presentCartval)-parseFloat(presentItemValue);

	$('#cartTotalPrice').html(CartTotalMinus);
	var UpdatedPrice=ProductPrice*parseFloat(quantityInCart);
	
	var finalUpdatedPrice=ProductPrice*parseFloat(quantityInCart);
	$("#eachProductTotal"+subquantId).html(UpdatedPrice);
    var presentCartval=$('#cartTotalPrice').text();
	
	var UpdatedTotal=parseFloat(presentCartval)+finalUpdatedPrice;
	window.localStorage.setItem("cartTotal",UpdatedTotal); //Saving cart total price to the local storage
   	var cartTotal=window.localStorage.getItem("cartTotal"); //Getting cart total price from the local storage
	$('#cartTotalPrice').html(cartTotal);
	
}


/* Getting products from API  starts*/


function setCategory(catid){
	
	window.localStorage.setItem('category',catid);
	getProducts();
	
}
	var ThisStore= window.localStorage.getItem('storeid');
    var ThisCatg = window.localStorage.getItem('category');
    
    


 var baseurl="http://www.tutionshub.in/demo/API/";
 var siteUrl="http://www.tutionshub.in/demo/API/index.php/"
 var productsUrl="http://www.tutionshub.in/demo/API/index.php/Farm2Fridze/ProductSearch/"+ThisStore+"/"+ThisCatg;
 var categoriesUrl=siteUrl+"Farm2Fridze/store_Product_catg";
 function loadCategories(){
	 $.ajax({
		    type: "POST",
		    url:categoriesUrl,//your desired url will goes here
		    success: function (response) {
		    	var categories=jQuery.parseJSON(response);
		    	$.each(categories,function(key,value){
		    	
		    		$("#pageContentWrapper").append("<div class='mainSlider'><a href='products.html' class='mainSliderImage' onclick='setCategory("+value['Category_ID']+")'> <img src='"+baseurl+value['Category_image']+"' alt=''/></a></div><div class='headerBreak headerBreakTitleBottom'></div>");	
		    		
		    		
		    	});
		
 }
	 });
 }
$(".shop_items").html('');
function getProducts(){
	
	$.ajax({
	    type: "POST",
	    url:productsUrl,//your desired url will goes here
	    success: function (response) {
	
	var products=jQuery.parseJSON(response);
	
	
	$.each(products,function(key,value){
		var ProductId=value['id'];
		var ProductName=value['title'];
		var ProductUnit=value['UnitMeasurement'];
		var ProductImage=value['image'];
		var ProductPrice=value['price'];
		var Storeid=value['StoreId'];
		window.localStorage.setItem("Storeid",Storeid);
		
		var addtocartimgpath="images/addtocart.png";
		
		

	
		
		if(ProductUnit==='Nos'  || ProductUnit==='Bunch'){
			$(".shop_items").append("<div class='homeProductWrapper'><div class='product-image'><img src='"+baseurl+ProductImage+"' alt=''/></div>  <div class='product-right'><div class='product-title'><span class='homeProductTitle'>"+ProductName+"</span></div><div class='product-cart'><div class='product-quantity'><div class='product-main-uom full'><span class='productUnit full'>"+ProductUnit+"</span><input type='button' class='cart-input minus full' data-pid='"+ProductId+"' onClick='makeminus(this)' value='-'><input type='button' id='product-quantity"+ProductId+"' class='cart-input quantity-value fullvalue' value='1'><input class='cart-input full' type='button' data-pid='"+ProductId+"' onClick='makeplus(this)' value='+'></div></div><div class='pricePerUnit'>  <span class='product-price'>&#x20B9<span>"+ProductPrice+" - "+ProductUnit+"</span></span></div><a href='#' data-productId='"+ProductId+"' data-subcatgry='NO' class='homePurchaseButton add-to-cart' onClick='addtocart(this)'><img src='images/common/icon1.png'/></a> </div></div></div><span id='error"+ProductId+"'></span><hr>");
			}else if(ProductUnit==='Ltr'){
			$(".shop_items").append("<div class='homeProductWrapper'><div class='product-image'><img src='"+baseurl+ProductImage+"' alt=''/></div>  <div class='product-right'><div class='product-title'><span class='homeProductTitle'>"+ProductName+"</span></div><div class='product-cart'><div class='product-quantity'><select style='height:30px'  class='quantity-to-cart' ><option value='0ml' selected>0 ml</option><option value='250ml'>250 ml</option> <option value='500ml'>500 ml</option></select> <div class='product-main-uom'><span class='productUnit'>"+ProductUnit+"</span><input type='button' class='cart-input minus' data-pid='"+ProductId+"' onClick='makeminus(this)' value='-'><input type='button' id='product-quantity"+ProductId+"' class='cart-input quantity-value' value='1'><input class='cart-input' type='button' data-pid='"+ProductId+"' data-subcatgry='YES' onClick='makeplus(this)' value='+'></div></div><div class='pricePerUnit'> <span class='product-price'>&#x20B9<span>"+ProductPrice+" - "+ProductUnit+"</span></span></div><a href='#' class='homePurchaseButton add-to-cart' data-productId='"+ProductId+"' onClick='addtocart(this)'><img src='images/common/icon1.png'/></a></div></div></div><span id='error"+ProductId+"'></span><hr>");
			}

			else{
			$(".shop_items").append("<div class='homeProductWrapper'><div class='product-image'><img src='"+baseurl+ProductImage+"' alt=''/></div>  <div class='product-right'><div class='product-title'><span class='homeProductTitle'>"+ProductName+"</span></div><div class='product-cart'><div class='product-quantity'><select style='height:30px'  class='quantity-to-cart' name='pSubQuantity' id='pSubQuantity"+ProductId+"'><option value='0' selected>0 gms</option><option value='250'>250 gms</option> <option value='500'>500 gms</option> <option value='750'>750 gms</option></select> <div class='product-main-uom'><span class='productUnit'>"+ProductUnit+"</span><input type='button' class='cart-input minus' data-pid='"+ProductId+"' onClick='makeminus(this)' value='-'><input type='button' id='product-quantity"+ProductId+"' data-subcatgry='YES' class='cart-input quantity-value' value='1'><input class='cart-input plus' type='button' data-pid='"+ProductId+"' onClick='makeplus(this)' value='+'></div></div><div class='pricePerUnit'><span class='product-price'>&#x20B9<span>"+ProductPrice+" - "+ProductUnit+"</span></span></div><a href='#' class='homePurchaseButton add-to-cart' data-productId='"+ProductId+"' onClick='addtocart(this)'><img src='images/common/icon1.png'/></a></div></div></div><span id='error"+ProductId+"'></span><hr>");
			}
		
	});
	   }
	    });
	
}	/* Getting products from API  Ends*/
		
		
		/* ADD TO CART BEGINS HERE */
    cartDetails=[]; 
	pQuantities=[];	
	
    function addtocart(cart){ //Add to cart function starts here
    	cartProductLngth=0;
    	var productId=cart.getAttribute("data-productId");
   
    	var productQuantity=$("#product-quantity"+productId).val();
    	
    	var subcat=cart.getAttribute("data-subcatgry");
    	
    	if(subcat==='NO'){
    		var subQuantity="NO";
    	}
    	else{
    		var subQuantity=$("#pSubQuantity"+productId).val();
    		
    	}
    	var quantity=window.localStorage.getItem("cartquantities");
    	
    	if(productQuantity==0 && subQuantity==0){
    		
    		alert("Quantity Must Be greater than 0");
    	}
    	else{
       var pQuantities=jQuery.parseJSON(quantity);
    	 if(pQuantities==null || pQuantities==''){
    		
    		 pQuantities=[];
    		 pQuantities.push({'pid':productId,'pQuantity':productQuantity,'psubQuantity':subQuantity});
    		 window.localStorage.setItem("cartquantities",JSON.stringify(pQuantities));
    	
    		
    	}else{
    		if(pQuantities!=null){
    			
    			  
    			 //Update of array will goes here //
    	    	for (i=0;i<pQuantities.length;i++) {
    	    		  
    	    	  if (pQuantities[i].pid == productId) {
    	    		  
    	    		  pQuantities[i].pQuantity = productQuantity;
    	    		  
    	    		  pQuantities[i].psubQuantity=subQuantity;
    	    		
    	    	     break; //Stop this loop, we found it!
    	    	     
    	    	   
    	    	
    	    	}else{
    	    		
    	    		pQuantities.push({'pid':productId,'pQuantity':productQuantity,'psubQuantity':subQuantity});
    	    	}
    	    	  
    	    	} 
    			 
    	    	var uniques = [];
		        var itemsFound = {};
		        for(var i = 0, l = pQuantities.length; i < l; i++) {
		        	//alert(finalCart[i][0]['ProductId']);
		            var stringified = pQuantities[i]['pid'];
		            if(itemsFound[stringified]) {
		    		continue; 
		    		}
		           
		            uniques.push(pQuantities[i]);
		            //console.log(uniques);
		            itemsFound[stringified] = true;
		            }
		      
		        pQuantities = uniques; 
    		}
    	    	//Update of array will goes here // 	
    	}  
    	
    	window.localStorage.setItem("cartquantities",JSON.stringify(pQuantities));
    	var getProductUrl="http://www.tutionshub.in/demo/API/index.php/Farm2Fridze/ProductDet/"+productId+"/"+ThisStore;
    	var pPrice=0;
    	
	    $.ajax({
	     type: "POST",
	     url:getProductUrl,//your desired url will goes here
	     success: function (response) {
	     var pDetails=jQuery.parseJSON(response);
	     setCart=jQuery.parseJSON(window.localStorage.getItem("cart"));
	    
	  
	   
	     if(setCart==null){
	    		cartDetails=[]; 
	    		cartDetails.push(pDetails);
	    	    window.localStorage.setItem("cart",JSON.stringify(cartDetails));
	     } else{ 
	    	 
	    	 
	    	 //cartDetails.push(setCart);
	    	
	    	cartDetails=cartDetails.concat(setCart);
	    
	    	 cartDetails.push(pDetails);
	    	 //console.log(cartDetails);
	 	    
	    	    var uniques = [];
		        var itemsFound = {};
		        for(var i = 0, l = cartDetails.length; i < l; i++) {
		        	//alert(finalCart[i][0]['ProductId']);
		            var stringified = cartDetails[i][0]['ProductId'];
		            if(itemsFound[stringified]) {
		    		continue; 
		    		}
		            uniques.push(cartDetails[i]);
		            itemsFound[stringified] = true;
		            }
		      
		     cartDetails = uniques; 
		     window.localStorage.setItem("cart",JSON.stringify(cartDetails)); 
	    	 
	     }
	   
	    	var finalCart=jQuery.parseJSON(window.localStorage.getItem("cart"));
	    
	    	var mycartval=0;
	    	var quantities=jQuery.parseJSON(window.localStorage.getItem("cartquantities"));
	    	if(finalCart.length!=0 && finalCart!='' && finalCart!=null){
	    		
	    		$(".ifProducts").css("display",'block');//Cart displays 
	    		$(".noProducts").css("display",'none');//No products in cart
	    	}else{
	    		
	    		$(".ifProducts").css("display",'none');//Cart displays 
	    		$(".noProducts").css("display",'block');//No products in cart
	    	}
	    	 $(".mycart").html('');
	    	 var   cartTotalPrice=0;
	    	
	    	$.each(finalCart,function (key,value){
	    		var pQuantity=quantities[mycartval]["pQuantity"];
	    		var psubQuantity=quantities[mycartval]["psubQuantity"];
	    		
	    	
	    		mycartval++;
	    	var pId=value[0]["id"];
	    	var pImage=value[0]["image"];
	    	var pName=value[0].title;
	    	var ProductUnit=value[0]['UnitMeasurement'];
	    	 pPrice =value[0]["price"];	
	    	   	var finalQuantity=parseInt(pQuantity);
   	
   	if(psubQuantity=='NO'){
   		
   
   
   	}else if(psubQuantity==250){
   		 finalQuantity +=0.25;
   	}else if(psubQuantity==500){
   		 finalQuantity +=0.50;	
   	}
   	else if(psubQuantity==750){
   		 finalQuantity +=0.75;
   	}
	
	var pCartPrice=pPrice*finalQuantity;
	
   	cartTotalPrice +=pCartPrice;
	    	   	
	    	  	window.localStorage.setItem("cartTotal",cartTotalPrice); //Saving cart total price to the local storage
	    	   	var cartTotal=window.localStorage.getItem("cartTotal"); //Getting cart total price from the local storage
	    	 	
	    		$('#cartTotalPrice').html('');
	    		$('#cartTotalPrice').html(cartTotal);
	    		
	    		if(pCartPrice>0){
	    			cartProductLngth++;
	    	    if(ProductUnit==='Nos'  || ProductUnit==='Bunch'){
	    		  	   $(".mycart").append("<div class='shoppingCartProductWrapper' id='mycart"+pId+"'><a href='#' class='shoppingCartProductImageWrapper'><img src='"+baseurl+pImage+"' class='shoppingCartProductImage' alt=''/></a><div class='shoppingCartProductInfoWrapper'><a href='#' class='shoppingCartProductTitle'><span class='shoppingCartProductPrice' id='shoppingCartProductPrice"+pId+"' data-cartprice='"+pCartPrice+"'>Rs.<span id='eachProductTotal"+pId+"'>"+pCartPrice+"</span></span>"+pName+"</a><span class='product-price incart'>&#x20B9<span>"+pPrice+" - "+ProductUnit+"</span></span><div class='shoppingCartProductButtonsWrapper'><div class='product-cart'><div class='product-quantity'><div class='product-main-uom full'><span class='productUnit full'>"+ProductUnit+"</span><input type='button' class='cart-input minus full' data-pid='"+pId+"'  onClick='makeminusCart(this)' value='-'><input type='button' id='product-updated-quantity"+pId+"'  data-price='"+pPrice+"' class='cart-input quantity-value fullvalue' value='"+pQuantity+"'><input class='cart-input full' type='button' data-pid='"+pId+"' onClick='makeplusCart(this)' value='+'></div></div></div><a href='#'data-dltid='"+pId+"' class='shoppingCartRemoveProductButton' onClick='deleteCart(this)'></a></div></div> </div>");
	    		  	       }else if(ProductUnit==='Ltr'){
	    		  	       	
	    		  	       	$(".mycart").append("<div class='shoppingCartProductWrapper' id='mycart"+pId+"'><a href='#' class='shoppingCartProductImageWrapper'><img src='"+baseurl+pImage+"' class='shoppingCartProductImage' alt=''/></a><div class='shoppingCartProductInfoWrapper'><a href='#' class='shoppingCartProductTitle'><span class='shoppingCartProductPrice' id='shoppingCartProductPrice"+pId+"' data-cartprice='"+pCartPrice+"'>Rs.<span id='eachProductTotal"+pId+"'>"+pCartPrice+"</span></span>"+pName+"</a><span class='product-price incart'>&#x20B9<span>"+pPrice+" - "+ProductUnit+"</span></span><div class='shoppingCartProductButtonsWrapper'><div class='product-cart'><div class='product-quantity'><select class='quantity-to-cart incart' id='quantity-to-cart"+pId+"' onChange='changemycart(this)' data-pid='"+pId+"' data-price='"+pPrice+"'><option value='0' selected>0 ml</option><option value='250'>250 ml</option> <option value='500'>500 ml</option></select> <div class='product-main-uom'><span class='productUnit'>"+ProductUnit+"</span><input type='button' class='cart-input minus' data-pid='"+pId+"' onClick='makeminusCart(this)' value='-'><input type='button' id='product-updated-quantity"+pId+"' class='cart-input quantity-value' value='"+pQuantity+"' data-price='"+pPrice+"'><input class='cart-input' type='button' data-pid='"+pId+"' onClick='makeplusCart(this)'  value='+'></div></div></div><a href='#'data-dltid='"+pId+"' class='shoppingCartRemoveProductButton' onClick='deleteCart(this)'></a></div></div> </div>");
	    		  	       }else{
	    		  	       	$(".mycart").append("<div class='shoppingCartProductWrapper' id='mycart"+pId+"'><a href='#' class='shoppingCartProductImageWrapper'><img src='"+baseurl+pImage+"' class='shoppingCartProductImage' alt=''/></a><div class='shoppingCartProductInfoWrapper'><a href='#' class='shoppingCartProductTitle'><span class='shoppingCartProductPrice' id='shoppingCartProductPrice"+pId+"' data-cartprice='"+pCartPrice+"'>Rs.<span id='eachProductTotal"+pId+"'>"+pCartPrice+"</span></span>"+pName+"</a><span class='product-price incart'>&#x20B9<span>"+pPrice+" - "+ProductUnit+"</span></span><div class='shoppingCartProductButtonsWrapper'><div class='product-cart'><div class='product-quantity'><select class='quantity-to-cart incart'  id='quantity-to-cart"+pId+"' onChange='changemycart(this)'  data-pid='"+pId+"' data-price='"+pPrice+"'><option value='0' selected>0 gms</option><option value='250'>250 gms</option> <option value='500'>500 gms</option><option value='750'>750 gms</option></select> <div class='product-main-uom'><span class='productUnit'>"+ProductUnit+"</span><input type='button' class='cart-input minus' data-pid='"+pId+"' onClick='makeminusCart(this)'  value='-'><input type='button' id='product-updated-quantity"+pId+"' class='cart-input quantity-value' value='"+pQuantity+"' data-price='"+pPrice+"'><input class='cart-input' type='button' data-pid='"+pId+"' onClick='makeplusCart(this)' value='+'></div></div></div><a href='#'  data-dltid='"+pId+"' class='shoppingCartRemoveProductButton' onClick='deleteCart(this)'></a></div></div> </div>");
	    		  	       	
	    		  	       }
	    	    $("#quantity-to-cart"+pId).val(psubQuantity);
	    	    $('#cartPCount').html('');
	    		$('#cartPCount').html(" "+cartProductLngth);
	    		}
	    	 
	    			});
	    	  
	    
			}
			});
	    cartDetails=[];   
    	   i=0;
	 
	    		//Scroll to top if cart icon is hidden on top
	    		$('html, body').animate({
	    			'scrollTop' : $(".cart_anchor").position().top
	    		},100);
				document.getElementById("audio").play();
	    		//Select item image and pass to the function
	    		var itemImg = $(cart).parent().parent().parent().find('img').eq(0);
	    		
	    		flyToElement($(itemImg), $('.cart_anchor'));
	    		
    	}//Allows to add to cart only when quantity and subquantity is greater than 0
    	
}
    
    

/* ADD TO CART ENDS HERE */


/* LOAD CART STARTS HERE */


 function loadcart(){
	 var   cartTotalPrice=0;
	 cartPrdctLngth=0;
	 var finalCart=jQuery.parseJSON(window.localStorage.getItem("cart"));
	 var quantities=window.localStorage.getItem("cartquantities");
	
	 
	  pQuantities=jQuery.parseJSON(window.localStorage.getItem("cartquantities"));
		var mycartval=0;
    	
   	 $(".mycart").html('');
   	
   	$('#cartPCount').html(" 0");
   	$('#cartTotalPrice').html(" 0");
	if(finalCart!=null &&  finalCart!='' && finalCart.length!=0){
		
		$(".ifProducts").css("display",'block');//Cart displays 
		$(".noProducts").css("display",'none');//No products in cart
	
   	 $.each(finalCart,function (key,value){
   		var pQuantity=pQuantities[mycartval]["pQuantity"];
		
   		var psubQuantity=pQuantities[mycartval]["psubQuantity"];
   		mycartval++;
   		
   		
   	var pId=value[0]["id"];
   	var pImage=value[0]["image"];
   	var pName=value[0].title;
   	var ProductUnit=value[0]['UnitMeasurement'];
    pPrice =value[0]["price"];	
   	var finalQuantity=parseInt(pQuantity);
   	
   	if(psubQuantity=='NO'){
   		
   
   
   	}else if(psubQuantity==250){
   		 finalQuantity +=0.25;
   	}else if(psubQuantity==500){
   		 finalQuantity +=0.50;	
   	}
   	else if(psubQuantity==750){
   		 finalQuantity +=0.75;
   	}
	
	var pCartPrice=pPrice*finalQuantity;
	
   	cartTotalPrice +=pCartPrice;
	
	
   	window.localStorage.setItem("cartTotal",cartTotalPrice); //Saving cart total price to the local storage
   	var cartTotal=window.localStorage.getItem("cartTotal"); //Getting cart total price from the local storage
	
	$('#cartTotalPrice').html('');
	$('#cartTotalPrice').html(cartTotal);
	if(pCartPrice>0){
	cartPrdctLngth++;
    if(ProductUnit==='Nos'  || ProductUnit==='Bunch'){
	  	   $(".mycart").append("<div class='shoppingCartProductWrapper' id='mycart"+pId+"'><a href='#' class='shoppingCartProductImageWrapper'><img src='"+baseurl+pImage+"' class='shoppingCartProductImage' alt=''/></a><div class='shoppingCartProductInfoWrapper'><a href='#' class='shoppingCartProductTitle'><span class='shoppingCartProductPrice' id='shoppingCartProductPrice"+pId+"' data-cartprice='"+pCartPrice+"'>Rs.<span id='eachProductTotal"+pId+"'>"+pCartPrice+"</span></span>"+pName+"</a><span class='product-price incart'>&#x20B9<span>"+pPrice+" - "+ProductUnit+"</span></span><div class='shoppingCartProductButtonsWrapper'><div class='product-cart'><div class='product-quantity'><div class='product-main-uom full' id='product-main'><span class='productUnit full'>"+ProductUnit+"</span><input type='button' class='cart-input minus full' data-pid='"+pId+"'  onClick='makeminusCart(this)' value='-'><input type='button' id='product-updated-quantity"+pId+"'  data-price='"+pPrice+"' class='cart-input quantity-value fullvalue' value='"+pQuantity+"'><input class='cart-input full' type='button' data-pid='"+pId+"' onClick='makeplusCart(this)' value='+'></div></div></div><a href='#'data-dltid='"+pId+"' class='shoppingCartRemoveProductButton' onClick='deleteCart(this)'></a></div></div> </div>");
	  	       }else if(ProductUnit==='Ltr'){
	  	       	
	  	       	$(".mycart").append("<div class='shoppingCartProductWrapper' id='mycart"+pId+"'><a href='#' class='shoppingCartProductImageWrapper'><img src='"+baseurl+pImage+"' class='shoppingCartProductImage' alt=''/></a><div class='shoppingCartProductInfoWrapper'><a href='#' class='shoppingCartProductTitle'><span class='shoppingCartProductPrice' id='shoppingCartProductPrice"+pId+"' data-cartprice='"+pCartPrice+"'>Rs.<span id='eachProductTotal"+pId+"'>"+pCartPrice+"</span></span>"+pName+"</a><span class='product-price incart'>&#x20B9<span>"+pPrice+" - "+ProductUnit+"</span></span><div class='shoppingCartProductButtonsWrapper'><div class='product-cart'><div class='product-quantity'><select class='quantity-to-cart incart' id='quantity-to-cart"+pId+"' onChange='changemycart(this)' data-pid='"+pId+"' data-price='"+pPrice+"'><option value='0' selected>0 ml</option><option value='250'>250 ml</option> <option value='500'>500 ml</option></select> <div class='product-main-uom' id='product-main'><span class='productUnit'>"+ProductUnit+"</span><input type='button' class='cart-input minus' data-pid='"+pId+"' onClick='makeminusCart(this)' value='-'><input type='button' id='product-updated-quantity"+pId+"' class='cart-input quantity-value' value='"+pQuantity+"' data-price='"+pPrice+"'><input class='cart-input' type='button' data-pid='"+pId+"' onClick='makeplusCart(this)'  value='+'></div></div></div><a href='#'data-dltid='"+pId+"' class='shoppingCartRemoveProductButton' onClick='deleteCart(this)'></a></div></div> </div>");
	  	       }else{
	  	       	$(".mycart").append("<div class='shoppingCartProductWrapper' id='mycart"+pId+"'><a href='#' class='shoppingCartProductImageWrapper'><img src='"+baseurl+pImage+"' class='shoppingCartProductImage' alt=''/></a><div class='shoppingCartProductInfoWrapper'><a href='#' class='shoppingCartProductTitle'><span class='shoppingCartProductPrice' id='shoppingCartProductPrice"+pId+"' data-cartprice='"+pCartPrice+"'>Rs.<span id='eachProductTotal"+pId+"'>"+pCartPrice+"</span></span>"+pName+"</a><span class='product-price incart'>&#x20B9<span>"+pPrice+" - "+ProductUnit+"</span></span><div class='shoppingCartProductButtonsWrapper'><div class='product-cart'><div class='product-quantity'><select class='quantity-to-cart incart'  id='quantity-to-cart"+pId+"' onChange='changemycart(this)'  data-pid='"+pId+"' data-price='"+pPrice+"'><option value='0' selected>0 gms</option><option value='250'>250 gms</option> <option value='500'>500 gms</option><option value='750'>750 gms</option></select> <div class='product-main-uom' id='product-main'><span class='productUnit'>"+ProductUnit+"</span><input type='button' class='cart-input minus' data-pid='"+pId+"' onClick='makeminusCart(this)'  value='-'><input type='button' id='product-updated-quantity"+pId+"' class='cart-input quantity-value' value='"+pQuantity+"' data-price='"+pPrice+"'><input class='cart-input' type='button' data-pid='"+pId+"' onClick='makeplusCart(this)' value='+'></div></div></div><a href='#'  data-dltid='"+pId+"' class='shoppingCartRemoveProductButton' onClick='deleteCart(this)'></a></div></div> </div>");
	  	       	
	  	       }
 
    $("#quantity-to-cart"+pId).val(psubQuantity);
    
	}
$('#cartPCount').html('');
    
	$('#cartPCount').html(" "+cartPrdctLngth);
		});
		
		}//only loops when  cart array stored 
	else{
	
		$(".ifProducts").css("display",'none');//Cart displays 
		$(".noProducts").css("display",'block');//No products in cart
		
	}
   
	
}

 /* LOAD CART ENDS HERE */	
 
 
 /* CHECKOUT CART  STARTS HERE */


 function checkoutcart(){
	 productsLength=0;
	 var   cartTotalPrice=0;
	 var finalCart=jQuery.parseJSON(window.localStorage.getItem("cart"));
	
	 
	 var pQuantities=jQuery.parseJSON(window.localStorage.getItem("cartquantities"));
		var mycartval=0;
    	
   	
   	
   	$('#checkoutPCount').html(" 0");
   	$('#CheckoutTotalPrice').html(" 0");
	if(finalCart!=null){
	
   	 $.each(finalCart,function (key,value){
   		var pQuantity=pQuantities[mycartval]["pQuantity"];
		
   		var psubQuantity=pQuantities[mycartval]["psubQuantity"];
   		mycartval++;
   		
   		
   	var pId=value[0]["id"];
   	var pImage=value[0]["image"];
   	var pName=value[0].title;
   	var ProductUnit=value[0]['UnitMeasurement'];
    pPrice =value[0]["price"];	
   	var finalQuantity=parseInt(pQuantity);
   	
   	if(psubQuantity=='NO'){
   		
   
   
   	}else if(psubQuantity==250){
   		 finalQuantity +=0.25;
   	}else if(psubQuantity==500){
   		 finalQuantity +=0.50;	
   	}
   	else if(psubQuantity==750){
   		 finalQuantity +=0.75;
   	}
	
	var pCartPrice=pPrice*finalQuantity;
	
   	cartTotalPrice +=pCartPrice;
	
	
   	window.localStorage.setItem("cartTotal",cartTotalPrice); //Saving cart total price to the local storage
   	var cartTotal=window.localStorage.getItem("cartTotal"); //Getting cart total price from the local storage
   
   		
   		$('#CheckoutTotalPrice').html('');
   		$('#CheckoutTotalPrice').html(cartTotal);
   	
 
   		
   
  	
	if(pCartPrice>0){
		productsLength++;
    if(ProductUnit==='Nos'  || ProductUnit==='Bunch'){
	  	   $(".mycart").append("<div class='shoppingCartProductWrapper' id='checkout"+pId+"'><a href='#' class='shoppingCartProductImageWrapper'><img src='"+baseurl+pImage+"' class='shoppingCartProductImage' alt=''/></a><div class='shoppingCartProductInfoWrapper'><a href='#' class='shoppingCartProductTitle'><span class='shoppingCartProductPrice afterCheckout' id='shoppingCartProductPrice"+pId+"' data-cartprice='"+pCartPrice+"'>Rs.<span id='eachCheckoutProductTotal"+pId+"'>"+pCartPrice+"</span></span>"+pName+"</a><span class='product-price incart'>&#x20B9<span>"+pPrice+" - "+ProductUnit+"</span></span><div class='shoppingCartProductButtonsWrapper'><div class='product-cart'><div class='product-quantity'><div class='product-main-uom full'><span class='productUnit full'>"+ProductUnit+"</span><input type='button' disabled class='cart-input minus full' data-pid='"+pId+"'  onClick='makeminusCart(this)' value='-'><input type='button' id='product-updated-quantity"+pId+"'  data-price='"+pPrice+"' class='cart-input quantity-value fullvalue' value='"+pQuantity+"'><input class='cart-input full' disabled type='button' data-pid='"+pId+"' onClick='makeplusCart(this)' value='+'></div></div></div></div></div> </div>");
	  	       }else if(ProductUnit==='Ltr'){
	  	       	
	  	       	$(".mycart").append("<div class='shoppingCartProductWrapper' id='checkout"+pId+"'><a href='#' class='shoppingCartProductImageWrapper'><img src='"+baseurl+pImage+"' class='shoppingCartProductImage' alt=''/></a>"+pQuantity+ " "+ProductUnit+ "- "+psubQuantity+" ml<div class='shoppingCartProductInfoWrapper'><a href='#' class='shoppingCartProductTitle'><span class='shoppingCartProductPrice afterCheckout' id='shoppingCartProductPrice"+pId+"' data-cartprice='"+pCartPrice+"'>Rs.<span id='eachCheckoutProductTotal"+pId+"'>"+pCartPrice+"</span></span>"+pName+"</a><span class='product-price incart'>&#x20B9<span>"+pPrice+" - "+ProductUnit+"</span></span><div class='shoppingCartProductButtonsWrapper'><div class='product-cart'><div class='product-quantity'></div></div></div></div> </div>");
	  	       }else{
	  	       	$(".mycart").append("<div class='shoppingCartProductWrapper' id='checkout"+pId+"'><a href='#' class='shoppingCartProductImageWrapper'><img src='"+baseurl+pImage+"' class='shoppingCartProductImage' alt=''/></a>"+pQuantity+ " "+ProductUnit+ "- "+psubQuantity+" gm<div class='shoppingCartProductInfoWrapper'><a href='#' class='shoppingCartProductTitle'><span class='shoppingCartProductPrice afterCheckout' id='shoppingCartProductPrice"+pId+"' data-cartprice='"+pCartPrice+"'>Rs.<span id='eachCheckoutProductTotal"+pId+"'>"+pCartPrice+"</span></span>"+pName+"</a><span class='product-price incart'>&#x20B9<span>"+pPrice+" - "+ProductUnit+"</span></span><div class='shoppingCartProductButtonsWrapper'><div class='product-cart'><div class='product-quantity'> </div></div></div></div> </div>");
	  	       	
	  	       }
 
    $("#quantity-to-cart"+pId).val(psubQuantity);
	}
	$('#checkoutPCount').html('');
	    
		$('#checkoutPCount').html(" "+productsLength);
		});
 
		}//only loops when  cart array stored 
   
	
}

 /*CHECKOUT CART ENDS HERE */
 
 
 /*DELETE FROM CAER STARTS */
 
 function deleteCart(dltid){
	
	var deleteId=dltid.getAttribute("data-dltid");
	
	var ThisProductTotal=$("#eachProductTotal"+deleteId).text();
	
	
	var MinusAmount=parseFloat(ThisProductTotal);

	var cartTotalPrice=$("#cartTotalPrice").text();

	var UpdatedTotalPrice=parseFloat(cartTotalPrice)-MinusAmount;
	
  	window.localStorage.setItem("cartTotal",UpdatedTotalPrice); //Saving cart total price to the local storage
   	var cartTotal=window.localStorage.getItem("cartTotal"); //Getting cart total price from the local storage
   
   	
   		$("#cartTotalPrice").html(cartTotal);
   		
	var Cart=window.localStorage.getItem("cart");
	
var quantities=window.localStorage.getItem("cartquantities");

	var jsondata=jQuery.parseJSON(Cart);
	var finaljson=jQuery.grep(
			jsondata, 
            function (item,index) { 
              return item[0].ProductId !=  deleteId; 
            });
	
	
	var jsondataQuant=jQuery.parseJSON(quantities);
	var finaljsonQuant=jQuery.grep(
			jsondataQuant, 
            function (item,index) { 
              return item.pid != deleteId; 
            });
	
	$('#cartPCount').html('');
	$('#cartPCount').html(" "+finaljson.length);
	$('#mycart'+deleteId).remove();
	if(finaljson.length!=0 && finaljson!='' && finaljson!=null){
		
		$(".ifProducts").css("display",'block');//Cart displays 
		$(".noProducts").css("display",'none');//No products in cart
	}else{
		
		$(".ifProducts").css("display",'none');//Cart displays 
		$(".noProducts").css("display",'block');//No products in cart
	}
	

window.localStorage.setItem("cart",JSON.stringify(finaljson));
window.localStorage.setItem("cartquantities",JSON.stringify(finaljsonQuant));


	//console.dir(jsondata.splice(index, 1));
	
}
 
 /* DELETE FROM CART ENDS */
 
        window.addEventListener("load", init)
        function init() {

//Address Type "other":
            var addressType = document.getElementById("addressType");
            var standardAddressSection = document.getElementById("standardAddressSection");
            var otherAddressSection = document.getElementById("otherAddressSection");
            addressType.addEventListener("change", function(){
                if (addressType.value == "other") {
                    standardAddressSection.style.display = "none";
                    otherAddressSection.style.display = "block";
                } else {
                    standardAddressSection.style.display = "block";
                    otherAddressSection.style.display = "none";
                }                
                }); 
            
//Finished building pizza button:
            var btnPizzaBuilt = document.getElementById("btnPizzaBuilt");
            var billingSection = document.getElementById("billingSection");
            btnPizzaBuilt.addEventListener("click", function(){
                var confirmOrder = confirm("Are you sure you have fnished building pizza?");
                if (confirmOrder) {
                    billingSection.style.display = "block";
                } else {
                    billingSection.style.display = "none";
                }                   
            }); 
            
//Same as delivery information:
            var sameAsDelivery = document.getElementById("sameAsDelivery");
            sameAsDelivery.addEventListener("click", function(){
                if (this.checked) {
//                    alert("Same as delivery information");
                    var deliveryName = document.getElementById("deliveryName");
                    var billingName = document.getElementById("billingName");
                    var deliveryCity = document.getElementById("deliveryCity");
                    var billingCity = document.getElementById("billingCity");
                    var deliveryState = document.getElementById("deliveryState");
                    var billingState = document.getElementById("billingState");
                    var deliveryZipCode = document.getElementById("deliveryZipCode");
                    var billingZipCode = document.getElementById("billingZipCode");
                    billingName.value = deliveryName.value;
                    billingCity.value = deliveryCity.value;
                    billingState.value = deliveryState.value;
                    billingZipCode.value = deliveryZipCode.value;
                    
                    var billingStandardAddressSection = document.getElementById("billingStandardAddressSection");
            var billingOtherAddressSection = document.getElementById("billingOtherAddressSection");
                    if (addressType.value == "other") {
                    billingStandardAddressSection.style.display = "none";
                    billingOtherAddressSection.style.display = "block";
                    var deliveryOtherAddress = document.getElementById("deliveryOtherAddress");
                        var billingyOtherAddress = document.getElementById("billingOtherAddress");
                        billingyOtherAddress.value = deliveryOtherAddress.value;
                        
                } else {
                    billingStandardAddressSection.style.display = "block";
                    billingOtherAddressSection.style.display = "none";
                    var deliveryAddress = document.getElementById("deliveryAddress");
                    var billingAddress = document.getElementById("billingAddress");
                    var deliveryUnitNumber = document.getElementById("deliveryUnitNumber");
                    var billingUnitNumber = document.getElementById("billingUnitNumber");
                    billingAddress.value = deliveryAddress.value;
                    billingUnitNumber.value = deliveryUnitNumber.value;
                }
                }
            });
            
        }






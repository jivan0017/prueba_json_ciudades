
$(document).ready(function() {
    console.log(stateAndCitiesFull)
    // TODO: código propuesto por JAIME DIAZ:
    stateAndCitiesFull.forEach(function(estado, index){
        console.log(estado.state);
        var o = new Option(estado.state, estado.abv);
        //$(o).html("");
        $("#state").append(o);
        estado.cities.forEach(function(city, i){
            //console.log("ciudad: ", city)
        });
   });
    

   $("#state").change(function(){
        //alert('hola');
       $("#city").html('');
        var place_key = $(this).val();
        console.log("seleccionado: ", place_key)

        var objetoState = stateAndCitiesFull.filter(function(elemento) {
            return elemento.abv === place_key;
        });

        //console.log("elemento seleccionado select: ", objetoState);

        objetoState.forEach(function(element, index1){
            element.cities.forEach(function(city, index2){
                console.log(city)
                var city_val = index2;
                var city_text = city;
                var o = new Option(city_text, city_val);
                $("#city").append(o);                
            });
        });
    });
});
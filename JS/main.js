$(function(){
    //Capturar el click
    $(document).on('click','#btn_ingresar',function(){
      //Arreglo con los números
      var arr = ["¿Te gusta alguien de la ronda?","Di quien te gusta","¿Qué prefieres invierno o verano?",
      "¿Qué piensas de la persona de tu izquierda?","¿Donde quieres viajar estas vacaciones?"
            ];
      //iterar las casillas
      $('.msg').each(function(){
        //limpiar la casilla
        $(this).html('');
        //Sacar un índice aleatorio del arreglo
        let random = Math.floor(Math.random() * arr.length );
        //Sacamos el número que corresponda al índice
        let num = arr[ random ];
        //quitamos el índice del arreglo 
         arr.splice(random, 1);
         
        //ponemos el número en la casilla
        $(this).append( num );
      });
    });
  })
  $(function(){
    //Capturar el click
    $(document).on('click','#reto',function(){
      //Arreglo con los números
      var arr = ["Toma un trago", 
            "Termínate el vaso del jugador de tu derecha", 
            "Siéntate en las rodillas de otro jugador hasta el final del juego", 
            "Haz 20 lagartijas, si no puedes haces fondo blanco",
            "Invéntate un poema corto de cuatro líneas declarando tu amor a la persona de al lado","Haz quince sentadillas"];
      //iterar las casillas
      $('.msg').each(function(){
        //limpiar la casilla
        $(this).html('');
        //Sacar un índice aleatorio del arreglo
        let random = Math.floor(Math.random() * arr.length );
        //Sacamos el número que corresponda al índice
        let num = arr[ random ];
        //quitamos el índice del arreglo 
        arr.splice(random, 1);
        
        //ponemos el número en la casilla
        $(this).append( num );
      });
    });
  })
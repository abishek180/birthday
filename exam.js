function sub_fn(){
   
    alert("Congrajulations")
    if(document.getElementById("btn1_tru").checked){
        
        document.getElementById("qns1").style.color="yellowgreen";
        

    }
       
    if(document.getElementById("btn2_tru").checked){
        
        document.getElementById("qns2").style.color="yellowgreen";

    }
       
    if(document.getElementById("btn3_tru").checked){
        document.getElementById("qns3").style.color="yellowgreen";

    }
       
    if(document.getElementById("btn4_tru").checked){
        document.getElementById("qns4").style.color="yellowgreen";

    }
       
    if(document.getElementById("btn5_tru").checked){
        document.getElementById("qns5").style.color="yellowgreen";

    }
    
    // // -----false color------------------------------------------------


    // if(document.getElementById("btn1_fal").checked){
        
    //     document.getElementById("qns1").style.color="red";
    

    // }
       
    // if(document.getElementById("btn2_fal").checked){
        
    //     document.getElementById("qns2").style.color="red";

    // }
       
    // if(document.getElementById("btn3_fal").checked){
    //     document.getElementById("qns3").style.color="red";

    // }
       
    // if(document.getElementById("btn4_fal").checked){
    //     document.getElementById("qns4").style.color="red";

    // }
       
    // if(document.getElementById("btn5_fal").checked){
    //     document.getElementById("qns5").style.color="red";

    // }

}

function rst_fn(){
    if(document.getElementById("btn1_temp").checked=true){
        document.getElementById("qns1").style.Color="black";
    }

    if(document.getElementById("btn2_temp").checked=true){
        document.getElementById("qns2").style.Color="black";
    }
    if(document.getElementById("btn3_temp").checked=true){
        document.getElementById("qns3").style.Color="black";
    }
    if(document.getElementById("btn4_temp").checked=true){
        document.getElementById("qns4").style.Color="black";
    }
    if(document.getElementById("btn5_temp").checked=true){
        document.getElementById("qns5").style.Color="black";
    }

}

function prev_fn(){
    document.getElementById("questions1").style.display="none";

    document.getElementById("questions2").style.display="none";

    document.getElementById("questions3").style.display="none";

    document.getElementById("questions4").style.display="none";

    document.getElementById("questions5").style.display="none";

    document.getElementById("questions10").style.display="block";

    document.getElementById("btn_rs").style.display="none";

    document.getElementById("head_main").style.display="none";

    document.getElementById("letter").style.display="block";

    document.getElementById("btn_prev1").style.display="block";



    
}

function prev1_fn(){
    document.getElementById("img1").style.display="none";

    document.getElementById("h11").style.display="none";

    document.getElementById("img2").style.display="block";

    document.getElementById("btn_prev1").style.display="none";

    document.getElementById("img3").style.display="block";

    document.getElementById("btn_prev2").style.display="block";

    
}

function prev2_fn(){
    document.getElementById("img4").style.display="block";

    document.getElementById("img2").style.display="none";
    document.getElementById("img3").style.display="none";

    document.getElementById("btn_prev2").style.display="none";
}
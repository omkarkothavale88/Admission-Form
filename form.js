  $(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});

function validatename()
  
    {   
        
        if(document.getElementById("Nm").value=="")
        
            {
                //document.getElementById("Nm").innerHTML="Required";
                return alert("Fill name first");
            }
        
        
        else{
            
               validateschool();
            
            
            }
  
    }
    
    
    function validateschool()
  
    {   
        
        if(document.getElementById("Sc").value=="")
        
            {
                
                return alert("Fill Schoolname first");
            }
        
        
        else{
            
               validatestate();
            
            
            }
  
    }
    
    
    
    
    
    function validatestate()
  
    {   
        
        if(document.getElementById("St").value=="")
        
            {
                
                return alert("Fill state first");
            }
        
        
        else{
            
              validategender();
                
            
            
            }
  
    }
    
    
    
     function validategender()
  
    {   
        
        if(document.getElementById("M").checked==false && document.getElementById("F").checked==false )
        
            {
                
                return alert("select gender first");
            }
       
        
         else if(document.getElementById("M").checked==true && document.getElementById("F").checked==true)
        
            {
                
                return alert("Invalid entry ");
            }
        

      else{
            
               validatestatus();
            
            
            }
  
    }


    function validatestatus()
  
    {   
        
        if(document.getElementById("Mrd").checked==false && document.getElementById("single").checked==false )
        
            {
                
                return alert("select marrital status");
            }
       
        
         else if(document.getElementById("Mrd").checked==true && document.getElementById("single").checked==true)
        
            {
                
                return alert("Invalid entry in Marrital Status");
            }
        

      else{
            
         
          
                var x = document.createElement("p");
                
                var y=document.createTextNode("Done,Good!");
          
                x.appendChild(y);
                var getfoot= document.getElementById("foot");             
                   
                document.body.insertBefore(x,getfoot);
          
              
          
            
            }
  
    }



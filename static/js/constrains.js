function populateProfession(s1, s2,s3) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
     s3 =  document.getElementById(s3);
    s2.innerHTML = "";
    if (s1.value == "B.TECH"&& s3.value =="SDBCE") {
        var optionArray = ['|','Civil Engineering|Civil Engineering', 'Mechanical Engineering|Mechanical Engineering',' Computer Science & Engineering| Computer Science & Engineering'];

    }
    else if(s1.value == "M.TECH/M.E" && s3.value =="SDBCE"){
        var optionArray = ['|','M.E. Structural Engineering|M.E. Structural Engineering','Computer Science & Engineering|M.Tech  Computer Science & Engineering'];
    }
    else if(s1.value == "MBA"){
        var optionArray = ['|','Finance Management & Marketing Management|Finance Management & Marketing Management','Finance Management & HR Management|Finance Management & HR Management','Finance Management & Production and Operations Management|Finance Management & Production and Operations Management','Finance Management & Information Technology Management|Finance Management & Information Technology Management','Finance Management & Business Analytics|Finance Management & Business Analytics','Marketing Management & HR Management|Marketing Management & HR Management','Marketing Management & Production and Operations Management|Marketing Management & Production and Operations Management','Marketing Management & Information Technology Management|Marketing Management & Information Technology Management','Marketing Management & Business Analytics|Marketing Management & Business Analytics','HR Management & Production and Operations Management|HR Management & Production and Operations Management','HR Management & Information Technology Management|HR Management & Information Technology Management','HR Management & Business Analytics|HR Management & Business Analytics','Production and Operations Management & Information Technology Management|Production and Operations Management & Information Technology Management','Production and Operations Management & Business Analytics|Production and Operations Management & Business Analytics','Information Technology Management & Business Analytics|Information Technology Management & Business Analytics'];
    }
    else if(s1.value == "B.TECH"&& s3.value =="SDBCT"){
        var optionArray = ['|','Computer Science & Engineering|Computer Science & Engineering','Information Technology|Information Technology','Electronics & Communication Engineering|Electronics & Communication Engineering','Mechanical Engineering|Mechanical Engineering','Civil Engineering|Civil Engineering']
    }
    else if(s1.value == "M.TECH/M.E"&& s3.value =="SDBCT"){
        var optionArray = ['|','Computer Science & Engineering| Computer Science & Engineering','Digital Communication|Digital Communication','Thermal System and Design|Thermal System and Design',]
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");
        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        s2.options.add(newoption);
    }
    populateSemester('profession','semester')
}
function populateSemester(id1,id2){
            var id1 = document.getElementById(id1);
            var id2 = document.getElementById(id2);
            id2.innerHTML = "";
            if (id1.value == "B.TECH") {
                var optionArray = ["|","1st Semester|1st Semester" ,"2nd Semester|2nd Semester","3rd Semester|3rd Semester",
                "4th Semester|4th Semester","5th Semester|5th Semester","6th Semester|6th Semester","7th Semester|7th Semester","8th Semester|8th Semester"];
    
            }
            else if(id1.value == "M.TECH/M.E" ||id1.value == "MBA" ){
                var optionArray = ["|","1st Semester|1st Semester" ,"2nd Semester|2nd Semester","3rd Semester|3rd Semester",
                "4th Semester|4th Semester"];
            }
   
            for(var option in optionArray){
                var pair = optionArray[option].split("|");
                var newoption = document.createElement("option");
                newoption.value = pair[0];
                newoption.innerHTML = pair[1];
                id2.options.add(newoption);
            }
        }
        function populateYear(id1,id2){
            var id1 = document.getElementById(id1);
            var id2 = document.getElementById(id2);
            id2.innerHTML = "";
            if(id1.value =="1st Semester" || id1.value == "2nd Semester"){
               var optionArray = ['first year|First Year'];
            }
            else if(id1.value =="3rd Semester"||id1.value == "4th Semester"){
                var optionArray = ['second year|Second Year'];
            }
            else if(id1.value =="5th Semester"||id1.value == "6th Semester"){
                var optionArray = ['third year|Third Year'];
            }
            else{
                var optionArray = ['fourth year|fourth year'];
            }
            for(var option in optionArray){
                var pair = optionArray[option].split("|");
                var newoption = document.createElement("option");
                newoption.value = pair[0];
                newoption.innerHTML = pair[1];
                id2.options.add(newoption);
            }
        }
        function living(x,x2){
            if(x == 1){

                document.getElementById("living").style.display = "block" ;
                document.getElementById("livingOptions").required = true;
                document.getElementById("livingOptions").style.display = "block";

                document.getElementById("localaddress").style.display = "block";
                document.getElementById("localaddress-span").style.display = "block";

                
            }
            else{
                document.getElementById("livingOptions").style.display = "none" ;
                document.getElementById("living").style.display = "none" ;
                document.getElementById("livingOptions").required = false;

                document.getElementById("localaddress-span").style.display = "none" ;
                document.getElementById("localaddress").style.display = "none" ;
                document.getElementById("localaddress").required = false;
                
            }
            
            return;
        }
    //   function undertaking(x){
    //     if(x==1){
    //         document.getElementById("undertaking").style.display = "block";
    //     }
    //     else{
    //         document.getElementById("undertaking").style.display ="none";
    //     }
    //   }

      function undertaking_data()
      { 
        var name = document.getElementById("name").value;
        var address = document.getElementById("locality").value;
        var branch = document.getElementById("branch").value;
        var fatherName = document.getElementById("fathername").value;
        document.getElementById("under-name").value = name;
        document.getElementById("under-address").value = address;
        document.getElementById("under-branch").value = branch;
        document.getElementById("under-father").value = fatherName;
      }
      function disable(id){
        var id = document.getElementById(id);
        
        console.log(id.value);
        if(id.value =="pass"||id.value=="awaited"){
    
            document.getElementById("subjectcarried").disabled = true;
        }
        else{
            document.getElementById("subjectcarried").disabled = false;
        } 
        if(id.value=="awaited")
        {

            document.getElementById("semCGPA").disabled = true;
        }
      
    }


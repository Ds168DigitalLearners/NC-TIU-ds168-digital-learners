<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
    function creatPDF(){
        if(document.getElementById("nameofpupil").value == "" || document.getElementById("fname").value == "" ){
            alert("Please fill all fields");
        }
       else {
            var doc = new jsPDF();
    
             doc.text(document.getElementById("h1").value,10,10);
             doc.text(document.getElementById("h3").value,25,25);
            doc.text(document.getElementById("admis").value,10,10);
             doc.text(document.getElementById("reg").value,25,25);
              doc.text(document.getElementById("nameofpupil").value,10,10);
             doc.text(document.getElementById("fathername").value,25,25);
              doc.text(document.getElementById("mothername").value,10,10);
             doc.text(document.getElementById("Nationality").value,25,25);
              doc.text(document.getElementById("caste").value,10,10);
             doc.text(document.getElementById("yes1").value,25,25);
              doc.text(document.getElementById("no1").value,10,10);
             doc.text(document.getElementById("dob").value,25,25);
              doc.text(document.getElementById("date").value,10,10);
              doc.text(document.getElementById("fail").value,10,10);
             doc.text(document.getElementById("yes2").value,25,25);
              doc.text(document.getElementById("no2").value,10,10);
             doc.text(document.getElementById("suboff").value,25,25);
              doc.text(document.getElementById("sub").value,10,10);
             doc.text(document.getElementById("last").value,25,25);
              doc.text(document.getElementById("study").value,10,10);
             doc.text(document.getElementById("result").value,25,25);
              doc.text(document.getElementById("yes3").value,10,10);
             doc.text(document.getElementById("no3").value,25,25);
              doc.text(document.getElementById("qual").value,10,10);
             doc.text(document.getElementById("yes4").value,25,25);
            doc.text(document.getElementById("no4").value,10,10);
             doc.text(document.getElementById("dues").value,25,25);
              doc.text(document.getElementById("yes5").value,10,10);
             doc.text(document.getElementById("stuck").value,25,25);
              doc.text(document.getElementById("date2").value,10,10);
             doc.text(document.getElementById("course").value,25,25);
              doc.text(document.getElementById("fv6").value,10,10);
             doc.text(document.getElementById("others").value,25,25);
              doc.text(document.getElementById("upto").value,10,10);
             doc.text(document.getElementById("meetings").value,25,25);
            doc.text(document.getElementById("gc").value,10,10);
             doc.text(document.getElementById("gc1").value,25,25);
            doc.text(document.getElementById("remarks").value,10,10);
             doc.text(document.getElementById("here").value,25,25);
            doc.text(document.getElementById("date3").value,10,10);
             doc.text(document.getElementById("dt").value,25,25);

            doc.save("TC.pdf");
        }
        }
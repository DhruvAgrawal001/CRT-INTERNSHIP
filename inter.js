function addNewcompanies(){
    //console.log("Adding new fields");


    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('companies');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder',"Enter here");
    let weOb=document.getElementById("we")
    let addComapniesOb=document.getElementById("addCompanies");
    


    weOb.insertBefore(newNode, addComapniesOb);

    }
function addNewEQField(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('qualification');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",1);
    newNode.setAttribute('placeholder',"Enter here");
    let aqOb=document.getElementById("eq")
    let addEQOb=document.getElementById("addEQ");
    


    aqOb.insertBefore(newNode, addEQOb);
}
    function addSkill(){

        let newNode=document.createElement('textarea');
        newNode.classList.add('form-control');
        newNode.classList.add('skills');
        newNode.classList.add("mt-2");
        newNode.setAttribute("rows",1);
        newNode.setAttribute('placeholder',"Enter here");
        let aqOb=document.getElementById("skill")
        let addskillOb=document.getElementById("addSkills");
        
    
    
        aqOb.insertBefore(newNode, addskillOb);

}

//Generate CV
function generateCV()
{
    let nameField=document.getElementById("namefield").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML= nameField;
    nameT2.innerHTML= nameField;
    let contactField=document.getElementById("contactfield").value;
    contactT.innerHTML=contactField;
    let contactField2=document.getElementById("contactfield2").value;
    contactT2.innerHTML=contactField2;
    let emailID=document.getElementById("emailid").value;
    emailT.innerHTML=emailID;
    let dob=document.getElementById("birthday").value;
    bdayT.innerHTML=dob;
    let addr=document.getElementById("addressfield").value;
    addressT.innerHTML=addr;
    let fb=document.getElementById("facebook").value;
    fbT.innerHTML=fb;
    let ig=document.getElementById("insta").value;
    instaT.innerHTML=ig;
    let lin=document.getElementById("linkedin").value;
    linkT.innerHTML=lin;

    //objective
    let object=document.getElementById("objective").value;
    objectiveT.innerHTML=object;
    //work exp
    let expT1=document.getElementById("exp").value;
    expT.innerHTML=expT1;
    //we
    let wes=document.getElementsByClassName("companies")
    let str=''
    for(let e of wes)
{
    str=str+ `<li> ${e.value} </li>`
}
document.getElementById("weT").innerHTML=str;
//academic
let eqs=document.getElementsByClassName("qualification")
    let str1=''
    for(let z of eqs)
{
    str1=str1+ `<li> ${z.value} </li>`
}
document.getElementById("eqT").innerHTML=str1;
let sks=document.getElementsByClassName("skills")
    let str2=''
    for(let z of sks)
{
    str2=str2+ `<li> ${z.value} </li>`
}
document.getElementById("skillT").innerHTML=str2;
//code for setting photo
let file=document.getElementById("img").files[0];
console.log(file);
let reader=new FileReader();

reader.readAsDataURL(file);
console.log(reader.result);

//set the image
reader.onloadend=function(){
    document.getElementById("imgT").src=reader.result;
}

document.getElementById("cv-form").style.display='none';
document.getElementById("cv-template").style.display='block';
}
//printCV
function printCV(){
    window.print();
}

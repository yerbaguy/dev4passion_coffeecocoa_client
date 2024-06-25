// var form = document.getElementById("myForm"),
//     imgInput = document.querySelector(".img"),
//     file = document.getElementById("imgInput"),
//     userName = document.getElementById("name"),
//     age = document.getElementById("age"),
//     city = document.getElementById("city"),
//     email = document.getElementById("email"),
//     phone = document.getElementById("phone"),
//     post = document.getElementById("post"),
//     sDate = document.getElementById("sDate"),
//     submitBtn = document.querySelector(".submit"),
//     userInfo = document.getElementById("data"),
//     modal = document.getElementById("userForm"),
//     modalTitle = document.querySelector("#userForm .modal-title"),
//     newUserBtn = document.querySelector(".newUser")

var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
   
    coffee_roasted_product_description = document.getElementById("coffee_roasted_product_description"),
    coffee_roasted_farm = document.getElementById("coffee_roasted_farm"),
    coffee_roasted_farmer = document.getElementById("coffee_roasted_farmer"),
    coffee_roasted_roaster = document.getElementById("coffee_roasted_roaster"),
   
    dealer = document.getElementById("coffee_roasted_dealer"),
    coffee_roasted_brand = document.getElementById("coffee_roasted_brand"),
    coffee_roasted_origin = document.getElementById("coffee_roasted_origin"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser")


let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

let isEdit = false, editId
showInfo()

newUserBtn.addEventListener('click', ()=> {
    submitBtn.innerText = 'Submit',
    modalTitle.innerText = "Fill the Form"
    isEdit = false
    imgInput.src = "./image/Profile Icon.webp"
    form.reset()
})


file.onchange = function(){
    if(file.files[0].size < 1000000){  // 1MB = 1000000
        var fileReader = new FileReader();

        fileReader.onload = function(e){
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(file.files[0])
    }
    else{
        alert("This file is too large!")
    }
}


// function showInfo(){
//     document.querySelectorAll('.employeeDetails').forEach(info => info.remove())
//     getData.forEach((element, index) => {
//         let createElement = `<tr class="employeeDetails">
//             <td>${index+1}</td>
//             <td><img src="${element.picture}" alt="" width="50" height="50"></td>
//             <td>${element.employeeName}</td>
//             <td>${element.employeeAge}</td>
//             <td>${element.employeeCity}</td>
//             <td>${element.employeeEmail}</td>
//             <td>${element.employeePhone}</td>
//             <td>${element.employeePost}</td>
//             <td>${element.startDate}</td>


//             <td>
//                 <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.employeeName}', '${element.employeeAge}', '${element.employeeCity}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeePost}', '${element.startDate}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

//                 <button class="btn btn-primary" onclick="editInfo(${index}, '${element.picture}', '${element.employeeName}', '${element.employeeAge}', '${element.employeeCity}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeePost}', '${element.startDate}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

//                 <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
                            
//             </td>
//         </tr>`

//         userInfo.innerHTML += createElement
//     })
// }

function showInfo() {
    document.querySelectorAll('.employeeDetails').forEach(info => info.remove())
    getData.forEach((element, index) => {
        let createElement = `<tr class="employeeDetails">
            <td>${index + 1}</td>
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.coffee_roasted_product_description}</td>
           
            


            <td>
                <button style="background-color: #855c37" class="btn btn-success" onclick="readInfo('${element.picture}', '${element.coffee_roasted_product_description}', '${element.coffee_roasted_farm}', '${element.coffee_roasted_farmer}', '${element.coffee_roasted_roaster}','${element.coffee_roasted_dealer}', '${element.coffee_roasted_brand}', '${element.coffee_roasted_origin}')" data-bs-toggle="modal" data-bs-target="#readData">view more</button>


                            
            </td>
        </tr>`

        userInfo.innerHTML += createElement
    })
}
showInfo()


// function readInfo(pic, name, age, city, email, phone, post, sDate){
//     document.querySelector('.showImg').src = pic,
//     document.querySelector('#showName').value = name,
//     document.querySelector("#showAge").value = age,
//     document.querySelector("#showCity").value = city,
//     document.querySelector("#showEmail").value = email,
//     document.querySelector("#showPhone").value = phone,
//     document.querySelector("#showPost").value = post,
//     document.querySelector("#showsDate").value = sDate
// }

function readInfo(pic, coffee_roasted_product_description, coffee_roasted_farm, coffee_roasted_farmer, coffee_roasted_roaster, coffee_roasted_dealer, coffee_roasted_brand, coffee_roasted_origin) {
        document.querySelector('.showImg').src = pic,
        document.querySelector('#show_coffee_roasted_product_description').value = coffee_roasted_product_description,
        document.querySelector("#show_coffee_roasted_farm").value = coffee_roasted_farm,
        document.querySelector("#show_coffee_roasted_farmer").value = coffee_roasted_farmer,
        document.querySelector("#show_coffee_roasted_roaster").value = coffee_roasted_roaster,
        document.querySelector("#show_coffee_roasted_dealer").value = coffee_roasted_dealer,
        document.querySelector("#show_coffee_roasted_brand").value = coffee_roasted_brand,
        document.querySelector("#show_coffee_roasted_origin").value = coffee_roasted_origin
}


// function editInfo(index, pic, name, Age, City, Email, Phone, Post, Sdate){
//     isEdit = true
//     editId = index
//     imgInput.src = pic
//     userName.value = name
//     age.value = Age
//     city.value =City
//     email.value = Email,
//     phone.value = Phone,
//     post.value = Post,
//     sDate.value = Sdate

//     submitBtn.innerText = "Update"
//     modalTitle.innerText = "Update The Form"
// }

function editInfo(index, pic, Coffee_Roasted_Product_Description, Coffee_Roasted_Farm, Coffee_Roasted_Farmer, Coffee_Roasted_Roaster, Coffee_Roasted_Dealer, Coffee_Roasted_Brand, Coffee_Roasted_Origin) {
    isEdit = true
    editId = index
    imgInput.src = pic
    coffee_roasted_product_description.value = Coffee_Roasted_Product_Description
    coffee_roasted_farm.value = Coffee_Roasted_Farm
    coffee_roasted_farmer.value = Coffee_Roasted_Farmer
    coffee_roasted_roaster.value = Coffee_Roasted_Roaster,
    coffee_roasted_dealer.value = Coffee_Roasted_Dealer,
    coffee_roasted_brand.value = Coffee_Roasted_Brand,
    coffee_roasted_origin.value = Coffee_Roasted_Origin

    submitBtn.innerText = "Update"
    modalTitle.innerText = "Update The Form"
}


function deleteInfo(index){
    if(confirm("Are you sure want to delete?")){
        getData.splice(index, 1)
        localStorage.setItem("userProfile", JSON.stringify(getData))
        showInfo()
    }
}


form.addEventListener('submit', (e)=> {
    e.preventDefault()

    // const information = {
    //     picture: imgInput.src == undefined ? "./image/Profile Icon.webp" : imgInput.src,
    //     employeeName: userName.value,
    //     employeeAge: age.value,
    //     employeeCity: city.value,
    //     employeeEmail: email.value,
    //     employeePhone: phone.value,
    //     employeePost: post.value,
    //     startDate: sDate.value
    // }

    const information = {
        picture: imgInput.src == undefined ? "./image/Profile Icon.webp" : imgInput.src,
        coffee_roasted_product_description: coffee_roasted_product_description.value,
        coffee_roasted_farm: coffee_roasted_farm.value,
        coffee_roasted_farmer: coffee_roasted_farmer.value,
        coffee_roasted_roaster: coffee_roasted_roaster.value,
        coffee_roasted_dealer: coffee_roasted_dealer.value,
        coffee_roasted_brand: coffee_roasted_brand.value,
        coffee_roasted_origin: coffee_roasted_origin.value
    }

    if(!isEdit){
        getData.push(information)
    }
    else{
        isEdit = false
        getData[editId] = information
    }

    localStorage.setItem('userProfile', JSON.stringify(getData))

    submitBtn.innerText = "Submit"
    modalTitle.innerHTML = "Fill The Form"

    showInfo()

    form.reset()

    imgInput.src = "./image/Profile Icon.webp"  

    // modal.style.display = "none"
    // document.querySelector(".modal-backdrop").remove()
})




function img(x) {

    // if (x == 0) {
    //     document.getElementById('myimg').style.display = 'block';
    // } else {
    //     document.getElementById('myimg').style.display = 'none';

    // }
    if (x == 0) {
        // document.getElementById('coffee_roasted_name').style.display = 'block';
        document.getElementById('coffee_roasted_product_description').style.display = 'block';
        document.getElementById('coffee_roasted_farm').style.display = 'block';
        document.getElementById('coffee_roasted_farmer').style.display = 'block';
        document.getElementById('coffee_roasted_roaster').style.display = 'block';
    } else {
        // document.getElementById('coffee_roasted_name').style.display = 'none';

        // document.getElementById('coffee_roasted_product_description').style.display = 'none';
        // document.getElementById('coffee_roasted_farm').style.display = 'none';
        // document.getElementById('coffee_roasted_farmer').style.display = 'none';
        // document.getElementById('coffee_roasted_roaster').style.display = 'none';

        document.getElementById('coffee_roasted_product_description').style.display = 'block';
        document.getElementById('coffee_roasted_farm').style.display = 'block';
        document.getElementById('coffee_roasted_farmer').style.display = 'block';
        document.getElementById('coffee_roasted_roaster').style.display = 'none';

    }


    return;

}


// if (localStorage.getItem('userProfile') !== null) 
//         //  $("#side-menuu").fadeToggle();
//     $("#side-menuu").fadeToggle();
//        // $("#sth").show();

const user = document.getElementById('user');

const address = document.getElementById('address');

const color = document.getElementById('color');

const checkbox = document.getElementById('image-checkbox');

const save = document.getElementById('save');

const userName = document.querySelector('.card-user-name');

const userAddress = document.querySelector('.card-address');

const card = document.querySelector('.card')

const img = document.querySelector('.card-image');


save.addEventListener('click', function ()
 {
    const nameCard = user.value;

    userName.innerHTML = 'Name: ' +  nameCard;


    const addressCard = 'Address: ' + address.value;

    userAddress.innerHTML = addressCard;



    card.style.backgroundColor = color.value;


    if (checkbox.checked == true) {

        img.classList.remove('hidden');
    } 

    else {
        img.classList.add('hidden')
    }



    

 }

)
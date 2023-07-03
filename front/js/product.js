const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const productId = urlParams.get("id")
console.log(productId)

fetch(`http://localhost:3000/api/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        // Déclaration des variables (contenu de l'API)
        const { imageUrl, altText, _id, name, description, price, colors } = data

        itemName = name
        itemColor = colors
        itemImageUrl = imageUrl
        itemAltTxt = altText
        itemPrice = price

        const itemImage = document.querySelector(".item__img")
        const imageItem = document.createElement("img")
        imageItem.src = data.imageUrl
        imageItem.text = data.altText

        if (itemImage != null) itemImage.appendChild(imageItem)

        const titreItem = document.querySelector("h1")
        if (titreItem != null) titreItem.textContent = data.name

        const priceItem = document.querySelector("#price")
        if (priceItem != null) priceItem.textContent = data.price

        const descriptionItem = document.querySelector("#description")
        if (descriptionItem != null) descriptionItem.textContent = data.description

        const selectItem = document.querySelector("#colors")
        if (selectItem != null) {
            colors.forEach(color => {
                const option = document.createElement("option")
                option.value = color
                option.innerHTML = color
                selectItem.appendChild(option)
            });
        }
    })
// Selection du bouton
const button = document.getElementById("addToCart")
button.addEventListener("click", actionAuClick)

// function action au click
function actionAuClick() {
    const color = document.querySelector("#colors").value
    const quantity = document.querySelector("#quantity").value
    if (color == null || color == '') {
        alert(`veuillez sélectionner une couleur !`);
        return;
    } else if (quantity < 1) {
        alert(`Veuillez sélectionner le nombre d'articles souhaités.`);
         return;
    } else {
        alert(`L'article ${itemName} ${color} à bien été ajouté à votre panier.`)
    }

    // Création d'un objet
    const data = {
        id: productId,
        name: itemName,
        colors: itemColor,
        quantity: Number(quantity),
        price: itemPrice,
        imageUrl: itemImageUrl
    }

    // envoie de la selection dans le local storage 
    localStorage.setItem(productId, JSON.stringify(data))

    if (confirm(`Que voulez vous faire : 
                    - Voir votre panier ? OK   
                    - continuer vos achat ? ANNULER `)) {

        // envoie à la page panier
        window.location.href = './cart.html';
    } else {
        // retour à la page accueil 
        window.location.href = './index.html';
    }
}


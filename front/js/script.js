fetch('http://localhost:3000/api/products')
    .then((response) => response.json())
    .then((data) => {

        const imageUrl = data[0].imageUrl
        const id = data[0]._id
        const name = data[0].name
        const description = data[0].description
        const prix = data[0].price

        for (let i = 0; i < data.length; i++) {

            const Kanap = data[i]

            // Récuperation de l'element du DOM qui accueillera les fiches
            const items = document.querySelector("#items")

            // Creation de la balise a.href
            const anchor = document.createElement('a')
            anchor.href = "./product.html?id=" + id

            // Creation d'une balise dediee au Kanap
            const KanapElements = document.createElement("article")

            // Creation de la balise img 
            const imageElement = document.createElement("img")
            imageElement.src = Kanap.imageUrl
            imageElement.text = Kanap.altText

            // Creation de la balise h3
            const nomElement = document.createElement("h3")
            nomElement.add = ("productName")
            nomElement.innerHTML = Kanap.name

            // Creation de la balise p
            const descriptionElement = document.createElement("p")
            descriptionElement.add = ("productDescription")
            descriptionElement.innerHTML = Kanap.description

            // Imbrication de la balise a et la balise article dans la balise items
            items.appendChild(anchor)
            items.appendChild(KanapElements)

            // Imbrication de la balise article dans la balise a
            anchor.appendChild(KanapElements)

            // Imbrication des balises image, nom et description dans la balise article
            KanapElements.appendChild(imageElement)
            KanapElements.appendChild(nomElement)
            KanapElements.appendChild(descriptionElement)
        }
    })

    .catch((err) => {
        document.querySelector(".titles").innerHTML = "<h1>Oups !! je ne trouve pas la page. 😔 </h1>";
        console.log("erreur 404, sur ressource api:" + err);
    }
    );














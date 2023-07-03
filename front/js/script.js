fetch('http://localhost:3000/api/products')
    .then((response) => response.json())
    .then((data) => {

        // boucle forEach permet de parcourir tous les elements de l'API            
        data.forEach(Kanap => {

            // Déclaration des variables (contenu de l'API)
            const { imageUrl, _id, name, description, price, altText } = Kanap

            // Récuperation de l'element du DOM qui accueillera les fiches
            const items = document.querySelector("#items")

            // Création de la balise a.href
            const anchor = document.createElement('a')
            anchor.href = "./product.html?id=" + _id

            // Création des balises dediees au Kanap
            const KanapElements = document.createElement("article")

            const imageElement = document.createElement("img")
            imageElement.src = Kanap.imageUrl
            imageElement.text = Kanap.altText

            const nomElement = document.createElement("h3")
            nomElement.add = ("productName")
            nomElement.innerHTML = Kanap.name

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
        });
    })

    .catch((err) => {
        document.querySelector(".titles").innerHTML = "<h1>Oups !! je ne trouve pas la page. 😔 </h1>";
        console.log("erreur 404, sur ressource api:" + err);
    }
    );

    













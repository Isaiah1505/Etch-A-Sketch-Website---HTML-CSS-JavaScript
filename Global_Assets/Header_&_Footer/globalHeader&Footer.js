class SpecialHeader extends HTMLElement{
connectedCallback(){
    this.innerHTML =  `
    <link rel="stylesheet" href="/Home_Page/CSS/Style.css">
    <div class="container2">
        <h1><img src="/Home_Page/Images/Etch_A_Sketch_logo.webp" alt="Etch-A-Sketch" width="300px" height="150px"><img src="/Home_Page/Images/etchtoy.png" alt="Etch-A-Sketch" width="350px" height="175px"><br>Brought to You By Spin Master Ltd.</h1>
    </div>
    <div class="container">
        <ul>
            <li><a href="/Home_Page/HTML/Etcha-Sketch_Site.html">Home</a></li>
            <li><a href="/Product_Page/HTML/product_etch_a_sketch.html">Etch-A-Sketch</a></li>
            <li><a href="/Contact_The_Company/HTML/contact.html">Contact Us</a></li>
            <li><a href="/About_The_Company/HTML/company.html">About Us</a></li>
        </ul>
    </div>    
    `
}
}

class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML =  `
        <p>©2023 Spin Master. All Rights Reserved. All trademarks, 
        <br>including names, characters, images and logos, are protected by 
        <br>trademarks, copyrights and other Intellectual Property rights 
        <br>owned by Spin Master or its subsidiaries, licensors and licensees.
        </p>
        `
    }
    }
customElements.define(`special-header`, SpecialHeader)
customElements.define(`special-footer`, SpecialFooter)
function init(){
    let initHidden = Array.from(document.getElementsByClassName("initHidden"));
    initHidden.map((e) => {e.click()});
}

function onClickDetail(target){
    let inspectionDetailHeader = document.getElementsByClassName("inspection-details-header")[0];
    let inspectionDetailInside = document.getElementsByClassName("inspection-details-inside-header")[0];

    inspectionDetailHeader.click();
    inspectionDetailInside.click();

    let receivingNo = target.parentNode.nextElementSibling.nextElementSibling;
    let plannedDate = receivingNo.nextElementSibling;
    let acceptanceDate = plannedDate.nextElementSibling;
    let inspectedDate = acceptanceDate.nextElementSibling;
    let customerID = inspectedDate.nextElementSibling;
    let customerName = customerID.nextElementSibling;
    let shipToID = customerName.nextElementSibling;
    let shipToName = shipToID.nextElementSibling;
    let remarks = shipToName.nextElementSibling;

    document.getElementById("receivingNo").innerHTML = receivingNo.innerHTML.trim();
    document.getElementById("plannedDate").innerHTML = plannedDate.innerHTML.trim();
    document.getElementById("acceptanceDate").innerHTML = acceptanceDate.innerHTML.trim();
    document.getElementById("inspectedDate").innerHTML = inspectedDate.innerHTML.trim();
    document.getElementById("customerID").innerHTML = customerID.innerHTML.trim();
    document.getElementById("customerName").innerHTML = customerName.innerHTML.trim();
    document.getElementById("shipToID").innerHTML = shipToID.innerHTML.trim();
    document.getElementById("shipToName").innerHTML = shipToName.innerHTML.trim();
    document.getElementById("remarks").innerHTML = remarks.innerHTML.trim();

    scrollToElement("inspection-details-header");
}

function scrollToElement(elementId) {
    var element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


function createCollapse(){
    var coll = Array.from(document.getElementsByClassName("receiving-inspection-header"))
            .concat(Array.from(document.getElementsByClassName("easy-search-header")))
            .concat(Array.from(document.getElementsByClassName("detail-search-header")))
            .concat(Array.from(document.getElementsByClassName("inspection-details-header")))
			.concat(Array.from(document.getElementsByClassName("inspection-details-inside-header")))
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            var icon = this.childNodes[1];
            if (content.className.includes("displayNone")) {
                content.classList.remove("displayNone");
                if(this.className.includes("receiving-inspection-header")){
                    icon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" fill="#FF7001" d="M0 15C0 14.6022 0.0658481 14.2206 0.183058 13.9393C0.300269 13.658 0.45924 13.5 0.625 13.5H14.375C14.5408 13.5 14.6997 13.658 14.8169 13.9393C14.9342 14.2206 15 14.6022 15 15C15 15.3978 14.9342 15.7794 14.8169 16.0607C14.6997 16.342 14.5408 16.5 14.375 16.5H0.625C0.45924 16.5 0.300269 16.342 0.183058 16.0607C0.0658481 15.7794 0 15.3978 0 15Z"/>`
                }else if(this.className.includes("easy-search-header")){
                    icon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" fill="black" d="M5 7.5C5 7.10218 5.06585 6.72064 5.18306 6.43934C5.30027 6.15804 5.45924 6 5.625 6H19.375C19.5408 6 19.6997 6.15804 19.8169 6.43934C19.9342 6.72064 20 7.10218 20 7.5C20 7.89782 19.9342 8.27936 19.8169 8.56066C19.6997 8.84197 19.5408 9 19.375 9H5.625C5.45924 9 5.30027 8.84197 5.18306 8.56066C5.06585 8.27936 5 7.89782 5 7.5Z"/>`
                }else if(this.className.includes("inspection-details-header")){
                    icon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" fill="white" d="M5 7.5C5 7.10218 5.06585 6.72064 5.18306 6.43934C5.30027 6.15804 5.45924 6 5.625 6H19.375C19.5408 6 19.6997 6.15804 19.8169 6.43934C19.9342 6.72064 20 7.10218 20 7.5C20 7.89782 19.9342 8.27936 19.8169 8.56066C19.6997 8.84197 19.5408 9 19.375 9H5.625C5.45924 9 5.30027 8.84197 5.18306 8.56066C5.06585 8.27936 5 7.89782 5 7.5Z"/>`
                }else if(this.className.includes("detail-search-header")){
                    icon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" fill="black" d="M5 8C5 7.60218 5.06585 7.22064 5.18306 6.93934C5.30027 6.65804 5.45924 6.5 5.625 6.5H19.375C19.5408 6.5 19.6997 6.65804 19.8169 6.93934C19.9342 7.22064 20 7.60218 20 8C20 8.39782 19.9342 8.77936 19.8169 9.06066C19.6997 9.34197 19.5408 9.5 19.375 9.5H5.625C5.45924 9.5 5.30027 9.34197 5.18306 9.06066C5.06585 8.77936 5 8.39782 5 8Z"/>`
                }else if(this.className.includes("inspection-details-inside-header")){
                    icon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" fill="black" d="M5 8C5 7.60218 5.06585 7.22064 5.18306 6.93934C5.30027 6.65804 5.45924 6.5 5.625 6.5H19.375C19.5408 6.5 19.6997 6.65804 19.8169 6.93934C19.9342 7.22064 20 7.60218 20 8C20 8.39782 19.9342 8.77936 19.8169 9.06066C19.6997 9.34197 19.5408 9.5 19.375 9.5H5.625C5.45924 9.5 5.30027 9.34197 5.18306 9.06066C5.06585 8.77936 5 8.39782 5 8Z"/>`
                }
            } else {
                content.classList.add("displayNone");
                if(this.className.includes("receiving-inspection-header")){
                    icon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" fill="#FF7001" d="M7.5 7.5C7.74864 7.5 7.9871 7.59877 8.16291 7.77459C8.33873 7.9504 8.4375 8.18886 8.4375 8.4375V14.0625H14.0625C14.3111 14.0625 14.5496 14.1613 14.7254 14.3371C14.9012 14.5129 15 14.7514 15 15C15 15.2486 14.9012 15.4871 14.7254 15.6629C14.5496 15.8387 14.3111 15.9375 14.0625 15.9375H8.4375V21.5625C8.4375 21.8111 8.33873 22.0496 8.16291 22.2254C7.9871 22.4012 7.74864 22.5 7.5 22.5C7.25136 22.5 7.0129 22.4012 6.83709 22.2254C6.66127 22.0496 6.5625 21.8111 6.5625 21.5625V15.9375H0.9375C0.68886 15.9375 0.450403 15.8387 0.274588 15.6629C0.0987722 15.4871 0 15.2486 0 15C0 14.7514 0.0987722 14.5129 0.274588 14.3371C0.450403 14.1613 0.68886 14.0625 0.9375 14.0625H6.5625V8.4375C6.5625 8.18886 6.66127 7.9504 6.83709 7.77459C7.0129 7.59877 7.25136 7.5 7.5 7.5Z"/>`
                }else if(this.className.includes("easy-search-header")){
                    icon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" fill="black" d="M12.5 0C12.7486 0 12.9871 0.0987722 13.1629 0.274588C13.3387 0.450403 13.4375 0.68886 13.4375 0.9375V6.5625H19.0625C19.3111 6.5625 19.5496 6.66127 19.7254 6.83709C19.9012 7.0129 20 7.25136 20 7.5C20 7.74864 19.9012 7.9871 19.7254 8.16291C19.5496 8.33873 19.3111 8.4375 19.0625 8.4375H13.4375V14.0625C13.4375 14.3111 13.3387 14.5496 13.1629 14.7254C12.9871 14.9012 12.7486 15 12.5 15C12.2514 15 12.0129 14.9012 11.8371 14.7254C11.6613 14.5496 11.5625 14.3111 11.5625 14.0625V8.4375H5.9375C5.68886 8.4375 5.4504 8.33873 5.27459 8.16291C5.09877 7.9871 5 7.74864 5 7.5C5 7.25136 5.09877 7.0129 5.27459 6.83709C5.4504 6.66127 5.68886 6.5625 5.9375 6.5625H11.5625V0.9375C11.5625 0.68886 11.6613 0.450403 11.8371 0.274588C12.0129 0.0987722 12.2514 0 12.5 0Z"/>`
                }else if(this.className.includes("inspection-details-header")){
                    icon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" fill="white" d="M12.5 0.5C12.7486 0.5 12.9871 0.598772 13.1629 0.774588C13.3387 0.950403 13.4375 1.18886 13.4375 1.4375V7.0625H19.0625C19.3111 7.0625 19.5496 7.16127 19.7254 7.33709C19.9012 7.5129 20 7.75136 20 8C20 8.24864 19.9012 8.4871 19.7254 8.66291C19.5496 8.83873 19.3111 8.9375 19.0625 8.9375H13.4375V14.5625C13.4375 14.8111 13.3387 15.0496 13.1629 15.2254C12.9871 15.4012 12.7486 15.5 12.5 15.5C12.2514 15.5 12.0129 15.4012 11.8371 15.2254C11.6613 15.0496 11.5625 14.8111 11.5625 14.5625V8.9375H5.9375C5.68886 8.9375 5.4504 8.83873 5.27459 8.66291C5.09877 8.4871 5 8.24864 5 8C5 7.75136 5.09877 7.5129 5.27459 7.33709C5.4504 7.16127 5.68886 7.0625 5.9375 7.0625H11.5625V1.4375C11.5625 1.18886 11.6613 0.950403 11.8371 0.774588C12.0129 0.598772 12.2514 0.5 12.5 0.5Z"/>`
                }else if(this.className.includes("detail-search-header")){
                    icon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" fill="black" d="M12.5 0.5C12.7486 0.5 12.9871 0.598772 13.1629 0.774588C13.3387 0.950403 13.4375 1.18886 13.4375 1.4375V7.0625H19.0625C19.3111 7.0625 19.5496 7.16127 19.7254 7.33709C19.9012 7.5129 20 7.75136 20 8C20 8.24864 19.9012 8.4871 19.7254 8.66291C19.5496 8.83873 19.3111 8.9375 19.0625 8.9375H13.4375V14.5625C13.4375 14.8111 13.3387 15.0496 13.1629 15.2254C12.9871 15.4012 12.7486 15.5 12.5 15.5C12.2514 15.5 12.0129 15.4012 11.8371 15.2254C11.6613 15.0496 11.5625 14.8111 11.5625 14.5625V8.9375H5.9375C5.68886 8.9375 5.4504 8.83873 5.27459 8.66291C5.09877 8.4871 5 8.24864 5 8C5 7.75136 5.09877 7.5129 5.27459 7.33709C5.4504 7.16127 5.68886 7.0625 5.9375 7.0625H11.5625V1.4375C11.5625 1.18886 11.6613 0.950403 11.8371 0.774588C12.0129 0.598772 12.2514 0.5 12.5 0.5Z"/>`
                }else if(this.className.includes("inspection-details-inside-header")){
                    icon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" fill="black" d="M12.5 0.5C12.7486 0.5 12.9871 0.598772 13.1629 0.774588C13.3387 0.950403 13.4375 1.18886 13.4375 1.4375V7.0625H19.0625C19.3111 7.0625 19.5496 7.16127 19.7254 7.33709C19.9012 7.5129 20 7.75136 20 8C20 8.24864 19.9012 8.4871 19.7254 8.66291C19.5496 8.83873 19.3111 8.9375 19.0625 8.9375H13.4375V14.5625C13.4375 14.8111 13.3387 15.0496 13.1629 15.2254C12.9871 15.4012 12.7486 15.5 12.5 15.5C12.2514 15.5 12.0129 15.4012 11.8371 15.2254C11.6613 15.0496 11.5625 14.8111 11.5625 14.5625V8.9375H5.9375C5.68886 8.9375 5.4504 8.83873 5.27459 8.66291C5.09877 8.4871 5 8.24864 5 8C5 7.75136 5.09877 7.5129 5.27459 7.33709C5.4504 7.16127 5.68886 7.0625 5.9375 7.0625H11.5625V1.4375C11.5625 1.18886 11.6613 0.950403 11.8371 0.774588C12.0129 0.598772 12.2514 0.5 12.5 0.5Z"/>`
                }
            }
            
        });
    }
}

createCollapse();
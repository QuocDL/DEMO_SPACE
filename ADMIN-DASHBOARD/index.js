const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themetoggle = document.querySelector(".theme")

menuBtn.onclick = () =>{
    sideMenu.style.display='block';
}
closeBtn.onclick =() =>{
    sideMenu.style.display='none'
}
/* ======== NAVBAR MENU ========= */
themetoggle.onclick=()=>{
    document.body.classList.toggle('drak-theme-variables');
    themetoggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themetoggle.querySelector('span:nth-child(2)').classList.toggle('active');
}
/* ======== ORDERS ITEM ========= */
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent =`
                        <tr>
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymenStatus}</td>
                            <td class="${order.Shipping === 'Declined' ? 'danger': order.Shipping 
                            === 'Pending' ? 'warning' : 'pimary'}">${order.Shipping}</td>
                            <td class="pimary">Details</td>
                        </tr>
                    `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
});
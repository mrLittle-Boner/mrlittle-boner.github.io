const members = document.querySelectorAll(".team__member");
const memberInfos = document.querySelectorAll(".team__info");
const triangles = document.querySelectorAll(".team__info-triangle");

members.forEach(member => {
    member.addEventListener('click' , e => {
        memberInfos.forEach(item => item.classList.remove("team__info--active"));
        let selector = e.target.closest(".team__member").dataset["target"];
        document.querySelector(selector).classList.add("team__info--active");

        let nameColor = document.querySelector(selector).querySelector(".team__info-name");
        let curTri = document.querySelector(selector).querySelector(".team__info-triangle");
        
        switch (selector) {
            case "#michael":
                nameColor.style.color = "var(--main-color-1)";
                curTri.style.left = "130px"
                break;
            case "#david":
                nameColor.style.color = "var(--main-color-2)";
                curTri.style.left = "422px"
                break;
            case "#anna":
                nameColor.style.color = "var(--main-color-3)";
                curTri.style.left = "717px"
                break;
            case "#jason":
                nameColor.style.color = "var(--main-color-4)";
                curTri.style.left = "1010px"
                break;
        }       
    })
    members[0].click();
})
// ------------------------------
// Author: Neokazis Charalampos
// Author URI: NeoBabis.gr
// Version: 1.0
// ------------------------------

const nb_accordions = document.querySelectorAll("[data-nb_accordion]");

if (nb_accordions) {
    nb_accordions.forEach((nb_accordion) => {
        let labels = nb_accordion.querySelectorAll("[data-nb_accordion_label]");

        labels.forEach((label) => {
            if (label.closest("[data-nb_accordion_item]").classList.contains("active")) label.nextElementSibling.style.maxHeight = `${label.nextElementSibling.scrollHeight}px`;
            
            label.addEventListener("click", () => {
                if (nb_accordion.hasAttribute("data-nb_accordion_open_only_one")) {
                    let all_active = nb_accordion.querySelectorAll("[data-nb_accordion_item].active");
                    all_active.forEach((e) => {
                        if (e != label.closest("[data-nb_accordion_item]")) {
                            e.classList.remove("active");
                            e.querySelector("[data-nb_accordion_label]").nextElementSibling.style.maxHeight = "0px";
                        }
                    });
                }

                let closest_accordion_item = label.closest("[data-nb_accordion_item]");
                if (closest_accordion_item.classList.contains("active")) {
                    closest_accordion_item.classList.remove("active");
                    label.nextElementSibling.style.maxHeight = "0px";
                } else {
                    closest_accordion_item.classList.add("active");
                    label.nextElementSibling.style.maxHeight = `${label.nextElementSibling.scrollHeight}px`;
                }
            });
        });
    });
}

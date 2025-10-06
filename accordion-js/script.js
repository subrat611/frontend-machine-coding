const accordionItems = [
  {
    title: "Title 1",
    content: "Content 1",
  },
  {
    title: "Title 2",
    content: "Content 2",
  },
  {
    title: "Title 3",
    content: "Content 3",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let activeItem = accordionItems[0];

  const accordion = document.querySelector(".accordion");

  accordionItems.forEach((item) => {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    // create the header
    const itemHeader = document.createElement("div");
    itemHeader.classList.add("accordion-item-header");
    itemHeader.textContent = item.title;

    // create the content
    const itemContent = document.createElement("div");
    itemContent.classList.add("accordion-item-content");
    itemContent.innerHTML = `<p>${item.content}</p>`;

    accordionItem.appendChild(itemHeader);
    accordionItem.appendChild(itemContent);

    // add the item to parent container
    accordion.appendChild(accordionItem);

    if (activeItem.title === item.title) {
      accordionItem.classList.add("active");
      itemContent.style.display = "block";
    }
  });

  // utilize the event deligation technique
  accordion.addEventListener("click", (event) => {
    const accordionItemHeader = event.target.closest(".accordion-item-header");

    if (!accordionItemHeader) return;

    const accordionItem = accordionItemHeader.parentNode;
    const accordionItemContent = accordionItem.querySelector(
      ".accordion-item-content"
    );
    const isActive = accordionItem.classList.contains("active");

    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordion-item-content").style.display = "none";
    });

    if (!isActive) {
      accordionItem.classList.add("active");
      accordionItemContent.style.display = "block";
    }
  });
});

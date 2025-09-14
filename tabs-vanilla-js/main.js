// create a config of tab with content (this will for scalability)
// this config will be most of time received from backend.

const tabConfig = [
  {
    id: 1,
    title: "Tab 1",
    content: "Hello Tab 1",
  },
  {
    id: 2,
    title: "Tab 2",
    content: "Hello Tab 2",
  },
  {
    id: 3,
    title: "Tab 3",
    content: "Hello Tab 3",
  },
  // add more dynamically (frontend) or fetch from backend
];

document.addEventListener("DOMContentLoaded", () => {
  let activeTab = tabConfig[0].id;

  // render all of the tabs
  function renderTabs() {
    const tabList = document.querySelector(".tab-list");
    const tabPanel = document.querySelector(".tab-panel");

    tabConfig.forEach((tab) => {
      const tabBtn = document.createElement("button");
      tabBtn.className = "tab";
      tabBtn.textContent = tab.title;
      tabBtn.setAttribute("data-tab-pos", tab.id);
      tabList.appendChild(tabBtn);

      const tabContent = document.createElement("div");
      tabContent.id = tab.id;
      tabContent.className = "tab-content";
      tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
      tabPanel.appendChild(tabContent);
    });

    tabList.addEventListener("click", (e) => {
      if (e.target.matches(".tab")) {
        const tabId = e.target.getAttribute("data-tab-pos");

        if (tabId !== activeTab) {
          openTab(tabId);
          activeTab = tabId;
        }
      }
    });
  }

  function openTab(tabId) {
    const tabBtns = document.querySelectorAll(".tab");
    const tabList = document.querySelectorAll(".tab-content");

    tabBtns.forEach((tab) => tab.classList.remove("active"));
    tabList.forEach((content) => content.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    document
      .querySelector(`button[data-tab-pos="${tabId}"]`)
      .classList.add("active");
  }

  renderTabs();
  document.getElementById(activeTab).classList.add("active");
  document
    .querySelector(`button[data-tab-pos="${activeTab}"]`)
    .classList.add("active");
});

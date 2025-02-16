// Functionality for showing/hiding the comments section

document.addEventListener("DOMContentLoaded", () => {
  const showHideBtn = document.querySelector(".show-hide");
  const commentWrapper = document.querySelector(".comment-wrapper");

  if (showHideBtn && commentWrapper) {
    commentWrapper.style.display = "none"; // Hide comments initially

    showHideBtn.addEventListener("click", () => {
      if (commentWrapper.style.display === "none") {
        commentWrapper.style.display = "block";
        showHideBtn.textContent = "Hide comments";
      } else {
        commentWrapper.style.display = "none";
        showHideBtn.textContent = "Show comments";
      }
    });
  }

  // Functionality for adding a new comment via the comment form

  const form = document.querySelector(".comment-form");
  const nameField = document.querySelector("#name");
  const commentField = document.querySelector("#comment");
  const list = document.querySelector(".comment-container");

  if (form && nameField && commentField && list) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitComment();
    });

    function submitComment() {
      const nameValue = nameField.value.trim();
      const commentValue = commentField.value.trim();

      if (nameValue === "" || commentValue === "") {
        alert("Both name and comment are required.");
        return;
      }

      const listItem = document.createElement("li");
      const namePara = document.createElement("p");
      const commentPara = document.createElement("p");

      namePara.textContent = nameValue;
      commentPara.textContent = commentValue;

      listItem.appendChild(namePara);
      listItem.appendChild(commentPara);
      list.appendChild(listItem);

      // Clear input fields
      nameField.value = "";
      commentField.value = "";
    }
  }
});

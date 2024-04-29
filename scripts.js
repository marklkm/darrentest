/* Script for collapsable content */
function toggleReadMore(targetId, button) {
  var content = document.getElementById(targetId);
  var isExpanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", !isExpanded);
  if (!isExpanded) {
    content.addEventListener(
      "shown.bs.collapse",
      function () {
        content.tabIndex = -1;
        content.focus();
      },
      { once: true }
    );
  } else {
    button.focus();
  }
}

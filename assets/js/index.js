const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$(document).ready(function () {

  $(".card-img-top").click(function () {
    $(".list-group-item").toggle();
  });

  $("#enviarcorreo").click(function () {
    console.log("HiceClick");
    alert("Mensaje fue Enviado");
  });

  $("h3").on("dblclick", function () {
    console.log("HiceClick");
    $(this).css({ color: "yellow" });
  });


});

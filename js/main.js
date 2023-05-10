$(document).ready(function () {
  $("#count-sum").click(function () {
    $(".salary").each(function () {
      let salarySum = 0;
      $(".salary").each(function () {
        salarySum += +$(this).text() || 0;
      });
      $("#sum").text(salarySum);
    });
  });
});


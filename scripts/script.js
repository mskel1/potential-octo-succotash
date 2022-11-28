function submitForm() {
    document.getElementById("frm1").submit();
  }

  $("input[type=radio]").on("change", function () {

    let checkChoice = $("input[type=radio]:checked").val();

    if (checkChoice === "firstHalf") {
      $("#monthSelect")
        .empty()
        .append(`<option value="january">January</option>`)
        .append(`<option value="february">February</option>`)
        .append(`<option value="march">March</option>`)
        .append(`<option value="april">April</option>`)
        .append(`<option value="may">May</option>`)
        .append(`<option value="june">June</option>`);
    } else if (checkChoice === "secondHalf") {

      $("#monthSelect")
        .empty()
        .append(`<option value="july">July</option>`)
        .append(`<option value="august">August</option>`)
        .append(`<option value="september">September</option>`)
        .append(`<option value"october">October</option>`)
        .append(`<option value="november">November</option>`)
        .append(`<option value="december">December</option>`);
    } else {
      $("#monthSelect")
        .empty()
        .append(`<option value="notChosen">Pick a month</option>`);
    }
  });
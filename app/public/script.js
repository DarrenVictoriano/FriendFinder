function validateForm() {
    var isValid = true;

    $(".custom-select").each(function () {
        if (isNaN($(this).val())) {
            isValid = false;
        }
    });

    $(".form-control").each(function () {
        if ($(this).val() === "") {
            isValid = false;
        }
    });

    return isValid;
}

$("#submitBTN").on("click", function (event) {
    event.preventDefault();

    // check if all forms are filled
    if (validateForm()) {
        // get all the data
        var data = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#select-q1").val(),
                $("#select-q2").val(),
                $("#select-q3").val(),
                $("#select-q4").val(),
                $("#select-q5").val(),
                $("#select-q6").val(),
                $("#select-q7").val(),
                $("#select-q8").val(),
                $("#select-q9").val(),
                $("#select-q10").val()
            ]
        }

        // api link /addfriend
        $.post("/friend", data, function (res) {
            // grab the result and send it to the modal
            console.log(res);
        });

    } else {
        alert("fill the form!");
    }



});
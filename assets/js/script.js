$(document).ready(function(){
    var currentDate = moment().format("LLL")
    $("#currentDay").text(currentDate)

    $(".saveBtn").on("click", function(){
        console.log($(this))

        var time = $(this).parent().attr("id")
        var description = $(this).siblings(".description").val()

        localStorage.setItem(time, description)
    });

    function hourChecker() {

        var currentHour = moment().hours()
        console.log(currentHour)

        $(".time").each(function(){
            //$(this).attr("id")
            console.log($(this).attr("id").match(/\d+/)[0])
            var stringToNumber = parseInt($(this).attr("id").match(/\d+/)[0])

            if (stringToNumber < currentHour) {
                $(this).addClass("before")
            } else if (stringToNumber === currentHour) {
                $(this).removeClass("before")
                $(this).addClass("now")
            } else {
                $(this).removeClass("before now")
                $(this).addClass("after")
            
            }
        })

    }
    hourChecker();

    $("#hour8 .description").val(localStorage.getItem("hour8"))
    $("#hour9 .description").val(localStorage.getItem("hour9"))
    $("#hour10 .description").val(localStorage.getItem("hour10"))
    $("#hour11 .description").val(localStorage.getItem("hour11"))
    $("#hour12 .description").val(localStorage.getItem("hour12"))
    $("#hour13 .description").val(localStorage.getItem("hour13"))
    $("#hour14 .description").val(localStorage.getItem("hour14"))
    $("#hour15 .description").val(localStorage.getItem("hour15"))
    $("#hour16 .description").val(localStorage.getItem("hour16"))
    $("#hour17 .description").val(localStorage.getItem("hour17"))
 
}); 



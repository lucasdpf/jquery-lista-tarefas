$(document).ready(function() {
    $("#task-form").submit(function(event) {
        event.preventDefault();
        const taskText = $("#task-input").val().trim();
        if (taskText !== "" && taskText.length <= 60) { 
            const listItem = $("<li>").text(taskText);
            listItem.click(function() {
                $(this).toggleClass("completed");
            });
            
            const removeButton = $("<button>").html('<i class="far fa-trash-alt"></i>');
            removeButton.addClass("remove-button");
            removeButton.click(function() {
                $(this).parent().remove(); 
            });
            
            listItem.append(removeButton);
            $("#task-list").append(listItem);
            $("#task-input").val("");
        } else {
            alert("A tarefa deve ter no máximo 60 caracteres.");
        }
    });
});
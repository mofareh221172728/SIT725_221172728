const addCards = (items) => {
    items.forEach(item => {
        const itemToAppend =
            '<div class="col s12 m6 l4">' +
                '<div class="card lost-item-card">' +
                    '<div class="card-image waves-effect waves-block waves-light">' +
                        '<img class="activator" src="' + item.imagePath + '" alt="' + item.itemName + '">' +
                        '<span class="item-status">' + item.status + '</span>' +
                    '</div>' +
                    '<div class="card-content">' +
                        '<span class="card-title activator">' +
                            item.itemName +
                            '<i class="material-icons right">more_vert</i>' +
                        '</span>' +
                        '<p class="item-meta"><i class="material-icons">place</i>' + item.foundLocation + '</p>' +
                        '<p class="item-meta"><i class="material-icons">event</i>' + item.dateFound + '</p>' +
                        '<button class="activator waves-effect waves-teal btn-flat details-button">View details</button>' +
                    '</div>' +
                    '<div class="card-reveal">' +
                        '<span class="card-title">' +
                            item.itemName +
                            '<i class="material-icons right">close</i>' +
                        '</span>' +
                        '<p>' + item.details + '</p>' +
                        '<div class="reveal-location">' +
                            '<i class="material-icons">place</i>' +
                            '<span>Found at ' + item.foundLocation + '</span>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';

        $("#card-section").append(itemToAppend);
    });
};

const getItems = () => {
    $.get("/api/items", (response) => {
        if (response.statusCode === 200) {
            addCards(response.data);
            $("#item-count").text(response.data.length + " items available");
        }
    }).fail(() => {
        $("#item-count").text("Items could not be loaded");
    });
};

$(document).ready(() => {
    $(".modal").modal();
    getItems();
});

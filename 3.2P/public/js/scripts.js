const addCards = (items) => {
    items.forEach(item => {
        const itemToAppend =
            '<div class="col s12 m6 l4">' +
                '<div class="card lost-item-card">' +
                    '<div class="card-image waves-effect waves-block waves-light">' +
                        '<img class="activator" src="' + item.image + '" alt="' + item.title + '">' +
                        '<span class="item-status">FOUND</span>' +
                    '</div>' +
                    '<div class="card-content">' +
                        '<span class="card-title activator">' +
                            item.title +
                            '<i class="material-icons right">more_vert</i>' +
                        '</span>' +
                        '<p class="item-meta"><i class="material-icons">place</i>' + item.location + '</p>' +
                        '<p class="item-meta"><i class="material-icons">event</i>' + item.foundDate + '</p>' +
                        '<button class="activator waves-effect waves-teal btn-flat details-button">View details</button>' +
                    '</div>' +
                    '<div class="card-reveal">' +
                        '<span class="card-title">' +
                            item.title +
                            '<i class="material-icons right">close</i>' +
                        '</span>' +
                        '<p>' + item.description + '</p>' +
                        '<div class="reveal-location">' +
                            '<i class="material-icons">place</i>' +
                            '<span>Found at ' + item.location + '</span>' +
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

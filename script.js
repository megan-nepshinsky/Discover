var activityContainer = $('.testing');
activityContainer.append(`<p>hello</p>`);

var events = [
  {
    imgUrl: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Placeholder Event",
    description: "Event Description"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Placeholder Event",
    description: "Event Description"
  }
];

createListings(events);

function createListings(activitiesArr) {
  for (let i=0; i < activitiesArr.length; i++) {
    var listing = '<div class="listing-item">' + 
                    `<img src="${activitiesArr[i].imgUrl}" class="listing-img">` + 
                    `<h3 class="listing-title>${activitiesArr[i].name}</h3>` + 
                    `<p class="listing-desc">${activitiesArr[i].description}</p>` +
                  '</div>';
    activityContainer.append(listing);
  }
}
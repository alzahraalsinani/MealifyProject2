document.addEventListener('DOMContentLoaded', () => {
    const destinationsContainer = document.getElementById('destinations-container');

  
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            const destinations = data.destinations;
            
            destinations.forEach(dest => {
                const destinationCard = `
                    <div class="col-md-4 col-sm-6">
                        <div class="card h-100 shadow-sm border-0">
                            <div class="card-body">
                                <h4 class="card-title">${dest.city} ${dest.flag}</h4>
                                <h6 class="card-subtitle mb-2 text-muted">${dest.country}</h6>
                                <hr>
                                <p class="card-text">Price starting from:</p>
                                <h5 class="text-primary fw-bold">$${dest.priceFrom}</h5>
                            </div>
                        </div>
                    </div>
                `;
                destinationsContainer.innerHTML += destinationCard;
            });
        })
        .catch(error => console.error('Error fetching destinations:', error));
});
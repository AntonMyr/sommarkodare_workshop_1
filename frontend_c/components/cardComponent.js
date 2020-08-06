let cardComponent = `
            <% for(let i = 0; i < data.length; i++) {%>
            <div class="card">
                <img
                    src="<%= data[i].image%>"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title">
                        <%= data[i].title%>
                    </h5>
                    <p class="card-text">
                        <%= data[i].content%>
                    </p>
                    <a href="#" class="btn btn-primary">Läs mer</a>
                </div>
            </div>
            <% }%>
        `;

let listComponent = `
            <% for(let i = 0; i < data.length; i++) {%>
                <li class="list-group-item"><%= data[i] %></li>
            <% }%>
`;

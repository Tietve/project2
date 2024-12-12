// src/mockData.js
export const MockData = {
    id: 1,
    uuid: "123e4567-e89b-12d3-a456-426614174000",
    name: "Justin Bieber Concert",
    time_start: "2024-01-20T19:00:00",
    time_end: "2024-01-20T23:00:00",
    place: "Madison Square Garden",
    description: "Experience an unforgettable night with Justin Bieber live in concert!",
    max_quantity: 10,
    is_public: true,
    category: "Music Concert",
    organizer: "Live Nation",
    media: [
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7dBMvLffpltKlISfoOe0jQ5KHsKW2ddk1A&s",
            type: "image"
        },
        {
            url: "/placeholder.svg?height=600&width=800",
            type: "image"
        }
    ],
    ticket_info: [
        {
            id: 1,
            ticket_code: "VIP-001",
            ticket_name: "VIP Package",
            ticket_type: "VIP",
            ticket_position: "Front Row",
            max_quantity: 100,
            price: 299.99
        },
        {
            id: 2,
            ticket_code: "GA-001",
            ticket_name: "General Admission",
            ticket_type: "Standard",
            ticket_position: "Standing",
            max_quantity: 1000,
            price: 99.99
        }
    ]
};

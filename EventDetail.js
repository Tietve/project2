'use client'

import React, { useState } from "react"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { MockData } from './MockData'; // Chỉ import MockData, không phải MockProduct
import  './EventDetail.css'
import { addToCart, incrementQuantity, decrementQuantity } from "./CartReducer";

export default function EventDetail() {
    const id = useParams().id
    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()

    // Mock event data based on database schema
    const event = MockData;

    const [selectedTicketType, setSelectedTicketType] = useState(event.ticket_info[0])
    const [selectedImg, setSelectedImg] = useState(0)

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                        <img
                            src={event.media[selectedImg].url}
                            alt={event.name}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto">
                        {event.media.map((img, index) => (
                            <img
                                key={index}
                                src={img.url}
                                alt={`${event.name} ${index + 1}`}
                                className={`w-24 h-24 object-cover rounded cursor-pointer ${selectedImg === index ? "ring-2 ring-primary" : ""}`}
                                onClick={() => setSelectedImg(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <Badge className="mb-2">{event.category}</Badge>
                        <h1 className="text-3xl font-bold">{event.name}</h1>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2">
                            <CalendarTodayIcon className="w-4 h-4" />
                            <span>{formatDate(event.time_start)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <LocationOnIcon className="w-4 h-4" />
                            <span>{event.place}</span>
                        </div>
                    </div>

                    <Card className="p-4">
                        <div className="space-y-4">
                            <h2 className="font-semibold">Select Ticket Type</h2>
                            <div className="space-y-2">
                                {event.ticket_info.map((ticket) => (
                                    <div
                                        key={ticket.id}
                                        className={`p-4 rounded-lg border cursor-pointer ${selectedTicketType.id === ticket.id ? "border-primary bg-primary/5" : ""}`}
                                        onClick={() => setSelectedTicketType(ticket)}
                                    >
                                        <div className="flex justify-between items-center ">
                                            <div>
                                                <h3 className="font-medium">{ticket.ticket_name}</h3>
                                                <p className="text-sm text-muted-foreground">{ticket.ticket_position}</p>
                                            </div>
                                            <p className="font-semibold">${ticket.price}</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="ms-auto "/>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => {
                                                    if (quantity > 0) {
                                                        setQuantity(quantity - 1);
                                                        dispatch(decrementQuantity({ ticketType: ticket.ticket_name, id: ticket.id }));
                                                    }
                                                }}
                                                disabled={quantity === 0}
                                            >
                                                -
                                            </Button>

                                            <span className="w-8 text-center">{quantity}</span>

                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => {
                                                    setQuantity((prev) => prev + 1);
                                                    dispatch(incrementQuantity({
                                                        ticketType: ticket.ticket_name,
                                                        id: ticket.id,
                                                        maxQuantity: ticket.max_quantity
                                                    }));
                                                }}
                                                disabled={quantity === ticket.max_quantity}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <div className="flex flex-col gap-2">
                                    <Button
                                        className="w-full"
                                        onClick={() => {
                                            dispatch(
                                                addToCart({
                                                    id: event.id,
                                                    title: event.name,
                                                    ticketType: selectedTicketType.ticket_name,
                                                    price: selectedTicketType.price,
                                                    quantity,
                                                    date: event.time_start,
                                                    location: event.place,
                                                })
                                            );
                                        }}
                                    >
                                        <AddShoppingCartIcon className="mr-2 h-4 w-4" />
                                        Add to Cart
                                    </Button>

                                    <Button variant="outline" className="w-full">
                                        <FavoriteBorderIcon className="mr-2 h-4 w-4" />
                                        Add to Wishlist
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Event Details</h2>
                        <p className="text-muted-foreground">{event.description}</p>
                        <div className="space-y-2">
                            <p><span className="font-medium">Organizer:</span> {event.organizer}</p>
                            <p><span className="font-medium">Duration:</span> {formatDate(event.time_start)} - {new Date(event.time_end).toLocaleTimeString()}</p>
                            <div className="mt-4">
                                <p className="font-semibold">Total Price: ${selectedTicketType.price * quantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import {Iticket} from "../../domain/interfaces/ticket";
import {UuidAdapter} from "../../config/uuid.adapter";

export class TicketService {

    private readonly _tickets: Iticket[] = [
        {id: UuidAdapter.v4(), number:1, createAt: new Date(), done: false},
        {id: UuidAdapter.v4(), number:2, createAt: new Date(), done: false},
        {id: UuidAdapter.v4(), number:3, createAt: new Date(), done: false},
        {id: UuidAdapter.v4(), number:4, createAt: new Date(), done: false},
        {id: UuidAdapter.v4(), number:5, createAt: new Date(), done: false},
        {id: UuidAdapter.v4(), number:6, createAt: new Date(), done: false},
    ]



}
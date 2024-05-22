import {Request, Response} from "express";

export class TicketController {

    // DI - WssService
    constructor() {
    }

    public getTickets =async (request:Request, response:Response) => {
        response.json('getTickets')
    }

    public getLastTicketNumber =async (request:Request, response:Response) => {
        response.json('getLastTicketNumber')
    }

    public pendingTickets =async (request:Request, response:Response) => {
        response.json('pendingTickets')
    }

    public createTicket =async (request:Request, response:Response) => {
        response.json('createTicket')
    }

    public drawTicket =async (request:Request, response:Response) => {
        response.json('drawTicket')
    }

    public ticketFinished =async (request:Request, response:Response) => {
        response.json('ticketFinished')
    }

    public workingOn =async (request:Request, response:Response) => {
        response.json('workingOn')
    }

}
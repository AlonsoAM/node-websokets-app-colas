export interface Iticket{
    id: string
    number: number
    createAt: Date
    handleDest?: string // Escritorio1, ..
    handleAt?: Date
    done: boolean
}
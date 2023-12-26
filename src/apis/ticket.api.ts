import http from 'src/utills/https'
interface TicketBody {
  departure: string
  destination: string
  quantity: number
  price: string
  date: number
}
export interface TicketSearch {
  departure: string
  destination: string
  date: number
}
export const createTicket = (body: TicketBody) => http.post('tickets/', body)
export const updateTicket = (body: TicketBody, id: string) => http.put(`tickets/${id}`, body)
export const fetchTicket = () => http.get('tickets/')
export const deleteTicket = (id: string) => http.delete(`tickets/${id}`)
export const searchTicket = (body: TicketSearch) => http.post('tickets/search', body)
export const invoiceTicket = (id: string) => http.post(`invoices`, { ticket_id: id })
export const confirmTicket = (id: string) => http.put(`invoices/${id}`)
export const getAllTicket = () => http.get(`invoices`)

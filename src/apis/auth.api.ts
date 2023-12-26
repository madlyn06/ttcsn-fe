import http from 'src/utills/https'

export const registerApi = (body: { username: string; email: string; password: string; role?: string }) =>
  http.post('users/register', body)
export const loginApi = (body: { email: string; password: string }) => http.post('users/login', body)
export const fetchUser = () => http.get('users')
export const deleteUser = (id: string) => http.delete('users/' + id)
export const updateUser = (body: { username: string; email: string; password: string; role?: string }, id: string) =>
  http.put('users/' + id, body)

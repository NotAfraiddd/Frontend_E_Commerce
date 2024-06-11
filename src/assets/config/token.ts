/* eslint-disable import/no-anonymous-default-export */
export default {
  get(name: string): string {
    return localStorage.getItem(name) || ''
  },
  set(name: string, token: string): void {
    localStorage.setItem(name, token)
  },
  remove(name: string): void {
    localStorage.removeItem(name)
  },
  reset(name: string): void {
    localStorage.removeItem(name)
  },
  getAuth(): { authorization: string } {
    return {
      authorization: 'Bearer ' + this.get('access_token')
    }
  }
}

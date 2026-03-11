import { createStore } from '@tanstack/store'

export const store = createStore({
  firstName: 'Jane',
  lastName: 'Smith',
})
export const fullName = createStore({
  fn: () => `${store.state.firstName} ${store.state.lastName}`,
  deps: [store],
})
fullName.get()

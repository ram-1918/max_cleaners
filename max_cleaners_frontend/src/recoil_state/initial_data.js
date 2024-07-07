export const user_initial_data = {
  fullname: "",
  email: "",
  phone: "",
  password: "",
  addresses: [],
  location: "",
  starch: "low",
  isLoaded: false
};

export const schedule_initial_data = {
    date: new Date(),
    time_slot: "",
};

export const cart_initial_data = {
    total_price: 0,
    capacity: 0,
    products: []
};

export const initial_order_data = {
  created_at: "",
  user: "",
  status: "completed",
  address: "",
  total_order_value: 0,
  schedule: {
      date: "",
      time_slot: ""
  },
  cart: {
      total_price: 0,
      capacity: 0,
      products: []
  }
}

export const initial_order_session_info = {
  activeSession: false,
  schedulePage: false,
  productsPage: false,
  orderSummaryPage: false,
  orderConfirmationPage: false
}
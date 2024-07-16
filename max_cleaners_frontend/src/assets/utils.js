import axios from "axios";

export const month_mapper = {
  0: "january",
  1: "february",
  2: "march",
  3: "april",
  4: "may",
  5: "june",
  6: "july",
  7: "august",
  8: "september",
  9: "october",
  10: "november",
  11: "december",
};

export const API_URL = "http://127.0.0.1:8000/api";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

export const custom_timeout = setLoading => setTimeout(() => {
  setLoading(false);
}, 5000);

export const get_primary_address = userData => userData.addresses.filter(
  (item) => item.primary === true
)?.[0];

export const date_support_mapper = (date) => {
  const mapper = { 0: "th", 1: "st", 2: "nd", 3: "rd" };
  if (date <= 3 || (date > 20 && date % 10 <= 3)) {
    return mapper[date % 10];
  } else {
    return "th";
  }
};

export const validateData = (data) => {
  const { email, fullname = "" } = data;
  let isEmailValid = false;
  let isFullnameValid = false;
  // email valid check
  if (email !== "") {
    // customized conditions
    isEmailValid = true;
  } 
  if (fullname && fullname.length >= 7) {
    isFullnameValid = true;
  }
  return isEmailValid && isFullnameValid;
};

export const roundToTwo = (num) => {
  return +(Math.round(num + "e+2") + "e-2");
};

export const roundoff = (value) => {
  return Math.round(value * 100.0) / 100.0;
};

export const basedOnPrimary = (a, b) => {
  return a["primary"] < b["primary"];
};

export const readableFormattedDate = (date_obj) => {
  const year = date_obj.getFullYear();
  const month = date_obj.getMonth();
  const date = date_obj.getDate();
  return `${date}${date_support_mapper(date)} ${month_mapper[month]}, ${year}`;
};

export const all_field_check_to_proceed = (data) => {
  const required_fields = data.filter((item) => item.required === true);
  const can_proceed = required_fields.filter(
    (item) => item.satisfied === false
  );
  return can_proceed.length === 0;
};

export const save_to_local = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const retrieve_from_local = (key) => {
  const result = localStorage.getItem(key);
  return (result && result !== undefined) ? JSON.parse(result) : null;
};

export const remove_from_local = (key) => {
  localStorage.removeItem(key);
};

export const calculate_addons = (product) => {
  let total_addons = 0;
  ["cloth_type", "alteration", "wash_type"].forEach((key) => {
    if (product[key] !== "none" && product[key] !== "regular") {
      total_addons += 1;
    }
  });
  return total_addons;
};

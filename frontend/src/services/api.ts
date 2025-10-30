import axios from "axios";
import type { Experience } from "../types/experience";
import type { BookingRequest } from "../types/booking";
import type { PromoValidationResponse } from "../types/promo";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ✅ Strongly typed API functions
export const getExperiences = () => API.get<Experience[]>("/experiences");

export const createBooking = (data: BookingRequest) =>
  API.post("/bookings", data);

export const validatePromo = (code: string) =>
  API.post<PromoValidationResponse>("/promos/validate", { code });


export const getBookings = () => API.get("/bookings");

export const getExperienceById = (id: string) => API.get(`/experiences/${id}`);


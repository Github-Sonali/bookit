export interface BookingRequest {
  experienceId: string | undefined;
  userName: string;
  userEmail: string;
  slot: string;
  totalPrice: number;
}

export interface BookingResponse {
  booking: {
    _id: string;
    userName: string;
    userEmail: string;
    slot: string;
    totalPrice: number;
    paymentStatus: string;
    createdAt: string;
  };
}


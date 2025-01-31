export interface AppointmentSlotState {
  id?: number;
  documentId: string;
  from?: string;
  to?: string;
}

export interface BookedAppointmentState {
  purpose?: string;
  date: Date;
  slot: AppointmentSlotState;
  meetingStatus:
    | "transactionPending"
    | "upcoming"
    | "ongoing"
    | "finished"
    | "canceled"
    | "postponed"
    | "absent";
  meetingUrl?: string;
  postponedDate?: Date;
}

export type User = {
  /** The uuid code */
  id: string;
  
  /** The username of the user */
  name: string;

  /** When the user was created */
  changed: Date;

  /** When the user was created */
  created: Date;
}

export const FARMER_ROLE_ID = "ovo_farmer" as const;

export type Farmer = User & {

  /** How much a farmer borred to start his/her farm */
  fieldLoanAmount: number;

  /** The farmer's phone number that can send MPesa transactions*/
  fieldMpesaNumber: number;

  /** When a farmer was last visited by a technician (automatically updated
   *  in the backend) */
  fieldFarmerLastVisited: Date;
}

export const TECHNICIAN_ROLE_ID = "ovo_technician" as const;

export type Technician = User;
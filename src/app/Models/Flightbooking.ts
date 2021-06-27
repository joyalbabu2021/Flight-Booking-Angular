import { passengerdetails } from "./passengerdetails";

export class Flightbooking {
    flightBookingId!: number;
    Username!: string;
    UserEmail!: string;
    Userid?: string;
    Triptype?: string;
    Discountcode!: string;
    Selectedseatonward!: string;
    Selectedseatreturn!: string;
    onwarddate!: Date;
    returndate!: Date;
    Amount!:number;
   
    airlinename!: string;
    Airlinelogo!: string;
    ReturnAmount!: number;
    ReturnAirlinename?: string;
    ReturnAirlinelogo!: string;
    totalamount!: number;
    status!: string;
    Fromplace!: string;
    Toplace!: string;
    Mealtype!: string;
    ReturnMealtype!: string;
    Pnrnumber!: number;
    bookeddate!: Date;
    numberofseats!: number;
    passengerdetails!:passengerdetails[];
}
import { Component } from '@angular/core';
import { CarService } from '../servies/car-service.service'; // Ensure the correct service path

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent {
  bookingId: string = '';
  message: string = '';

  constructor(private carService: CarService) {}

  cancelBooking(): void {
    if (!this.bookingId) {
      this.message = 'Please enter a valid booking ID.';
      return;
    }

    this.carService.cancelBooking(this.bookingId).subscribe(
      (response: any) => {
        this.message = 'Booking canceled successfully.';
      },
      (error: any) => {
        this.message = 'Failed to cancel booking. Please check the booking ID and try again.';
        console.error('Error canceling booking:', error);
      }
    );
  }
}
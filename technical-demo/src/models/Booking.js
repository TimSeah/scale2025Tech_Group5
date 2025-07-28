/**
 * Booking Model - Data structure for passenger bookings
 * S.C.A.L.E 2025 Technical Demo
 */

class Booking {
    constructor(data = {}) {
        // TODO: Define booking properties
        this.id = data.id || '';
        this.passengerName = data.passengerName || '';
        this.flightId = data.flightId || '';
        this.bookingDate = data.bookingDate || null;
        this.travelDate = data.travelDate || null;
        this.classOfService = data.classOfService || 'Economy';
        this.price = data.price || 0;
        this.status = data.status || 'Confirmed';
        this.paymentStatus = data.paymentStatus || 'Pending';
        this.loyaltyTier = data.loyaltyTier || 'None';
        this.specialRequests = data.specialRequests || [];
    }

    /**
     * Calculate days until travel
     */
    getDaysUntilTravel() {
        // TODO: Calculate booking lead time
        if (this.travelDate) {
            const today = new Date();
            const travel = new Date(this.travelDate);
            return Math.ceil((travel - today) / (1000 * 60 * 60 * 24));
        }
        return 0;
    }

    /**
     * Get booking lead time in days
     */
    getBookingLeadTime() {
        // TODO: Calculate how far in advance booking was made
        if (this.bookingDate && this.travelDate) {
            const booking = new Date(this.bookingDate);
            const travel = new Date(this.travelDate);
            return Math.ceil((travel - booking) / (1000 * 60 * 60 * 24));
        }
        return 0;
    }

    /**
     * Check if booking is eligible for upgrade
     */
    isUpgradeEligible() {
        // TODO: Determine upgrade eligibility based on loyalty and price
        return this.loyaltyTier !== 'None' && this.classOfService === 'Economy';
    }

    /**
     * Get revenue category
     */
    getRevenueCategory() {
        // TODO: Categorize booking by revenue value
        if (this.price < 200) {
            return 'Low Value';
        } else if (this.price < 500) {
            return 'Medium Value';
        } else {
            return 'High Value';
        }
    }

    /**
     * Calculate cancellation risk score
     */
    getCancellationRisk() {
        // TODO: Assess likelihood of cancellation
        const leadTime = this.getBookingLeadTime();
        const daysToTravel = this.getDaysUntilTravel();
        
        // Simple risk scoring logic
        let risk = 0.1; // Base risk
        
        if (leadTime < 7) risk += 0.2; // Last minute bookings higher risk
        if (daysToTravel > 30) risk += 0.1; // Far future bookings higher risk
        if (this.paymentStatus === 'Pending') risk += 0.3;
        
        return Math.min(risk, 1.0);
    }
}

export default Booking;

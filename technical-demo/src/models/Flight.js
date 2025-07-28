/**
 * Flight Model - Data structure for flight operations
 * S.C.A.L.E 2025 Technical Demo
 */

class Flight {
    constructor(data = {}) {
        // TODO: Define flight properties
        this.id = data.id || '';
        this.flightNumber = data.flightNumber || '';
        this.origin = data.origin || '';
        this.destination = data.destination || '';
        this.departureTime = data.departureTime || null;
        this.arrivalTime = data.arrivalTime || null;
        this.aircraft = data.aircraft || null;
        this.status = data.status || 'Scheduled';
        this.passengerCount = data.passengerCount || 0;
        this.capacity = data.capacity || 0;
        this.revenue = data.revenue || 0;
        this.delay = data.delay || 0;
    }

    /**
     * Calculate flight occupancy rate
     */
    getOccupancyRate() {
        // TODO: Calculate passenger occupancy percentage
        return this.capacity > 0 ? (this.passengerCount / this.capacity) : 0;
    }

    /**
     * Calculate revenue per seat
     */
    getRevenuePerSeat() {
        // TODO: Calculate revenue efficiency
        return this.passengerCount > 0 ? (this.revenue / this.passengerCount) : 0;
    }

    /**
     * Get flight duration in minutes
     */
    getDuration() {
        // TODO: Calculate flight duration
        if (this.departureTime && this.arrivalTime) {
            const departure = new Date(this.departureTime);
            const arrival = new Date(this.arrivalTime);
            return Math.ceil((arrival - departure) / (1000 * 60));
        }
        return 0;
    }

    /**
     * Check if flight is on time
     */
    isOnTime() {
        // TODO: Check on-time performance
        return this.delay <= 15; // Consider 15 minutes or less as on-time
    }

    /**
     * Get flight performance status
     */
    getPerformanceStatus() {
        // TODO: Determine performance status
        if (this.delay <= 15) {
            return { status: 'On Time', color: 'Success' };
        } else if (this.delay <= 60) {
            return { status: 'Delayed', color: 'Warning' };
        } else {
            return { status: 'Severely Delayed', color: 'Error' };
        }
    }
}

export default Flight;

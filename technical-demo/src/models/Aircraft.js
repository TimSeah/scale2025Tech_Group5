/**
 * Aircraft Model - Data structure for fleet management
 * S.C.A.L.E 2025 Technical Demo
 */

class Aircraft {
    constructor(data = {}) {
        // TODO: Define aircraft properties
        this.id = data.id || '';
        this.model = data.model || '';
        this.registration = data.registration || '';
        this.age = data.age || 0;
        this.flightHours = data.flightHours || 0;
        this.cycles = data.cycles || 0;
        this.status = data.status || 'Unknown';
        this.location = data.location || '';
        this.nextMaintenance = data.nextMaintenance || null;
        this.healthScore = data.healthScore || 0;
        this.components = data.components || [];
    }

    /**
     * Calculate aircraft utilization rate
     */
    getUtilizationRate() {
        // TODO: Calculate utilization based on flight hours and age
        return this.flightHours / (this.age * 365 * 12); // Rough calculation
    }

    /**
     * Get maintenance status
     */
    getMaintenanceStatus() {
        // TODO: Determine maintenance status based on schedule
        const today = new Date();
        const nextMaint = new Date(this.nextMaintenance);
        const daysUntilMaintenance = Math.ceil((nextMaint - today) / (1000 * 60 * 60 * 24));
        
        if (daysUntilMaintenance < 0) {
            return { status: 'Overdue', urgency: 'Critical' };
        } else if (daysUntilMaintenance <= 7) {
            return { status: 'Due Soon', urgency: 'High' };
        } else if (daysUntilMaintenance <= 30) {
            return { status: 'Scheduled', urgency: 'Medium' };
        } else {
            return { status: 'On Schedule', urgency: 'Low' };
        }
    }

    /**
     * Check if aircraft is available for service
     */
    isAvailable() {
        // TODO: Check availability based on status and maintenance
        return this.status === 'In Service' && this.healthScore > 0.7;
    }
}

export default Aircraft;

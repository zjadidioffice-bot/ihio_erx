const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getHealth() {
    const response = await fetch(`${API_BASE_URL}/api/health`);

    const data = await response.json();

    if (!response.ok || !data.success) {
        throw new Error(data.message || "backend connection failed")
    }
    return data;
}

export async function openCpartySession(credentials) {
    const response = await fetch(
        `${API_BASE_URL}/erx-core/v3/service/auth/session/cparty/open`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }
    );
    const data = await response.json();
    if (!response.ok || !data.success) {
        throw new Error(data.message || "doctor login failed");
    }
    return data
}


export async function openCitizenSession(patientData) {
    const response = await fetch(
        `${API_BASE_URL}/erx-core/v3/service/auth/session/citizen/open`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patientData)
        }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
        throw new Error(data.message || "patient session creation failed");
    }

    return data;
}

export async function fetchPrescription(prescriptionData) {
    const response = await fetch(
        `${API_BASE_URL}/erx-core/v3/service/prescription/fetch/printcode/new`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(prescriptionData)
        }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
        throw new Error(data.message || "prescription fetch failed");
    }

    return data;
}


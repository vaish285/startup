import { Lead } from '../types';

export const submitLead = async (data: Lead): Promise<{ success: boolean; message: string }> => {
  try {
    // Using Web3Forms for submission
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        access_key: "9d3a3742-d9e5-4183-a1fd-bf8c18e3eb44",
        name: data.name,
        email: data.email,
        phone: data.phone,
        service_interest: data.service_interest,
        message: data.message,
        // Removed is_student_founder from email payload as requested
        subject: `ARTHANTA Inquiry: ${data.name} - ${data.service_interest}`,
        from_name: "ARTHANTA Website"
      }),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: result.message || "Message sent successfully!",
      };
    } else {
      console.error("Web3Forms submission failed:", result);
      return {
        success: false,
        message: result.message || "Failed to send message. Please try again.",
      };
    }
  } catch (error) {
    console.error("Network error during form submission:", error);
    return {
      success: false,
      message: "Network error. Please check your connection and try again.",
    };
  }
};
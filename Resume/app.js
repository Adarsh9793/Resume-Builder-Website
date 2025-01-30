function generateResume() {
    // Capture values from input fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const job_role = document.getElementById("job role").value;
    const profile_summary= document.getElementById("profile summary").value;
    const additional_education= document.getElementById("additional education").value;
    const post_experience= document.getElementById("post experience").value;
    const projects= document.getElementById("projects").value;
    
    const skills = document.getElementById("skills").value;

    // Check if all fields are filled
    if (!name || !email || !phone || !address || !education || !experience || !job_role || !profile_summary || !additional_education || !post_experience || !projects || !skills) {
        alert("Please fill in all fields to generate the resume.");
        return;
    }

    // Create the resume HTML content
    const resumeContent = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        
        <h4>Education</h4>
        <p>${education}</p>
        
        <h4>Experience</h4>
        <p>${experience}</p>

        <h4>Job role</h4>
        <p>${job_role}</p>

        <h4>Profile summary</h4>
        <p>${profile_summary}</p>

         <h4>Additional education</h4>
        <p>${additional_education}</p>

        <h4>Post experience</h4>
        <p>${ post_experience}</p>

        <h4>Projects</h4>
        <p>${projects}</p>


        <h4>Skills</h4>
        <p>${skills}</p>
    `;

    // Insert the generated resume content into the resume section
    document.getElementById("resumeOutput").innerHTML = resumeContent;
}
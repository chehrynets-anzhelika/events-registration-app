export default function validateInput(fullName, email, dateOfBirth, source) {
    let errors = {}

    if(!fullName && !email && !dateOfBirth && !source) {
        errors.all = "Please fill in all fields";
    } else {
         if (!fullName) {
        errors.fullName = "Please enter your full name";
    } else if (fullName.trim().split(' ').length < 2) {
        errors.fullName = "Full name must include at least two words";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.email = "Please enter your email";
    } else if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email";
    }
    if (!dateOfBirth) {
        errors.dateOfBirth = "Please enter your date of birth";
    } else {
        const age = new Date().getFullYear() - new Date(dateOfBirth).getFullYear();
        if (age < 18) {
            errors.dateOfBirth = "You must be at least 18 years old";
        }
    }
    if (!source) {
        errors.source = "Please choose where you heard about the event";
    }
    }
    return errors;
}
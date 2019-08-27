export const FORM_FIELDS =  [
    {
        key: "first_name",
        label: "First Name",
        type: "text",
        default_value: "Peter",
        required: true
    },
    {
        key: "last_name",
        label: "Last Name",
        type: "text",
        default_value: "Gregory",
        required: true
    },
    {
        key: "email",
        label: "Email",
        type: "email",
        default_value: "orpheus@example.com",
        required: true,
        min_len: 5,
        max_len: 320
    },
    {
        key: "gender",
        label: "Gender",
        type: "dropdown",
        default_value: "Gender",
        options: ["Male", "Female", "Other"],
        required: true
    },
    {
        key: "date",
        label: "What's your date of birth?",
        type: "date",
        default_value: "7/4/1776",
        required: true
    },
    {
        key: "number_hackathons",
        label: "How many hackathons have you been to?",
        type: "number",
        default_value: "0",
        required: true,
        min: 0,
        max: 2019
    },
    {
        key: "why_join",
        label: "Why do you want to attend Raven Hack?",
        type: "textarea",
        default_value: "I want to attend because...",
        required: true,
        min_length: 50,
        max_length: 5000
    },
    {
        key: "allergies",
        label: "Any allergies we should know about?",
        type: "textarea",
        default_value: "I'm allergic to peanuts...",
        required: false
    },
    {
        key: "resume",
        label: "Resume",
        type: "file",
        default_value: "Your Resume",
        required: false
    },

];
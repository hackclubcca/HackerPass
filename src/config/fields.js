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
        required: true
    },
    {
        key: "date",
        label: "Date",
        type: "date",
        default_value: "7/4/1776",
        required: true
    },
    {
        key: "why_join",
        label: "Why do you want to attend Raven Hack?",
        type: "textarea",
        default_value: "I want to attend because...",
        required: true
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
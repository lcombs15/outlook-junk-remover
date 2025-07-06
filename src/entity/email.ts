export default interface Email {
    id: string,
    receivedDateTime: string,
    subject: string,
    from: EmailAddress,
    sender: EmailAddress,
    toRecipients: Array<EmailAddress>,
    ccRecipients: Array<EmailAddress>,
    bccRecipients: Array<EmailAddress>,
    body: {
        contentType: string,
        content: string
    }
}

interface EmailAddress {
    emailAddress: {
        name: string,
        address: string,
    }
}
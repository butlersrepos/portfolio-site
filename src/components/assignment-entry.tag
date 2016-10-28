assignment-entry
    .resume-date-entry
            .resume-event
                | 'Client: '
                a(target='_blank', href="{ client_link }")
                    | { client }
                | , { location }
            .resume-event-date
                | { start } - { end}
            .resume-paragraph
                | { description }
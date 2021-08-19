Tweaks to Bootstrap CSS
1. X Turn off rounded corners
1. X Default font size 16 -> 20px
1. X Primary color to NC blue
1. X Secondary color to NC gray (used in footer)
1. X Move remaining CSS into sass file

Create initial landing page
1. X Create Home view
1. X Move over content from Aaron's mockup/index.html
1. X Extract sign up form into EmailSignUp component
1. X Wire up component to Gumroad? - punt to Aaron
1. X Extract Header component
1. X Extract Footer component
1. X Create NotFound view
1. X Wire up router to use NotFound view for 404

Create worksheet
1. X Create route for /worksheet
1. X Create Worksheet view
1. X ask for form field on fresh worksheet when showFieldQuestions = false
1. X Next click should validate form field and set showFieldQuestions = true
1. X show full worksheet when form field is entered showFieldQuestions = true
1. X wire up Start Over link to clear data and go back to start
1. X figure out data structure
1. X each question builds up a single data structure of the business requirements   
1. X start over wipes data structure, which will show form field question again
1. X Create QuestionFieldName component, just text for now
1. X Create QuestionRequired component, Yes / No
1. X Create QuestionAllowEmpty component, Yes / No
1. X Create QuestionFieldType component, choose one of many
1. X Create WorksheetComplete component
1. Create WorksheetResults component
    * X accepts data structure and calculates validation rules from it
    * What are the rules for the remaining form inputs?
    * How do I use? - expand to show some text (text TBD)
    * copy to clipboard use JS api
1. Text - type password
    * any rules to suggest or do we need multiple fields for confirmed or something more complex?
1. Text - type email
    * how important is it to you that the email is correct? dns
    * also suggest typo package or feedback loop
1. Dropdown list - let them specify allowed values? might be stupid if super long or from database
    * ask if from db then stub out exists rule?
    * otherwise stub out in rule with array placeholder?
1. checkbox / radio - I don't remember comment about arrays not supported, like

mixin for setAnswer

Add ?ref to NC links or any other CTA-ish stuff
Should anything take you back from Worksheet to Home?
there has to be a better way to use header/footer on every view, solve fragment complaint
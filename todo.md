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
1. Create route for /worksheet
1. Create Worksheet view
1. ask for form field on fresh worksheet
1. show full worksheet when form field is entered
1. each question builds up a single data structure of the business requirements
1. start over wipes data structure, which will show form field question again
1. Create QuestionFieldName component, just text for now
1. Create QuestionRequired component, Yes / No
1. Create QuestionFieldType component, choose one of many
1. Create WorksheetResults component
    * accepts data structure and calculates validation rules from it
    * How do I use? - expand to show some text (text TBD)
    * copy to clipboard use JS api
1. Create WorksheetComplete component
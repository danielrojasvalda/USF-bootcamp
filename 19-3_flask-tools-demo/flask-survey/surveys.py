class Question:
    """Question on a questionnaire."""

    def __init__(self, question, choices=None, allow_text=False):
        """Create question (assume Yes/No for choices."""

        if not choices:
            choices = ["Yes", "No"]

        self.question = question
        self.choices = choices
        self.allow_text = allow_text


class Survey:
    """Questionnaire."""

    def __init__(self, title, instructions, questions):
        """Create questionnaire."""

        self.title = title
        self.instructions = instructions
        self.questions = questions


satisfaction_survey = Survey(
    "Customer Satisfaction Survey",
    "Please fill out a survey about your experience with us.",
    [
        Question("Have you shopped here before?"),
        Question("Did someone else shop with you today?"),
        Question("On average, how much do you spend a month on frisbees?",
                 ["Less than $10,000", "$10,000 or more"]),
        Question("Are you likely to shop here again?"),
    ])

personality_quiz = Survey(
    "Rithm Personality Test",
    "Learn more about yourself with our personality quiz!",
    [
        Question("Do you ever dream about code?"),
        Question("Do you ever have nightmares about code?"),
        Question("Do you prefer porcupines or hedgehogs?",
                 ["Porcupines", "Hedgehogs"]),
        Question("Which is the worst function name, and why?",
                 ["do_stuff()", "run_me()", "wtf()"],
                 allow_text=True),
    ]
)

my_quiz = Survey(
    "Software evaluation questionnaire",
    "Thank you for visiting our software survey. By filling out this 5 minute survey, you will help us identify issues and provide you with the best quality product and service.",
    [
        Question("How easy was it to install our software?",
                 ["Easy", "Medium", "Hard"],
                ),
        Question("How user-friendly is our software's interface?",
                 ["Friendly", "Medium", "Not friendy"],
                 ),
        Question("Is the customer support for our software helpful?",
                ["Yes", "Sometimes", "No"],
        ),
        Question("WHow often does our software freeze or crash?",
                 ["A few times", "Once a month", "Once a week"],
                 ),
        Question("How likely are you to recommend our software to others?",
                 ["Likely", "No likely"],
                 allow_text=True,
                 ),
    ],
)

surveys = {
    "satisfaction": satisfaction_survey,
    "personality": personality_quiz,
    "myquiz": my_quiz,
}
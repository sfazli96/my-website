from rest_framework.response import Response
from rest_framework.decorators import api_view
import random

fun_facts = [
    "Did you know? Honey never spoils!",
    "Random fact: Bananas are berries, but strawberries aren't.",
    "Fun fact: A group of flamingos is called a 'flamboyance'.",
    "Did you know? Octopuses have three hearts!",
    "Random fact: The Eiffel Tower can be 15 cm taller during the summer."
]

inspirational_quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb"
]

@api_view(['GET'])
def greeting(request):
    random_fact = random.choice(fun_facts)
    return Response({
        "message": "Hello, welcome to my site!",
        "fun_fact": random_fact
    })


@api_view(['GET'])
def about(request):
    random_quote = random.choice(inspirational_quotes)
    return Response({
        "info": "This is my simple website built using React and Django.",
        "inspiration": random_quote
    })

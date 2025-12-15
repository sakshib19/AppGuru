import openai
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_tutorial(app_name, language):
    prompt = f"""
    Create a simple step-by-step tutorial for the app "{app_name}" 
    in {language}. Target audience: 40+ year old Indian users who
    are unfamiliar with technology. Use simple words, short steps,
    and safe guidance.
    """

    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    return response["choices"][0]["message"]["content"]

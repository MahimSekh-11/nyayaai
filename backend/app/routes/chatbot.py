from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class ChatRequest(BaseModel):
    question: str
    language: str  # 'en', 'hi', 'bn'

@router.post("/ask")
async def ask_question(data: ChatRequest):
    # TODO: Call intent classifier and RAG-based answer generator here
    answer = "Sample answer to your question in " + data.language
    category = "Land Dispute"
    return {"category": category, "answer": answer}

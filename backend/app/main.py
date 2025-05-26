from fastapi import FastAPI
from app.routes import chatbot, document, authenticity, correction, voice_tts

app = FastAPI(title="NyayaAI Backend")

app.include_router(chatbot.router, prefix="/chatbot")
app.include_router(document.router, prefix="/document")
app.include_router(authenticity.router, prefix="/authenticity")
app.include_router(correction.router, prefix="/correction")
app.include_router(voice_tts.router, prefix="/voice")

@app.get("/")
async def root():
    return {"message": "NyayaAI Backend is running"}

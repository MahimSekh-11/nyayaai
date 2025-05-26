from fastapi import APIRouter, UploadFile, File
from fastapi.responses import JSONResponse
from app.models.ocr import run_ocr
from app.models.classifier import classify_document
from app.models.summarizer import summarize_text

router = APIRouter()

@router.post("/upload")
async def upload_document(file: UploadFile = File(...)):
    image_bytes = await file.read()
    text = run_ocr(image_bytes)            # extract raw text from image
    doc_type = classify_document(text)     # classify document type
    summary = summarize_text(text)         # extract real key points
    return JSONResponse({"doc_type": doc_type, "summary": summary})

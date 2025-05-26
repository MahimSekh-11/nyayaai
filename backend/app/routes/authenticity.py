from fastapi import APIRouter

router = APIRouter()

@router.post("/check")
async def check_authenticity(document_id: str):
    # TODO: Run fake/tampered document detection
    status = "Original"  # or "Tampered", "Fake"
    reasons = ["Signature verified", "Metadata matches"]
    return {"status": status, "reasons": reasons}

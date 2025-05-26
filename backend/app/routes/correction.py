from fastapi import APIRouter

router = APIRouter()

@router.post("/roadmap")
async def get_correction_roadmap(doc_type: str, issue_type: str):
    # TODO: Return steps, links, time estimates for correction
    roadmap = [
        "Step 1: Visit local registrar",
        "Step 2: Fill application form",
        "Step 3: Submit required documents",
        "Estimated time: 15 days",
        "Apply online at https://example.gov"
    ]
    return {"roadmap": roadmap}

def classify_document(text: str) -> str:
    """
    Classify document type based on keywords (prototype logic).
    """
    text_lower = text.lower()
    if "marriage" in text_lower:
        return "Marriage Certificate"
    elif "land" in text_lower:
        return "Land Paper"
    elif "fir" in text_lower or "first information report" in text_lower:
        return "FIR Document"
    elif "court" in text_lower:
        return "Court Order"
    elif "aadhar" in text_lower:
        return "Aadhar Card"
    else:
        return "Unknown Document"
def summarize_text(text: str) -> dict:
    """
    Extract key information (improved summary for documents).
    """
    summary = {}
    lines = text.splitlines()
    for line in lines:
        line_lower = line.lower()
        if "name" in line_lower and "father" not in line_lower:
            summary["Name"] = line.split(":")[-1].strip()
        elif "father" in line_lower:
            summary["Father's Name"] = line.split(":")[-1].strip()
        elif "age" in line_lower:
            summary["Age"] = line.split(":")[-1].strip()
        elif "dob" in line_lower or "date of birth" in line_lower:
            summary["Date of Birth"] = line.split(":")[-1].strip()
        elif "address" in line_lower:
            summary["Address"] = line.split(":")[-1].strip()
        elif "document number" in line_lower or "no." in line_lower:
            summary["Document Number"] = line.split(":")[-1].strip()
        elif "date" in line_lower and "birth" not in line_lower:
            summary["Issued Date"] = line.split(":")[-1].strip()
        elif "gender" in line_lower:
            summary["Gender"] = line.split(":")[-1].strip()
        elif "registration" in line_lower:
            summary["Registration Number"] = line.split(":")[-1].strip()
    return summary
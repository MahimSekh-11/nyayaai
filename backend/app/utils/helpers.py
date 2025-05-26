import io
from PIL import Image
import pytesseract

def run_ocr(image_bytes: bytes) -> str:
    image = Image.open(io.BytesIO(image_bytes))
    return pytesseract.image_to_string(image, lang='eng+hin+ben')

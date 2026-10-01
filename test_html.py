from pathlib import Path

html_file = Path("index.html")

assert html_file.exists(), "index.html does not exist"

html = html_file.read_text(
    encoding="utf-8"
).lower()

required_elements = [
    "<html",
    "<head",
    "<body",
    "<title",
    "<form",
    'id="name"',
    'id="email"',
    'id="phone"',
    'id="course"',
    'id="year"',
    "<select",
    "<button",
    "style.css",
    "script.js"
]

for element in required_elements:

    assert element in html, (
        f"Missing required element: {element}"
    )

print("================================")
print("   ALL HTML TESTS PASSED")
print("================================")

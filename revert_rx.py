svg_path = "public/projects/pawsome/pawsome1.svg"

with open(svg_path, "r") as f:
    lines = f.readlines()

changes = {
    # photo block pattern rect — remove rx="20"
    25: lines[24].replace(' rx="20"', ''),
    # phone screen backing rect inside g — restore rx="17.8397"
    447: lines[446].replace('rx="20"', 'rx="17.8397"'),
    # photo block clipPath rect — remove rx="20"
    577: lines[576].replace(' rx="20"', ''),
    # phone screen clipPath rect — restore rx="17.8397"
    631: lines[630].replace('rx="20"', 'rx="17.8397"'),
}

for line_num, new_line in changes.items():
    lines[line_num - 1] = new_line

with open(svg_path, "w") as f:
    f.writelines(lines)

print("Done")
for line_num in changes:
    print(f"Line {line_num}:", lines[line_num - 1].strip())

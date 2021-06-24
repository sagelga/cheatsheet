def main():
    adder(12, 24)       # แจกแจงตัวแปร 1 + เรียกตัวคำนวณ adder
    adder(45, 725)      # แจกแจงตัวแปร 2 + เรียกตัวคำนวณ adder
    adder(27, 83)       # แจกแจงตัวแปร 3 + เรียกตัวคำนวณ adder

def adder(var1, var2):
    var3 = var1 + var2  # คำนวณเลข
    print(var3)         # คำนวณเลข

main()                  # เรียกฟังก์ชัน main
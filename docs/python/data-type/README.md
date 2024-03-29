# ประเภทข้อมูล
ประเภทข้อมูล หรือ Data Type คือลักษณะการจัดเก็บข้อมูลที่จะสามารถเก็บข้อมูลและใช้งานตามลักษณะที่ได้ระบุไว้ใน Python

โดยใน Python นั้นมีให้เราเลือกเก็บมากมาย แต่ก็จะมีเพียง 6 ประเภทที่เราจะได้ใช้งานกันบ่อย ๆ ดังต่อไปนี้

| ประเภทข้อมูล   | ประเภทข้อมูลที่จัดเก็บ    | ตัวอย่างข้อมูลที่จัดเก็บได้  |
|-----------	|---------------------|---------------------|
| String    	| ตัวอักษร           	| `"kumamon"` `"1112"`    |
| Boolean   	| ค่าจริงหรือเท็จ         | `True` `False`        	|
| Float     	| ค่าที่มีจุดทศนิยม      	| `1.00` `1.112` `-0.999`   |
| Integer   	| จำนวนเต็ม            | `2000` `0` `-1`          	 |
| List   	    | ลิสต์                 | `[1, 0, -555]`        |
| Dictionary   	| ดิกชันแนรี             | `[{'a': '1112', 'b': 0, 'c': 555}]`          	 |

## วิธีการเก็บข้อมูล
เนื่องจาก Python จะทำการเลือกประเภทข้อมูลให้โดยอัตโนมัติหากผู้ใช้งานไม่ได้ทำการระบุ เราจึงสามารถจัดเก็บเข้าไปอยู่ในตัวแปรได้เลยดังนี้

```python
name = "Jeff Bessus"
age = 22
height = 123.45
sus_flag = False
tag = ['Amogus', 'Red', 'Reporter']
```

และตัวแปร `name`, `age`, `height`, `sus_flag`, `tag` ก็จะมีการเก็บข้อมูลเป็นประเภท String, Integer, Float, Boolean, List ตามลำดับ

## วิธีตรวจสอบประเภทของตัวแปร
บางครั้งเราอยากที่จะทราบว่าตัวแปรหรือข้อมูลแบบนี้มีการเก็บข้อมูลเป็นประเภทใด เราก็สามารถทำการตรวจสอบได้โดยการใช้ฟังก์ชัน `type()` ในการตรวจสอบได้ และ Python ก็จะทำการคืนค่าประเภทตัวแปรออกมาให้เรารับทราบ

```python
var = "Hello"
type(var) # <class 'str'> (เป็นประเภท String)

var = "1234"
type(var) # <class 'str'> (เป็นประเภท String)

var = 1234
type(var) # <class 'int'> (เป็นประเภท Integer)

var = 1234.56
type(var) # <class 'float'> (เป็นประเภท Float)

var = True
type(var) # <class 'bool'> (เป็นประเภท Boolean)
```

## การแปลงประเภทตัวแปร
จากที่เราได้เรียนวิธีการใช้ฟังก์ชัน `input()` ไปเมื่อหัวข้อที่แล้ว เมื่อเราเข้าไปอ่านใน Documentation แล้วก็จะได้คำอธิบายมาดังนี้

> If the prompt argument is present, it is written to standard output without a trailing newline. **The function then reads a line from input, converts it to a string** (stripping a trailing newline), and returns that. When EOF is read, EOFError is raised.

หรือก็คือการอ่านแต่ละบรรทัด ด้วยข้อมูลใดก็ตามจะมีการแปลงมาเป็น String เสมอ ตัวอย่างเช่น

```python
var = input()  # ใส่ค่า "Hello World" เข้ามาเป็น input
print(var)  # ผลลัพทืก็จะออกมาเป็น "Hello World"

var = input()  # ใส่ค่า 1112 เข้ามาเป็น input
print(var)  # ผลลัพทืก็จะออกมาเป็น "1112"

var = input()  # ใส่ค่า True เข้ามาเป็น input
print(var)  # ผลลัพทืก็จะออกมาเป็น "True"

var = input()  # ใส่ค่า 11.12 เข้ามาเป็น input
print(var)  # ผลลัพทืก็จะออกมาเป็น "11.12"
```

แล้วถ้าเราอยากจะรับข้อมูลมาเป็นประเภทอื่นบ้างหล่ะ เช่น Integer หรือ Boolean เพื่อที่เราจะได้เอามันมาทำ Operation ที่ใช้ได้กับพวกประเภทดังกล่าวได้เท่านั้น ตัวอย่างเช่น

```python
var1 = input()  # ใส่ค่า 12
var2 = input()  # ใส่ค่า 14

var3 = var1 * var2  # คาดหวังว่า 12 x 14 = 168

print(var3)
```

แล้วมันก็ขึ้น Error อ่ะ เพราะว่ามันเป็น String ทั้งสองตัวแปรเลย จึงไม่สามารถเอามันมาคูณกันได้ ดังนั้นเราจึงต้องทำการเปลี่ยนประเภทตัวแปร (Data Casting) ซึ่งก็สามารถทำได้หลายวิธีมากเลย แต่เราจะทำด้วยการใช้ฟังก์ชันในหัวข้อถัดไป

### วิธีการแปลง
เราสามารถใช้งานฟังก์ชันที่อยู่ใน Python ในการเปลี่ยนแปลงค่าได้ด้วยวิธีดังนี้

| ประเภทตัวแปร 	| วิธีการแปลง 	|
|-----------	|-----------	|
| String    	| str()  	|
| Boolean   	| bool()      |
| Float     	| float()   	|
| Integer   	| int()     	|

**โดย Python จะพยายามเก็บข้อมูลและแปลงประเภทข้อมูลให้อัตโนมัติ หากมีความจำเป็น**

ตัวอย่างเช่น (การแปลง String ไปเป็น Integer)
```python
var = "1112"
var = int(var)
print(type(var))  # ก็จะออกมาเป็น <class 'int'>
```

ตัวอย่างที่ 2 (การเปลี่ยน Float ไปเป็น Integer)
```python
var = 11.12
var = int(var)
print(type(var)) # ก็จะออกมาเป็น <class 'int'>
```

และเนื่องจากฟังก์ชันจะมีการคืนค่าทันที เราจึงสามารถสรุปรวบยอดเป็นบรรทัดเดียวได้ดังนี้
```python
var1 = int(input())
var1 = bool(input())
var1 = float(input())
```

และเนื่องจากมี data type มีมากกว่า 4 ประเภท ตามที่พี่มงได้อธิบายไว้<br>
การแปลงประเภทข้อมูลชนิดอื่นๆ จะอยู่ใน lecture ถัดๆไปนะจ๊ะ

::: warning Challenge
น้องๆ ลองทดสอบดูครับ ตัวอย่างเช่น

```python
var1 = 1112
var2 = 0.1112
var3 = var1 + var2
```

พี่มงจึงได้อยากรู้ว่า `var3` นั้นได้จัดเก็บเป็นข้อมูลประเภทใด โดยการใช้ `type()` และก็ได้ผลบอกว่ามันคือประเภท float<br>
จึงถามน้องๆว่า var3 ทำไมจึงจัดเก็บไปเป็นประเภท float ครับ?
:::

---

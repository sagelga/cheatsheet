# Access Visibilty

โดยภายใน attribute ใดๆ ก็จะมีการตั้งค่าให้มีระดับการเข้าถึงที่ต่างกันได้ก็แล้วแต่ความจำเป็นครับ โดยก็จะมีหลักๆอยู่เพียง 4 แบบ ดังนี้ครับ
[[toc]]

## Private (`-`)
<<< @/code/DataMember/AccessVisibility/Private/PrivateVisibleExample.java

## Protected (`#`)
เป็นการบอกว่า ให้ลูก (Class ที่ทำการ Inherit มาจาก Class นี้) และตัวเอง สามารถเข้าไปทำการเรียกดูตัวแปรนี้ได้

<<< @/code/DataMember/AccessVisibility/Protected/ProtectedVisibleExample.java

## Package / Default (`~`)
โดยหากว่าเพื่อนๆไม่เขียนระดับการเข้าถึง ก็จะได้เป็นแบบนี้ครับ แบบ Package<br>
ทำให้ตัว attribute นี้จะเข้าถึงได้ก็จะต้องเป็น Class ที่อยู่ใน package (folder) เดียวกัน และเป็นตัว Object ของตัวมันเองครับ
::: warning
โดยปกติแล้ว การสร้าง class ขึ้นมาจะแยกโฟล์เดอร์ให้เป็นตามประเภทการทำงานครับ เช่นทำหน้าที่เป็น controller เป็นต้น ก็อาจจะไปอยู่ในโฟล์เดอร์​ `controller/` นั่นเอง
:::

<<< @/code/DataMember/AccessVisibility/Package/PackageVisibleExample.java

## Public (`+`)
เป็นการตั้งว่าให้ตัวแปรนี้สามารถเข้าถึงได้หมดเลย ไม่มีข้อจำกัดกับ class อื่นๆเลยทั้งสิ้น

<<< @/code/DataMember/AccessVisibility/Public/PublicVisibleExample.java

::: tip ตารางเปรียบเทียบ
|   | Private | Protected | Package (Default) | Public |
|---|---------|-----------|-------------------|--------|
|   |         |           |                   |        |
|   |         |           |                   |        |
|   |         |           |                   |        |
:::
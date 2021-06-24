# Assumption Test
## Normality Test

ค่าต้องกระจายแบบ Normal Distribution ไม่เบ้ไปมา

1. สร้าง P-Plots
- Analyze → Descriptive Statistics → P-Plots … → ใส่ตัวแปร → กด OK

2. สร้าง report statistics
- Analyze → Descriptive Statistics → Frequencies → ใส่ตัวแปร → ไปที่ Statistic แล้วติ๊กทุกอย่าง
  - ยกเว้น Cut point, Percentile, Values are group midpoint 
  → กด OK 

3. สร้างกราฟ Historgram
- Analyze → Descriptive Statistics → Frequencies → Chart → Histogram + เลือก Show normal curve

4. ทำ K-S Test
- Analyze → Descriptive Statistics → Explore → ใส่ตัวแปรใน Dependent List → กด Plots → ติ้ก Normality plot with test → กด Continue → ไปที่ Option → เลือก Exclude cases pairwise

5. ทำ Levene's test
- Analyze → Descriptive Statistics → Explore → ใส่ตัวแปรใน Dependent List → กด Plots → ติ้ก Normality plot with test → ช่อง Spread vs Level with Lavene Test เลือก Untransformed


## Remove Bias
ด้วยการ[หา Outlier + Influence + Leverage](/Data/DataCleansing/#outlier-detection)

## Heterogeneity of variance
Analyze → Descriptive Statistics → Explore → ใส่ Dependent List, Factor List → Plot → เลือก Untransformed

ถ้า significant (ค่าน้อยกว่า 0.05) = ไม่มี Heterogeneity of variance = ดี

## Linearity
ข้อมูลมีการเรียงอย่างเป็นเส้นตรง + เช็คว่าตัวแปรนั้นเป็นแบบ Continuous 
Graph → Chart Builder → Scatter/Dot → Simple Scatter → เอาตัวแปรไปใส่กราฟ → กด OK

## Correlations Model

Analyze > Correlation > Bivariate → ใส่ตัวแปรเข้า Variable → ติ้กสื่งที่อยากได้

| **Pearson’s Correlations**  | **Spearman’s Correlations**               |
| --------------------------- | ----------------------------------------- |
| สำหรับ Linear Relationship  | สำหรับ Monotonic (Logsitics) Relationship |
| ค่าตัวแปรเป็นแบบ Continuous | ค่าตัวแปรเป็นแบบ Ordinal / Nominal        |

ถ้า `Spearman > Pearson` → model มีความเป็น monotonic แต่ไม่ใช่ linear
ทำให้ถ้าอยากใช้ linear model → ต้องทำ Transformation ก่อน


## Correlations Type
[http://www.differencebetween.net/business/marketing-business/differences-between-bivariate-and-partial-correlation/](http://www.differencebetween.net/business/marketing-business/differences-between-bivariate-and-partial-correlation/)

| **Bivariate**               | **Partial**                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| ความสัมพันธ์ระหว่าง A กับ B | ความเกี่ยวข้องกัน โดยที่ไม่มี C มาเกี่ยวด้วย                                                |
|                             | ให้ทำการใส่ตัวแปรที่ช่อง Controlling For เพื่อทำให้ตัวแปรนั้นไม่เกี่ยวข้องกับตัวแปรที่คำนวณ |

1. The bivariate correlation refers to the analysis to two variables, often denoted as X and Y – mainly for the purpose of determining the empirical relationship they have.
2. The partial correlation measures the degree between two random variables, with the effect of a set of controlling random variables removed.

## Chi-Square Test
การทดสอบ เพื่อวัดความเป็น Independent ของ 2 กลุ่ม

**Assumptions**
1. ตัวแปรต้น → ระดับหมวดหมู่
2. ข้อมูลที่เก็บมาอยู่ในหลายหมวดหมู่ไม่ได้ ต้องอยู่ในหมวดหมู่ใดหมวดหมู่หนึ่ง 

**Hypothesis**

| **Null**        | A & B มีความเป็น Independent ต่อกัน                       |
| --------------- | --------------------------------------------------------- |
| **Alternative** | A & B ไม่มีความเป็น Independent ต่อกัน (Dependent ต่อกัน) |


**How to use**<br>
Analyze > Descriptive Statistics > Crosstabs → Statistic → เอาประเภทไปใส่ Column และ Row → เลือก Chi-Square, Norminal (Contingency Coefficient, Phi & Cramer’s V, Lambda)

ไปที่ Cell แล้วเลือก Count (Observed, Expected), Z-Test (ทุกอัน), Percentage (ทุกอัน), Residual (Standardized)

**Fisher Exact Test**<br>
หากว่าค่า Sample Size นั้นน้อย (ค่า Expected Count ในตารางคาดเดา) ให้ใช้ Fisher Exact Test แทน
ไปที่ Exact → เลือก Exact

**Interpretation**<br>
โดยใช้ค่า Phi ( Φ ) หรือ/และ ค่า Cramér’s V 

|                      | Phi ( Φ )                         | Cramér’s V ( φ*c* ) |
| -------------------- | --------------------------------- | ------------------- |
| Dimension Limitation | หากตารางไม่ได้เป็นแบบ 2x2 ห้ามใช้ |                     |
|                      | ต้องมี 2 Dichtomous Variable      | Nominal Variable    |

แต่ถ้าตารางเป็น 2x2 จะใช้อันไหนก็ได้ ค่าเท่ากัน
เพื่อแสดงความสัมพันธ์ ว่าแน่นแฟ้นขนาดไหน โดยดูค่า absolute ของมัน

ดูความ Significant ในช่อง Asymp. Sig ในตาราง Chi-Square Test **sig ที่ >= 0.05**
หากมีค่าที่ไม่ sig = มีค่าในตัวแปรใดตัวแปรหนึ่งแจกแจงผิดปกติ = มีความสัมพันธ์ระหว่างตัวแปร = Fail Null Hypothesis


## Predictor (Independent Variable) Entry type

การเลือกนั้น ทำให้แล้วแต่ว่าแต่ละตัวแปรนั้นสำคัญมั้ย ถ้าไม่สำคัญก็ไม่ต้องเพื่ม

- Forced Entry (ENTER Mode) [เป็นค่า default]
    - เข้าทีเดียวทุกตัว ไม่สนใจว่าตัวแปรไหนจะสำคัญหรือไม่ และไม่เอาออกด้วย

- Enter and Remove (STEPWISE Mode)
    - เลือกตัวที่สำคัญที่สุดก่อน แล้วค่อยๆเพื่มทีละตัว ตามความสำคัญ หากไม่สำคัญก็ไม่ต้องเข้า

โดยการเลือกนั้น SPSS จะเลือกจากค่า Chi-Square ที่เปลี่ยนไป ว่าไปในทิศทางที่ดีขึ้นหรือไม่


## Durbin-Watson Statistics

ใช้เพื่อวัด Independent of Error (Observations)

**How to use**<br>
Linear Regression → ปุ่ม Statistics

**Interpretation**<br>
ค่าต้องอยู่เท่ากับ 2 ± 0.5 จะถือว่าดีมาก
หากค่าเกิน 2 ± 2 จะถือว่ารับไม่ได้ มีปัญหา Independent of Error

โดยค่าที่น้อยกว่า 2 คือความสัมพันธ์เชิงลบ และมากกว่า 2 คือความสัมพันธ์เชิงบวก
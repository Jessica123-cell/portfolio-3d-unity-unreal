# AI for Industrial Quality Control  
## Real-Time Defect Detection in a Multi-Station Assembly Line

This project presents a **computer vision–based quality control system** designed for a **snowshoe assembly cell** composed of **six sequential assembly stations**.

The solution addresses inefficiencies observed in traditional end-of-line quality inspection by introducing **camera-based inspection at the end of each assembly station**, enabling early defect detection and reducing rework time.

---

##  Industrial Context

The assembly cell consists of **six stations**, where different assembly operations are performed sequentially.

- Final quality inspection was originally performed **only after station 6**
- If an assembly error occurred at an early station (e.g. station 3), it was often detected too late
- This required **disassembling components assembled at stations 4, 5, and 6**
- Result: **time loss, rework, and reduced production efficiency**

---

## Proposed Solution

A **real-time visual quality control system** is deployed **at the end of each assembly station**.

At each station:
- A camera captures the assembled product
- A deep learning model:
  - Detects the **current station number**
  - Identifies **station-specific assembly defects**

This approach enables **early error detection**, preventing downstream rework and improving overall production flow.

---

##  Defect Detection by Station

The model is trained to detect **only the defects relevant to each station**, ensuring precision and contextual accuracy.

### Station 1
- `missing_crampon`
- `missing_crampon_screw`

### Station 2
- `missing_washer`
- `missing_heel_lift_screw`
- `missing_butterfly_nut`
- `bad_assembly_of_heel_lift`

### Station 3
- `missing_lock`

### Station 4
- `missing_plate`
- `missing_claw_screw`
- `missing_claw`

### Station 5
- `open_lock`

### Station 6
- `missing_pivot`

---

## Computer Vision Pipeline

The project follows an end-to-end computer vision workflow:

1. **Image Acquisition**
   - Images captured directly from the assembly environment
   - Real assembly conditions and viewpoints

2. **Dataset Creation**
   - Total of **422 labeled images**
   - Manual annotation of:
     - Assembly station number
     - Station-specific defects

3. **Data Annotation**
   - Labeling performed using **Roboflow**

4. **Model Training**
   - Model trained **locally**
   - Object detection architecture based on **YOLOv8**
   - Optimized for real-time inference

5. **Inference & Visualization**
   - Live detection on camera streams
   - Visual feedback highlighting detected defects and station identification

---

## Key Benefits

- Early detection of assembly errors
- Reduction of unnecessary disassembly
- Time savings across the assembly line
- Improved quality control efficiency
- Scalable approach adaptable to other industrial assembly processes

---

## Demonstration

A demonstration video showcasing **real-time detection** is available in the `demo/` folder.

---

## Visual Results

The `screenshots/` directory contains:
- Examples of detected defects per station
- Assembly station recognition results
- Model predictions in real production conditions

---

## Notes

This project is presented as a **technical and demonstrative portfolio project**, focused on industrial computer vision and quality control applications.  
The methodology can be extended to other multi-station manufacturing systems.

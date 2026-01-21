#  Real-Time Firearm Detection using Computer Vision, Video Surveillance and Augmented Reality


![Firearmvideo](https://github.com/user-attachments/assets/a9bb88f1-9ebc-43c5-b7bf-e835ead76619)

## Project Overview

This project presents a **computer vision–based firearm detection system** developed for **training and security applications**, combining **deep learning, augmented reality, and intelligent video surveillance**.

The initial objective was to support **cadets of the Royal Military Academy (Morocco)** in learning to **safely recognize, assemble, and disassemble firearms** using an immersive augmented reality training environment.

In the training scenario:
- The student wears a **mixed-reality headset (Meta Quest 3)** equipped with a camera  
- The system detects the firearm held by the user in real time  
- The detected weapon name is displayed  
- An instructional video demonstrating the **assembly and disassembly procedure** of the recognized weapon is automatically projected  

The project was later extended to a **security-oriented application** by integrating **IP camera streams** in order to perform **automatic firearm detection in surveillance environments**.

This dual-use design addresses both:
- **Immersive military training**
- **Intelligent video surveillance for security purposes**

---

## Use Cases

### 1. Immersive Military Training (Augmented Reality)

- Real-time firearm recognition using the headset camera  
- Automatic identification of weapon type  
- Display of contextual training content:
  - Weapon name  
  - Video demonstrating safe assembly and disassembly procedures  
- Objective:  
  - Improve learning efficiency  
  - Enhance safety during weapon handling training  

### 2. Intelligent Video Surveillance (Security Extension)

- Firearm detection in **real-time IP camera streams**  
- Automatic analysis of surveillance footage  
- Intended for:
  - Security monitoring  
  - Threat awareness  
  - Future alert and automation systems  

---

## Detection Models

Two detection approaches were developed and evaluated:

### YOLOv8 Model (Local Training)

- Single-class firearm detection  
- Focused on: `Glock 19`  
- Trained locally using Ultralytics YOLOv8  

### Roboflow Multi-Class Model

- Multi-weapon detection  
- Trained and deployed on Roboflow cloud platform  
- Selected for deployment due to:
  - Higher class diversity  
  - Easier integration with Node-RED and IP camera pipelines  

---

## Project Objectives

- Automatically detect firearms in images and video streams  
- Recognize and classify specific weapon types  
- Deploy detection in:
  - Augmented reality training systems  
  - Real-time IP camera surveillance  
- Provide a scalable technical foundation for:
  - Military training  
  - Security monitoring  
  - Future automation and alert systems  

---

##  Firearms Recognized

### YOLOv8 (LabelImg-based dataset)
- Glock 19

### Roboflow multi-class model
- Glock 19
- Glock 43
- Kalashnikov
- M4A1
- MG42
- MP40
- Mosina
- PPSH
- SVD

---

##  System Architecture

1. Dataset collection and annotation  
2. Model training and evaluation  
3. Image and video inference  
4. RTSP stream analysis from IP cameras  
5. Node-RED integration and automation  
6. Augmented reality visualization (Meta Quest 3)

---

##  Dataset Creation

### Dataset 1 — YOLOv8 + LabelImg
- Image collection via web scraping
- 877 images collected
- 300 manually annotated images
- Single class: Glock 19
- YOLO annotation format

Dataset split:
- 70% training
- 20% validation
- 10% testing

---

### Dataset 2 — Roboflow
- Multi-weapon dataset
- 846 original images
- Automatic data augmentation → ~2048 images
- Split:
  - 88% training
  - 6% validation
  - 6% testing

---

## Model Training

### YOLOv8 (Ultralytics)

- Base model: `yolov8n.pt`
- Training epochs: 45
- Framework: PyTorch (via Ultralytics)

**Final performance:**
- mAP@50 ≈ 0.86  
- mAP@50–95 ≈ 0.47  
- Precision ≈ 91%  
- Stable generalization with no significant overfitting

---

### Roboflow Model

- Cloud-based training
- Multi-class firearm detection
- Overall accuracy ≈ **83.5%**
- Selected for real-world deployment due to class diversity

---

##  Intelligent Video Surveillance

### IP Cameras
- Hikvision
- Dahua

### Technologies
- RTSP streaming
- VLC for simultaneous stream visualization
- FFmpeg for frame extraction
- OpenCV for inference visualization

---

##  Node-RED Pipeline

- RTSP frame capture
- Image upload and inference via Roboflow
- Processing and classification of results
- Contextual enrichment:
  - automatic redirection to YouTube videos demonstrating firearm assembly/disassembly

---

## Augmented Reality Integration — Meta Quest 3

### Unity Application
- Connection with Meta Quest 3
- Real-time image capture
- Display of detection results in augmented reality

### Node-RED Backend
- Communication between Unity and Roboflow
- Real-time transmission of detection results

---

## Demonstration Video

A short demonstration video is included to showcase:
1. Firearm detection on static images  
2. Real-time detection on IP camera RTSP streams  
3. Node-RED automation pipeline

Presentation Video
The video is stored via Git LFS. To download it, visit the repository and click on: "Computer-Vision/Real-Time Firearm Detection/Firearm video.mp4" → Download ( https://github.com/Jessica123-cell/portfolio-3d-unity-unreal/blob/main/Computer-Vision/Real-Time%20Firearm%20Detection/Firearm%20video.mp4 ).

## Team

This project was completed in a pair.  
- OUEDRAOGO Jessica https://www.linkedin.com/in/jessica-ouedraogo-2485332b0/?originalSubdomain=fr   
- TAMINI Abel https://www.linkedin.com/in/abel-tamini-314366244/







